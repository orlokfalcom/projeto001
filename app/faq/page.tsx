"use client";

import React, { useState, useEffect } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "@/data/faq.json";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  const categories = ["all", ...Array.from(new Set(faqData.map((f) => f.category)))];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    const cleanSearch = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleanQuestion = faq.question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleanAnswer = faq.answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const matchesSearch = cleanQuestion.includes(cleanSearch) || cleanAnswer.includes(cleanSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 text-left">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Perguntas Frequentes</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Encontre respostas rápidas e explicadas de forma simples para as principais dúvidas sobre corpo, puberdade e saúde.
        </p>
      </div>

      {/* Control Bar: Search + Category filter pills */}
      <div className="space-y-5 border-b border-border/60 pb-6">
        
        {/* Search Input */}
        <div className="relative w-full max-w-lg mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/45" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIdx(null); // Reset accordions on search
            }}
            placeholder="Pesquisar sua dúvida... (Ex: ciclo, cólica, vacina)"
            className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
            aria-label="Pesquisar nas perguntas frequentes"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIdx(null); // Reset accordions on filter
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                activeCategory === cat
                  ? "bg-lilas text-[#2D2327]"
                  : "bg-cinza-fundo dark:bg-dark-bg/30 border border-border/60 hover:bg-foreground/5 text-foreground"
              }`}
            >
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Container */}
      {filteredFaqs.length > 0 ? (
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-white dark:bg-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-sm sm:text-base font-bold text-foreground text-left cursor-pointer"
                aria-expanded={openIdx === idx}
              >
                <div className="flex items-start space-x-3.5 pr-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-lilas shrink-0 mt-2.5" />
                  <span>{faq.question}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-foreground/45 shrink-0 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1.5 border-t border-border/10 text-xs sm:text-sm text-foreground/75 leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                      <div className="pt-2">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full bg-foreground/5 text-3xs font-extrabold uppercase tracking-wider text-foreground/55">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-3xl">
          <HelpCircle className="w-12 h-12 text-foreground/20 mx-auto mb-3" />
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">Nenhuma dúvida encontrada</h3>
          <p className="text-xs text-foreground/60 max-w-xs mx-auto">
            Tente buscar com outros termos ou faça uma pergunta direta para a assistente virtual Luna no chat!
          </p>
        </div>
      )}

    </div>
  );
}
