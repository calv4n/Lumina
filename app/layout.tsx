import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina — Websites & intelligente Lösungen",
  description:
    "Lumina entwickelt Websites, digitale Lösungen und KI-Automationen für Unternehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
