import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // nötig für output: "export"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina — Websites & intelligente Lösungen",
    short_name: "Lumina",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#171717",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
