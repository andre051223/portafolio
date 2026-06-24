"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}
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
