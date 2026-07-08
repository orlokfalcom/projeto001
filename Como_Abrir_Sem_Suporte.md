# Como Abrir em Qualquer Equipamento (Offline e Sem Suporte de Servidor)

O portal **Silêncios da Saúde** foi projetado para ser totalmente universal e portátil. Ele funciona como uma aplicação estática e PWA (Progressive Web App). Isso significa que você pode executá-lo em qualquer dispositivo (celulares, tablets, computadores antigos de escolas) sem precisar de internet ou de um servidor dedicado rodando Node.js/bancos de dados.

Abaixo, encontre as instruções passo a passo para cada situação de uso.

---

## 🛠️ Passo Prévio: Gerar a Pasta de Arquivos Estáticos (`out/`)

Para abrir o portal em computadores sem Node.js instalado, você precisa primeiro compilar a aplicação uma única vez em uma máquina que possua o Node.js. 

1. Em um computador com Node.js instalado, execute a build de produção:
   ```bash
   npm run build
   ```
2. Isso criará uma pasta chamada `out/` na raiz do projeto. Esta pasta contém todo o portal convertido em arquivos puros de HTML, CSS, JS e imagens.
3. **Você pode copiar a pasta inteira do projeto (incluindo a pasta `out/` e o arquivo `iniciar.bat`) para um pendrive ou HD externo.**

---

## 🖥️ Cenário A: Abrir em Computadores (Offline, Sem Node.js)

Se você estiver em um computador de escola ou biblioteca sem conexão à internet e sem o Node.js instalado, siga os passos abaixo para rodar a aplicação:

### Método 1: Usando o Script Automatizado (Windows)
1. Conecte o pendrive com os arquivos do projeto no computador.
2. Dê dois cliques no arquivo **`iniciar.bat`** na raiz do projeto.
3. O script irá detectar automaticamente que o computador não possui Node.js e iniciará um servidor local leve usando o **Python** (que vem pré-instalado em muitos sistemas, ou pode ser executado facilmente offline).
4. O navegador abrirá automaticamente em `http://localhost:3000` com todo o portal funcionando perfeitamente.

### Método 2: Executando Manualmente via Python (Windows, macOS ou Linux)
Caso esteja em outro sistema operacional (como Linux ou macOS) ou prefira a linha de comando:
1. Abra o terminal (ou Prompt de Comando) e navegue até a pasta do projeto.
2. Execute o comando para iniciar um servidor local na pasta `out/`:
   - No Python 3:
     ```bash
     python -m http.server 3000 --directory out
     ```
   - No Python 2:
     ```bash
     cd out && python -m SimpleHTTPServer 3000
     ```
3. Abra o navegador e digite o endereço: `http://localhost:3000`

---

## ☁️ Cenário B: Hospedar Gratuitamente na Internet (Para Acesso via Celular/Tablet)

Como o projeto agora é 100% estático (não necessita de backend ativo para funcionar, já que todos os dados são salvos no próprio navegador do usuário usando `localStorage`), ele pode ser hospedado de forma **100% gratuita** e vitalícia em várias plataformas:

### Opção 1: GitHub Pages (Recomendado para Projetos Escolares/Públicos)
1. Crie um repositório no seu GitHub e suba os arquivos do projeto.
2. Nas configurações do repositório, vá em **Pages**.
3. Selecione a branch `main` e a pasta `/docs` (ou configure um GitHub Action para fazer o deploy automático da pasta `out`).
4. Seu site estará ativo em uma URL pública como `https://seu-usuario.github.io/seu-repositorio/`.

### Opção 2: Vercel ou Netlify (Deploy com 1 clique)
1. Crie uma conta gratuita na [Vercel](https://vercel.com) ou [Netlify](https://netlify.com).
2. Conecte sua conta do GitHub ou faça o upload direto (arrastar e soltar) da pasta `out/` gerada pela build.
3. Pronto! A plataforma fornecerá um link seguro (HTTPS) gratuito para que qualquer pessoa abra o portal no celular, tablet ou PC.

---

## 📱 Cenário C: Como Instalar no Celular e Usar 100% Offline (PWA)

O portal possui suporte a PWA (Progressive Web App). Quando ele é hospedado em um endereço seguro na internet (com HTTPS, como na Vercel ou GitHub Pages), qualquer usuário pode instalá-lo como um aplicativo no celular para usá-lo sem gastar dados móveis e sem internet.

### No Android (Google Chrome)
1. Acesse o link do portal pelo Google Chrome no celular.
2. Um aviso aparecerá na parte inferior da tela: "Adicionar Silêncios da Saúde à tela inicial" (ou clique nos três pontinhos no canto superior direito e selecione **"Instalar aplicativo"**).
3. O portal será instalado e criará um ícone na tela de aplicativos do seu celular.
4. Agora você pode abrir o portal a qualquer momento, mesmo com o celular em modo avião ou sem sinal de internet.

### No iOS / iPhone (Safari)
1. Acesse o link do portal pelo navegador Safari no iPhone.
2. Clique no botão de **Compartilhar** (ícone de quadrado com uma seta para cima).
3. Role as opções para baixo e selecione **"Adicionar à Tela de Início"**.
4. Confirme clicando em **"Adicionar"** no canto superior direito.
5. O aplicativo estará na sua tela inicial pronto para ser aberto offline.
