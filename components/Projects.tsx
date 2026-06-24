"use client";

import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { projects, type Project } from "@/lib/data";
import { ExternalLinkIcon, LockIcon } from "./icons";
import { staggerContainer, staggerItem } from "@/lib/animations";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col rounded-2xl border border-gray-medium bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold">{project.name}</h3>
        {project.confidential && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-medium bg-bg px-2.5 py-1 text-xs text-gray-text">
            <LockIcon className="h-3.5 w-3.5" />
            Confidencial
          </span>
        )}
      </div>

      {/* Foto del proyecto */}
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-xl border border-gray-medium">
          <img
            src={project.image}
            alt={project.name}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <p className="flex-1 text-sm leading-relaxed text-gray-text">
        {project.description}
      </p>

      {/* Stack (chips) */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-gray-medium px-2.5 py-1 font-mono text-xs text-gray-text"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Botones */}
      {!project.confidential && project.demoUrl && (
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-text-white transition-colors hover:bg-accent-hover"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Enlace
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="proyectos">
      <SectionTitle>Proyectos</SectionTitle>

      <motion.div
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
