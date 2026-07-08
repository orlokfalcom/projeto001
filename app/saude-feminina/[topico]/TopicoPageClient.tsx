"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb, FileText, ChevronDown, HelpCircle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

interface ContentBlock {
  type: string;
  text?: string;
  items?: string[];
}

interface ChartItem {
  name: string;
  porcentagem?: number;
  idade?: number;
  dor?: number;
  horas?: number;
  cobertura?: number;
  eficacia?: number;
  falha?: number;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface Topic {
  id?: string;
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  content: ContentBlock[];
  chartTitle: string;
  chartData: ChartItem[];
  trivia: string[];
  faq: FaqItem[];
  references: string[];
}

interface TopicoPageClientProps {
  topic: Topic;
  prevTopic: Topic | null;
  nextTopic: Topic | null;
}

export default function TopicoPageClient({ topic, prevTopic, nextTopic }: TopicoPageClientProps) {
  const [mounted, setMounted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Colors for chart bars
  const barColors = ["#CDB4DB", "#FADADD", "#98D8C8", "#B8D4E3", "#E8AEB7"];

  const getChartDataKey = () => {
    if (!topic.chartData || topic.chartData.length === 0) return "";
    const firstItem = topic.chartData[0];
    if ("porcentagem" in firstItem) return "porcentagem";
    if ("idade" in firstItem) return "idade";
    if ("dor" in firstItem) return "dor";
    if ("horas" in firstItem) return "horas";
    if ("cobertura" in firstItem) return "cobertura";
    if ("eficacia" in firstItem) return "eficacia";
    if ("falha" in firstItem) return "falha";
    return "";
  };

  return (
    <div className="w-full flex flex-col space-y-12">
      
      {/* 1. Header Banner */}
      <section className={`py-16 px-4 bg-gradient-to-tr ${topic.color.split(" ")[0]} ${topic.color.split(" ")[1]} border-b border-border/20`}>
        <div className="max-w-7xl mx-auto text-left space-y-4">
          <Link
            href="/saude-feminina"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2327]/80 hover:text-[#2D2327] hover:translate-x-[-2px] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para Saúde Feminina</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#2D2327]">
            {topic.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#2D2327]/80 leading-relaxed max-w-3xl font-medium">
            {topic.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
        
        {/* Left Column: Educational Content + Chart */}
        <div className="lg:col-span-8 space-y-10 text-left">
          
          {/* Article Texts */}
          <div className="space-y-6">
            {topic.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-foreground border-b border-border/40 pb-2 pt-4">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "bullets") {
                return (
                  <ul key={idx} className="space-y-3 pl-1">
                    {block.items?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-lilas shrink-0 mt-2 mr-3" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Embedded Recharts graph */}
          <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-3xs font-extrabold text-lilas uppercase tracking-widest">Estatística do Tema</span>
              <h4 className="text-sm sm:text-base font-bold text-foreground mt-0.5">{topic.chartTitle}</h4>
            </div>
            
            {/* Safe rendering to avoid Next.js hydration issues */}
            <div className="h-64 w-full">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topic.chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "currentColor", fontSize: 10 }}
                      axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "currentColor", fontSize: 10 }}
                      axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid rgba(128, 128, 128, 0.15)",
                        fontSize: "12px",
                        fontWeight: "bold",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                    <Bar
                      dataKey={getChartDataKey()}
                      radius={[8, 8, 0, 0]}
                    >
                      {topic.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full bg-foreground/5 rounded-2xl animate-pulse flex items-center justify-center text-xs font-semibold text-foreground/40">
                  Carregando gráfico...
                </div>
              )}
            </div>
            <p className="text-3xs text-foreground/50 text-center leading-relaxed">
              *Dados baseados em pesquisas acadêmicas de amostragem populacional e diretrizes de órgãos de saúde.
            </p>
          </div>

        </div>

        {/* Right Column: Trivia + FAQ + References */}
        <div className="lg:col-span-4 space-y-8 text-left">
          
          {/* Trivia / Interesting facts */}
          <div className="rounded-3xl bg-rosa-claro/10 dark:bg-card border border-border p-6 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-lilas shrink-0" />
              <span>Curiosidades</span>
            </h3>
            <div className="space-y-4">
              {topic.trivia.map((fact, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-sm font-extrabold text-lilas shrink-0">💡</span>
                  <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ specific accordion */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-lilas shrink-0" />
              <span>Dúvidas Comuns</span>
            </h3>
            
            <div className="space-y-2">
              {topic.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white dark:bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-foreground text-left"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-foreground/40 shrink-0 transition-transform ${openFaqIdx === idx ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaqIdx === idx && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-xs text-foreground/75 leading-relaxed border-t border-border/20 pt-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific references */}
          <div className="rounded-3xl border border-border p-6 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-lilas shrink-0" />
              <span>Referências Científicas</span>
            </h3>
            <div className="space-y-3">
              {topic.references.map((ref, idx) => (
                <div key={idx} className="flex gap-2 items-start text-3xs font-semibold text-foreground/70 leading-relaxed">
                  <span className="shrink-0 text-lilas">•</span>
                  <span>{ref}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Bottom Prev/Next navigation */}
      <section className="border-t border-border py-8 bg-cinza-fundo/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-4">
          {prevTopic ? (
            <Link
              href={`/saude-feminina/${prevTopic.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-white dark:bg-card text-xs font-bold text-foreground hover:bg-lilas/10 transition-all text-left"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <div>
                <span className="block text-4xs uppercase text-foreground/40 font-extrabold tracking-wider">Anterior</span>
                <span className="block line-clamp-1">{prevTopic.title}</span>
              </div>
            </Link>
          ) : (
            <div className="w-1" />
          )}

          {nextTopic ? (
            <Link
              href={`/saude-feminina/${nextTopic.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold transition-all text-right"
            >
              <div>
                <span className="block text-4xs uppercase text-[#2D2327]/60 font-extrabold tracking-wider">Próximo</span>
                <span className="block line-clamp-1">{nextTopic.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          ) : (
            <div className="w-1" />
          )}
        </div>
      </section>
      
    </div>
  );
}
