import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Silêncios da Saúde | Saúde Feminina",
    short_name: "Silêncios Saúde",
    description: "Portal educativo e interativo sobre saúde feminina, puberdade e prevenção para adolescentes.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F7F8",
    theme_color: "#CDB4DB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
