"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, User, LogOut, ShieldAlert } from "lucide-react";
import { useApp, Role } from "@/lib/context/AppContext";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const { user, login, logout, setIsSearchOpen } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const mainLinks = [
    { name: "Início", path: "/" },
    { name: "Saúde Feminina", path: "/saude-feminina" },
    { name: "Mitos e Verdades", path: "/mitos-e-verdades" },
    { name: "Quiz", path: "/quiz" },
    { name: "Biblioteca", path: "/biblioteca" },
  ];

  const projectLinks = [
    { name: "Sobre o Projeto", path: "/sobre" },
    { name: "Objetivos", path: "/objetivos" },
    { name: "Pesquisa Científica", path: "/pesquisa" },
    { name: "Linha do Tempo", path: "/linha-do-tempo" },
    { name: "Estatísticas", path: "/estatisticas" },
    { name: "Perguntas Frequentes", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contato" },
  ];

  const handleMockLogin = (role: Role) => {
    if (role === "STUDENT") {
      login("Mariana Silva", "mariana@escola.com", "STUDENT", {
        age: 15,
        grade: "9º Ano",
        school: "Colégio Estadual Rui Barbosa",
        city: "São Paulo",
      });
    } else {
      login("Profª Cláudia Rocha", "claudia.rocha@educacao.com", "TEACHER", {
        school: "Colégio Estadual Rui Barbosa",
        city: "São Paulo",
      });
    }
    setIsUserDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full glassmorphism border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rosa-claro to-lilas flex items-center justify-center font-bold text-[#2D2327] text-sm shadow-sm group-hover:rotate-12 transition-transform duration-300">
            S
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight group-hover:text-lilas transition-colors">
            Silêncios <span className="text-lilas">da Saúde</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-lilas/20 text-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Project Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsProjectDropdownOpen(!isProjectDropdownOpen);
                setIsUserDropdownOpen(false);
              }}
              onMouseEnter={() => setIsProjectDropdownOpen(true)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                projectLinks.some((l) => pathname === l.path)
                  ? "bg-lilas/20 text-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <span>Mais</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProjectDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isProjectDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-card border border-border shadow-xl py-2 z-50"
                onMouseLeave={() => setIsProjectDropdownOpen(false)}
              >
                {projectLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsProjectDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm font-semibold transition-colors ${
                      pathname === link.path
                        ? "bg-lilas/10 text-foreground font-bold"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Global actions */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full border border-border bg-cinza-fundo/50 dark:bg-dark-bg/20 text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all text-xs font-semibold cursor-pointer"
            aria-label="Pesquisar no site"
          >
            <Search className="w-4 h-4" />
            <span>Buscar...</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Auth Simulation Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsUserDropdownOpen(!isUserDropdownOpen);
                setIsProjectDropdownOpen(false);
              }}
              className={`flex items-center space-x-2 p-2.5 rounded-full border border-border transition-all ${
                user
                  ? "bg-verde-menta/10 border-verde-menta/30 text-foreground"
                  : "bg-white/20 dark:bg-card/40 hover:bg-white/40 dark:hover:bg-card/80 text-foreground"
              }`}
              aria-label="Menu de autenticação simulada"
            >
              <User className="w-5 h-5" />
              {user && (
                <span className="text-xs font-bold mr-1 max-w-[80px] truncate">
                  {user.role === "STUDENT" ? "Aluno" : "Profª"}
                </span>
              )}
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-card border border-border shadow-xl p-3 z-50">
                {user ? (
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-foreground/40 uppercase">Sessão Ativa</p>
                      <h4 className="text-sm font-bold text-foreground truncate mt-0.5">{user.name}</h4>
                      <p className="text-xs text-foreground/60 truncate">{user.email}</p>
                      <span className="inline-flex items-center px-2 py-0.5 mt-1.5 rounded-full text-3xs font-bold bg-verde-menta/20 text-[#2D2327] dark:text-verde-menta">
                        {user.role === "TEACHER" ? "Professor" : "Aluno"}
                      </span>
                    </div>

                    <hr className="border-border" />

                    <div className="space-y-1">
                      <Link
                        href={user.role === "TEACHER" ? "/professor" : "/aluno"}
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="block w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-foreground/5 text-foreground transition-colors"
                      >
                        Painel do {user.role === "TEACHER" ? "Professor" : "Aluno"}
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserDropdownOpen(false);
                        }}
                        className="flex items-center space-x-2 w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-500/10 text-red-500 transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sair da Simulação</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Simular Acesso</h4>
                      <p className="text-xs text-foreground/60 mt-0.5">
                        Entre em áreas restritas com perfis pré-configurados.
                      </p>
                    </div>
                    <button
                      onClick={() => handleMockLogin("STUDENT")}
                      className="w-full text-center px-4 py-2 rounded-lg bg-rosa-claro text-[#2D2327] hover:bg-rosa-claro/80 text-xs font-bold transition-all"
                    >
                      Simular como Aluno
                    </button>
                    <button
                      onClick={() => handleMockLogin("TEACHER")}
                      className="w-full text-center px-4 py-2 rounded-lg bg-lilas text-[#2D2327] hover:bg-lilas/80 text-xs font-bold transition-all"
                    >
                      Simular como Professor
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full hover:bg-foreground/5 text-foreground"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-foreground/5 text-foreground"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-white dark:bg-card px-4 pt-2 pb-6 space-y-4 shadow-inner"
          >
            <div className="space-y-1">
              <p className="text-3xs font-bold text-foreground/40 px-3 uppercase tracking-wider">Principais</p>
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold ${
                    isActive(link.path)
                      ? "bg-lilas/20 text-foreground"
                      : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <p className="text-3xs font-bold text-foreground/40 px-3 uppercase tracking-wider">Pesquisa & Projeto</p>
              {projectLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold ${
                    pathname === link.path
                      ? "bg-lilas/20 text-foreground"
                      : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <hr className="border-border" />

            {/* Auth Simulation in Mobile */}
            <div className="px-3">
              {user ? (
                <div className="p-3 bg-cinza-fundo dark:bg-dark-bg/40 rounded-xl space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-lilas" />
                    <span className="text-xs font-bold text-foreground truncate">{user.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={user.role === "TEACHER" ? "/professor" : "/aluno"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 text-center py-1.5 rounded-lg bg-lilas/20 hover:bg-lilas/30 text-[#2D2327] dark:text-[#F0E6EF] text-xs font-bold transition-all"
                    >
                      Painel
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold hover:bg-red-500/20 transition-all"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-3xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Simular Perfil</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleMockLogin("STUDENT");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-center py-2 rounded-lg bg-rosa-claro text-[#2D2327] hover:bg-rosa-claro/80 text-xs font-bold transition-all"
                    >
                      Aluno
                    </button>
                    <button
                      onClick={() => {
                        handleMockLogin("TEACHER");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-center py-2 rounded-lg bg-lilas text-[#2D2327] hover:bg-lilas/80 text-xs font-bold transition-all"
                    >
                      Professor
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
