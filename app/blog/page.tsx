"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Calendar, User, Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import postsData from "@/data/blog-posts.json";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["Todos", "Ciclo Menstrual", "Prevenção", "Saúde Mental"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = postsData.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const cleanQuery = searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleanTitle = post.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleanExcerpt = post.excerpt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const matchesSearch = cleanTitle.includes(cleanQuery) || cleanExcerpt.includes(cleanQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Blog Educativo</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Leitura fácil, didática e cheia de carinho sobre o universo da saúde feminina, escrita por profissionais.
        </p>
      </div>

      {/* Main Grid: Left Posts (8 cols) & Right Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Posts Grid */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar artigos por título..."
              className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-3xs"
            />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -4 }}
                  className="flex flex-col bg-white dark:bg-card border border-border rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group justify-between"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-3xs font-extrabold uppercase text-lilas tracking-wider">
                      <span>{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt.split(",")[0]}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-foreground line-clamp-2 group-hover:text-lilas transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-border/20 flex items-center justify-between">
                    <span className="text-3xs font-semibold text-foreground/50 truncate max-w-[125px] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> {post.author.split(",")[0]}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-lilas/10 dark:bg-lilas/20 text-[#2D2327] dark:text-[#F0E6EF] hover:bg-lilas hover:text-[#2D2327] text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Ler Mais</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-border rounded-3xl">
              <BookOpen className="w-12 h-12 text-foreground/20 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-foreground">Nenhum artigo encontrado</h3>
              <p className="text-xs text-foreground/60">Tente buscar por termos diferentes.</p>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Categories card */}
          <div className="rounded-3xl border border-border bg-white dark:bg-card p-6 space-y-4 shadow-3xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/50">Categorias</h3>
            <div className="space-y-1">
              {categories.map((cat) => {
                const count = cat === "Todos"
                  ? postsData.length
                  : postsData.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-lilas/20 text-foreground"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="px-2 py-0.5 rounded-full bg-foreground/5 dark:bg-white/5 text-4xs">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social info card */}
          <div className="rounded-3xl bg-rosa-claro/10 border border-border p-6 text-left space-y-3">
            <h4 className="text-xs font-bold text-lilas uppercase tracking-widest">Temas do Portal</h4>
            <h3 className="text-sm font-bold text-foreground">Conheça nosso conteúdo prático</h3>
            <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
              Além de artigos, oferecemos guias interativos e jogos dinâmicos sobre saúde na adolescência.
            </p>
            <div className="pt-1">
              <Link
                href="/saude-feminina"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-3xs"
              >
                <span>Acessar Temas</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
