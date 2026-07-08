"use client";

import React, { useState } from "react";
import { BookOpen, GraduationCap, Users, Code, Activity, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StepDetails {
  title: string;
  desc: string;
}

const FLOWCHART_DETAILS: Record<string, StepDetails> = {
  revisao: {
    title: "1. Revisão Bibliográfica",
    desc: "Consulta a manuais ginecológicos da Febrasgo, orientações da OMS e Ministério da Saúde para estruturar os conhecimentos de forma correta e confiável.",
  },
  questionario: {
    title: "2. Formulação de Questionários",
    desc: "Criação de formulários contendo afirmativas de mitos/fatos e perguntas de conhecimento avaliadas eticamente para identificar as maiores dúvidas das jovens.",
  },
  coleta: {
    title: "3. Coleta de Dados nas Escolas",
    desc: "Aplicação dos formulários para mais de 200 alunas adolescentes em escolas da rede pública, gerando uma amostragem real e regionalizada.",
  },
  analise: {
    title: "4. Análise dos Resultados",
    desc: "Compilação e tabulação dos dados (representados na aba de Estatísticas), revelando os principais tabus e lacunas sobre HPV, ciclo e vergonha íntima.",
  },
  desenvolvimento: {
    title: "5. Desenvolvimento do Portal",
    desc: "Criação deste espaço digital (PWA), traduzindo as dores das alunas em artigos, jogos interativos, quiz de certificação e a assistente virtual Luna.",
  },
};

export default function PesquisaMetodologica() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const steps = [
    {
      num: "01",
      icon: <BookOpen className="w-5 h-5 text-lilas" />,
      title: "Problematização",
      desc: "Investigação do silêncio que envolve a saúde íntima feminina e como isso impacta a autocompreensão e a prevenção vacinal de adolescentes.",
    },
    {
      num: "02",
      icon: <ClipboardList className="w-5 h-5 text-rose-400" />,
      title: "Desenho da Amostragem",
      desc: "Estruturação de formulários quantitativos de múltipla escolha e levantamento de mitos populares transmitidos de geração a geração.",
    },
    {
      num: "03",
      icon: <Users className="w-5 h-5 text-verde-menta" />,
      title: "Fase de Campo",
      desc: "Interação com as comunidades escolares sob consentimento parental, aplicando questionários e introduzindo rodas de conversa introdutórias.",
    },
    {
      num: "04",
      icon: <Code className="w-5 h-5 text-azul-cientifico" />,
      title: "Solução Tecnológica",
      desc: "Implementação das respostas em uma plataforma com design acolhedor, que roda em navegadores convencionais e celulares de forma acessível.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Metodologia da Pesquisa</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Conheça o processo de pesquisa científica estruturado para dar base à criação deste portal educativo.
        </p>
      </div>

      {/* Numbered Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-3xs flex flex-col justify-between text-left space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-display font-extrabold text-foreground/15">{s.num}</span>
              <div className="p-2.5 rounded-xl bg-foreground/5 dark:bg-white/5">
                {s.icon}
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-foreground">{s.title}</h3>
              <p className="text-xs text-foreground/75 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Flowchart Section */}
      <div className="space-y-8 bg-cinza-fundo/45 dark:bg-dark-bg/20 rounded-3xl p-8 sm:p-12 border border-border/40 text-center">
        <div className="max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-display font-bold text-foreground">Fluxograma do Projeto</h2>
          <p className="text-xs sm:text-sm text-foreground/80 font-semibold">
            Clique em cada etapa do fluxograma abaixo para entender as fases de execução científica do nosso trabalho.
          </p>
        </div>

        {/* Custom SVG Interactive Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Flowchart Vector (Col 7) */}
          <div className="md:col-span-7 flex justify-center">
            <svg
              viewBox="0 0 500 250"
              className="w-full max-w-[450px] drop-shadow-sm select-none"
              aria-hidden="true"
            >
              {/* Connection lines */}
              <path d="M90,75 L120,75" stroke="#CDB4DB" strokeWidth="2.5" strokeDasharray="4 4" />
              <path d="M210,75 L240,75" stroke="#CDB4DB" strokeWidth="2.5" strokeDasharray="4 4" />
              <path d="M330,75 L360,75" stroke="#CDB4DB" strokeWidth="2.5" strokeDasharray="4 4" />
              <path d="M270,110 L270,150" stroke="#CDB4DB" strokeWidth="2.5" strokeDasharray="4 4" />

              {/* Node 1: Revisão (Circle) */}
              <g onClick={() => setActiveStep("revisao")} className="cursor-pointer group">
                <circle cx="50" cy="75" r="38" fill={activeStep === "revisao" ? "#CDB4DB" : "rgba(205, 180, 219, 0.2)"} stroke="#CDB4DB" strokeWidth="2.5" className="transition-all" />
                <text x="50" y="79" textAnchor="middle" fontSize="10" fontWeight="bold" fill={activeStep === "revisao" ? "#2D2327" : "currentColor"}>Revisão</text>
              </g>

              {/* Node 2: Questionario (Circle) */}
              <g onClick={() => setActiveStep("questionario")} className="cursor-pointer group">
                <circle cx="165" cy="75" r="38" fill={activeStep === "questionario" ? "#FADADD" : "rgba(250, 218, 221, 0.2)"} stroke="#FADADD" strokeWidth="2.5" className="transition-all" />
                <text x="165" y="79" textAnchor="middle" fontSize="10" fontWeight="bold" fill={activeStep === "questionario" ? "#2D2327" : "currentColor"}>Pesquisa</text>
              </g>

              {/* Node 3: Coleta (Circle) */}
              <g onClick={() => setActiveStep("coleta")} className="cursor-pointer group">
                <circle cx="285" cy="75" r="38" fill={activeStep === "coleta" ? "#98D8C8" : "rgba(152, 216, 200, 0.2)"} stroke="#98D8C8" strokeWidth="2.5" className="transition-all" />
                <text x="285" y="79" textAnchor="middle" fontSize="10" fontWeight="bold" fill={activeStep === "coleta" ? "#2D2327" : "currentColor"}>Coleta</text>
              </g>

              {/* Node 4: Analise (Circle) */}
              <g onClick={() => setActiveStep("analise")} className="cursor-pointer group">
                <circle cx="405" cy="75" r="38" fill={activeStep === "analise" ? "#B8D4E3" : "rgba(184, 212, 227, 0.2)"} stroke="#B8D4E3" strokeWidth="2.5" className="transition-all" />
                <text x="405" y="79" textAnchor="middle" fontSize="10" fontWeight="bold" fill={activeStep === "analise" ? "#2D2327" : "currentColor"}>Análise</text>
              </g>

              {/* Node 5: Desenvolvimento (Oval / Bottom) */}
              <g onClick={() => setActiveStep("desenvolvimento")} className="cursor-pointer group">
                <rect x="180" y="150" width="180" height="60" rx="30" fill={activeStep === "desenvolvimento" ? "#CDB4DB" : "rgba(205, 180, 219, 0.15)"} stroke="#CDB4DB" strokeWidth="2.5" className="transition-all" />
                <text x="270" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill={activeStep === "desenvolvimento" ? "#2D2327" : "currentColor"}>Portal / Tecnologia</text>
              </g>
            </svg>
          </div>

          {/* Details Pane (Col 5) */}
          <div className="md:col-span-5 h-[180px] flex items-center justify-center text-left">
            <AnimatePresence mode="wait">
              {activeStep ? (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-white dark:bg-card border border-border shadow-inner space-y-2.5 h-full flex flex-col justify-center"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-lilas">
                    Detalhamento do Passo
                  </h4>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {FLOWCHART_DETAILS[activeStep].title}
                  </h3>
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    {FLOWCHART_DETAILS[activeStep].desc}
                  </p>
                </motion.div>
              ) : (
                <div className="p-5 border border-dashed border-border rounded-2xl text-center text-foreground/50 h-full flex items-center justify-center font-bold text-xs">
                  👉 Toque em um nó do fluxograma para ver a explicação científica.
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
      
    </div>
  );
}
