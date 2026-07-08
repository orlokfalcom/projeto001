"use client";

import React from "react";
import { Target, BookOpen, Heart, ClipboardCheck, BarChart3, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Objetivos() {
  const specificObjectives = [
    {
      icon: <BookOpen className="w-6 h-6 text-lilas" />,
      title: "Mapear Conhecimentos",
      desc: "Levantar as principais dúvidas, mitos e crenças limitantes das adolescentes em idade escolar sobre anatomia, fisiologia do ciclo e métodos preventivos.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Promover Autonomia",
      desc: "Reduzir o constrangimento, ansiedade e tabus que envolvem a menarca (primeira menstruação) e as transformações corporais da puberdade.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-verde-menta" />,
      title: "Sistematizar Informações",
      desc: "Traduzir dados científicos e manuais médicos complexos em uma linguagem dialógica, acessível e engajante para jovens de 10 a 18 anos.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-azul-cientifico" />,
      title: "Disponibilizar Indicadores",
      desc: "Fornecer um dashboard com dados estatísticos consolidados sobre o nível de acertos e engajamento no quiz para subsidiar ações pedagógicas.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Nossos Objetivos</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Definimos metas claras para guiar a produção de conteúdos e o impacto educativo da plataforma.
        </p>
      </div>

      {/* Objetivo Geral (Destaque) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-tr from-rosa-claro/20 via-lilas/25 to-azul-cientifico/20 border border-border/60 p-8 sm:p-12 relative overflow-hidden shadow-2xs group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-105 transition-transform duration-500">
          <Target className="w-48 h-48 text-lilas" />
        </div>

        <div className="relative z-10 space-y-5 text-left">
          <div className="flex items-center gap-2 text-lilas">
            <Target className="w-8 h-8 stroke-[2.5]" />
            <span className="text-sm font-extrabold uppercase tracking-wider">Objetivo Geral</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#2D2327] dark:text-foreground tracking-tight leading-snug">
            Construir um portal digital interativo (PWA) de saúde feminina fundamentado em evidências científicas que atue como canal seguro e acolhedor para desmitificar tabus, apoiar adolescentes na puberdade e fortalecer a tomada de decisões conscientes sobre o próprio corpo.
          </h2>
          <div className="flex flex-wrap gap-4 pt-3 text-3xs font-extrabold text-[#2D2327]/80 dark:text-foreground/80">
            <span className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-card/60 border border-border/20">🧬 Rigor Científico</span>
            <span className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-card/60 border border-border/20">💬 Acolhimento</span>
            <span className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-card/60 border border-border/20">📱 Interatividade</span>
          </div>
        </div>
      </motion.div>

      {/* Objetivos Específicos Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-display font-bold text-foreground">Metas Específicas</h3>
          <p className="text-xs text-foreground/60 mt-1 font-semibold">Os pilares práticos que viabilizam o nosso propósito.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {specificObjectives.map((obj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-3xs flex items-start space-x-5 transition-all duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-foreground/5 dark:bg-white/5 shrink-0">
                {obj.icon}
              </div>
              <div className="space-y-1.5 text-left">
                <h4 className="text-sm font-bold text-foreground">{obj.title}</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
