"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/context/AppContext";

interface Message {
  id: string;
  sender: "user" | "luna";
  text: string;
  timestamp: string;
}

const LOCAL_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ["menstruacao", "menstru", "ciclo", "fluxo", "sangue", "sangrar"],
    response: "A menstruação é a descamação das paredes internas do útero (o endométrio) que ocorre aproximadamente uma vez por mês, quando não há gravidez. O ciclo menstrual médio dura 28 dias (mas varia entre 21 e 35 dias). É super normal no começo (nos primeiros anos após a menarca) ser irregular!",
  },
  {
    keywords: ["colica", "dor", "abdome", "cólica", "colicas"],
    response: "A cólica menstrual (dismenorreia) acontece porque o útero se contrai para ajudar a expelir o endométrio. Bolsas de água quente no abdômen, chás quentes (como de camomila), repouso e exercícios leves podem ajudar a aliviar. Se a dor for muito intensa e te impedir de ir à escola, é importante consultar um ginecologista.",
  },
  {
    keywords: ["tpm", "tensao menstrual", "tensão", "humor", "irritacao", "choro"],
    response: "A TPM (Tensão Pré-Menstrual) ocorre devido às flutuações dos hormônios estrogênio e progesterona antes da menstruação. Pode causar irritação, sensibilidade nos seios, fadiga, desejo por doces e oscilações de humor. Praticar atividades físicas e manter uma boa alimentação ajudam bastante a amenizar os sintomas!",
  },
  {
    keywords: ["puberdade", "crescer", "peito", "seio", "pelo", "espinha", "mudanca", "transformacao", "odor", "cheiro"],
    response: "A puberdade é o período de transição entre a infância e a idade adulta, geralmente iniciando-se entre os 8 e 13 anos nas meninas. As principais mudanças físicas incluem o broto mamário (crescimento dos seios), surgimento de pelos pubianos e axilares, aceleração do crescimento (estirão) e alterações na pele (como espinhas). É um processo lindo e natural de amadurecimento!",
  },
  {
    keywords: ["vacinacao", "vacina", "hpv", "prevencao", "prevenir"],
    response: "A vacinação contra o HPV (Papilomavírus Humano) é extremamente importante e está disponível gratuitamente no SUS para meninas e meninos de 9 a 14 anos. Ela previne contra vírus que causam câncer do colo do útero e outras lesões. Manter a caderneta de vacinação em dia é um ato de amor-próprio e saúde!",
  },
  {
    keywords: ["contraceptivo", "evitar gravidez", "camisinha", "preservativo", "pilula", "anticoncepcional", "diu", "prevencao", "ists", "dst"],
    response: "Os métodos contraceptivos servem para evitar uma gravidez não planejada. Temos os métodos de barreira (como a camisinha masculina e feminina, que também protegem contra ISTs) e hormonais (pílula, injeção, implante, DIU). O uso de camisinha + método hormonal (dupla proteção) é a forma mais segura de se proteger!",
  },
  {
    keywords: ["ist", "dst", "infeccao", "aids", "hiv", "sifilis", "gonorreia", "corrimento", "coceira"],
    response: "As ISTs (Infecções Sexualmente Transmissíveis) são causadas por vírus, bactérias ou outros microrganismos transmitidos principalmente por contato sexual sem proteção. Os sintomas podem incluir corrimento com odor forte, coceira, feridas ou dor. O uso consistente da camisinha é a principal forma de prevenção. Se notar algo diferente no corpo, procure uma Unidade Básica de Saúde (UBS).",
  },
  {
    keywords: ["ginecologista", "medico", "consulta", "exame"],
    response: "Ir ao ginecologista é essencial para tirar dúvidas, fazer exames preventivos e conversar sobre contracepção e saúde íntima. A primeira consulta deve ocorrer preferencialmente na adolescência, após a primeira menstruação ou antes de iniciar a vida sexual. Não tenha vergonha, eles estão ali para te ajudar e acolher!",
  },
];

export default function LunaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "luna",
      text: "Oi! Eu sou a Luna, sua assistente virtual sobre saúde feminina. 😊 Fique à vontade para fazer qualquer pergunta sobre ciclo menstrual, puberdade, vacinas ou bem-estar. Nosso papo é 100% seguro e anônimo!",
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getLunaResponse = (userText: string): string => {
    const normalizedText = userText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    // Search keywords
    for (const entry of LOCAL_RESPONSES) {
      if (entry.keywords.some((keyword) => normalizedText.includes(keyword))) {
        return entry.response;
      }
    }

    return "Hum, não tenho certeza se entendi completamente. Você poderia perguntar sobre menstruação, cólica, puberdade, vacinas (como HPV) ou métodos contraceptivos? Estou aqui para ajudar com esses temas! 🌸";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      const replyText = getLunaResponse(userMessage.text);
      const lunaMessage: Message = {
        id: Math.random().toString(),
        sender: "luna",
        text: replyText,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, lunaMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSuggestion = (text: string) => {
    setInputValue(text);
    // Submit suggestion after a short delay
    setTimeout(() => {
      const sendButton = document.getElementById("luna-send-btn");
      sendButton?.click();
    }, 50);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-lilas text-[#2D2327] shadow-2xl hover:scale-105 hover:bg-lilas/90 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
          aria-label="Abrir assistente Luna"
          title="Fale com a Luna"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verde-menta opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-verde-menta"></span>
          </span>
          {/* Popover tooltip */}
          <span className="absolute right-16 bg-white dark:bg-card border border-border text-foreground text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
            Dúvidas? Fale com a Luna! ✨
          </span>
        </motion.button>
      </div>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[550px] bg-white dark:bg-card border border-border rounded-3xl shadow-2xl z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rosa-claro/80 via-lilas/60 to-azul-cientifico/40 px-5 py-4 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner font-bold text-lg text-lilas border border-lilas/20">
                  🌙
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2D2327] flex items-center gap-1">
                    Assistente Luna <Sparkles className="w-3.5 h-3.5 text-lilas fill-lilas" />
                  </h3>
                  <span className="text-3xs font-semibold text-[#2D2327]/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-verde-menta animate-pulse"></span> Online • IA de Apoio
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/40 text-[#2D2327]/60 hover:text-[#2D2327] transition-all"
                aria-label="Fechar assistente"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Warning Info */}
            <div className="px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 flex items-start space-x-2 text-3xs font-semibold text-foreground/80">
              <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
              <span>A Luna esclarece dúvidas educativas. Suas respostas não substituem conselhos médicos ou consultas ginecológicas.</span>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-cinza-fundo/40 dark:bg-dark-bg/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-2xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-lilas text-[#2D2327] rounded-tr-none font-medium"
                        : "bg-white dark:bg-card-foreground/5 text-foreground rounded-tl-none border border-border/20"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="block text-4xs text-foreground/40 text-right mt-1 font-mono">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-card-foreground/5 border border-border/20 rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions (Shown if last message is from Luna) */}
            {messages[messages.length - 1]?.sender === "luna" && !isTyping && (
              <div className="px-4 py-2 bg-cinza-fundo/20 border-t border-border/10 flex gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap">
                <button
                  onClick={() => handleSuggestion("Como funciona o ciclo menstrual?")}
                  className="px-3 py-1.5 rounded-full border border-border bg-white dark:bg-card text-2xs font-bold text-foreground/80 hover:bg-lilas/10 hover:border-lilas/40 transition-all cursor-pointer"
                >
                  🩸 Ciclo menstrual
                </button>
                <button
                  onClick={() => handleSuggestion("O que alivia as cólicas?")}
                  className="px-3 py-1.5 rounded-full border border-border bg-white dark:bg-card text-2xs font-bold text-foreground/80 hover:bg-lilas/10 hover:border-lilas/40 transition-all cursor-pointer"
                >
                  ⚡ Alívio de cólicas
                </button>
                <button
                  onClick={() => handleSuggestion("O que muda na puberdade?")}
                  className="px-3 py-1.5 rounded-full border border-border bg-white dark:bg-card text-2xs font-bold text-foreground/80 hover:bg-lilas/10 hover:border-lilas/40 transition-all cursor-pointer"
                >
                  🌱 Puberdade
                </button>
                <button
                  onClick={() => handleSuggestion("Por que tomar vacina do HPV?")}
                  className="px-3 py-1.5 rounded-full border border-border bg-white dark:bg-card text-2xs font-bold text-foreground/80 hover:bg-lilas/10 hover:border-lilas/40 transition-all cursor-pointer"
                >
                  🛡️ Vacina HPV
                </button>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-border bg-white dark:bg-card flex items-center space-x-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escreva sua dúvida aqui..."
                className="flex-1 bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
                aria-label="Mensagem para Luna"
              />
              <button
                id="luna-send-btn"
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-xs"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
