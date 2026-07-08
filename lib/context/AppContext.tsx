"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Role = "STUDENT" | "TEACHER" | "ADMIN";

export interface User {
  name: string;
  email: string;
  role: Role;
  age?: number;
  grade?: string;
  school?: string;
  city?: string;
}

export interface Certificate {
  id: string;
  name: string;
  score: number;
  total: number;
  date: string;
  code: string;
}

export interface QuizAttempt {
  score: number;
  total: number;
  date: string;
}

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  user: User | null;
  login: (name: string, email: string, role: Role, details?: Partial<User>) => void;
  logout: () => void;
  certificates: Certificate[];
  addCertificate: (name: string, score: number, total: number) => Certificate;
  attempts: QuizAttempt[];
  addAttempt: (score: number, total: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<User | null>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      // Theme
      const savedTheme = localStorage.getItem("theme") as "light" | "dark";
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
      setTheme(initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // User / Auth Session Mock
      const savedUser = localStorage.getItem("auth_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      // Quiz attempts & Certificates
      const savedCerts = localStorage.getItem("certs");
      if (savedCerts) {
        setCertificates(JSON.parse(savedCerts));
      }

      const savedAttempts = localStorage.getItem("attempts");
      if (savedAttempts) {
        setAttempts(JSON.parse(savedAttempts));
      }
    } catch (e) {
      console.error("Error reading from localStorage:", e);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const login = (name: string, email: string, role: Role, details?: Partial<User>) => {
    const newUser: User = { name, email, role, ...details };
    setUser(newUser);
    localStorage.setItem("auth_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  const addCertificate = (name: string, score: number, total: number) => {
    const code = "SDS-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + new Date().getFullYear();
    const newCert: Certificate = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      score,
      total,
      date: new Date().toLocaleDateString("pt-BR"),
      code,
    };
    const updatedCerts = [...certificates, newCert];
    setCertificates(updatedCerts);
    localStorage.setItem("certs", JSON.stringify(updatedCerts));
    return newCert;
  };

  const addAttempt = (score: number, total: number) => {
    const newAttempt: QuizAttempt = {
      score,
      total,
      date: new Date().toLocaleDateString("pt-BR"),
    };
    const updatedAttempts = [...attempts, newAttempt];
    setAttempts(updatedAttempts);
    localStorage.setItem("attempts", JSON.stringify(updatedAttempts));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        login,
        logout,
        certificates,
        addCertificate,
        attempts,
        addAttempt,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
