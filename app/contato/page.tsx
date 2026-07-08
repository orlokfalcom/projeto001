"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Send, MapPin, Mail, MessageCircle, Phone, CheckCircle, RefreshCw } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = zod.object({
  nome: zod.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
  idade: zod.number({ message: "Insira uma idade válida." }).min(9).max(99).optional(),
  cidade: zod.string().min(2, { message: "A cidade deve ter no mínimo 2 caracteres." }),
  mensagem: zod.string().min(10, { message: "A mensagem deve conter no mínimo 10 caracteres." }),
});

type ContactFormInputs = zod.infer<typeof contactSchema>;

export default function Contato() {
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      idade: undefined,
      cidade: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSending(true);
    // Simulate EmailJS or server API integration
    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);
      reset();
      // Reset success banner after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Fale Conosco</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Dúvidas sobre a pesquisa, sugestões ou interesse em palestras? Mande sua mensagem!
        </p>
      </div>

      {/* Grid Layout: Left Contact Form (6 cols) & Right Info/Map (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form Card */}
        <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-3xs space-y-6">
          <h2 className="text-lg font-bold text-foreground">Envie uma Mensagem</h2>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-verde-menta/15 border border-verde-menta/30 text-xs sm:text-sm text-[#2D2327] dark:text-verde-menta font-semibold rounded-2xl flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4>Mensagem enviada com sucesso!</h4>
                  <p className="font-normal text-3xs mt-0.5">Retornaremos o contato pelo seu e-mail institucional cadastrado o mais breve possível.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Nome */}
            <div>
              <label htmlFor="form-nome" className="block text-xs font-bold text-foreground/70 mb-1.5">Nome Completo</label>
              <input
                id="form-nome"
                type="text"
                {...register("nome")}
                placeholder="Ex: Clara Mendes"
                className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-2xs"
              />
              {errors.nome && <p className="text-3xs text-red-500 font-bold mt-1">{errors.nome.message}</p>}
            </div>

            {/* Idade & Cidade (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="form-idade" className="block text-xs font-bold text-foreground/70 mb-1.5">Idade</label>
                <input
                  id="form-idade"
                  type="number"
                  placeholder="Ex: 14"
                  onChange={(e) => setValue("idade", parseInt(e.target.value) || undefined)}
                  className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-2xs"
                />
                {errors.idade && <p className="text-3xs text-red-500 font-bold mt-1">{errors.idade.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="form-cidade" className="block text-xs font-bold text-foreground/70 mb-1.5">Cidade</label>
                <input
                  id="form-cidade"
                  type="text"
                  {...register("cidade")}
                  placeholder="Ex: Rio de Janeiro"
                  className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-2xs"
                />
                {errors.cidade && <p className="text-3xs text-red-500 font-bold mt-1">{errors.cidade.message}</p>}
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="form-mensagem" className="block text-xs font-bold text-foreground/70 mb-1.5">Sua Mensagem</label>
              <textarea
                id="form-mensagem"
                rows={4}
                {...register("mensagem")}
                placeholder="Como podemos te ajudar?"
                className="w-full bg-cinza-fundo dark:bg-dark-bg/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-lilas text-foreground shadow-2xs resize-none"
              />
              {errors.mensagem && <p className="text-3xs text-red-500 font-bold mt-1">{errors.mensagem.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 rounded-full bg-lilas text-[#2D2327] hover:bg-lilas/90 disabled:opacity-50 disabled:pointer-events-none text-sm font-extrabold shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSending ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact info & Map */}
        <div className="space-y-8">
          
          {/* Channels & Social Links */}
          <div className="rounded-3xl border border-border p-6 bg-white dark:bg-card space-y-5 shadow-3xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/50">Canais de Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-foreground/85">
                <div className="p-2.5 rounded-xl bg-lilas/10 dark:bg-white/5 text-lilas shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-4xs font-bold text-foreground/50 uppercase">E-mail do Projeto</span>
                  <span className="font-bold">contato@silenciosdasaude.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-foreground/85">
                <div className="p-2.5 rounded-xl bg-verde-menta/10 dark:bg-white/5 text-foreground/80 dark:text-verde-menta shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-4xs font-bold text-foreground/50 uppercase">Telefone / WhatsApp</span>
                  <span className="font-bold">+55 (11) 98765-4321</span>
                </div>
              </div>
            </div>

            <hr className="border-border/60" />

            <div className="space-y-3 text-left">
              <h4 className="text-xs font-bold text-foreground/50 uppercase">Redes Sociais</h4>
              <div className="flex space-x-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-border/80 hover:bg-lilas/10 text-xs font-bold text-foreground transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <FaInstagram className="w-4 h-4 text-rose-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-border/80 hover:bg-lilas/10 text-xs font-bold text-foreground transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <FaYoutube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-3xl border border-border bg-white dark:bg-card overflow-hidden shadow-3xs flex flex-col justify-between">
            <div className="p-4 border-b border-border/60 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lilas" />
              <span className="text-xs font-bold text-foreground">Sede de Pesquisa (São Paulo, SP)</span>
            </div>
            
            {/* Embedded mockup map iframe */}
            <div className="w-full h-56 bg-neutral-100 relative">
              <iframe
                title="Mapa de localização da sede de pesquisa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.742337777712!2d-46.662496150244795!3d-23.552822476566085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5270001%3A0x7d6f54ef48260195!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
