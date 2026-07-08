"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 rounded-2xl glassmorphism border border-border shadow-2xl p-5"
          role="dialog"
          aria-label="Consentimento de Cookies (LGPD)"
        >
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded-xl bg-verde-menta/20 text-verde-menta shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-foreground/80 dark:text-verde-menta" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-bold text-foreground">Sua privacidade importa!</h4>
                <button
                  onClick={handleDecline}
                  className="p-1 rounded-lg text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all"
                  aria-label="Fechar e recusar cookies"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência, analisar o tráfego do site e apoiar nossos objetivos educacionais, em conformidade com a LGPD.
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleAccept}
                  className="flex-1 text-center py-2 px-3 rounded-full bg-verde-menta text-[#2D2327] hover:bg-verde-menta/80 text-xs font-bold transition-all shadow-sm"
                >
                  Aceitar
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 text-center py-2 px-3 rounded-full border border-border bg-transparent hover:bg-foreground/5 text-xs font-bold text-foreground transition-all"
                >
                  Recusar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
