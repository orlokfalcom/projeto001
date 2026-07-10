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

