import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://silenciosdasaude.com";

  const paths = [
    "",
    "/sobre",
    "/objetivos",
    "/saude-feminina",
    "/mitos-e-verdades",
    "/quiz",
    "/estatisticas",
    "/biblioteca",
    "/faq",
    "/blog",
    "/contato",
    "/pesquisa",
    "/linha-do-tempo",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
