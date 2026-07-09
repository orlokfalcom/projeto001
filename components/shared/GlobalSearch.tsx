"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, GraduationCap, HelpCircle, FileText, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface SearchResult {
  title: string;
  snippet: string;
  category: string;
  url: string;
  type: "page" | "topic" | "faq" | "blog" | "library";
}

const SEARCHABLE_ITEMS: SearchResult[] = [
  // Principal pages
  { title: "Sobre o Projeto", snippet: "Saiba mais sobre a nossa justificativa, problema de pesquisa, metodologia e hipóteses.", category: "Institucional", url: "/sobre", type: "page" },
  { title: "Objetivos da Pesquisa", snippet: "Conheça o objetivo geral e os objetivos específicos do projeto Silêncios da Saúde.", category: "Institucional", url: "/objetivos", type: "page" },
  { title: "Mitos e Verdades", snippet: "Um jogo de cartas educativo para desmascarar boatos e reforçar verdades científicas.", category: "Interatividade", url: "/mitos-e-verdades", type: "page" },
  { title: "Quiz de Conhecimentos", snippet: "Teste seus conhecimentos sobre a saúde feminina e ganhe um certificado digital personalizado.", category: "Interatividade", url: "/quiz", type: "page" },
  { title: "Estatísticas e Gráficos", snippet: "Explore dados estatísticos e analíticos sobre participação e acertos por tema.", category: "Dados", url: "/estatisticas", type: "page" },
  { title: "Biblioteca Científica", snippet: "Acesse artigos científicos, cartilhas informativas, vídeos e guias completos.", category: "Recursos", url: "/biblioteca", type: "page" },
  { title: "FAQ - Perguntas Frequentes", snippet: "Respostas diretas para as dúvidas mais comuns sobre corpo, puberdade e saúde.", category: "Recursos", url: "/faq", type: "page" },
  { title: "Linha do Tempo da Pesquisa", snippet: "Veja os marcos do nosso projeto de pesquisa do início ao desenvolvimento do site.", category: "Metodologia", url: "/linha-do-tempo", type: "page" },
  { title: "Área do Professor", snippet: "Materiais exclusivos para educadores, incluindo slides e planos de aula prontos.", category: "Restrito", url: "/professor", type: "page" },
  { title: "Área do Aluno", snippet: "Seu dashboard pessoal para acompanhar certificados, assistir vídeos e ver o progresso.", category: "Restrito", url: "/aluno", type: "page" },
  
  // Topics (Saúde Feminina)
  { title: "Menstruação e Ciclo Menstrual", snippet: "Tudo sobre o fluxo menstrual, fases do ciclo, hormônios e manejo saudável.", category: "Saúde Feminina", url: "/saude-feminina/menstruacao", type: "topic" },
  { title: "Puberdade e Transformações", snippet: "Entenda o que muda no corpo e na mente durante a transição para a adolescência.", category: "Saúde Feminina", url: "/saude-feminina/puberdade", type: "topic" },
  { title: "Saúde Mental e Autoestima", snippet: "Como lidar com oscilações hormonais, pressões sociais e cultivar bem-estar mental.", category: "Saúde Feminina", url: "/saude-feminina/saude-mental", type: "topic" },
  { title: "Alimentação Saudável", snippet: "Dicas de nutrição específicas para apoiar o corpo feminino em fase de crescimento.", category: "Saúde Feminina", url: "/saude-feminina/alimentacao", type: "topic" },
  { title: "Exercícios Físicos e o Ciclo", snippet: "Como as atividades físicas influenciam e são influenciadas por suas flutuações hormonais.", category: "Saúde Feminina", url: "/saude-feminina/exercicios", type: "topic" },
  { title: "Qualidade do Sono", snippet: "A importância do repouso adequado na regulação hormonal e na concentração escolar.", category: "Saúde Feminina", url: "/saude-feminina/sono", type: "topic" },
  { title: "Vacinação e Prevenção", snippet: "A importância do calendário vacinal, incluindo a vacina do HPV, na saúde da mulher.", category: "Saúde Feminina", url: "/saude-feminina/vacinacao", type: "topic" },
  { title: "ISTs e Prevenção Básica", snippet: "Informações científicas sobre infecções sexualmente transmissíveis e prevenção.", category: "Saúde Feminina", url: "/saude-feminina/ists", type: "topic" },
  { title: "Contraceptivos e Planejamento", snippet: "Conheça os métodos contraceptivos disponíveis (barreira, hormonais) e sua eficácia.", category: "Saúde Feminina", url: "/saude-feminina/contraceptivos", type: "topic" },
];

export default function GlobalSearch() {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filtered = SEARCHABLE_ITEMS.filter((item) => {
      const cleanTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cleanSnippet = item.snippet.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cleanCat = item.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return cleanTitle.includes(cleanQuery) || cleanSnippet.includes(cleanQuery) || cleanCat.includes(cleanQuery);
    });

    setResults(filtered);
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case "topic":
        return <BookOpen className="w-5 h-5 text-lilas" />;
      case "faq":
        return <HelpCircle className="w-5 h-5 text-verde-menta" />;
      case "blog":
        return <FileText className="w-5 h-5 text-azul-cientifico" />;
      default:
        return <GraduationCap className="w-5 h-5 text-rosa-claro" />;
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pb-4 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-[#2D2327]/40 dark:bg-[#1A1A2E]/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.35 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-card border border-border shadow-2xl flex flex-col max-h-[80vh]"
          >
            {/* Header/Input */}
            <div className="flex items-center px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-foreground/40 mr-3" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="O que você quer aprender hoje? (Ex: menstruação, vacina, quiz...)"
                className="w-full bg-transparent border-0 text-foreground placeholder-foreground/40 py-2 focus:outline-none text-lg"
                aria-label="Pesquisar no site"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full hover:bg-foreground/10 text-foreground/50 transition-all mr-2"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-2.5 py-1.5 rounded-lg border border-border bg-cinza-fundo dark:bg-dark-bg/50 hover:bg-foreground/5 dark:hover:bg-foreground/10 text-xs font-semibold text-foreground/60 transition-all"
                aria-label="Fechar pesquisa"
              >
                ESC
              </button>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
              {query ? (
                results.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-foreground/50 px-2">
                      RESULTADOS ENCONTRADOS ({results.length})
                    </p>
                    <div className="space-y-1.5">
                      {results.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.url}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-start p-3 rounded-xl hover:bg-rosa-claro/10 dark:hover:bg-lilas/5 border border-transparent hover:border-border/40 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-foreground/5 dark:bg-white/5 mr-3 group-hover:scale-105 transition-all">
                            {getIcon(item.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-bold text-lilas uppercase tracking-wide">
                                {item.category}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-lilas transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed">
                              {item.snippet}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-foreground/30 self-center ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 px-4">
                    <HelpCircle className="w-12 h-12 text-foreground/20 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-foreground mb-1">Nenhum resultado encontrado</h3>
                    <p className="text-sm text-foreground/60 max-w-sm mx-auto">
                      Tente buscar por termos mais genéricos, como &quot;ciclo&quot;, &quot;corpo&quot;, &quot;hormônio&quot; ou navegue pelos tópicos no menu.
                    </p>
                  </div>
                )
              ) : (
                /* Default suggestions */
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-foreground/40 mb-3 px-2 tracking-wide uppercase">
                      Tópicos Recomendados
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SEARCHABLE_ITEMS.filter((i) => i.type === "topic")
                        .slice(0, 4)
                        .map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            onClick={() => setIsSearchOpen(false)}
                            className="flex items-center p-3 rounded-xl bg-cinza-fundo/50 dark:bg-white/5 hover:bg-rosa-claro/15 dark:hover:bg-lilas/10 border border-border/20 transition-all group"
                          >
                            <div className="p-2 rounded-lg bg-foreground/5 mr-3 group-hover:bg-white transition-colors">
                              {getIcon(item.type)}
                            </div>
                            <span className="text-sm font-bold text-foreground text-left">
                              {item.title.split(" e ")[0]}
                            </span>
                          </Link>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-foreground/40 mb-3 px-2 tracking-wide uppercase">
                      Acesso Rápido
                    </h3>
                    <div className="flex flex-wrap gap-2 px-1">
                      <Link
                        href="/mitos-e-verdades"
                        onClick={() => setIsSearchOpen(false)}
                        className="px-3.5 py-2 rounded-full border border-border/40 bg-white dark:bg-card hover:bg-verde-menta/10 hover:border-verde-menta/50 text-xs font-bold text-foreground transition-all"
                      >
                        💡 Mitos e Verdades
                      </Link>
                      <Link
                        href="/quiz"
                        onClick={() => setIsSearchOpen(false)}
                        className="px-3.5 py-2 rounded-full border border-border/40 bg-white dark:bg-card hover:bg-lilas/10 hover:border-lilas/50 text-xs font-bold text-foreground transition-all"
                      >
                        📝 Quiz e Certificado
                      </Link>
                      <Link
                        href="/sobre"
                        onClick={() => setIsSearchOpen(false)}
                        className="px-3.5 py-2 rounded-full border border-border/40 bg-white dark:bg-card hover:bg-rosa-claro/20 hover:border-rosa-claro/50 text-xs font-bold text-foreground transition-all"
                      >
                        🧬 Conheça a Pesquisa
                      </Link>
                      <Link
                        href="/faq"
                        onClick={() => setIsSearchOpen(false)}
                        className="px-3.5 py-2 rounded-full border border-border/40 bg-white dark:bg-card hover:bg-azul-cientifico/10 hover:border-azul-cientifico/50 text-xs font-bold text-foreground transition-all"
                      >
                        ❓ Dúvidas Frequentes
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
