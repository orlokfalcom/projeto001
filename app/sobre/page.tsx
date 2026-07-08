"use client";

import React from "react";
import { BookOpen, AlertCircle, HelpCircle, HelpCircle as HypothesisIcon, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Sobre() {
  const cards = [
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Introdução",
      desc: "A puberdade e o ciclo menstrual são transformações biológicas e sociais profundas. No entanto, o silêncio e o constrangimento que envolvem o corpo feminino frequentemente impedem o acesso a orientações corretas.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-lilas" />,
      title: "Justificativa",
      desc: "Muitos adolescentes buscam respostas na internet em fontes pouco confiáveis ou compartilham mitos sem embasamento. Um canal dinâmico e científico combate a desinformação e promove a autonomia desde cedo.",
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-azul-cientifico" />,
      title: "Problema de Pesquisa",
      desc: "De que forma um portal interativo PWA, integrado com assistente de IA de apoio, pode diminuir as lacunas de informação e atenuar tabus relacionados à saúde íntima na adolescência?",
    },
    {
      icon: <HypothesisIcon className="w-6 h-6 text-verde-menta" />,
      title: "Hipótese",
      desc: "Uma plataforma educacional digital que alia gamificação (quizzes, cards) e uma linguagem acolhedora amplia significativamente a autocompreensão, diminuindo a ansiedade sobre o próprio corpo.",
    },
  ];

  const milestones = [
    { date: "Dez 2025", title: "Levantamento Teórico", desc: "Leitura de diretrizes da OMS, manuais da Febrasgo e artigos científicos." },
    { date: "Fev 2026", title: "Criação de Questionários", desc: "Elaboração de perguntas sobre mitos e conhecimentos para aplicar em escolas." },
    { date: "Mar 2026", title: "Coleta e Amostragem", desc: "Aplicação dos questionários éticos a mais de 200 alunas adolescentes." },
    { date: "Abr 2026", title: "Mapeamento das Dúvidas", desc: "Análise das maiores dúvidas sobre ciclo menstrual, HPV e vergonha íntima." },
    { date: "Mai-Jun 2026", title: "Produção Digital", desc: "Design e codificação do portal com todos os recursos e jogos interativos." },
    { date: "Jul 2026", title: "Lançamento do Portal", desc: "Disponibilização da plataforma e das estatísticas consolidadas." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Sobre o Projeto</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Entenda a fundamentação acadêmica e metodológica por trás da plataforma "Silêncios da Saúde".
        </p>
      </div>

      {/* Concept Section: Grid + Vector Illustration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: 4 Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-foreground/5 dark:bg-white/5 w-fit mb-4">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: Scientific Vector Illustration */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative p-4 bg-white dark:bg-card border border-border rounded-3xl shadow-sm max-w-[320px] w-full">
            <svg
              viewBox="0 0 300 400"
              className="w-full drop-shadow-sm select-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sci-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CDB4DB" />
                  <stop offset="100%" stopColor="#B8D4E3" />
                </linearGradient>
              </defs>

              {/* Microscope Base */}
              <path d="M70,350 L230,350" stroke="url(#sci-grad)" strokeWidth="8" strokeLinecap="round" />
              <path d="M150,350 L150,320" stroke="url(#sci-grad)" strokeWidth="8" />
              <path d="M100,320 L200,320" stroke="url(#sci-grad)" strokeWidth="6" strokeLinecap="round" />

              {/* Microscope Arm / Body */}
              <path d="M180,320 Q240,250 180,150" fill="none" stroke="url(#sci-grad)" strokeWidth="8" />
              
              {/* Microscope Stage */}
              <path d="M110,240 L190,240" stroke="#2D2327" strokeWidth="4" />
              <rect x="140" y="235" width="20" height="4" fill="#98D8C8" />

              {/* Microscope Lens & Body Tube */}
              <rect x="135" y="120" width="30" height="90" fill="url(#sci-grad)" transform="rotate(-15 150 160)" rx="4" />
              <line x1="128" y1="120" x2="152" y2="120" stroke="#2D2327" strokeWidth="6" />
              <line x1="140" y1="210" x2="160" y2="210" stroke="#2D2327" strokeWidth="6" />

              {/* Floating DNA strand representing biology */}
              <path d="M60,100 Q80,70 100,100 T140,100" fill="none" stroke="#FADADD" strokeWidth="3" />
              <path d="M60,80 Q80,110 100,80 T140,80" fill="none" stroke="#CDB4DB" strokeWidth="3" />
              <line x1="70" y1="90" x2="70" y2="92" stroke="#2D2327" strokeWidth="2" />
              <line x1="90" y1="95" x2="90" y2="85" stroke="#2D2327" strokeWidth="2" />
              <line x1="110" y1="85" x2="110" y2="95" stroke="#2D2327" strokeWidth="2" />
              <line x1="130" y1="90" x2="130" y2="92" stroke="#2D2327" strokeWidth="2" />

              {/* Floating Bubbles */}
              <circle cx="70" cy="180" r="8" fill="#B8D4E3" opacity="0.6" />
              <circle cx="230" cy="100" r="12" fill="#FADADD" opacity="0.6" />
              <circle cx="240" cy="220" r="6" fill="#98D8C8" opacity="0.5" />
            </svg>
            <div className="mt-4 text-center">
              <span className="text-3xs font-extrabold uppercase tracking-widest text-lilas">Base Científica</span>
              <h4 className="text-xs font-bold text-foreground mt-0.5">Pesquisa Metodológica Integrada</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-8 bg-cinza-fundo/40 dark:bg-dark-bg/20 rounded-3xl p-8 sm:p-12 border border-border/40">
        <div className="text-left space-y-2">
          <h2 className="text-2xl font-display font-bold text-foreground">Marcos da Pesquisa</h2>
          <p className="text-xs sm:text-sm text-foreground/80 font-semibold">
            Confira a trajetória do projeto, desde a fundamentação conceitual até a entrega do portal.
          </p>
        </div>

        {/* Horizontal scroll container with custom scroll style */}
        <div className="overflow-x-auto pb-6 flex space-x-6 scrollbar-thin scrollbar-thumb-lilas/40 scrollbar-track-transparent snap-x">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="flex-none w-[280px] bg-white dark:bg-card border border-border/80 rounded-2xl p-5 snap-start flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-2xs font-extrabold text-lilas uppercase">
                    <Calendar className="w-3.5 h-3.5" /> {ms.date}
                  </span>
                  <span className="text-xs font-extrabold text-foreground/20">#0{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-foreground">{ms.title}</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  {ms.desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/30 text-3xs font-bold text-foreground/40">
                <span>Fase de Conclusão</span>
                <CheckCircle2 className="w-4 h-4 text-verde-menta fill-verde-menta/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
