"use client";

import React from "react";
import { Lock, Download, FileText, Presentation, ClipboardCheck, ArrowRight, ShieldCheck, LogOut } from "lucide-react";
import { useApp } from "@/lib/context/AppContext";

export default function ProfessorDashboard() {
  const { user, login, logout } = useApp();

  const materials = [
    {
      icon: <ClipboardCheck className="w-5 h-5 text-lilas" />,
      title: "Plano de Aula: Introdução ao Ciclo Menstrual",
      desc: "Roteiro completo de 50 minutos alinhado com a BNCC para aplicação em salas de 8º e 9º ano.",
      format: "PDF",
      size: "840 KB",
    },
    {
      icon: <Presentation className="w-5 h-5 text-rose-400" />,
      title: "Slides de Apresentação: Puberdade e Corpo",
      desc: "Material visual rico em ilustrações biológicas simples sobre transformações hormonais nas meninas.",
      format: "PPTX",
      size: "4.2 MB",
    },
    {
      icon: <FileText className="w-5 h-5 text-verde-menta" />,
      title: "Apostila de Apoio Pedagógico",
      desc: "Guia de orientação do educador contendo glossário científico e respostas para perguntas embaraçosas.",
      format: "PDF",
      size: "1.6 MB",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-azul-cientifico" />,
      title: "Questionário de Avaliação Pós-Quiz",
      desc: "Exercícios e dinâmicas em grupo para aplicar em sala de aula avaliando a absorção das oficinas.",
      format: "PDF",
      size: "520 KB",
    },
  ];

  const handleSimulatedLogin = () => {
    login("Profª Cláudia Rocha", "claudia.rocha@educacao.com", "TEACHER", {
      school: "Colégio Estadual Rui Barbosa",
      city: "São Paulo",
    });
  };

  const isTeacher = user?.role === "TEACHER" || user?.role === "ADMIN";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      {!isTeacher ? (
        /* LOCK SCREEN (Unauthorized) */
        <div className="max-w-md mx-auto rounded-3xl bg-white dark:bg-card border border-border p-8 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-bold text-foreground">Área Exclusiva do Professor</h1>
            <p className="text-xs text-foreground/60 font-semibold">Espaço restrito para materiais pedagógicos de apoio.</p>
          </div>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
            Professores e educadores têm acesso a slides didáticos, planos de aula estruturados pela BNCC e cartilhas de apoio para aplicação em oficinas escolares.
          </p>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleSimulatedLogin}
              className="w-full py-3.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Simular Login de Professor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center pt-2">
              <span className="text-4xs uppercase tracking-widest font-extrabold text-foreground/35 block mb-2">Conectores de produção do Supabase</span>
              <div className="flex gap-2 justify-center">
                <span className="px-2.5 py-1 rounded-lg border border-border bg-foreground/5 text-4xs font-bold opacity-60">Google</span>
                <span className="px-2.5 py-1 rounded-lg border border-border bg-foreground/5 text-4xs font-bold opacity-60">Microsoft</span>
                <span className="px-2.5 py-1 rounded-lg border border-border bg-foreground/5 text-4xs font-bold opacity-60">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* TEACHER DASHBOARD (Authorized) */
        <div className="space-y-8">
          {/* Dashboard Header */}
          <div className="rounded-3xl bg-gradient-to-tr from-lilas/25 via-rosa-claro/25 to-azul-cientifico/20 border border-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-verde-menta/25 text-[#2D2327] dark:text-verde-menta text-3xs font-extrabold uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" /> Acesso Autorizado
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Olá, {user?.name}!
              </h1>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-semibold">
                Escola: {user?.school || "Não informada"} | Cidade: {user?.city || "Não informada"}
              </p>
            </div>

            <button
              onClick={logout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/30 hover:bg-red-500/10 text-red-500 text-xs font-bold transition-all w-fit cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Simulação</span>
            </button>
          </div>

          {/* Protected Content Grid */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-display font-bold text-foreground">Materiais Pedagógicos de Download</h2>
              <p className="text-xs text-foreground/60 mt-0.5 font-semibold">Baixe os slides e apostilas para suas aulas de biologia e saúde.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-card border border-border flex items-start space-x-4 shadow-3xs hover:shadow-xs transition-shadow duration-300 justify-between group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-foreground/5 dark:bg-white/5 rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {m.icon}
                    </div>
                    <div className="space-y-1.5 text-left">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-foreground/5 text-4xs font-bold text-foreground/60 uppercase">
                        {m.format} • {m.size}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs text-foreground/75 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Iniciando download do material: \n"${m.title}"`)}
                    className="p-2.5 rounded-xl bg-lilas text-[#2D2327] hover:bg-lilas/95 transition-all self-center ml-4 cursor-pointer"
                    aria-label={`Baixar ${m.title}`}
                  >
                    <Download className="w-4.5 h-4.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
