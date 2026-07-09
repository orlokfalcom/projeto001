# 🌸 Silêncios da Saúde
> **Portal Educativo, Interativo e Gamificado de Saúde Feminina para Adolescentes**

O **Silêncios da Saúde** é uma plataforma digital PWA (Progressive Web App) criada para levar educação em saúde íntima e menstrual, baseada em rigorosas evidências científicas, de forma acolhedora, interativa e sem tabus para adolescentes. 

O diferencial do projeto é ser **100% autônomo e portátil**: ele funciona sem internet (off-line), não precisa de banco de dados ativo e pode ser levado em um pendrive para rodar em computadores de escolas, bibliotecas públicas ou postos de saúde de qualquer região, independente de infraestrutura digital.

---

## 📖 Para Quem é Este Projeto?
* **👩‍🎓 Estudantes e Adolescentes:** Para aprender sobre as transformações do corpo, ciclo menstrual e saúde emocional com jogos, quiz e um painel de conquistas.
* **👩‍🏫 Educadores e Professores:** Para obter planos de aula prontos, slides de suporte e dinâmicas educativas para aplicar em salas de aula.
* **🩺 Profissionais de Saúde e ONGs:** Como ferramenta interativa de apoio em palestras e orientações comunitárias.
* **💻 Desenvolvedores:** Como base moderna de aplicação web estática rápida usando Next.js, React e TypeScript.

---

## 🚀 Como Abrir e Usar o Portal (Para Leigos e Iniciantes)

Você **não** precisa saber programar nem instalar programas complexos para usar este portal. Siga as instruções abaixo de acordo com a sua necessidade.

### 🔌 1. Rodar no Windows em 1 Clique (Sem Internet / Sem Instalar Nada)
Se você está usando o Windows (computador pessoal, de escola ou laboratório):
1. Abra a pasta do projeto.
2. Dê dois cliques no arquivo **`iniciar.bat`**.
3. Uma janela preta (Prompt de Comando) abrirá e mostrará um menu de opções. Digite `1` e pressione `Enter` para abrir a versão de **Produção (Versão Estática Rápida)**.
4. O navegador do seu computador abrirá automaticamente na página do portal (`http://localhost:3000`).
5. **Atenção:** Deixe a janela preta aberta enquanto estiver navegando no site. Quando terminar, basta fechar a janela preta.

### 📂 2. Como Levar o Portal em um Pendrive
Você pode colocar o portal em um pendrive e abri-lo em computadores sem internet:
1. Copie toda a pasta do projeto (que contém o arquivo `iniciar.bat`, a pasta `out/`, etc.) para dentro do seu pendrive.
2. Conecte o pendrive no computador da escola, biblioteca ou posto de saúde.
3. Abra a pasta do pendrive e dê dois cliques no arquivo **`iniciar.bat`**.
4. O site carregará e funcionará perfeitamente, mesmo sem internet e sem instalar nada naquele computador.

### 🐧 3. Como Abrir no Mac, Linux ou computadores sem Windows
Se o computador for um Mac (Apple) ou usar Linux:
1. Abra o aplicativo **Terminal** do sistema.
2. Navegue até a pasta do projeto (digite `cd ` e arraste a pasta do projeto para dentro da janela do terminal, depois pressione `Enter`).
3. Digite o comando abaixo e pressione `Enter`:
   ```bash
   python -m http.server 3000 --directory out
   ```
4. Abra o seu navegador de internet (Chrome, Safari, Firefox, etc.) e digite o endereço:
   `http://localhost:3000`

---

## 📱 Como Instalar no Celular ou Tablet (PWA)

Se o portal estiver publicado na internet (veja abaixo como publicar de graça), você pode instalá-lo no celular para usá-lo como um aplicativo comum, **funcionando 100% off-line (mesmo em modo avião)**.

### No Android (Google Chrome):
1. Acesse o link do portal pelo celular usando o Chrome.
2. Toque no aviso **"Instalar Aplicativo"** ou **"Adicionar à tela inicial"** que aparece na parte inferior.
3. Se não aparecer, toque nos três pontinhos no canto superior direito do Chrome e selecione **"Instalar aplicativo"**.
4. O ícone do portal aparecerá na tela do seu celular pronto para ser usado sem internet.

### No iPhone / iPad (Safari):
1. Acesse o link do portal usando o navegador Safari.
2. Toque no botão de **Compartilhar** (ícone quadrado com uma seta apontando para cima).
3. Role a lista para baixo e toque em **"Adicionar à Tela de Início"**.
4. Toque em **"Adicionar"** no canto superior. Pronto!

---

## ☁️ Como Hospedar o Portal na Internet de Graça

Por ser um site estático (que salva os dados como conquistas e certificados no próprio celular/computador do usuário através da tecnologia `localStorage`), você pode hospedá-lo na internet sem pagar nada.

### Opção 1: Arrastar e Soltar na Vercel (Recomendado)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Acesse a área de projetos e selecione a opção de fazer upload de pasta (arrastar e soltar).
3. Arraste a pasta **`out`** (que fica dentro do projeto) para lá.
4. Em instantes, a plataforma te dará um link seguro (`https://...`) que você poderá enviar para alunas e professores acessarem.

### Opção 2: GitHub Pages (Ideal para escolas e projetos acadêmicos)
1. Crie uma conta no [GitHub](https://github.com) e crie um repositório para o projeto.
2. Envie os arquivos do projeto para o repositório.
3. Vá em **Settings (Configurações)** > **Pages**.
4. Ative a publicação escolhendo a pasta `docs/` ou configure um deploy automático com os fluxos do GitHub Actions.

---

## 🎨 Principais Recursos e Telas do Portal

* **📚 Guia de Saúde Feminina (9 Tópicos):** Textos científicos explicados de forma simples sobre ciclo menstrual, puberdade, vacinas, sono, alimentação saudável e prevenção de infecções. Inclui gráficos interativos (ex: eficácia de vacinas, estatísticas de ciclo) que facilitam o aprendizado visual.
* **🃏 Jogo de Mitos e Verdades:** Um jogo de cartas interativo. A aluna lê uma afirmação popular (ex: *"Menstruar faz mal para as plantas"*) e escolhe se é mito ou verdade. O jogo vira a carta de forma animada e exibe a explicação científica com referências.
* **📝 Quiz de Conhecimentos:** Um teste de 10 perguntas dinâmicas. Ao acertar pelo menos 70% das perguntas, a aluna digita seu nome e escola e o sistema gera na hora um **Certificado de Aproveitamento em PDF** para download.
* **💬 Luna (Assistente Virtual):** Um chat acolhedor e informativo estruturado para responder a dúvidas e guiar a navegação pelos tópicos do site.
* **💻 Área do Aluno (Dashboard):** Um painel onde a aluna vê seu progresso no site, vídeos recomendados assistidos e pode acessar os certificados que já conquistou.
* **🎒 Área do Professor:** Uma central contendo planos de aulas teóricas e práticas, roteiros de dinâmicas e links para slides oficiais de apoio pedagógico.

---

## 🛠️ Informações Técnicas (Para Desenvolvedores)

Se você é desenvolvedor e deseja realizar modificações no código-fonte do portal:

### Stack Tecnológica
* **Framework:** Next.js 16 (App Router) em modo de exportação estática (`output: 'export'`)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (Vanilla CSS como base)
* **Animações:** Framer Motion v12 & Canvas Confetti
* **Gráficos:** Recharts
* **PDFs:** jsPDF (geração de documentos direto no cliente)

### Estrutura de Pastas
```text
projeto001/
├── app/                  # Rotas e páginas (App Router)
│   ├── aluno/            # Painel do aluno/aluna
│   ├── biblioteca/       # Leitor e central de documentos
│   ├── mitos-e-verdades/ # Jogo interativo de cartas
│   ├── quiz/             # Quiz e gerador de certificado
│   ├── saude-feminina/   # Tópicos informativos sobre saúde
│   └── sobre/            # Sobre o projeto de pesquisa
├── components/           # Componentes reutilizáveis
│   ├── layout/           # Cabeçalho, Rodapé, etc.
│   ├── luna/             # Assistente virtual
│   └── shared/           # Busca global e botões compartilhados
├── data/                 # Bases locais JSON (perguntas, tópicos, mitos)
├── out/                  # Pasta do site compilado pronto para uso offline
├── public/               # Imagens, fontes personalizadas e arquivos de mídia
├── iniciar.bat           # Script automatizado para execução no Windows
└── server.exe            # Servidor local standalone compilado
```

### Como Executar em Modo de Desenvolvimento
1. Certifique-se de ter o **Node.js (v20+)** instalado.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o link no navegador: `http://localhost:3000`

### Como Atualizar a Compilação Estática
Toda vez que você realizar alterações nos componentes ou páginas da pasta `/app`, você deve gerar uma nova build para atualizar a pasta `/out` (utilizada na execução off-line):
```bash
npm run build
```
O projeto está configurado para não gerar erros no compilador ou linter. Caso queira testar a qualidade do código antes de compilar, execute:
```bash
npm run lint
```
