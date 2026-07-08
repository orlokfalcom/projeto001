"use client";

import React, { useState } from "react";
import { Award, ArrowRight, Play, Gamepad2, FileText, ChevronRight, User, GraduationCap, Video, CheckCircle2, X } from "lucide-react";
import { useApp } from "@/lib/context/AppContext";
import Link from "next/link";
import { jsPDF } from "jspdf";
import { motion, AnimatePresence } from "framer-motion";

interface VideoItem {
  title: string;
  duration: string;
  description: string;
  source: string;
}

export default function AlunoDashboard() {
  const { user, login, logout, certificates, attempts } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videoList: VideoItem[] = [
    {
      title: "O que acontece na primeira menstruação? (Menarca)",
      duration: "3:45",
      description: "Animação super didática para tirar o medo e entender o fluxo menstrual de forma biológica.",
      source: "Canal Silêncios da Saúde",
    },
    {
      title: "Como funciona a vacina do HPV no nosso organismo?",
      duration: "4:10",
      description: "Vídeo explicativo ilustrando como a vacina cria anticorpos contra o vírus de forma segura.",
      source: "Ministério da Saúde",
    },
    {
      title: "TPM e Alimentação: Dicas Rápidas de Alívio",
      duration: "2:50",
      description: "Quais alimentos ajudam a combater a cólica, retenção de líquido e oscilações de humor.",
      source: "Canal Saúde e Nutrição",
    },
  ];

  const handleSimulatedLogin = () => {
    login("Mariana Silva", "mariana@escola.com", "STUDENT", {
      age: 15,
      grade: "9º Ano",
      school: "Colégio Estadual Rui Barbosa",
      city: "São Paulo",
    });
  };

  const handleCertDownload = (certName: string, score: number, total: number, code: string, date: string) => {
    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      
      // Draw background
      doc.setFillColor(249, 247, 248);
      doc.rect(0, 0, 297, 210, "F");

      // Borders
      doc.setDrawColor(205, 180, 219);
      doc.setLineWidth(5);
      doc.rect(10, 10, 277, 190);

      doc.setDrawColor(250, 218, 221);
      doc.setLineWidth(1.5);
      doc.rect(14, 14, 269, 182);

      // Title
      doc.setTextColor(45, 35, 39);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text("Silêncios da Saúde", 148, 45, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("PORTAL EDUCATIVO DE SAÚDE FEMININA", 148, 54, { align: "center" });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(162, 136, 227);
      doc.text("CERTIFICADO DE APROVEITAMENTO", 148, 78, { align: "center" });

      doc.setTextColor(45, 35, 39);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("Certificamos que, para todos os fins de direito,", 148, 98, { align: "center" });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(certName, 148, 114, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      const text1 = "concluiu com êxito o Quiz de Conhecimentos sobre Saúde Feminina na Adolescência,";
      const text2 = `obtendo a pontuação de ${score} acertos em um total de ${total} questões (${score * 10}% de aproveitamento).`;
      doc.text(text1, 148, 128, { align: "center" });
      doc.text(text2, 148, 136, { align: "center" });

      doc.setFontSize(10);
      doc.text(`Emitido em: ${date}`, 50, 168, { align: "center" });
      doc.text(`Código de Validação: ${code}`, 247, 168, { align: "center" });

      // Seal
      doc.setDrawColor(152, 216, 200);
      doc.setFillColor(152, 216, 200);
      doc.circle(148, 165, 8, "FD");
      doc.setTextColor(45, 35, 39);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text("OK", 148, 167.5, { align: "center" });

      doc.save(`certificado_silencios_da_saude_${certName.toLowerCase().replace(/\s+/g, "_")}.pdf`);
    } catch (e) {
      console.error(e);
    }
  };

  const isStudent = user?.role === "STUDENT";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
      {!isStudent ? (
        /* LOCK SCREEN (Unauthorized) */
        <div className="max-w-md mx-auto rounded-3xl bg-white dark:bg-card border border-border p-8 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-lilas/20 flex items-center justify-center text-lilas">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-bold text-foreground">Painel Pessoal da Aluna</h1>
            <p className="text-xs text-foreground/60 font-semibold">Acompanhe seus certificados e assista a vídeos educativos.</p>
          </div>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
            Nesta área, você pode acompanhar seu histórico de tentativas do quiz, fazer o download dos certificados que conquistou e assistir a animações exclusivas sobre saúde.
          </p>

          <button
            onClick={handleSimulatedLogin}
            className="w-full py-3.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Simular Acesso de Aluna (Mariana)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* STUDENT DASHBOARD (Authorized) */
        <div className="space-y-10">
          
          {/* Greeting Banner */}
          <div className="rounded-3xl bg-gradient-to-tr from-rosa-claro/20 via-lilas/25 to-azul-cientifico/25 border border-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-3xs">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lilas/30 text-[#2D2327] dark:text-[#F0E6EF] text-3xs font-extrabold uppercase tracking-wide">
                🎓 Painel do Aluno
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Olá, {user?.name}!
              </h1>
              <p className="text-xs sm:text-sm text-foreground/75 font-semibold leading-relaxed">
                Escola: {user?.school} | Série: {user?.grade} | Idade: {user?.age} anos
              </p>
            </div>

            <button
              onClick={logout}
              className="px-5 py-2.5 rounded-full border border-red-500/20 hover:bg-red-500/10 text-red-500 text-xs font-bold transition-all w-fit cursor-pointer"
            >
              Sair da Simulação
            </button>
          </div>

          {/* Grid Layout: Left Certs/Attempts (8 cols) & Right Play/Games (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Certs & Attempts */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Certificates card */}
              <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-3xs space-y-4">
                <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Award className="w-5.5 h-5.5 text-lilas" />
                  <span>Seus Certificados Conquistados</span>
                </h2>

                {certificates.length > 0 ? (
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-4 rounded-2xl border border-border bg-cinza-fundo/45 dark:bg-dark-bg/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <span className="text-4xs uppercase tracking-wider font-extrabold text-foreground/45">Código: {cert.code}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-foreground">Quiz Saúde Feminina ({cert.score}/10 acertos)</h4>
                          <span className="block text-4xs text-foreground/50">Conquistado em {cert.date}</span>
                        </div>
                        <button
                          onClick={() => handleCertDownload(cert.name, cert.score, cert.total, cert.code, cert.date)}
                          className="px-4 py-2 rounded-xl bg-verde-menta hover:bg-verde-menta/85 text-[#2D2327] text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer w-fit"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Baixar PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center bg-cinza-fundo/30 dark:bg-dark-bg/10 rounded-2xl border border-dashed border-border/60">
                    <p className="text-xs text-foreground/55 font-semibold">
                      Você ainda não conquistou certificados. Complete o <Link href="/quiz" className="text-lilas font-bold hover:underline">Quiz</Link> com nota 6 ou mais para desbloquear!
                    </p>
                  </div>
                )}
              </div>

              {/* Attempts history */}
              <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-3xs space-y-4">
                <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5.5 h-5.5 text-lilas" />
                  <span>Histórico de Tentativas no Quiz</span>
                </h2>

                {attempts.length > 0 ? (
                  <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar pr-1">
                    {attempts.map((att, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3.5 border-b border-border/30 text-xs sm:text-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-foreground/40 font-bold font-mono">#{idx + 1}</span>
                          <span className="font-bold text-foreground">{att.score} / {att.total} Acertos</span>
                        </div>
                        <span className="text-xs text-foreground/50">{att.date}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center text-xs text-foreground/50 font-semibold bg-cinza-fundo/10 rounded-2xl">
                    Nenhuma tentativa de quiz registrada.
                  </div>
                )}
              </div>

            </div>

            {/* Right: Games Quick access */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Games card */}
              <div className="rounded-3xl border border-border bg-white dark:bg-card p-6 space-y-5 shadow-3xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1.5">
                  <Gamepad2 className="w-4.5 h-4.5 text-lilas" /> Jogos Disponíveis
                </h3>
                
                <div className="space-y-2">
                  <Link
                    href="/mitos-e-verdades"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/80 hover:bg-lilas/10 hover:border-lilas/40 text-xs sm:text-sm transition-all group font-bold"
                  >
                    <span>💡 Mitos e Verdades</span>
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/quiz"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/80 hover:bg-lilas/10 hover:border-lilas/40 text-xs sm:text-sm transition-all group font-bold"
                  >
                    <span>📝 Quiz de Certificado</span>
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Tips / Info */}
              <div className="rounded-3xl bg-rosa-claro/10 border border-border p-6 text-left space-y-2.5">
                <h4 className="text-3xs font-extrabold text-lilas uppercase tracking-widest">Dica da Luna</h4>
                <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                  A menstruação é normal e não impede você de praticar natação ou esportes. Use coletores ou absorventes internos e curta o dia!
                </p>
              </div>

            </div>

          </div>

          {/* Videos Grid */}
          <div className="space-y-6 pt-4">
            <div>
              <h2 className="text-xl font-display font-bold text-foreground">Vídeos e Animações Educativas</h2>
              <p className="text-xs text-foreground/60 mt-0.5 font-semibold">Aprenda assistindo a vídeos curtos explicados por profissionais.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoList.map((vid, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedVideo(vid)}
                  className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:scale-101 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-neutral-900 flex items-center justify-center text-white">
                    {/* Simulated video cover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-lilas/45 to-rosa-claro/45 opacity-60 mix-blend-multiply" />
                    <div className="w-12 h-12 rounded-full bg-white text-[#2D2327] shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/60 text-white rounded-md text-3xs font-mono font-bold">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <span className="inline-flex items-center gap-1 text-4xs font-bold text-lilas uppercase">
                      <Video className="w-3.5 h-3.5" /> {vid.source}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-2 leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-4xs sm:text-3xs text-foreground/75 leading-relaxed line-clamp-2">
                      {vid.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Video Simulation Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-[#2D2327]/50 dark:bg-[#1A1A2E]/70 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-card border border-border shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between text-left bg-cinza-fundo/45 dark:bg-dark-bg/10">
                <div className="space-y-0.5">
                  <span className="text-4xs font-bold uppercase text-lilas tracking-widest flex items-center gap-1">
                    <Video className="w-3.5 h-3.5" /> {selectedVideo.source}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-lg text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition-all ml-4"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video screen mockup */}
              <div className="aspect-video bg-neutral-900 relative flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50" style={{ backgroundImage: `url('/images/video-poster.jpg')` }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-lilas/40 to-rosa-claro/40 opacity-40 mix-blend-multiply" />
                
                {/* Simulated Player Controls Overlay */}
                <div className="z-10 text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white text-[#2D2327] shadow-2xl flex items-center justify-center hover:scale-105 transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <span className="text-2xs font-extrabold uppercase tracking-widest block drop-shadow-md text-white/90">
                    Reproduzir Vídeo Educativo ({selectedVideo.duration})
                  </span>
                </div>

                {/* Progress bar mock */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-800">
                  <div className="w-1/3 h-full bg-lilas" />
                </div>
              </div>

              {/* Info Description */}
              <div className="p-5 text-left space-y-2">
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-semibold">
                  {selectedVideo.description}
                </p>
                <p className="text-4xs text-foreground/45 uppercase tracking-widest font-extrabold">
                  *Vídeo simulado para fins de demonstração da interface do portal.
                </p>
              </div>

              {/* Footer */}
              <div className="px-5 py-4 border-t border-border flex justify-end bg-white dark:bg-card">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/95 text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
