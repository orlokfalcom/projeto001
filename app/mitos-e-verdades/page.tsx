"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, X, ShieldAlert, RotateCcw, AlertTriangle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mythsData from "@/data/myths.json";
import confetti from "canvas-confetti";

interface Question {
  id: number;
  statement: string;
  isTruth: boolean;
  explanation: string;
}

export default function MitosVerdades() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currIdx, setCurrIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    // Shuffle questions or load directly
    setQuestions(mythsData);
  }, []);

  const handleAnswer = (choice: boolean) => {
    if (isFlipped) return; // Prevent double clicking
    
    setUserChoice(choice);
    const isCorrect = choice === questions[currIdx].isTruth;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    
    setIsFlipped(true);
  };

  const handleNext = () => {
    if (currIdx < questions.length - 1) {
      setIsFlipped(false);
      setUserChoice(null);
      // Wait for flip back animation
      setTimeout(() => {
        setCurrIdx((prev) => prev + 1);
      }, 300);
    } else {
      setGameFinished(true);
      // Trigger confetti if score is high
      if (score >= questions.length * 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#CDB4DB", "#FADADD", "#98D8C8", "#B8D4E3"],
        });
      }
    }
  };

  const handleReset = () => {
    setCurrIdx(0);
    setScore(0);
    setIsFlipped(false);
    setUserChoice(null);
    setGameFinished(false);
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-foreground/60 font-semibold">Carregando jogo...</p>
      </div>
    );
  }

  const currentQuestion = questions[currIdx];
  const progressPercent = ((currIdx + (isFlipped ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-display font-bold text-foreground">Mitos e Verdades</h1>
        <p className="text-xs sm:text-sm text-foreground/80 max-w-lg font-semibold leading-relaxed">
          Coloque seus conhecimentos à prova! Decida se cada afirmação é um Mito ou uma Verdade Científica.
        </p>
      </div>

      {/* Game Area */}
      {!gameFinished ? (
        <div className="w-full max-w-lg space-y-6">
          
          {/* Progress Banner */}
          <div className="flex items-center justify-between px-2 text-xs font-bold text-foreground/60">
            <span>Questão {currIdx + 1} de {questions.length}</span>
            <span>Acertos: {score}</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-lilas"
            />
          </div>

          {/* 3D Flip Card Container */}
          <div className="w-full h-[320px] [perspective:1000px] select-none cursor-default">
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full [transform-style:preserve-3d]"
            >
              {/* CARD FRONT: Statement */}
              <div className="absolute inset-0 w-full h-full rounded-3xl bg-white dark:bg-card border border-border p-8 flex flex-col justify-between shadow-sm [backface-visibility:hidden]">
                <div className="flex items-center justify-between text-2xs font-extrabold uppercase text-lilas tracking-widest">
                  <span>Afirmação</span>
                  <span>💭</span>
                </div>
                <div className="flex-1 flex items-center justify-center py-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center leading-relaxed">
                    "{currentQuestion.statement}"
                  </h3>
                </div>
                <p className="text-3xs text-foreground/40 text-center uppercase tracking-wider font-bold">
                  Escolha uma opção abaixo para responder
                </p>
              </div>

              {/* CARD BACK: Scientific Explanation */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl border p-8 flex flex-col justify-between shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{
                  backgroundColor: currentQuestion.isTruth ? "rgba(152, 216, 200, 0.08)" : "rgba(232, 174, 183, 0.08)",
                  borderColor: currentQuestion.isTruth ? "rgba(152, 216, 200, 0.4)" : "rgba(232, 174, 183, 0.4)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-2xs font-bold uppercase tracking-wider ${
                    currentQuestion.isTruth
                      ? "bg-verde-menta/20 text-[#2D2327] dark:text-verde-menta"
                      : "bg-red-500/10 text-red-500"
                  }`}>
                    {currentQuestion.isTruth ? "Verdade Científica" : "Mito Popular"}
                  </span>
                  
                  {/* Correct / Incorrect Indicator */}
                  {userChoice !== null && (
                    <span className={`text-2xs font-bold ${
                      userChoice === currentQuestion.isTruth ? "text-verde-menta" : "text-red-500"
                    }`}>
                      {userChoice === currentQuestion.isTruth ? (
                        <span className="flex items-center gap-1">Você acertou! <Check className="w-4.5 h-4.5 stroke-[2.5]" /></span>
                      ) : (
                        <span className="flex items-center gap-1">Você errou! <X className="w-4.5 h-4.5 stroke-[2.5]" /></span>
                      )}
                    </span>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar py-4 flex flex-col justify-center text-left">
                  <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">Explicação:</h4>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-sm cursor-pointer"
                >
                  <span>{currIdx < questions.length - 1 ? "Próxima Afirmação" : "Ver Resultados"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons (Verdade / Mito) */}
          <div className="grid grid-cols-2 gap-4">
            <button
              disabled={isFlipped}
              onClick={() => handleAnswer(true)}
              className="py-4 rounded-2xl bg-verde-menta text-[#2D2327] hover:bg-verde-menta/90 disabled:opacity-50 disabled:pointer-events-none text-sm font-extrabold shadow-sm active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-4.5 h-4.5 stroke-[2.5]" />
              <span>Verdade</span>
            </button>
            <button
              disabled={isFlipped}
              onClick={() => handleAnswer(false)}
              className="py-4 rounded-2xl bg-rose-400 text-[#2D2327] hover:bg-rose-400/90 disabled:opacity-50 disabled:pointer-events-none text-sm font-extrabold shadow-sm active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <X className="w-4.5 h-4.5 stroke-[2.5]" />
              <span>Mito</span>
            </button>
          </div>

        </div>
      ) : (
        /* Results Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-3xl bg-white dark:bg-card border border-border p-8 text-center space-y-6 shadow-sm"
        >
          <div className="text-4xl">🏆</div>
          <div className="space-y-1">
            <h2 className="text-2xl font-display font-bold text-foreground">Jogo Concluído!</h2>
            <p className="text-xs text-foreground/60 font-semibold">Parabéns por testar seus conhecimentos.</p>
          </div>

          {/* Score Circle */}
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center bg-gradient-to-tr from-rosa-claro/40 to-lilas/40 rounded-full border border-border">
            <div className="text-center">
              <span className="block text-4xl font-display font-bold text-foreground">{score}</span>
              <span className="block text-4xs uppercase font-extrabold text-foreground/45">de {questions.length} acertos</span>
            </div>
          </div>

          {/* Performance review */}
          <div className="p-4 bg-cinza-fundo dark:bg-dark-bg/40 rounded-2xl text-xs font-semibold leading-relaxed">
            {score >= questions.length * 0.9 ? (
              <p className="text-verde-menta">✨ Mestre dos Mitos! Você tem um entendimento científico impecável sobre o corpo feminino.</p>
            ) : score >= questions.length * 0.6 ? (
              <p className="text-lilas">🌸 Exploradora Curiosa! Você foi muito bem, mas ainda restavam alguns tabus para desvendar.</p>
            ) : (
              <p className="text-foreground/75">🌱 Aprendiz Inicial! O portal está cheio de guias incríveis para você sanar suas dúvidas.</p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-border bg-white dark:bg-card text-xs font-bold text-foreground hover:bg-foreground/5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Jogar de Novo</span>
            </button>
            <Link
              href="/quiz"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-xs transition-all"
            >
              <span>Ir para o Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
      
    </div>
  );
}
