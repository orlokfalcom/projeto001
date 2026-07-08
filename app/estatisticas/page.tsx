"use client";

import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { Award, Percent, Users, GraduationCap, RefreshCw, BarChart2, Filter } from "lucide-react";
import { motion } from "framer-motion";

// MOCK DATA INDEXED BY FILTERS
const MOCK_DATA = {
  summary: {
    totalParticipants: 248,
    averageScore: 7.4,
    certsIssued: 182,
    completionRate: 91.5,
  },
  ageGroups: [
    { name: "10-12 anos", value: 58, color: "#CDB4DB" },
    { name: "13-15 anos", value: 124, color: "#FADADD" },
    { name: "16-18 anos", value: 66, color: "#B8D4E3" },
  ],
  scoresByTheme: [
    { name: "Ciclo Menstrual", acertos: 78, cor: "#CDB4DB" },
    { name: "Puberdade", acertos: 82, cor: "#FADADD" },
    { name: "Vacina HPV", acertos: 54, cor: "#98D8C8" },
    { name: "Contraceptivos", acertos: 62, cor: "#B8D4E3" },
    { name: "Prevenção ISTs", acertos: 68, cor: "#E8AEB7" },
  ],
  timeline: [
    { name: "Semana 1", participacoes: 24 },
    { name: "Semana 2", participacoes: 48 },
    { name: "Semana 3", participacoes: 72 },
    { name: "Semana 4", participacoes: 104 },
  ],
};

export default function Estatisticas() {
  const [mounted, setMounted] = useState(false);
  const [ageFilter, setAgeFilter] = useState("all");
  const [schoolFilter, setSchoolFilter] = useState("all");
  const [summaryData, setSummaryData] = useState(MOCK_DATA.summary);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simulate filter calculations
  const handleFilterChange = (filterType: string, val: string) => {
    if (filterType === "age") {
      setAgeFilter(val);
    } else {
      setSchoolFilter(val);
    }

    // Slightly modify KPIs based on filters to simulate calculation
    let modifier = 1.0;
    if (val === "10-12") modifier = 0.85;
    if (val === "16-18") modifier = 1.12;

    setSummaryData({
      totalParticipants: Math.round(MOCK_DATA.summary.totalParticipants * (val === "all" ? 1.0 : 0.4)),
      averageScore: Math.min(10, parseFloat((MOCK_DATA.summary.averageScore * modifier).toFixed(1))),
      certsIssued: Math.round(MOCK_DATA.summary.certsIssued * (val === "all" ? 1.0 : 0.38)),
      completionRate: Math.min(100, parseFloat((MOCK_DATA.summary.completionRate * (val === "all" ? 1.0 : 0.98)).toFixed(1))),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-display font-bold text-foreground">Painel de Estatísticas</h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-semibold">
          Acompanhe os resultados analíticos obtidos através das interações e questionários da nossa pesquisa nas escolas parceiras.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="w-full rounded-2xl bg-white dark:bg-card border border-border p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-3xs">
        <div className="flex items-center gap-2 text-foreground/80">
          <Filter className="w-5 h-5 text-lilas" />
          <h3 className="text-sm font-bold">Filtros de Pesquisa:</h3>
        </div>

        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          {/* Age filter */}
          <div className="flex flex-col space-y-1 flex-1 sm:flex-initial">
            <label htmlFor="age-select" className="text-4xs uppercase tracking-wider font-bold text-foreground/50">Faixa Etária</label>
            <select
              id="age-select"
              value={ageFilter}
              onChange={(e) => handleFilterChange("age", e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-cinza-fundo dark:bg-dark-bg/40 border border-border text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-lilas cursor-pointer"
            >
              <option value="all">Todas as faixas</option>
              <option value="10-12">10 a 12 anos</option>
              <option value="13-15">13 a 15 anos</option>
              <option value="16-18">16 a 18 anos</option>
            </select>
          </div>

          {/* School level filter */}
          <div className="flex flex-col space-y-1 flex-1 sm:flex-initial">
            <label htmlFor="school-select" className="text-4xs uppercase tracking-wider font-bold text-foreground/50">Série / Segmento</label>
            <select
              id="school-select"
              value={schoolFilter}
              onChange={(e) => handleFilterChange("school", e.target.value)}
              className="px-3.5 py-2.5 rounded-xl bg-cinza-fundo dark:bg-dark-bg/40 border border-border text-xs font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-lilas cursor-pointer"
            >
              <option value="all">Todos os segmentos</option>
              <option value="fundamental">Ensino Fundamental II</option>
              <option value="medio">Ensino Médio</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* KPI 1: Participants */}
        <div className="bg-white dark:bg-card border border-border rounded-2xl p-5 flex items-start space-x-4 shadow-3xs">
          <div className="p-3 bg-lilas/20 text-[#2D2327] dark:text-lilas rounded-xl shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <span className="text-4xs uppercase tracking-wider font-bold text-foreground/45">Total Participações</span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-foreground">{summaryData.totalParticipants}</h4>
          </div>
        </div>

        {/* KPI 2: Average Score */}
        <div className="bg-white dark:bg-card border border-border rounded-2xl p-5 flex items-start space-x-4 shadow-3xs">
          <div className="p-3 bg-rosa-claro/30 text-[#2D2327] rounded-xl shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <span className="text-4xs uppercase tracking-wider font-bold text-foreground/45">Média de Acertos</span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-foreground">{summaryData.averageScore} / 10</h4>
          </div>
        </div>

        {/* KPI 3: Certificates */}
        <div className="bg-white dark:bg-card border border-border rounded-2xl p-5 flex items-start space-x-4 shadow-3xs">
          <div className="p-3 bg-verde-menta/25 text-[#2D2327] dark:text-verde-menta rounded-xl shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <span className="text-4xs uppercase tracking-wider font-bold text-foreground/45">Certificados Gerados</span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-foreground">{summaryData.certsIssued}</h4>
          </div>
        </div>

        {/* KPI 4: Completion Rate */}
        <div className="bg-white dark:bg-card border border-border rounded-2xl p-5 flex items-start space-x-4 shadow-3xs">
          <div className="p-3 bg-azul-cientifico/30 text-[#2D2327] rounded-xl shrink-0">
            <Percent className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <span className="text-4xs uppercase tracking-wider font-bold text-foreground/45">Taxa Conclusão</span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-foreground">{summaryData.completionRate}%</h4>
          </div>
        </div>

      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chart Left (Col 8): Bar Chart (Scores by Theme) */}
        <div className="lg:col-span-8 bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-3xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-4xs font-bold text-lilas uppercase tracking-widest">Estatísticas</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground mt-0.5">Média de Acertos por Tema (%)</h3>
            </div>
            <BarChart2 className="w-5 h-5 text-foreground/30" />
          </div>

          <div className="h-72 w-full">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={MOCK_DATA.scoresByTheme}
                  margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "currentColor", fontSize: 9 }}
                    axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "currentColor", fontSize: 10 }}
                    axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid rgba(128,128,128,0.15)",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="acertos" radius={[6, 6, 0, 0]}>
                    {MOCK_DATA.scoresByTheme.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.cor} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-foreground/5 rounded-2xl animate-pulse" />
            )}
          </div>
        </div>

        {/* Chart Right (Col 4): Pie Chart (Age Groups) */}
        <div className="lg:col-span-4 bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-3xs space-y-6 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-4xs font-bold text-lilas uppercase tracking-widest">Amostragem</span>
            <h3 className="text-sm sm:text-base font-bold text-foreground mt-0.5">Participação por Idade</h3>
          </div>

          <div className="h-48 w-full flex items-center justify-center">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={MOCK_DATA.ageGroups}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {MOCK_DATA.ageGroups.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-40 h-40 bg-foreground/5 rounded-full animate-pulse" />
            )}
          </div>

          {/* Legend indicator */}
          <div className="space-y-2 pt-2">
            {MOCK_DATA.ageGroups.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-foreground/75">{item.name}</span>
                </div>
                <span className="text-foreground font-bold">{item.value} jovens</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Timeline Line Chart Section */}
      <div className="bg-white dark:bg-card border border-border rounded-3xl p-6 shadow-3xs space-y-6">
        <div>
          <span className="text-4xs font-bold text-lilas uppercase tracking-widest">Evolução</span>
          <h3 className="text-sm sm:text-base font-bold text-foreground mt-0.5">Participações ao Longo do Tempo</h3>
        </div>

        <div className="h-64 w-full">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={MOCK_DATA.timeline}
                margin={{ top: 10, right: 20, left: -20, bottom: 5 }}
              >
                <XAxis
                  dataKey="name"
                  tick={{ fill: "currentColor", fontSize: 10 }}
                  axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "currentColor", fontSize: 10 }}
                  axisLine={{ stroke: "rgba(128,128,128,0.2)" }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid rgba(128,128,128,0.15)",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="participacoes"
                  stroke="#CDB4DB"
                  strokeWidth={3}
                  activeDot={{ r: 6 }}
                  dot={{ stroke: "#CDB4DB", strokeWidth: 2, r: 4, fill: "#ffffff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-foreground/5 rounded-2xl animate-pulse" />
          )}
        </div>
      </div>
      
    </div>
  );
}
