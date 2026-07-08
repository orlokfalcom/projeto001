"use client";

import React from "react";
import Link from "next/link";
import { Droplet, Sparkles, Heart, Apple, Dumbbell, Moon, ShieldAlert, AlertCircle, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import topicsData from "@/data/topics.json";

function getTopicIcon(name: string) {
  switch (name) {
    case "Droplet":
      return <Droplet className="w-6 h-6" />;
    case "Sparkles":
      return <Sparkles className="w-6 h-6" />;
    case "Heart":
      return <Heart className="w-6 h-6" />;
    case "Apple":
      return <Apple className="w-6 h-6" />;
    case "Dumbbell":
      return <Dumbbell className="w-6 h-6" />;
    case "Moon":
      return <Moon className="w-6 h-6" />;
    case "ShieldAlert":
      return <ShieldAlert className="w-6 h-6" />;
    case "AlertCircle":
      return <AlertCircle className="w-6 h-6" />;
    default:
      return <FileText className="w-6 h-6" />;
  }
}

export default function SaudeFemininaMain() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Saúde Feminina</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Explore nossos 9 temas de aprendizagem científica para tirar dúvidas sobre o seu corpo e seu desenvolvimento.
        </p>
      </div>

      {/* Grid of Topics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {topicsData.map((topic) => (
          <motion.div
            key={topic.slug}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col h-full bg-white dark:bg-card border border-border rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Top color accent */}
            <div className={`h-2 bg-gradient-to-r ${topic.color.split(" ")[0]} ${topic.color.split(" ")[1]}`} />

            <div className="p-6 flex flex-col flex-1 text-left space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${topic.color.split(" ")[0]} ${topic.color.split(" ")[1]} ${topic.color.split(" ")[2]} shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {getTopicIcon(topic.icon)}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-foreground line-clamp-1 leading-snug group-hover:text-lilas transition-colors">
                  {topic.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed flex-1">
                {topic.summary}
              </p>

              <div className="pt-2 border-t border-border/30 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground/40">Guia Completo</span>
                <Link
                  href={`/saude-feminina/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-lilas/10 dark:bg-lilas/20 text-[#2D2327] dark:text-[#F0E6EF] hover:bg-lilas hover:text-[#2D2327] text-xs font-bold transition-all duration-300"
                >
                  <span>Acessar</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
}
