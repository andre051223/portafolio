"use client";

import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { experience } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionTitle>Experiencia</SectionTitle>

      <motion.div variants={staggerContainer(0.15)} className="relative">
        {/* Línea vertical del timeline */}
        <div className="absolute left-2 top-2 h-full w-px bg-gray-medium md:left-2.5" />

        <ul className="space-y-10">
          {experience.map((item) => (
            <motion.li
              key={`${item.company}-${item.dates}`}
              variants={staggerItem}
              className="relative pl-10 md:pl-12"
            >
              {/* Punto rojo del timeline */}
              <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {item.role}{" "}
                  <span className="text-accent">@ {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-gray-text">
                  {item.dates}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-gray-text"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
