import type { Metadata } from "next";
import localFont from "next/font/local";
import { meta } from "../content/home";
import "./globals.css";

const display = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina.calvinpfrender.dev"),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://lumina.calvinpfrender.dev",
    siteName: "Lumina",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

const themeScript = `try{if(localStorage.getItem("lumina-theme")==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
