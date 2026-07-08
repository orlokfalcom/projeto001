"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Droplet, Sparkles, HelpCircle, GraduationCap, CheckCircle2, ChevronRight, MessageSquareCode } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const features = [
    {
      icon: <Droplet className="w-6 h-6 text-rose-500" />,
      title: "Saúde Feminina",
      description: "Explore 9 tópicos essenciais sobre ciclo menstrual, puberdade, vacinação, nutrição, sono e corpo.",
      link: "/saude-feminina",
      bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
      borderColor: "border-rose-500/20",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-lilas" />,
      title: "Mitos e Verdades",
      description: "Desvende tabus e crenças antigas com nosso jogo interativo de cartas com base científica.",
      link: "/mitos-e-verdades",
      bgColor: "bg-lilas/10 dark:bg-lilas/20",
      borderColor: "border-lilas/20",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-verde-menta" />,
      title: "Quiz e Certificação",
      description: "Teste seus conhecimentos, aprenda com explicações e conquiste seu certificado de participação.",
      link: "/quiz",
      bgColor: "bg-verde-menta/10 dark:bg-verde-menta/20",
      borderColor: "border-verde-menta/20",
    },
  ];

  return (
    <div className="w-full relative overflow-hidden flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-rosa-claro blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lilas blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-azul-cientifico blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilas/15 border border-lilas/30">
              <Sparkles className="w-4 h-4 text-lilas" />
              <span className="text-2xs font-bold uppercase tracking-wider text-foreground">Plataforma Educativa</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Silêncios da <br />
              <span className="bg-gradient-to-r from-lilas via-rose-400 to-verde-menta bg-clip-text text-transparent">
                Saúde
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl font-medium"
            >
              Informação salva vidas. Conhecimento transforma escolhas. <br className="hidden sm:inline" />
              Um espaço acolhedor e baseado em evidências científicas para decifrar a saúde feminina na adolescência.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/saude-feminina"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-sm font-bold shadow-md hover:scale-102 transition-all active:scale-98"
              >
                <span>Aprender Saúde Feminina</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-white/40 dark:bg-card/40 backdrop-blur-xs hover:bg-white/80 dark:hover:bg-card/80 text-sm font-bold text-foreground hover:scale-102 transition-all active:scale-98"
              >
                <span>Conhecer o Projeto</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8 mt-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-lilas">100%</p>
                <p className="text-3xs sm:text-2xs font-semibold text-foreground/60">Científico & Seguro</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-rose-400">9</p>
                <p className="text-3xs sm:text-2xs font-semibold text-foreground/60">Tópicos do Corpo</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-verde-menta">Grátis</p>
                <p className="text-3xs sm:text-2xs font-semibold text-foreground/60">Acesso Sem Limites</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right: SVG Illustration representing girls in a supportive circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-radial from-lilas/10 to-transparent rounded-full scale-110" />
            
            {/* Premium Interactive SVG */}
            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-[420px] drop-shadow-xl select-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FADADD" />
                  <stop offset="100%" stopColor="#FBCEB1" />
                </linearGradient>
                <linearGradient id="lilas-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CDB4DB" />
                  <stop offset="100%" stopColor="#A288E3" />
                </linearGradient>
                <linearGradient id="menta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#98D8C8" />
                  <stop offset="100%" stopColor="#6BC4B1" />
                </linearGradient>
                <linearGradient id="azul-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B8D4E3" />
                  <stop offset="100%" stopColor="#87B6D9" />
                </linearGradient>
              </defs>

              {/* Central Glowing Shield */}
              <circle cx="250" cy="250" r="160" fill="none" stroke="url(#lilas-grad)" strokeWidth="2" strokeDasharray="8 8" className="animate-spin" style={{ animationDuration: "120s" }} />
              <circle cx="250" cy="250" r="140" fill="none" stroke="url(#rose-grad)" strokeWidth="1" />
              
              {/* Central Heart Core */}
              <path
                d="M250,285 C230,260 200,240 200,215 C200,195 215,180 235,180 C244,180 248,185 250,188 C252,185 256,180 265,180 C285,180 300,195 300,215 C300,240 270,260 250,285 Z"
                fill="url(#rose-grad)"
                opacity="0.2"
                transform="scale(1.2) translate(-42, -50)"
              />
              <path
                d="M250,285 C230,260 200,240 200,215 C200,195 215,180 235,180 C244,180 248,185 250,188 C252,185 256,180 265,180 C285,180 300,195 300,215 C300,240 270,260 250,285 Z"
                fill="url(#lilas-grad)"
                opacity="0.85"
              />

              {/* Surrounding Avatars / Dots representing community and growth */}
              {/* Girl Avatar 1 (Top Left) */}
              <g className="cursor-pointer transition-transform hover:scale-105">
                <circle cx="150" cy="150" r="32" fill="url(#rose-grad)" />
                <path d="M125,175 C125,160 135,150 150,150 C165,150 175,160 175,175 Z" fill="#2D2327" opacity="0.15" />
                <circle cx="150" cy="142" r="12" fill="#2D2327" opacity="0.6" />
                <path d="M136,132 C132,145 142,154 150,154 C158,154 168,145 164,132 C160,118 140,118 136,132 Z" fill="#2D2327" />
              </g>

              {/* Girl Avatar 2 (Top Right) */}
              <g className="cursor-pointer transition-transform hover:scale-105">
                <circle cx="350" cy="150" r="32" fill="url(#menta-grad)" />
                <path d="M325,175 C325,160 335,150 350,150 C365,150 375,160 375,175 Z" fill="#2D2327" opacity="0.15" />
                <circle cx="350" cy="142" r="12" fill="#2D2327" opacity="0.6" />
                <path d="M334,136 C344,122 356,122 366,136 C370,144 366,155 350,152 C334,149 330,144 334,136 Z" fill="#2D2327" />
              </g>

              {/* Girl Avatar 3 (Bottom Center) */}
              <g className="cursor-pointer transition-transform hover:scale-105">
                <circle cx="250" cy="370" r="32" fill="url(#azul-grad)" />
                <path d="M225,395 C225,380 235,370 250,370 C265,370 275,380 275,395 Z" fill="#2D2327" opacity="0.15" />
                <circle cx="250" cy="362" r="12" fill="#2D2327" opacity="0.6" />
                <path d="M235,352 C235,338 265,338 265,352 C265,358 260,370 250,370 C240,370 235,358 235,352 Z" fill="#2D2327" />
              </g>

              {/* Decorative Flowers and Leaves */}
              {/* Flower 1 */}
              <path d="M120,280 C110,270 90,270 90,290 C90,310 110,310 120,300 C130,310 150,310 150,290 C150,270 130,270 120,280 Z" fill="url(#rose-grad)" opacity="0.75" />
              <circle cx="120" cy="290" r="6" fill="#CDB4DB" />
              
              {/* Leaf 1 */}
              <path d="M380,270 Q400,260 410,285 Q390,300 380,270 Z" fill="url(#menta-grad)" opacity="0.8" />
              <path d="M382,272 Q398,284 398,284" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE FEATURES GRID */}
      <section className="py-20 bg-cinza-fundo dark:bg-dark-bg/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground">Explore o Portal</h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed font-semibold">
              Desenvolvemos ferramentas interativas para desmistificar tabus e fornecer educação confiável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl bg-white dark:bg-card border border-border shadow-xs hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center group"
              >
                <div className={`p-4 rounded-2xl ${feature.bgColor} border ${feature.borderColor} mb-6 group-hover:scale-105 transition-all`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-6 flex-1 max-w-[280px]">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-lilas group-hover:underline"
                >
                  <span>Começar</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASSISTANT PROMO SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-tr from-rosa-claro/40 via-lilas/40 to-azul-cientifico/45 border border-border/60 p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            <div className="lg:col-span-8 space-y-5 text-left relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-card text-xs font-bold text-lilas shadow-3xs">
                <MessageSquareCode className="w-4 h-4" /> Inteligência de Apoio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#2D2327] dark:text-foreground tracking-tight">
                Ficou alguma dúvida? <br />
                Converse no chat com a Luna!
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 max-w-xl font-medium leading-relaxed">
                Nossa assistente de IA está online 24h para responder suas perguntas sobre menstruação, puberdade e saúde feminina, com total privacidade e acolhimento.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const lBtn = document.querySelector('button[aria-label="Abrir assistente Luna"]') as HTMLButtonElement;
                    lBtn?.click();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D2327] hover:bg-[#2D2327]/90 text-white dark:bg-foreground dark:hover:bg-foreground/90 dark:text-[#2D2327] text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Chamar a Luna no Chat</span>
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center relative z-10">
              <div className="relative">
                {/* Floating bubbles animation preview */}
                <div className="w-32 h-32 rounded-full bg-white dark:bg-card shadow-2xl flex items-center justify-center text-4xl border border-border">
                  🌙
                </div>
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-verde-menta text-[#2D2327] text-3xs font-extrabold shadow-md uppercase tracking-wider animate-bounce">
                  Olá!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY INTRO BANNER */}
      <section className="py-16 border-t border-border bg-cinza-fundo/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left space-y-2">
              <h3 className="text-lg font-bold text-foreground">Como foi feita nossa pesquisa?</h3>
              <p className="text-xs text-foreground/75 leading-relaxed max-w-2xl font-semibold">
                Este portal é fruto de um rigoroso trabalho metodológico que envolveu pesquisa bibliográfica, questionários analíticos com adolescentes e validação de materiais educativos.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/sobre"
                className="px-5 py-2.5 rounded-full border border-border hover:bg-foreground/5 text-xs font-bold text-foreground transition-all"
              >
                Metodologia
              </Link>
              <Link
                href="/linha-do-tempo"
                className="px-5 py-2.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold transition-all"
              >
                Linha do Tempo
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
