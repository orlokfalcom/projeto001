"use client";

import React, { useState, useEffect } from "react";
import { Search, FileText, Video, BookOpen, Download, X, Eye, ExternalLink, Filter, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LibraryItem {
  id: string;
  title: string;
  description: string;
  category: "artigos" | "cartilhas" | "guias" | "videos";
  format: string;
  sizeOrDuration: string;
  author: string;
  year: number;
  content: string; // Text content for mock reader
  mediaUrl?: string;
}

const LIBRARY_DATABASE: LibraryItem[] = [
  {
    id: "item-1",
    title: "Puberdade e Ciclo Menstrual: Manual Prático de Orientação",
    description: "Cartilha simplificada elaborada para adolescentes com ilustrações sobre as fases do ciclo e higiene menstrual.",
    category: "cartilhas",
    format: "PDF",
    sizeOrDuration: "2.4 MB",
    author: "Grupo de Pesquisa Silêncios da Saúde",
    year: 2026,
    content: "Página 1 de 3: Bem-vinda ao seu guia!\nA puberdade traz transformações fantásticas. Seu corpo começa a produzir novos hormônios que desenvolvem os caracteres sexuais, incluindo o broto mamário e pelos. O ciclo menstrual é um termômetro da sua saúde global. Acompanhe seu fluxo em calendários e aplicativos para se autoconhecer!",
  },
  {
    id: "item-2",
    title: "A Importância da Vacina Quadrivalente do HPV na Adolescência",
    description: "Artigo científico sobre a eficácia da vacinação contra o HPV em reduzir lesões oncogênicas no colo do útero.",
    category: "artigos",
    format: "PDF",
    sizeOrDuration: "1.1 MB",
    author: "Dr. Marcos Santos, Ginecologista",
    year: 2024,
    content: "Resumo do Artigo:\nA infecção pelo HPV é a principal causa do câncer cervical. A vacina quadrivalente previne infecções contra os tipos 6, 11, 16 e 18. Estudos mostram que a imunização coletiva em adolescentes de 9 a 14 anos reduziu em até 90% a detecção do vírus. A dose única, adotada recentemente pelo SUS, garante adesão e proteção ideal.",
  },
  {
    id: "item-3",
    title: "Como Lidar com as Cólicas Menstruais: Guia de Alívio",
    description: "Infográfico e guia com alongamentos, sugestões de nutrição e compressas térmicas para aliviar a dor uterina.",
    category: "guias",
    format: "PDF",
    sizeOrDuration: "920 KB",
    author: "Enfª Juliana Costa",
    year: 2025,
    content: "Guia Rápido:\n1. Calor local: A aplicação de compressa quente no baixo ventre relaxa a musculatura do útero.\n2. Chás: Camomila e gengibre agem como anti-inflamatórios naturais.\n3. Alongamentos: Movimentos como a posição da criança e gato ajudam a alongar a lombar e reduzir a pressão pélvica.",
  },
  {
    id: "item-4",
    title: "Vídeo Educativo: O Que Acontece no Meu Corpo na Puberdade?",
    description: "Animação didática em formato de vídeo explicando a atuação dos hormônios sexuais nos órgãos femininos.",
    category: "videos",
    format: "MP4 Video",
    sizeOrDuration: "4 min 12s",
    author: "Canal Saúde e Vida",
    year: 2025,
    content: "Transcrição do Vídeo:\n[Animação mostra o cérebro ativando os ovários]\n'Olá! Hoje vamos falar sobre os hormônios. Sob comando do cérebro, seus ovários acordam e liberam estrogênio. Ele viaja pelo sangue estimulando o crescimento das mamas e preparando o útero. Esse ciclo se repete todo mês até a menopausa. Conhecer isso é ter poder!'",
  },
  {
    id: "item-5",
    title: "Diretrizes de Saúde Reprodutiva para Jovens",
    description: "Documento oficial contendo recomendações e direitos sexuais e reprodutivos de jovens e adolescentes.",
    category: "artigos",
    format: "PDF",
    sizeOrDuration: "3.5 MB",
    author: "Organização Mundial da Saúde (OMS)",
    year: 2023,
    content: "Destaque do Documento:\nTodas as adolescentes têm o direito à informação correta e a serviços de saúde confidenciais e acolhedores. A saúde reprodutiva envolve não apenas a ausência de doenças, mas o bem-estar físico, mental e social completo nas decisões reprodutivas.",
  },
  {
    id: "item-6",
    title: "Alimentação Saudável e TPM: O Papel dos Nutrientes",
    description: "Artigo explicando como alimentos ricos em magnésio, potássio e ômega-3 atuam na diminuição dos sintomas pré-menstruais.",
    category: "artigos",
    format: "PDF",
    sizeOrDuration: "1.8 MB",
    author: "Nutricionista Aline Mendes",
    year: 2024,
    content: "Análise Nutricional:\nO consumo de açúcares refinados na TPM eleva rapidamente a insulina e desregula os hormônios, piorando a irritabilidade. A suplementação alimentar ou consumo natural de magnésio (nozes, banana, aveia) estabiliza o humor e relaxa a musculatura, reduzindo espasmos dolorosos do útero.",
  },
];

export default function Biblioteca() {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Load and Filter data
  useEffect(() => {
    const filtered = LIBRARY_DATABASE.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      
      const cleanSearch = debouncedSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cleanTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cleanDesc = item.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const cleanAuthor = item.author.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      const matchesSearch =
        cleanTitle.includes(cleanSearch) ||
        cleanDesc.includes(cleanSearch) ||
        cleanAuthor.includes(cleanSearch);

      return matchesCategory && matchesSearch;
    });
    setItems(filtered);
  }, [debouncedSearch, activeCategory]);

  const categories = [
    { value: "all", label: "Tudo" },
    { value: "cartilhas", label: "Cartilhas" },
    { value: "artigos", label: "Artigos" },
    { value: "guias", label: "Guias" },
    { value: "videos", label: "Vídeos" },
  ];

  const getIcon = (cat: string) => {
    switch (cat) {
      case "videos":
        return <Video className="w-5 h-5 text-azul-cientifico" />;
      case "cartilhas":
        return <BookOpen className="w-5 h-5 text-rosa-claro" />;
      case "guias":
        return <FileText className="w-5 h-5 text-verde-menta" />;
      default:
        return <FileText className="w-5 h-5 text-lilas" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-left">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Biblioteca Científica</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Explore e faça o download de materiais educativos, cartilhas de orientação e artigos com validação científica.
        </p>
      </div>

      {/* Control Bar: Search + Category filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-border/60 pb-6">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground/45" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar por título, autor ou assunto..."
            className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground"
            aria-label="Pesquisar na biblioteca"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold text-foreground/50 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-lilas text-[#2D2327]"
                  : "bg-cinza-fundo dark:bg-dark-bg/30 border border-border/60 hover:bg-foreground/5 text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Items */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              className="flex flex-col h-full bg-white dark:bg-card border border-border rounded-2xl p-5 shadow-3xs justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-foreground/5 text-3xs font-extrabold uppercase tracking-wide text-foreground/60">
                    {item.format} • {item.sizeOrDuration}
                  </span>
                  <div className="p-2 rounded-xl bg-foreground/5 dark:bg-white/5">
                    {getIcon(item.category)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-foreground line-clamp-2 group-hover:text-lilas transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/30 flex items-center justify-between">
                <span className="text-3xs font-bold text-foreground/50 truncate max-w-[120px]">
                  {item.author} ({item.year})
                </span>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="p-2 rounded-lg border border-border hover:bg-foreground/5 text-foreground transition-all cursor-pointer"
                    aria-label={`Visualizar ${item.title}`}
                    title="Visualizar documento"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Download do arquivo "${item.title}" iniciado!`);
                    }}
                    className="p-2 rounded-lg bg-lilas text-[#2D2327] hover:bg-lilas/95 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                    aria-label={`Baixar ${item.title}`}
                    title="Baixar arquivo"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-border rounded-3xl">
          <HelpCircle className="w-12 h-12 text-foreground/20 mx-auto mb-3" />
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">Nenhum documento encontrado</h3>
          <p className="text-xs text-foreground/60 max-w-xs mx-auto">
            Tente buscar com outras palavras-chave ou limpe os filtros aplicados.
          </p>
        </div>
      )}

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-[#2D2327]/40 dark:bg-[#1A1A2E]/70 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-card border border-border shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-border flex items-start justify-between bg-cinza-fundo/45 dark:bg-dark-bg/10">
                <div className="space-y-1 text-left">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-lilas/25 text-3xs font-extrabold uppercase text-[#2D2327] dark:text-[#F0E6EF]">
                    {selectedItem.format} • {selectedItem.category}
                  </span>
                  <h2 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                    {selectedItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition-all shrink-0 ml-4"
                  aria-label="Fechar visualização"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Document Simulator / Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar text-left bg-cinza-fundo/20">
                <div className="bg-white dark:bg-dark-bg/60 border border-border rounded-xl p-6 shadow-inner font-sans min-h-[180px] flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap font-medium">
                    {selectedItem.content}
                  </p>
                  
                  {/* Decorative page index for mockup */}
                  <span className="block text-right text-3xs text-foreground/45 mt-6 font-bold uppercase tracking-wider">
                    [ Fim da visualização rápida ]
                  </span>
                </div>

                <div className="text-3xs text-foreground/60 leading-relaxed pt-2">
                  <p>Autor(es): <span className="font-bold">{selectedItem.author}</span></p>
                  <p>Ano de publicação: <span className="font-bold">{selectedItem.year}</span></p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-4 border-t border-border flex items-center justify-between bg-white dark:bg-card">
                <span className="text-xs text-foreground/50 font-bold">{selectedItem.sizeOrDuration}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4.5 py-2 rounded-full border border-border bg-transparent hover:bg-foreground/5 text-xs font-bold text-foreground transition-all cursor-pointer"
                  >
                    Fechar
                  </button>
                  <button
                    onClick={() => {
                      alert(`Download de "${selectedItem.title}" iniciado!`);
                      setSelectedItem(null);
                    }}
                    className="px-4.5 py-2 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/95 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Arquivo Completo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
