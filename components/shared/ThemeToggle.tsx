"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useApp } from "@/lib/context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-white/20 dark:bg-card/40 border border-white/30 dark:border-border/30 hover:bg-white/40 dark:hover:bg-card/80 transition-all duration-300 text-foreground"
      aria-label={theme === "light" ? "Mudar para modo escuro" : "Mudar para modo claro"}
      title={theme === "light" ? "Modo Escuro" : "Modo Claro"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-[#2D2327] transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-[#F0E6EF] transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  );
}
