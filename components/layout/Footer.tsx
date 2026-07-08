"use client";

import React from "react";
import Link from "next/link";
import { Heart, HelpCircle, Shield, Award } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-card border-t border-border mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: About */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rosa-claro to-lilas flex items-center justify-center font-bold text-[#2D2327] text-sm">
                S
              </div>
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                Silêncios <span className="text-lilas">da Saúde</span>
              </span>
            </Link>
            <p className="text-xs text-foreground/75 leading-relaxed">
              Plataforma educativa sobre saúde feminina voltada para adolescentes. Informação científica de forma clara, acolhedora e sem tabus.
            </p>
            <div className="flex space-x-3 text-foreground/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-lilas/20 hover:text-foreground transition-all"
                aria-label="Instagram do projeto"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-lilas/20 hover:text-foreground transition-all"
                aria-label="Youtube do projeto"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Educational Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Aprender</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/saude-feminina" className="text-foreground/80 hover:text-lilas transition-colors">
                  Saúde Feminina
                </Link>
              </li>
              <li>
                <Link href="/mitos-e-verdades" className="text-foreground/80 hover:text-lilas transition-colors">
                  Mitos e Verdades
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-foreground/80 hover:text-lilas transition-colors">
                  Quiz Educativo
                </Link>
              </li>
              <li>
                <Link href="/biblioteca" className="text-foreground/80 hover:text-lilas transition-colors">
                  Biblioteca
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Research */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">O Projeto</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/sobre" className="text-foreground/80 hover:text-lilas transition-colors">
                  Sobre a Pesquisa
                </Link>
              </li>
              <li>
                <Link href="/objetivos" className="text-foreground/80 hover:text-lilas transition-colors">
                  Objetivos
                </Link>
              </li>
              <li>
                <Link href="/linha-do-tempo" className="text-foreground/80 hover:text-lilas transition-colors">
                  Linha do Tempo
                </Link>
              </li>
              <li>
                <Link href="/estatisticas" className="text-foreground/80 hover:text-lilas transition-colors">
                  Estatísticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Accessibility */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Acessibilidade & Políticas</h4>
            <div className="space-y-2.5 text-xs text-foreground/75 leading-relaxed">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-lilas shrink-0" />
                <span>WCAG 2.1 AA Conformidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-verde-menta shrink-0" />
                <span>Compatível com a LGPD</span>
              </div>
              <p>
                O portal oferece navegação simplificada, skip-to-content e contraste adequado para garantir a acessibilidade de todos.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/60">
          <p>© {currentYear} Silêncios da Saúde. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <Link href="/termos" className="hover:text-lilas transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-lilas transition-colors">Política de Privacidade</Link>
          </div>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> para transformar escolhas.
          </p>
        </div>
      </div>
    </footer>
  );
}
