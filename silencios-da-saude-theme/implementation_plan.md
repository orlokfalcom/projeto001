# Plano de Implementação - Portal "Silêncios da Saúde"

Este plano descreve a criação do portal educativo "Silêncios da Saúde", focado em saúde feminina para adolescentes, utilizando Next.js, TypeScript, Tailwind CSS e Framer Motion. 

Como o ambiente do sistema atual não possui o runtime do Node.js instalado, a primeira etapa consistirá em configurar um Node.js portátil local no workspace.

---

## User Review Required

> [!IMPORTANT]
> **Configuração do Ambiente Portátil (Node.js)**
> Iremos baixar e extrair uma versão portátil do Node.js (v20.11.1 LTS) diretamente dentro da pasta do projeto (`e:\documentos\GitHub\Nova pasta\node-portable`). Isso permitirá compilar, instalar dependências e rodar o Next.js localmente sem precisar instalar nada globalmente no sistema.
>
> **Serviços Externos (Supabase & OpenAI)**
> A aplicação virá pré-configurada para integrar com Supabase (Banco de dados, Auth, Storage) e OpenAI (para a assistente virtual Luna). 
> - Inicialmente, usaremos **dados locais (mockados)** e **respostas locais** de fallback para que o site funcione de forma totalmente independente e de alta performance de imediato.
> - Disponibilizaremos o arquivo `.env.local` com as variáveis necessárias para que você possa colocar suas próprias chaves do Supabase e OpenAI posteriormente.

---

## Proposed Changes

As mudanças serão implementadas na pasta `e:\documentos\GitHub\Nova pasta`.

### 1. Setup do Ambiente

#### [NEW] `node-portable/`
- Baixar e extrair o Node.js v20.11.1 (Windows x64) nesta pasta.
- Todos os comandos subsequentes de `npm`, `npx` e `next` serão executados utilizando os binários desta pasta local.

---

### 2. Inicialização do Next.js e Dependências

#### [NEW] [silencios-da-saude/](file:///e:/documentos/GitHub/Nova%20pasta/silencios-da-saude)
- Inicializar um projeto Next.js 14+ com TypeScript, Tailwind CSS, ESLint e App Router.
- Instalar dependências adicionais:
  - `framer-motion` (para animações fluidas e premium)
  - `react-icons` (para ícones)
  - `recharts` (para os gráficos estatísticos e de tópicos)
  - `lucide-react` (para ícones adicionais)
  - `canvas-confetti` e `@types/canvas-confetti` (efeitos visuais ao terminar o quiz)
  - `@prisma/client` e `prisma` (para banco de dados/ORM)
  - `@supabase/supabase-js` (integração do Supabase)

---

### 3. Configurações Globais

#### [MODIFY] [globals.css](file:///e:/documentos/GitHub/Nova%20pasta/silencios-da-saude/app/globals.css)
- Adicionar diretivas do Tailwind.
- Definir paleta de cores do Design System (Rosa claro, Lilás, Verde menta, Azul científico) e suporte ao Dark Mode.
- Estilos para glassmorphism e animações personalizadas.

#### [NEW] [tailwind.config.ts](file:///e:/documentos/GitHub/Nova%20pasta/silencios-da-saude/tailwind.config.ts)
- Configurar cores e fontes personalizadas (Inter e DM Sans).
- Habilitar suporte a dark mode baseado em classes CSS.

#### [NEW] [.env.local](file:///e:/documentos/GitHub/Nova%20pasta/silencios-da-saude/.env.local)
- Template de variáveis de ambiente para Supabase, Prisma e OpenAI API.

---

### 4. Estrutura de Páginas (App Router)

Criaremos todas as rotas com conteúdo educativo em português e layout de alta performance:

- **Home (`/`)**: Hero section com título animado, partículas flutuantes e botões de chamada para ação.
- **Sobre (`/sobre`)**: Grid de cards detalhando a pesquisa e uma linha do tempo interativa.
- **Objetivos (`/objetivos`)**: Cards para objetivos geral e específicos.
- **Saúde Feminina (`/saude-feminina`)**: Grid com 9 tópicos e subpáginas completas para cada um:
  - `/menstruacao`, `/puberdade`, `/saude-mental`, `/alimentacao`, `/exercicios`, `/sono`, `/vacinacao`, `/ists`, `/contraceptivos`.
  - Cada tópico terá conteúdo real, gráfico e FAQ específica.
- **Mitos e Verdades (`/mitos-e-verdades`)**: Jogo interativo de flip cards com pelo menos 20 perguntas científicas.
- **Quiz (`/quiz`)**: Jogo de perguntas com barra de progresso, pontuação ao vivo e geração de certificado em PDF (usando recursos do navegador ou biblioteca leve).
- **Estatísticas (`/estatisticas`)**: Dashboard gráfico de mock data integrado (gráficos de pizza, barra e linha).
- **Biblioteca (`/biblioteca`)**: Sistema de busca e filtragem de artigos, guias e vídeos educativos.
- **FAQ (`/faq`)**: Acordeão de dúvidas comuns com filtro em tempo real.
- **Blog (`/blog` & `/blog/[slug]`)**: Artigos completos sobre saúde feminina com sidebar, comentários e botões de compartilhamento.
- **Pesquisa (`/pesquisa`)**: Explicação do método científico e cronograma interativo.
- **Linha do Tempo (`/linha-do-tempo`)**: Marcos da criação da pesquisa e do site.
- **Professor (`/professor`)**: Área de downloads de materiais pedagógicos (com simulador de login do Supabase).
- **Aluno (`/aluno`)**: Dashboard de progresso do estudante, conquistas e certificados.
- **Contato (`/contato`)**: Formulário validado com informações de redes sociais e mapa interativo simulado.

---

### 5. Componentes Globais e Assistente Luna

- **Header / Navigation**: Menu hambúrguer para mobile, toggle de dark mode e busca global instantânea.
- **Footer**: Links úteis e cookie banner de conformidade com a LGPD.
- **Assistente Luna (`LunaChat`)**: Chatbot inteligente flutuante. Terá uma base de dados local de respostas inteligentes sobre menstruação, puberdade, dores e saúde emocional, além de suporte a conexões futuras com a OpenAI API.

---

## Verification Plan

### Automated Tests & Compilação
- Rodar `npm run build` para garantir que o Next.js compile todas as 16 seções de forma estática (SSG/ISR) sem qualquer erro de TypeScript ou CSS.

### Manual Verification
1. Abrir a aplicação localmente rodando o servidor de desenvolvimento.
2. Navegar por todas as páginas, testar o Dark Mode e verificar se o design responsivo funciona no simulador mobile.
3. Testar a interatividade do Quiz, jogo de Mitos e Verdades, filtros da Biblioteca e o chat da assistente Luna.
