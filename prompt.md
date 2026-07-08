Você é um engenheiro de software sênior especializado em Next.js, TypeScript, Tailwind CSS, Framer Motion e Supabase. Gere o projeto completo do portal "Silêncios da Saúde" — uma plataforma educativa sobre saúde feminina para adolescentes.

## STACK
- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS (com shadcn/ui)
- Framer Motion (animações)
- React Icons
- Supabase (PostgreSQL + Auth + Storage)
- Prisma ORM
- OpenAI API (assistente Luna)

## DESIGN SYSTEM

### Cores
- Rosa claro: #FADADD
- Lilás: #CDB4DB
- Verde menta: #98D8C8 (positivo/sucesso)
- Azul claro científico: #B8D4E3
- Branco: #FFFFFF
- Cinza claro fundo: #F9F7F8
- Texto escuro: #2D2327
- Dark mode: fundo #1A1A2E, texto #F0E6EF, cards #2D2640

### Tipografia
- Font: Inter (títulos) + DM Sans (corpo) via Google Fonts
- Headings: font-bold tracking-tight
- Body: text-base leading-relaxed

### Efeitos
- glassmorphism: bg-white/30 backdrop-blur-xl border border-white/20
- cards: rounded-2xl shadow-sm hover:shadow-md transition-all
- gradientes: from-rose-100 via-white to-purple-50 (modo claro)
- dark: from-[#1A1A2E] via-[#16213E] to-[#0F3460]
- border-radius global: rounded-xl (cards), rounded-full (buttons)
- transições: transition-all duration-300 ease-out

### Acessibilidade (WCAG AA)
- role, aria-label, aria-hidden em todos elementos interativos
- focus-visible:ring-2 focus-visible:ring-lilás
- Alt text descritivo em todas imagens
- Skip to content link
- Contraste mínimo 4.5:1

## ESTRUTURA DE ARQUIVOS

silencios-da-saude/ ├── app/ │ ├── layout.tsx (root layout com fontes, metadata, providers) │ ├── page.tsx (Hero Section) │ ├── globals.css (Tailwind directives + custom vars) │ ├── sobre/ │ ├── objetivos/ │ ├── saude-feminina/ │ │ ├── menstruacao/ │ │ ├── puberdade/ │ │ ├── saude-mental/ │ │ ├── alimentacao/ │ │ ├── exercicios/ │ │ ├── sono/ │ │ ├── vacinacao/ │ │ ├── ists/ │ │ └── contraceptivos/ │ ├── mitos-e-verdades/ │ ├── quiz/ │ ├── estatisticas/ │ ├── biblioteca/ │ ├── faq/ │ ├── blog/ │ ├── pesquisa/ │ ├── linha-do-tempo/ │ ├── professor/ │ ├── aluno/ │ └── contato/ ├── components/ │ ├── ui/ (shadcn components: button, card, dialog, etc) │ ├── layout/ │ │ ├── Header.tsx (nav responsiva + dark mode toggle + pesquisa global) │ │ ├── Footer.tsx │ │ ├── MobileNav.tsx │ │ └── CookieBanner.tsx │ ├── hero/ │ │ ├── HeroSection.tsx │ │ ├── AnimatedTitle.tsx │ │ └── FloatingIllustrations.tsx │ ├── cards/ │ │ ├── InfoCard.tsx │ │ ├── ObjectiveCard.tsx │ │ └── TopicCard.tsx │ ├── quiz/ │ │ ├── QuizGame.tsx │ │ ├── QuizQuestion.tsx │ │ ├── ProgressBar.tsx │ │ └── Certificate.tsx │ ├── charts/ │ │ ├── ResultsChart.tsx │ │ └── Dashboard.tsx │ ├── faq/ │ │ ├── FAQAccordion.tsx │ │ └── FAQSearch.tsx │ ├── blog/ │ │ ├── BlogCard.tsx │ │ ├── CommentSection.tsx │ │ └── ShareButtons.tsx │ ├── pesquisa/ │ │ ├── Timeline.tsx │ │ └── Flowchart.tsx │ ├── luna/ │ │ └── LunaChat.tsx (assistente IA) │ └── shared/ │ ├── ThemeToggle.tsx │ ├── GlobalSearch.tsx │ ├── ScrollToTop.tsx │ └── LoadingSpinner.tsx ├── lib/ │ ├── supabase/ │ │ ├── client.ts │ │ ├── server.ts │ │ └── middleware.ts │ ├── prisma/ │ │ └── schema.prisma │ ├── utils.ts │ └── constants.ts ├── hooks/ │ ├── useTheme.ts │ ├── useSearch.ts │ └── useQuiz.ts ├── data/ │ ├── faq.json │ ├── quiz-questions.json │ ├── myths.json │ └── topics.json ├── public/ │ ├── images/ │ ├── icons/ │ └── illustrations/ ├── styles/ │ └── animations.css ├── .env.local ├── next.config.js ├── tailwind.config.ts ├── tsconfig.json ├── sitemap.ts ├── robots.txt ├── manifest.json └── middleware.ts





## REQUISITOS DE CADA SEÇÃO

### 1. Hero Section (/) 
- Título animado "Silêncios da Saúde" (fade-in + slide-up)
- Subtítulo "Informação salva vidas. Conhecimento transforma escolhas."
- Background com gradiente animado + partículas flutuantes
- Botões CTA: "Conheça o Projeto" (link /sobre), "Aprenda sobre Saúde Feminina" (link /saude-feminina)
- Imagem decorativa lateral (ilustração vetorial de adolescentes em círculo)

### 2. Sobre o Projeto (/sobre)
- 4 cards em grid: Introdução, Justificativa, Problema de Pesquisa, Hipótese
- Cada card: ícone + título + descrição + efeito hover
- Timeline horizontal animada (scroll-driven) com marcos da pesquisa
- Ilustração científica ao lado

### 3. Objetivos (/objetivos)
- Card de destaque para Objetivo Geral
- Grid de cards para Objetivos Específicos
- Ícones: target, checklist, book, heart, chart

### 4. Saúde Feminina (/saude-feminina/[topico])
- Página principal com grid de 9 cards (um por tópico)
- Cada subpágina contém:
  - Banner com ilustração
  - Conteúdo educativo com títulos, parágrafos, bullets
  - Gráfico embutido (usando recharts)
  - Curiosidades em cards estilizados
  - FAQ específica do tópico (accordion)
  - Referências científicas no final
  - Navegação entre tópicos (anterior/próximo)

### 5. Mitos e Verdades (/mitos-e-verdades)
- Banner interativo com pergunta destacada
- Cartões de pergunta com animação de flip
- Botão "Verdade" (verde) / "Mito" (vermelho)
- Feedback instantâneo com explicação científica
- Contador de acertos
- Pelo menos 20 perguntas carregadas de data/myths.json

### 6. Quiz (/quiz)
- Tela inicial com nome do quiz + botão "Começar"
- Perguntas com 4 alternativas
- Barra de progresso animada
- Pontuação atualizada em tempo real
- Tela de resultados com:
  - Pontuação final (X/10)
  - Classificação: Iniciante, Exploradora, Expert, Mestre
  - Botão "Gerar Certificado" → gera PDF com nome, data, pontuação
- Feedback por pergunta (correta/errada com explicação)

### 7. Estatísticas (/estatisticas)
- Dashboard com cards de indicadores (total respostas, média, etc)
- Gráfico de pizza (faixa etária)
- Gráfico de barras (acertos por tema)
- Gráfico de linha (evolução temporal)
- Filtros: faixa etária, escola, ano escolar
- Dados mockados (conectáveis ao Supabase posteriormente)

### 8. Biblioteca (/biblioteca)
- Barra de pesquisa com debounce
- Filtros por categoria (artigos, cartilhas, guias, vídeos)
- Grid de cards com thumbnail, título, descrição, tag
- Modal de visualização

### 9. FAQ (/faq)
- Campo de pesquisa (filtra perguntas em tempo real)
- Categorias em pills/tabs
- Accordion com animação suave
- Perguntas carregadas de data/faq.json

### 10. Blog (/blog)
- Grid de posts com card imagem + título + excerpt + data
- Página individual /blog/[slug]
- Sidebar com categorias e posts recentes
- Sistema de comentários (formulário + lista)
- Botões de compartilhar (Twitter, WhatsApp, Facebook, LinkedIn)

### 11. Pesquisa (/pesquisa)
- Explicação do método científico em cards
- Etapas numeradas com ícones
- Fluxograma interativo (SVG ou React Flow)
- Cronograma em timeline vertical

### 12. Linha do Tempo (/linha-do-tempo)
- 6 marcos animados: Pesquisa bibliográfica → Questionário → Coleta → Análise → Produção do site → Resultados
- Scroll horizontal com sticky headers
- Ícones e descrições em cada marco

### 13. Professor (/professor)
- Grid de cards de download: PDF, slides, cartilhas, planos de aula, questionários
- Autenticação via Supabase (Google, Microsoft, GitHub)
- Material protegido para usuários logados com role "teacher"

### 14. Aluno (/aluno)
- Dashboard do aluno: materiais recentes, progresso no quiz, certificados
- Grid de vídeos educativos
- Jogos interativos embutidos
- Certificados conquistados (download)

### 15. Contato (/contato)
- Formulário com campos: Nome, Idade, Cidade, Mensagem
- Validação com Zod + react-hook-form
- Integração EmailJS (enviar para email do projeto)
- Mapa embutido (Leaflet ou Google Maps)
- Ícones de redes sociais (Instagram, TikTok, YouTube, WhatsApp)

### 16. Assistente Luna (flutuante, global)
- Botão flutuante no canto inferior direito
- Drawer/modal com chat
- Mensagens do sistema pré-programadas sobre saúde feminina
- Integração com OpenAI API (chat completions)
- Fallback para respostas locais (data/responses.json)
- Design acolhedor: avatar circular, bolhas de chat arredondadas

## RECURSOS GLOBAIS

### Dark Mode
- Toggle no header (ícone lua/sol)
- Salvo em localStorage + detecta preferência do sistema
- CSS vars em globals.css: .light e .dark
- Transição suave de 0.3s

### Pesquisa Global
- Campo no header (ícone de lupa)
- Drawer/página de resultados
- Busca por título em páginas, posts, biblioteca, FAQ
- Resultados com link + snippet

### PWA
- Manifest.json com ícones 192x192, 512x512
- Service worker com cache strategies
- Nome: "Silêncios da Saúde"
- Tema: #CDB4DB

### SEO
- next-seo ou metadata export em cada layout
- Open Graph image padrão
- Sitemap dinâmico
- Robots.txt
- Schema.org (Organization, WebSite, EducationalAudience)

### LGPD
- Cookie banner com consentimento
- Google Analytics + GTM condicional (só carrega se aceito)
- Política de privacidade (/privacidade)
- Termos de uso (/termos)

### Analytics
- Google Analytics 4 via next/script
- Google Tag Manager
- Event tracking: quiz completions, downloads, contato

## PERFORMANCE
- images: next/image com lazy loading, WebP, sizes
- dynamic imports: next/dynamic para componentes pesados (charts, quiz)
- Suspense boundaries em seções com dados async
- ISR para páginas estáticas (blog, biblioteca)
- Compressão de assets via next.config
- Lighthouse target: 95+ em todas categorias

## BANCO DE DADOS (Supabase + Prisma Schema)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  avatar        String?
  role          Role     @default(STUDENT)
  age           Int?
  city          String?
  school        String?
  grade         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  accounts      Account[]
  sessions      Session[]
  quizAttempts  QuizAttempt[]
  certificates  Certificate[]
  comments      Comment[]
}

enum Role {
  STUDENT
  TEACHER
  ADMIN
}

model QuizAttempt {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  score       Int
  total       Int
  answers     Json
  completedAt DateTime @default(now())
}

model Certificate {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  score       Int
  total       Int
  issuedAt    DateTime @default(now())
  code        String   @unique
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  postSlug  String
  createdAt DateTime @default(now())
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String
  content     String
  category    String
  image       String?
  author      String
  publishedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt
  comments    Comment[]
}
INSTRUÇÕES FINAIS
Gere o projeto completo com TODOS os arquivos listados
Cada arquivo deve ter código real, funcional e completo (sem placeholders)
Use shadcn/ui components com Tailwind CSS para UI consistente
Todas animações com Framer Motion (framer-motion)
Responsividade: mobile-first, breakpoints sm/md/lg/xl
Acessibilidade: WCAG AA, roles, labels, focus management
Dark mode funcional em TODOS os componentes
Textos em português brasileiro
Conteúdo científico real sobre saúde feminina (não lorem ipsum)
O projeto deve compilar sem erros com npm run dev
Gere o código completo, arquivo por arquivo, começando pela configuração do projeto.





