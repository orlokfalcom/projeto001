"use client";

import React from "react";
import { BookOpen, ClipboardList, Users, BarChart3, Code, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function LinhaDoTempo() {
  const milestones = [
    {
      icon: <BookOpen className="w-5 h-5 text-lilas" />,
      title: "Pesquisa Bibliográfica",
      date: "Dezembro 2025",
      desc: "Estudo aprofundado dos consensos de ginecologia infantil e juvenil, estruturando a base conceitual sobre o ciclo menstrual e puberdade.",
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-rose-400" />,
      title: "Concepção do Questionário",
      date: "Fevereiro 2026",
      desc: "Criação de formulários investigativos focados em levantar o grau de desinformação de jovens adolescentes sobre saúde e vacinação.",
    },
    {
      icon: <Users className="w-5 h-5 text-verde-menta" />,
      title: "Coleta nas Escolas",
      date: "Março 2026",
      desc: "Aplicação dos questionários éticos presenciais com mais de 200 estudantes, mapeando as principais dúvidas e os tabus em comum.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-azul-cientifico" />,
      title: "Análise Estatística",
      date: "Abril 2026",
      desc: "Compilação dos dados para revelar as lacunas educacionais mais urgentes (como desconhecimento sobre vacinação contra HPV).",
    },
    {
      icon: <Code className="w-5 h-5 text-lilas" />,
      title: "Desenvolvimento Digital",
      date: "Maio-Junho 2026",
      desc: "Criação da plataforma web responsiva, integrando jogos interativos, simuladores de leitura, chat de IA (Luna) e painel analítico.",
    },
    {
      icon: <Award className="w-5 h-5 text-verde-menta" />,
      title: "Divulgação dos Resultados",
      date: "Julho 2026",
      desc: "Apresentação dos dados estatísticos e liberação da plataforma educativa para a comunidade escolar de alunos e professores.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Linha do Tempo</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Acompanhe o cronograma de progresso e as etapas de amadurecimento científico da pesquisa Silêncios da Saúde.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
        
        {/* Central timeline axis line for desktop */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />

        <div className="space-y-12 relative z-10">
          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center w-full relative ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                
                {/* Visual marker point on center axis */}
                <div className="absolute left-6 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-card border-2 border-lilas -translate-x-1/2 flex items-center justify-center font-bold text-3xs text-foreground z-20 shadow-xs">
                  {idx + 1}
                </div>

                {/* Left/Right Card spacer */}
                <div className="w-full sm:w-1/2 pr-0 sm:pr-8 sm:pl-0 pl-12 text-left">
                  {isEven ? (
                    /* Content Card */
                    <div className="p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-3xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-4xs font-bold text-lilas uppercase">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                        <div className="p-2 bg-foreground/5 dark:bg-white/5 rounded-lg shrink-0">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-foreground/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Right/Left Card spacer */}
                <div className="w-full sm:w-1/2 pl-0 sm:pl-8 sm:pr-0 pl-12 text-left mt-4 sm:mt-0">
                  {!isEven ? (
                    /* Content Card */
                    <div className="p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-3xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-4xs font-bold text-lilas uppercase">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                        <div className="p-2 bg-foreground/5 dark:bg-white/5 rounded-lg shrink-0">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-foreground/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ) : null}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
      
    </div>
  );
}
