"use client";

import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { recommendations, type Recommendation } from "@/lib/data";
import { QuoteIcon } from "./icons";
import { staggerContainer, staggerItem } from "@/lib/animations";

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <motion.figure
      variants={staggerItem}
      className="flex flex-col rounded-2xl border border-gray-medium bg-bg-secondary p-6 transition-colors duration-300 hover:border-accent"
    >
      <QuoteIcon className="mb-4 h-7 w-7 shrink-0 text-accent/70" />

      <blockquote className="flex-1 space-y-4 text-sm leading-relaxed text-gray-text">
        {rec.quote.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </blockquote>

      <figcaption className="mt-6 border-t border-gray-medium pt-4">
        <p className="font-semibold text-text-white">{rec.author}</p>
        <p className="text-sm text-accent">{rec.role}</p>
      </figcaption>
    </motion.figure>
  );
}

export default function Recommendations() {
  return (
    <Section id="recomendaciones">
      <SectionTitle>Recomendaciones</SectionTitle>

      <motion.div
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.author} rec={rec} />
        ))}
      </motion.div>
    </Section>
  );
}
