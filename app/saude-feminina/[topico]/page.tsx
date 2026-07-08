import React from "react";
import Link from "next/link";
import topicsData from "@/data/topics.json";
import TopicoPageClient from "./TopicoPageClient";

interface PageProps {
  params: Promise<{ topico: string }>;
}

export function generateStaticParams() {
  return topicsData.map((topic) => ({
    topico: topic.slug,
  }));
}

export default async function TopicoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.topico;

  const topicIndex = topicsData.findIndex((t) => t.slug === slug);
  const topic = topicsData[topicIndex];

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Tópico não encontrado</h1>
        <p className="mt-2 text-foreground/60">O tópico solicitado não existe ou foi removido.</p>
        <Link href="/saude-feminina" className="inline-block mt-4 text-lilas font-bold">
          Voltar para Saúde Feminina
        </Link>
      </div>
    );
  }

  const prevTopic = topicIndex > 0 ? topicsData[topicIndex - 1] : null;
  const nextTopic = topicIndex < topicsData.length - 1 ? topicsData[topicIndex + 1] : null;

  return (
    <TopicoPageClient
      topic={topic}
      prevTopic={prevTopic}
      nextTopic={nextTopic}
    />
  );
}
