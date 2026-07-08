"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Share2, Send, MessageSquareCode } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useApp } from "@/lib/context/AppContext";

interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  content: string;
  excerpt: string;
  image?: string;
}

interface BlogPostClientProps {
  post: Post;
  recentPosts: Post[];
}

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export default function BlogPostClient({ post, recentPosts }: BlogPostClientProps) {
  const { user } = useApp();
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    // Load some mock comments initially
    setComments([
      {
        id: "c1",
        author: "Camila Ribeiro",
        text: "Adorei a explicação! Tirou várias dúvidas de forma muito direta e sem vergonha.",
        date: "06/07/2026",
      },
      {
        id: "c2",
        author: "Profª Márcia Prado",
        text: "Excelente conteúdo científico para indicar para minhas alunas do 8º ano.",
        date: "07/07/2026",
      },
    ]);
  }, [post.slug]);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    alert(`Link compartilhado no ${platform}! \nURL: ${url}`);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const authorName = user ? user.name : "Visitante Anônimo";
    const newComment: Comment = {
      id: Math.random().toString(),
      author: authorName,
      text: commentInput.trim(),
      date: new Date().toLocaleDateString("pt-BR"),
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentInput("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      
      {/* Back to list link */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground/70 hover:text-foreground hover:translate-x-[-2px] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para o Blog</span>
        </Link>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Post Details */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Post Header */}
          <div className="space-y-4">
            <span className="inline-flex px-3 py-1 rounded-full bg-lilas/15 border border-lilas/30 text-2xs font-bold uppercase tracking-wider text-foreground">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-3xs font-semibold text-foreground/60 border-y border-border/40 py-3">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-lilas" /> Por {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-lilas" /> Publicado em {post.publishedAt}</span>
            </div>
          </div>

          {/* Post Content */}
          <article className="prose dark:prose-invert max-w-none text-sm sm:text-base text-foreground/80 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((para, idx) => {
              if (para.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-base sm:text-lg font-bold text-foreground pt-4 border-b border-border/20 pb-1">
                    {para.replace("### ", "")}
                  </h3>
                );
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={idx} className="space-y-2.5 pl-1">
                    {para.split("\n").map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-lilas shrink-0 mt-2 mr-3" />
                        <span>{li.replace("- ", "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="whitespace-pre-line">
                  {para}
                </p>
              );
            })}
          </article>

          {/* Social Share Buttons */}
          <div className="flex items-center space-x-4 border-y border-border/40 py-5">
            <span className="text-xs font-bold text-foreground/50 flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-lilas" /> Compartilhar:
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleShare("WhatsApp")}
                className="px-3.5 py-1.5 rounded-full border border-border hover:bg-verde-menta/15 text-xs font-bold text-foreground transition-all cursor-pointer"
                title="Compartilhar no WhatsApp"
              >
                🟢 WhatsApp
              </button>
              <button
                onClick={() => handleShare("Twitter")}
                className="p-2 rounded-full border border-border hover:bg-foreground/5 text-foreground transition-all cursor-pointer"
                title="Compartilhar no Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare("Facebook")}
                className="p-2 rounded-full border border-border hover:bg-foreground/5 text-foreground transition-all cursor-pointer"
                title="Compartilhar no Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare("LinkedIn")}
                className="p-2 rounded-full border border-border hover:bg-foreground/5 text-foreground transition-all cursor-pointer"
                title="Compartilhar no LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
              💬 Comentários ({comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-3.5 bg-cinza-fundo dark:bg-dark-bg/20 p-5 border border-border rounded-3xl text-left">
              <span className="text-4xs uppercase tracking-wider font-extrabold text-foreground/45">
                {user ? `Escrever como: ${user.name}` : "Comentar como Visitante"}
              </span>
              <div className="flex items-center space-x-2">
                <input
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Escreva seu comentário..."
                  className="flex-1 bg-white dark:bg-card border border-border rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!commentInput.trim()}
                  className="p-3 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-xs"
                  aria-label="Enviar comentário"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="p-5 bg-white dark:bg-card border border-border rounded-2xl flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rosa-claro to-lilas flex items-center justify-center font-bold text-xs text-[#2D2327]">
                    {c.author.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0 text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-foreground">{c.author}</h4>
                      <span className="text-4xs font-semibold text-foreground/40">{c.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-8 text-left">
          
          {/* Recent posts list */}
          <div className="rounded-3xl border border-border bg-white dark:bg-card p-6 space-y-5 shadow-3xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Outros Artigos</h3>
            <div className="space-y-4">
              {recentPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="block space-y-1.5 group"
                >
                  <span className="text-4xs font-bold text-lilas uppercase tracking-wide">
                    {rp.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-lilas transition-colors line-clamp-2 leading-snug">
                    {rp.title}
                  </h4>
                  <p className="text-4xs text-foreground/55">{rp.publishedAt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Luna chatbot promotion */}
          <div className="rounded-3xl bg-gradient-to-tr from-rosa-claro/20 via-lilas/25 to-azul-cientifico/25 border border-border p-6 space-y-4">
            <div className="flex items-center gap-2 text-lilas">
              <MessageSquareCode className="w-5 h-5" />
              <span className="text-3xs font-extrabold uppercase tracking-widest">IA de Apoio</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">Ainda tem dúvidas? Fale com a Luna!</h3>
            <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
              Converse de forma 100% anônima e tire dúvidas sobre puberdade, ISTs ou menstruação em nosso chat.
            </p>
            <div className="pt-1">
              <button
                onClick={() => {
                  const lBtn = document.querySelector('button[aria-label="Abrir assistente Luna"]') as HTMLButtonElement;
                  lBtn?.click();
                }}
                className="px-4 py-2 rounded-xl bg-[#2D2327] dark:bg-foreground dark:text-[#2D2327] text-white text-xs font-bold shadow-3xs cursor-pointer"
              >
                Chamar no Chat
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
