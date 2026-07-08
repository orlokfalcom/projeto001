"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, X, Award, FileText, ChevronRight, RotateCcw, User, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import quizData from "@/data/quiz-questions.json";
import { useApp } from "@/lib/context/AppContext";
import { jsPDF } from "jspdf";
import confetti from "canvas-confetti";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function Quiz() {
  const { user, login, addCertificate, addAttempt } = useApp();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [gameState, setGameState] = useState<"intro" | "play" | "result">("intro");
  
  // Quiz state
  const [currIdx, setCurrIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  
  // User name for certificate (local or fallback)
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState(14);
  const [schoolInput, setSchoolInput] = useState("");

  useEffect(() => {
    setQuestions(quizData);
    if (user) {
      setNameInput(user.name);
      setSchoolInput(user.school || "");
    }
  }, [user]);

  const handleStart = () => {
    if (!nameInput.trim()) return;
    
    // Auto-login to session mock if not logged in
    if (!user) {
      login(nameInput, `${nameInput.toLowerCase().replace(/\s+/g, "")}@escola.com`, "STUDENT", {
        age: ageInput,
        school: schoolInput || "Colégio Público Municipal",
      });
    }

    setGameState("play");
    setCurrIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setHasAnswered(false);
  };

  const handleReset = () => {
    setGameState("intro");
    setCurrIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setHasAnswered(false);
  };

  const handleAnswerSelect = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOpt(idx);
    setHasAnswered(true);

    if (idx === questions[currIdx].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currIdx < questions.length - 1) {
      setSelectedOpt(null);
      setHasAnswered(false);
      setCurrIdx((prev) => prev + 1);
    } else {
      // End game
      setGameState("result");
      addAttempt(score, questions.length);
      
      // Save certificate if user passed (e.g. score >= 6)
      if (score >= 6) {
        addCertificate(nameInput, score, questions.length);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#CDB4DB", "#FADADD", "#98D8C8", "#B8D4E3"],
        });
      }
    }
  };

  const generatePDFCertificate = () => {
    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      const userName = nameInput || user?.name || "Estudante";
      const validationCode = "SDS-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + new Date().getFullYear();
      
      // Draw background
      doc.setFillColor(249, 247, 248); // #F9F7F8
      doc.rect(0, 0, 297, 210, "F");

      // Draw main borders
      doc.setDrawColor(205, 180, 219); // #CDB4DB (lilas)
      doc.setLineWidth(5);
      doc.rect(10, 10, 277, 190);

      // Draw internal thin border
      doc.setDrawColor(250, 218, 221); // #FADADD (rosa claro)
      doc.setLineWidth(1.5);
      doc.rect(14, 14, 269, 182);

      // Certificate Title
      doc.setTextColor(45, 35, 39); // #2D2327 (texto escuro)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text("Silêncios da Saúde", 148, 45, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("PORTAL EDUCATIVO DE SAÚDE FEMININA", 148, 54, { align: "center" });

      // Title - Certificado
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(162, 136, 227); // Lilás escuro
      doc.text("CERTIFICADO DE APROVEITAMENTO", 148, 78, { align: "center" });

      // Core Text
      doc.setTextColor(45, 35, 39);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("Certificamos que, para todos os fins de direito,", 148, 98, { align: "center" });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(userName, 148, 114, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      
      const bodyLine1 = "concluiu com êxito o Quiz de Conhecimentos sobre Saúde Feminina na Adolescência,";
      const bodyLine2 = `obtendo a pontuação de ${score} acertos em um total de ${questions.length} questões (${score * 10}% de aproveitamento).`;
      doc.text(bodyLine1, 148, 128, { align: "center" });
      doc.text(bodyLine2, 148, 136, { align: "center" });

      // Date and Validation Code
      const dateStr = new Date().toLocaleDateString("pt-BR");
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Emitido em: ${dateStr}`, 50, 168, { align: "center" });
      doc.text(`Código de Validação: ${validationCode}`, 247, 168, { align: "center" });

      // Decorative Seal Graphic in Vector
      doc.setDrawColor(152, 216, 200); // #98D8C8 (verde menta)
      doc.setFillColor(152, 216, 200);
      doc.setLineWidth(1);
      doc.circle(148, 165, 8, "FD");
      
      doc.setTextColor(45, 35, 39);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text("OK", 148, 167.5, { align: "center" });

      // Save PDF
      doc.save(`certificado_silencios_da_saude_${userName.toLowerCase().replace(/\s+/g, "_")}.pdf`);
    } catch (e) {
      console.error("Error generating PDF:", e);
    }
  };

  const getClassification = (pts: number) => {
    if (pts >= 9) return { title: "Mestre da Saúde 🏆", text: "Excelente! Você tem um domínio excepcional das ciências biológicas e saúde feminina." };
    if (pts >= 7) return { title: "Expert no Tema 🌟", text: "Muito bem! Seus conhecimentos estão super atualizados e corretos." };
    if (pts >= 5) return { title: "Exploradora Curiosa 🌸", text: "Bom progresso! Você aprendeu pontos fundamentais e desfez vários tabus." };
    return { title: "Iniciante Aprendiz 🌱", text: "Um bom começo! Explore nossos guias e tire suas dúvidas no chat com a Luna." };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 flex flex-col items-center">
      
      {/* 1. INTRO SCREEN */}
      {gameState === "intro" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg rounded-3xl bg-white dark:bg-card border border-border p-8 text-center space-y-6 shadow-sm"
        >
          <div className="text-4xl">📝</div>
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-bold text-foreground">Quiz Educativo</h1>
            <p className="text-xs text-foreground/60 font-semibold">Responda a 10 perguntas baseadas em evidências científicas.</p>
          </div>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
            Acerte pelo menos 60% (6/10) das perguntas e conquiste um certificado digital personalizado emitido instantaneamente em formato PDF.
          </p>

          {/* Form for name */}
          <div className="space-y-4 text-left pt-2">
            <div>
              <label htmlFor="name-input" className="block text-xs font-bold text-foreground/70 mb-1.5 flex items-center gap-1.5">
                <User className="w-4 h-4 text-lilas" /> Seu Nome Completo (para o certificado):
              </label>
              <input
                id="name-input"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Ex: Mariana Silva"
                className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="age-input" className="block text-xs font-bold text-foreground/70 mb-1.5">
                  Sua Idade:
                </label>
                <input
                  id="age-input"
                  type="number"
                  min="9"
                  max="25"
                  value={ageInput}
                  onChange={(e) => setAgeInput(parseInt(e.target.value) || 14)}
                  className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
                />
              </div>
              <div>
                <label htmlFor="school-input" className="block text-xs font-bold text-foreground/70 mb-1.5">
                  Sua Escola:
                </label>
                <input
                  id="school-input"
                  type="text"
                  value={schoolInput}
                  onChange={(e) => setSchoolInput(e.target.value)}
                  placeholder="Opcional"
                  className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!nameInput.trim()}
            className="w-full py-4 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 disabled:opacity-50 disabled:pointer-events-none text-sm font-extrabold shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Iniciar Desafio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* 2. PLAY SCREEN */}
      {gameState === "play" && questions.length > 0 && (
        <div className="w-full max-w-xl space-y-6 text-left">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between px-2 text-xs font-bold text-foreground/60">
            <span>Questão {currIdx + 1} de {questions.length}</span>
            <span>Progresso: {Math.round(((currIdx + 1) / questions.length) * 100)}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-lilas transition-all duration-300"
              style={{ width: `${((currIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Box */}
          <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xs">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-relaxed">
              {questions[currIdx].question}
            </h2>

            {/* Options List */}
            <div className="space-y-3">
              {questions[currIdx].options.map((opt, oIdx) => {
                let btnStyle = "border-border hover:bg-foreground/5 text-foreground";
                
                if (hasAnswered) {
                  if (oIdx === questions[currIdx].correctAnswer) {
                    btnStyle = "bg-verde-menta/25 border-verde-menta text-foreground font-semibold";
                  } else if (selectedOpt === oIdx) {
                    btnStyle = "bg-red-500/15 border-red-500 text-foreground";
                  } else {
                    btnStyle = "opacity-50 border-border text-foreground/60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={hasAnswered}
                    onClick={() => handleAnswerSelect(oIdx)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all duration-200 flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current shrink-0 flex items-center justify-center font-bold text-3xs">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 mt-0.5 leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            <AnimatePresence>
              {hasAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-5 rounded-2xl bg-cinza-fundo dark:bg-dark-bg/40 border border-border/60 space-y-2 overflow-hidden text-left"
                >
                  <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-lilas" /> Explicação Científica:
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {questions[currIdx].explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next button */}
            {hasAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{currIdx < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. RESULT SCREEN */}
      {gameState === "result" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg rounded-3xl bg-white dark:bg-card border border-border p-8 text-center space-y-6 shadow-sm"
        >
          <div className="text-4xl">🏆</div>
          <div className="space-y-1">
            <h2 className="text-2xl font-display font-bold text-foreground">Resultado do Quiz</h2>
            <p className="text-xs text-foreground/60 font-semibold">Sua pontuação final no desafio educativo.</p>
          </div>

          {/* Points */}
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center bg-gradient-to-tr from-rosa-claro/40 to-lilas/40 rounded-full border border-border">
            <div className="text-center">
              <span className="block text-4xl font-display font-bold text-foreground">{score}</span>
              <span className="block text-4xs uppercase font-extrabold text-foreground/45">de 10 acertos</span>
            </div>
          </div>

          {/* Classification details */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-foreground">
              {getClassification(score).title}
            </h3>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-sm mx-auto">
              {getClassification(score).text}
            </p>
          </div>

          {/* Certificate Download section */}
          {score >= 6 ? (
            <div className="p-5 border border-verde-menta/30 bg-verde-menta/5 rounded-3xl space-y-3.5 text-left">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-verde-menta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">Certificado Desbloqueado!</h4>
                  <p className="text-2xs sm:text-xs text-foreground/75 leading-relaxed mt-0.5">
                    Parabéns, você passou! Clique no botão abaixo para baixar o PDF personalizado com seu nome e nota.
                  </p>
                </div>
              </div>
              <button
                onClick={generatePDFCertificate}
                className="w-full py-2.5 rounded-xl bg-verde-menta hover:bg-verde-menta/80 text-[#2D2327] text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Baixar Certificado em PDF</span>
              </button>
            </div>
          ) : (
            <div className="p-5 border border-border bg-cinza-fundo/40 dark:bg-dark-bg/20 rounded-3xl text-xs text-foreground/75 leading-relaxed text-left">
              <p>
                ❌ Infelizmente você não atingiu a pontuação mínima de 6 acertos para receber o certificado. Estude nossos tópicos informativos e tente de novo quando quiser!
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-border bg-white dark:bg-card text-xs font-bold text-foreground hover:bg-foreground/5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Quiz</span>
            </button>
            <Link
              href="/saude-feminina"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-xs transition-all"
            >
              <span>Estudar Temas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
      
    </div>
  );
}
