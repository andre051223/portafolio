"use client";

import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { type Recommendation } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { QuoteIcon } from "./icons";
import { staggerContainer, staggerItem } from "@/lib/animations";

function RecommendationCard({
  rec,
  fullWidth,
}: {
  rec: Recommendation;
  fullWidth?: boolean;
}) {
  return (
    <motion.figure
      variants={staggerItem}
      className={`flex flex-col rounded-2xl border border-gray-medium bg-bg-secondary p-6 transition-colors duration-300 hover:border-accent ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <QuoteIcon className="mb-4 h-7 w-7 shrink-0 text-accent/70" />

      <div className="flex-1 divide-y divide-accent">
        {(Array.isArray(rec.quote) ? rec.quote : [rec.quote]).map((quote, i) => (
          <blockquote
            key={i}
            className="space-y-4 py-5 text-sm leading-relaxed text-gray-text first:pt-0 last:pb-0"
          >
            {quote.split("\n\n").map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
          </blockquote>
        ))}
      </div>

      <figcaption className="mt-6 border-t border-gray-medium pt-4">
        <p className="font-semibold text-text-white">{rec.author}</p>
        <p className="text-sm text-accent">{rec.role}</p>
      </figcaption>
    </motion.figure>
  );
}

export default function Recommendations() {
  const { t } = useLanguage();

  return (
    <Section id="recomendaciones">
      <SectionTitle>{t.recommendations.title}</SectionTitle>

      <div className="space-y-16">
        {t.recommendations.groups.map((group) => (
          <motion.div key={group.title} variants={staggerContainer(0.1)}>
            {/* Título de la subcategoría */}
            <motion.h3
              variants={staggerItem}
              className="mb-8 font-mono text-sm uppercase tracking-wider text-accent"
            >
              {group.title}
            </motion.h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {group.items.map((rec, i) => (
                <RecommendationCard
                  key={`${rec.author}-${i}`}
                  rec={rec}
                  // Si queda una tarjeta sola en la última fila, ocupa el ancho completo
                  fullWidth={
                    group.items.length % 2 === 1 && i === group.items.length - 1
                  }
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
