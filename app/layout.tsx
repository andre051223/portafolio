import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
// @ts-ignore Next.js supports global CSS side-effect imports in app/layout.tsx
import "./globals.css";

// Fuente principal (texto general)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fuente monoespaciada (tecnologías / snippets)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://diegolopez.vercel.app"; // TODO: reemplazar por el dominio final

// Metadata SEO básica
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Diego López | Desarrollador Web & IA",
  description:
    "Portafolio de Diego López, desarrollador web especializado en Next.js e integración de APIs de IA. Disponible para freelance y empleo remoto desde Bogotá, Colombia.",
  keywords: [
    "Diego López",
    "Desarrollador Web",
    "Next.js",
    "Agentes de IA",
    "API de Anthropic",
    "Bogotá",
    "Frontend",
  ],
  authors: [{ name: "Diego López" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    title: "Diego López | Desarrollador Web & IA",
    description:
      "Portafolio de Diego López, desarrollador web especializado en Next.js e integración de APIs de IA. Disponible para freelance y empleo remoto desde Bogotá, Colombia.",
    siteName: "Diego López — Portafolio",
    // TODO: añade una imagen en /public/og-image.png (1200x630) para previews en redes
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Diego López" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego López | Desarrollador Web & IA",
    description:
      "Portafolio de Diego López, desarrollador web especializado en Next.js e integración de APIs de IA.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* reducedMotion="user" hace que Framer Motion respete prefers-reduced-motion */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
