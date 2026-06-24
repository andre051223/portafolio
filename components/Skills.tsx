"use client";

import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { skillCategories, type Skill } from "@/lib/data";
import { SparkleIcon } from "./icons";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Ícono de cada tecnología: usa Simple Icons (cdn.simpleicons.org) o un genérico.
function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.slug) {
    return <SparkleIcon className="h-6 w-6 text-gray-text" />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${skill.slug}/9ca3af`}
      alt=""
      aria-hidden
      width={24}
      height={24}
      className="h-6 w-6"
      loading="lazy"
    />
  );
}

export default function Skills() {
  return (
    <Section id="stack">
      <SectionTitle subtitle="Tecnologías y herramientas con las que trabajo a diario.">
        Habilidades / Stack
      </SectionTitle>

      <motion.div
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={staggerItem}
            className="rounded-2xl border border-gray-medium bg-bg-secondary p-6"
          >
            <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-accent">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-medium bg-bg px-3 py-2 text-sm text-gray-text transition-colors hover:border-accent hover:text-text-white"
                >
                  <SkillIcon skill={skill} />
                  <span className="font-mono">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
