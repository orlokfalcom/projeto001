#!/usr/bin/env python3
"""
atualizar_geojson.py
====================
Script de atualização automática do arquivo postos/dados.geojson.

Fonte: API pública do CNES / DataSUS
  https://cnes.datasus.gov.br/pages/downloads/descricaoBase.jsp

Executado diariamente pelo GitHub Actions (.github/workflows/atualizar-geojson.yml).

Saída: postos/dados.geojson  (mesmo formato do arquivo original)
"""

import json
import os
import random
import time
from datetime import date
from pathlib import Path

import requests

# ---------------------------------------------------------------------------
# Configuração
# ---------------------------------------------------------------------------

# Limite de estabelecimentos por UF (configurável via variável de ambiente)
MAX_POR_UF = int(os.getenv("MAX_POR_UF", "150"))

# Caminho de saída (relativo à raiz do repositório)
OUTPUT_PATH = Path(__file__).parent.parent / "postos" / "dados.geojson"

# Timeout de cada requisição HTTP (segundos)
HTTP_TIMEOUT = 30

# Pausa entre requisições para não sobrecarregar a API (segundos)
PAUSA_ENTRE_UFS = 1.5

# Endpoint público da API CNES (OpenDATASUS / RNDS)
# Documentação: https://servicoshospitalares.saude.gov.br/
CNES_API_BASE = "https://servicos.saude.gov.br/cnes/v1/estabelecimentos"

# Headers para simular um browser e evitar bloqueios
HEADERS = {
    "Accept": "application/json",
    "User-Agent": (
        "Mozilla/5.0 (compatible; VivaBemMenina/1.0; "
        "+https://github.com/orlokfalcom/projeto001)"
    ),
}

# Mapa de tipos CNES → categorias usadas no portal
TIPO_PARA_CATEGORIA = {
    "01": "Hospital",
    "02": "Hospital",
    "04": "UBS / Posto de saude",
    "05": "UBS / Posto de saude",
    "07": "UPA",
    "15": "Centro de Saude",
    "20": "Pronto Atendimento",
    "21": "Maternidade",
    "36": "Clinica",
    "39": "UPA",
    "61": "Centro de Saude",
    "62": "UBS / Posto de saude",
    "63": "UBS / Posto de saude",
    "64": "Hospital",
    "67": "Maternidade",
    "68": "Maternidade / Centro de parto",
    "70": "Clinica",
    "71": "Clinica",
    "72": "Clinica",
    "73": "Clinica",
    "74": "Clinica",
    "76": "Clinica",
    "80": "Pronto Atendimento",
    "81": "Pronto Atendimento",
    "82": "Pronto Atendimento",
    "83": "UPA",
    "84": "UPA",
    "85": "Hospital",
}

# Cores uMap por categoria (compatibilidade com o arquivo original)
COR_CATEGORIA = {
    "Hospital": "DarkSlateBlue",
    "UPA": "GoldenRod",
    "UBS / Posto de saude": "ForestGreen",
    "Centro de Saude": "SteelBlue",
    "Pronto Atendimento": "OrangeRed",
    "Maternidade": "HotPink",
    "Maternidade / Centro de parto": "HotPink",
    "Clinica": "Tomato",
}

# Lista de UFs do Brasil
UFS = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA",
    "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN",
    "RO", "RR", "RS", "SC", "SE", "SP", "TO",
]


# ---------------------------------------------------------------------------
# Funções auxiliares
# ---------------------------------------------------------------------------

def classificar_tipo(tp_unidade: str, nome: str) -> str:
    """Mapeia o código tp_unidade do CNES para uma categoria legível."""
    tp = str(tp_unidade or "").zfill(2)
    cat = TIPO_PARA_CATEGORIA.get(tp)
    if cat:
        return cat
    nome_upper = (nome or "").upper()
    if "UPA" in nome_upper:
        return "UPA"
    if "HOSPITAL" in nome_upper or "HOSP" in nome_upper:
        return "Hospital"
    if "MATERNIDADE" in nome_upper or "MATERNO" in nome_upper:
        return "Maternidade"
    if "UBS" in nome_upper or "UNIDADE BASICA" in nome_upper or "ESF" in nome_upper:
        return "UBS / Posto de saude"
    if "CENTRO DE SAUDE" in nome_upper or "CS " in nome_upper:
        return "Centro de Saude"
    if "PRONTO" in nome_upper or "PA " in nome_upper or "UPR" in nome_upper:
        return "Pronto Atendimento"
    return "UBS / Posto de saude"


def montar_descricao(props: dict) -> str:
    """Monta a string de descrição no mesmo formato do arquivo original."""
    partes = [
        props.get("categoria", ""),
        f"| CNES {props.get('CNES', '')}",
        f"| {props.get('endereco', '')}",
        f"| Bairro: {props.get('bairro', '')}",
        f"| CEP: {props.get('CEP', '')}",
        f"| {props.get('UF', '')}.",
        "Cadastro CNES fornecido: CO_AMBULATORIAL_SUS=SIM.",
        "Confirme endereco, funcionamento e servicos antes de ir.",
    ]
    return " ".join(p for p in partes if p.strip())


def buscar_estabelecimentos_uf(uf: str, session: requests.Session) -> list:
    """
    Busca estabelecimentos de uma UF via API CNES.

    A API pública do CNES (RNDS/DataSUS) aceita paginação via parâmetros
    `pagina` e `quantidade`.  Retornamos uma amostra representativa.
    """
    features = []
    pagina = 1
    quantidade = 50  # máximo por página

    while len(features) < MAX_POR_UF:
        try:
            params = {
                "uf": uf,
                "indicadorAmbulatorial": "SIM",
                "pagina": pagina,
                "quantidade": quantidade,
            }
            resp = session.get(
                CNES_API_BASE,
                params=params,
                headers=HEADERS,
                timeout=HTTP_TIMEOUT,
            )
            resp.raise_for_status()
            data = resp.json()
        except Exception as exc:
            print(f"  [AVISO] Falha ao buscar UF={uf} página={pagina}: {exc}")
            break

        itens = data.get("items") or data.get("data") or data.get("content") or []
        if not itens:
            break

        for item in itens:
            if len(features) >= MAX_POR_UF:
                break

            # --- Coordenadas ---
            lat = item.get("latitude") or item.get("lat") or item.get("no_latitude")
            lng = item.get("longitude") or item.get("lng") or item.get("no_longitude")
            try:
                lat = float(lat)
                lng = float(lng)
            except (TypeError, ValueError):
                continue  # sem coordenadas válidas — pular

            if not (-90 <= lat <= 90 and -180 <= lng <= 180):
                continue

            # --- Propriedades ---
            nome = (
                item.get("no_fantasia")
                or item.get("no_razao_social")
                or item.get("nome")
                or "Estabelecimento"
            )
            cnes = str(item.get("co_cnes") or item.get("CNES") or item.get("cnes") or "")
            tp_unidade = str(item.get("tp_unidade") or item.get("co_tipo_unidade") or "")
            categoria = classificar_tipo(tp_unidade, nome)

            endereco = (
                item.get("no_logradouro")
                or item.get("ds_endereco")
                or item.get("endereco")
                or ""
            )
            numero = item.get("nu_endereco") or item.get("nu_numero") or ""
            if numero and numero not in endereco:
                endereco = f"{endereco} {numero}".strip()

            bairro = item.get("no_bairro") or item.get("bairro") or ""
            cep = str(item.get("nu_cep") or item.get("CEP") or item.get("cep") or "")
            telefone = item.get("nu_telefone") or item.get("telefone") or ""
            mun_ibge = str(
                item.get("co_municipio_gestor")
                or item.get("co_municipio")
                or item.get("codigo_municipio_IBGE")
                or ""
            )

            props = {
                "name": nome,
                "nome": nome,
                "categoria": categoria,
                "CNES": cnes,
                "endereco": endereco,
                "bairro": bairro,
                "CEP": cep,
                "codigo_municipio_IBGE": mun_ibge,
                "UF": uf,
                "telefone_cadastrado": str(telefone),
                "indicador_ambulatorial_SUS": "SIM",
                "fonte": "CNES / Ministerio da Saude — atualizacao automatica",
                "consulta_oficial": "https://cnes.datasus.gov.br/",
                "aviso": (
                    "Cadastro nao confirma servicos, atendimento atual, "
                    "situacao operacional ou coordenadas em campo."
                ),
                "_umap_options": {"color": COR_CATEGORIA.get(categoria, "ForestGreen")},
            }
            props["description"] = montar_descricao(props)

            features.append({
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [lng, lat]},
                "properties": props,
            })

        # Verifica se há mais páginas
        total = (
            data.get("total")
            or data.get("totalElements")
            or data.get("totalItens")
        )
        if total is not None and pagina * quantidade >= int(total):
            break
        if len(itens) < quantidade:
            break

        pagina += 1
        time.sleep(0.3)  # pausa entre páginas

    return features


# ---------------------------------------------------------------------------
# Fallback: se a API CNES não retornar coordenadas, usamos dados.gov.br
# (CNES — arquivo aberto publicado pelo Ministério da Saúde)
# ---------------------------------------------------------------------------

DADOS_GOV_URL = (
    "https://dadosabertos.saude.gov.br/dataset/"
    "cnes-cadastro-nacional-dos-estabelecimentos-de-saude"
)


def buscar_via_dados_gov(uf: str, session: requests.Session) -> list:
    """
    Alternativa: API FHIR do RNDS (Rede Nacional de Dados em Saúde).
    Endpoint documentado em: https://rnds-guia.saude.gov.br/
    """
    features = []
    url = "https://rnds-fhir.saude.gov.br/fhir/r4/Organization"
    params = {
        "address-state": uf,
        "_count": MAX_POR_UF,
        "_format": "json",
    }
    try:
        resp = session.get(url, params=params, headers=HEADERS, timeout=HTTP_TIMEOUT)
        resp.raise_for_status()
        bundle = resp.json()
        entries = bundle.get("entry") or []
        for entry in entries:
            resource = entry.get("resource") or {}
            # FHIR Organization não garante coordenadas — pular sem lat/lng
            exts = resource.get("extension") or []
            lat = lng = None
            for ext in exts:
                if "position" in (ext.get("url") or ""):
                    for sub in ext.get("extension") or []:
                        if sub.get("url") == "latitude":
                            lat = sub.get("valueDecimal")
                        elif sub.get("url") == "longitude":
                            lng = sub.get("valueDecimal")
            if lat is None or lng is None:
                continue

            nome = resource.get("name") or "Estabelecimento"
            cnes = ""
            for ident in resource.get("identifier") or []:
                if "cnes" in (ident.get("system") or "").lower():
                    cnes = ident.get("value") or ""
                    break

            props = {
                "name": nome,
                "nome": nome,
                "categoria": "UBS / Posto de saude",
                "CNES": cnes,
                "endereco": "",
                "bairro": "",
                "CEP": "",
                "codigo_municipio_IBGE": "",
                "UF": uf,
                "telefone_cadastrado": "",
                "indicador_ambulatorial_SUS": "SIM",
                "fonte": "RNDS FHIR / Ministerio da Saude — atualizacao automatica",
                "consulta_oficial": "https://cnes.datasus.gov.br/",
                "aviso": (
                    "Cadastro nao confirma servicos, atendimento atual, "
                    "situacao operacional ou coordenadas em campo."
                ),
                "_umap_options": {"color": "ForestGreen"},
            }
            props["description"] = montar_descricao(props)
            features.append({
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [float(lng), float(lat)]},
                "properties": props,
            })
    except Exception as exc:
        print(f"  [AVISO] Fallback FHIR falhou para UF={uf}: {exc}")

    return features


# ---------------------------------------------------------------------------
# Programa principal
# ---------------------------------------------------------------------------

def main() -> None:
    print(f"Iniciando atualizacao em {date.today().isoformat()} ...")
    print(f"Limite por UF: {MAX_POR_UF}")

    all_features: list = []
    distribuicao: dict = {}

    session = requests.Session()
    session.headers.update(HEADERS)

    for uf in UFS:
        print(f"  -> Buscando UF={uf} ...", end=" ", flush=True)
        features = buscar_estabelecimentos_uf(uf, session)

        # Se a API principal não retornou nada, tenta o fallback FHIR
        if not features:
            print("(sem dados na API principal, tentando FHIR) ...", end=" ", flush=True)
            features = buscar_via_dados_gov(uf, session)

        count = len(features)
        distribuicao[uf] = count
        all_features.extend(features)
        print(f"OK ({count} estabelecimentos)")

        time.sleep(PAUSA_ENTRE_UFS)

    total = len(all_features)
    print(f"\nTotal de features: {total}")

    if total == 0:
        print("ATENCAO: nenhum dado obtido. Arquivo NAO sera sobrescrito.")
        return

    # Monta o GeoJSON no mesmo formato do arquivo original
    geojson = {
        "type": "FeatureCollection",
        "name": "Viva Bem Menina — BRASIL — CNES SUS amostra nacional",
        "metadata": {
            "fonte": f"CNES / Ministerio da Saude — atualizacao automatica em {date.today().isoformat()}",
            "selecao": (
                f"Amostra representativa geograficamente "
                f"(ate {MAX_POR_UF} por UF); CO_AMBULATORIAL_SUS=SIM."
            ),
            "aviso": (
                "Pontos cadastrais georreferenciados, nao checados individualmente "
                "com prefeituras. NAO atestam atendimento imediato, especialidades, "
                "nem a precisao do endereco atual."
            ),
            "distribuicao": distribuicao,
            "data_atualizacao": date.today().isoformat(),
        },
        "features": all_features,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(geojson, f, ensure_ascii=False, separators=(",", ":"))

    size_kb = OUTPUT_PATH.stat().st_size / 1024
    print(f"Arquivo salvo em: {OUTPUT_PATH}  ({size_kb:.1f} KB)")
    print("Concluido com sucesso!")


if __name__ == "__main__":
    main()
