import React from "react";
import postsData from "@/data/blog-posts.json";
import BlogPostClient from "./BlogPostClient";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = postsData.find((p) => p.slug === slug);
  const recentPosts = postsData.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
        <p className="mt-2 text-foreground/60">O post solicitado não existe ou foi removido.</p>
        <Link href="/blog" className="inline-block mt-4 text-lilas font-bold">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return <BlogPostClient post={post} recentPosts={recentPosts} />;
}
