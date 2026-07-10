import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/context/AppContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import LunaChat from "@/components/luna/LunaChat";
import GlobalSearch from "@/components/shared/GlobalSearch";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silêncios da Saúde | Portal Educativo de Saúde Feminina",
  description: "Um espaço acolhedor e informativo sobre saúde feminina, puberdade, menstruação e prevenção para adolescentes. Informação científica sem tabus.",
  keywords: ["saúde feminina", "adolescência", "menstruação", "puberdade", "vacina HPV", "educação sexual", "bem-estar", "ginecologia"],
  authors: [{ name: "Projeto Silêncios da Saúde" }],
  manifest: "/manifest.json",
  themeColor: "#CDB4DB",
  openGraph: {
    title: "Silêncios da Saúde | Saúde Feminina para Adolescentes",
    description: "Espaço educativo com mitos e verdades, quiz, artigos científicos e a assistente Luna para apoiar adolescentes na jornada de autoconhecimento.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Bootstrap CSS (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        {/* Anti-flash inline script for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        {/* Service Worker registration for PWA offline capabilities */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('SW registered scope:', reg.scope);
                  }).catch(function(err) {
                    console.error('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-lilas/30 selection:text-foreground">
        <AppProvider>
          {/* Accessibility Skip Link */}
          <a href="#main-content" className="skip-to-content">
            Pular para o conteúdo principal (Skip to content)
          </a>

          {/* Site Navigation Header */}
          <Header />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1 flex flex-col outline-none">
            {children}
          </main>

          {/* Site Footer */}
          <Footer />

          {/* Global Components */}
          <GlobalSearch />
          <LunaChat />
          <CookieBanner />
        </AppProvider>
        {/* Bootstrap JS bundle (CDN) */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
