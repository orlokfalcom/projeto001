# 🌸 Silêncios da Saúde

> **Portal Educativo e Interativo de Saúde Feminina para Adolescentes**

O **Silêncios da Saúde** é uma plataforma digital PWA (Progressive Web App) desenvolvida para levar educação em saúde, baseada em evidências científicas, para adolescentes de forma acolhedora, interativa e sem tabus. O projeto combina recursos gamificados, gráficos interativos, central de downloads e suporte off-line para viabilizar o uso em escolas, bibliotecas e dispositivos móveis sem acesso frequente à internet.

---

## 🚀 Principais Funcionalidades

### 📚 1. Saúde Feminina (Central de Conteúdo)
* **9 Tópicos Estruturados:** Conteúdo especializado sobre Menstruação, Puberdade, Saúde Mental, Alimentação, Exercícios Físicos, Sono, Vacinação (como HPV), ISTs e Métodos Contraceptivos.
* **Gráficos Interativos:** Implementados via [Recharts](https://recharts.org/), facilitando a visualização de estatísticas sobre saúde coletiva, eficácia de vacinas e dados comportamentais.
* **Curiosidades e FAQs:** Cartões informativos de fácil leitura com perguntas frequentes e respostas diretas.
* **Referências Científicas:** Todas as informações contam com as devidas fontes e artigos acadêmicos indexados ao final de cada página.

### 🃏 2. Jogo de Mitos e Verdades
* Jogo de cartas interativo em estilo *flashcard* com animações fluidas via [Framer Motion](https://www.framer.com/motion/).
* Debates rápidos baseados em crenças populares confrontadas com evidências científicas sólidas.
* Feedback visual imediato e contagem de acertos para incentivar o aprendizado prático.

### 🎓 3. Quiz & Certificação
* Teste de conhecimento geral com 10 perguntas dinâmicas e explicações didáticas detalhadas após cada resposta.
* **Emissão de Certificado Digital:** Geração dinâmica de um PDF contendo o nome do aluno, escola, data e aproveitamento, construído localmente no navegador por meio da biblioteca `jspdf`.
* Celebração interativa com confetes animados (`canvas-confetti`) ao atingir a pontuação necessária.

### 📁 4. Biblioteca Digital
* Central de documentos para download e leitura on-line (artigos científicos, cartilhas ilustradas, guias práticos e vídeos educativos).
* Sistema de filtros rápidos por tipo e categoria de arquivos.
* Leitor e visualizador interativo embutido.

### 💻 5. Canal de Contato
* Formulário de suporte e contato integrado, validado localmente com as bibliotecas `react-hook-form` e `zod`.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando tecnologias modernas e de alta performance no ecossistema Web:

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animações:** [Framer Motion v12](https://www.framer.com/motion/)
* **Ícones:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **Gráficos:** [Recharts](https://recharts.org/)
* **Geração de PDF:** [jsPDF](https://github.com/parallax/jsPDF)
* **Banco de Dados & ORM:** [Prisma](https://www.prisma.io/) & [Supabase](https://supabase.com/) (prontos para integração)

---

## 📦 Estrutura do Projeto

A organização dos diretórios segue as melhores práticas da arquitetura do Next.js (App Router):

```text
silencios-da-saude/
├── app/                  # Rotas e páginas da aplicação (Next.js App Router)
│   ├── biblioteca/       # Biblioteca digital com leitor de documentos
│   ├── contato/          # Página de contato com formulário validado
│   ├── mitos-e-verdades/ # Jogo de cartas interativo
│   ├── quiz/             # Questionário e emissão de certificados
│   ├── saude-feminina/   # Tópicos informativos e subpáginas dinâmicas
│   ├── sobre/            # Detalhamento do projeto e linha do tempo da pesquisa
│   ├── globals.css       # Configurações globais de CSS e temas do Tailwind
│   └── layout.tsx        # Layout raiz com Providers, SEO e Script de Tema Escuro
├── components/           # Componentes React reutilizáveis
│   ├── layout/           # Cabeçalho, rodapé e menus
│   ├── luna/             # Assistente virtual de apoio
│   └── shared/           # Busca global, alternador de tema e botões de rolagem
├── data/                 # Bases de dados locais (.json)
│   ├── myths.json        # Perguntas do Mitos e Verdades
│   ├── quiz-questions.json # Banco de questões do quiz
│   └── topics.json       # Dados de conteúdo dos 9 tópicos informativos
├── lib/                  # Inicializadores de serviços e funções auxiliares
│   ├── context/          # Contexto global do aplicativo (AppState e Autenticação)
│   └── prisma/           # Configurações do Prisma ORM
└── public/               # Ativos estáticos públicos (imagens, fontes, manifest)
```

---

## ⚡ Como Executar Localmente

### Pré-requisitos
* Ter o **Node.js v20+** instalado em seu computador.

### Passo a Passo

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador e acesse:
   [http://localhost:3000](http://localhost:3000)

---

## 📡 Portabilidade, PWA & Uso Off-line (Sem Servidor)

O portal foi projetado para funcionar perfeitamente de forma estática e em locais de vulnerabilidade digital (como escolas sem acesso à internet).

### Gerando Versão Estática (`out/`)
Para empacotar a aplicação como arquivos puramente estáticos (`HTML`/`CSS`/`JS`/`Imagens` que rodam sem necessidade de servidor Node.js):
```bash
npm run build
```
Esse comando gera a pasta `out/` na raiz do projeto. Esta pasta pode ser copiada para um pendrive ou HD externo.

### Rodar sem Node.js instalado (Via Python)
Caso o computador escolar ou pessoal não possua o Node.js instalado, a aplicação pode ser iniciada usando Python:

* **No Windows (Automatizado):**
  Dê dois cliques no arquivo **`iniciar.bat`** na raiz do projeto. O script detecta e cria um servidor local leve usando Python, abrindo a aplicação no navegador em `http://localhost:3000`.

* **Manualmente (Qualquer OS):**
  No terminal, acesse a pasta do projeto e execute:
  ```bash
  python -m http.server 3000 --directory out
  ```
  E acesse `http://localhost:3000` no seu navegador.

### Instalar como Aplicativo (PWA)
Quando o portal está hospedado em ambiente seguro (com HTTPS, como Vercel ou GitHub Pages):
* **Android (Chrome):** Clique no banner que aparece na tela inicial ou selecione **"Instalar Aplicativo"** no menu do Chrome.
* **iOS / iPhone (Safari):** Toque no botão de compartilhar (ícone da caixa com seta para cima) e selecione **"Adicionar à Tela de Início"**.
* **Resultado:** O portal será instalado diretamente no celular, permitindo o uso 100% off-line mesmo em modo avião.

---

## 📄 Licença e Uso
Este projeto foi desenvolvido com finalidade puramente educativa. Sinta-se à vontade para adaptá-lo e implantá-lo em instituições de ensino, unidades de saúde ou projetos comunitários focados na orientação de adolescentes.
