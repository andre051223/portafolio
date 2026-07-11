"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Envoltorio de sección con animación fade-in + slide-up al entrar al viewport.
 * Usa staggerContainer para que los hijos con la variante `staggerItem`/`fadeInUp`
 * aparezcan en cascada. Respeta prefers-reduced-motion via <MotionConfig>.
 */
export default function Section({ id, children, className = "" }: SectionProps) {
  const { lang } = useLanguage();

  return (
    <motion.section
      // Remonta la sección al cambiar de idioma: el contenido traducido cambia
      // las keys de los hijos animados y, sin esto, quedarían en estado "hidden"
      // porque whileInView (once: true) ya se consumió.
      key={lang}
      id={id}
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mx-auto w-full max-w-6xl px-6 py-10 md:py-14 ${className}`}
    >
      {children}
    </motion.section>
  );
}

/** Título de sección con línea decorativa roja. */
export function SectionTitle({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{children}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
      {subtitle && <p className="mt-4 max-w-2xl text-gray-text">{subtitle}</p>}
    </motion.div>
  );
}
