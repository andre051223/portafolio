"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  StudyIcon,
  ColombiaFlagIcon,
  BriefcaseIcon,
} from "./icons";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-32"
    >
      {/* Fondo: grid sutil con desvanecido radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-subtle bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_30%,transparent_75%)]"
      />
      {/* Resplandor rojo tenue */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* Foto de perfil con bandera de Colombia */}
        <motion.div variants={staggerItem} className="relative">
          <img
            src={profile.photo}
            alt={profile.name}
            width={208}
            height={208}
            className="h-52 w-52 rounded-2xl border border-gray-medium bg-bg-secondary object-cover"
          />
          <span className="absolute -bottom-2 -right-2 flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-bg">
            <ColombiaFlagIcon className="h-full w-full" />
          </span>
        </motion.div>

        {/* Nombre */}
        <motion.h1
          variants={staggerItem}
          className="mt-10 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.h1>

        {/* Formación académica y trabajo, en dos tarjetas */}
        <motion.div
          variants={staggerItem}
          className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2"
        >
          {/* Tarjeta: Educación */}
          <div className="flex flex-col rounded-2xl border border-gray-medium bg-bg-secondary p-6 transition-colors duration-300 hover:border-accent">
            <div className="flex items-center justify-center gap-2.5">
              <StudyIcon className="h-5 w-5 shrink-0 text-accent" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
                {t.hero.educationLabel}
              </h2>
            </div>

            <ul className="mt-5 space-y-5">
              {t.hero.education.map((edu) => (
                <li key={edu.title} className="flex flex-col gap-1">
                  <span className="font-semibold leading-snug text-text-white">
                    {edu.title}
                  </span>
                  {edu.institution && (
                    <span className="text-sm leading-snug text-gray-text">
                      {edu.institution}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta: Trabajo */}
          <div className="flex flex-col rounded-2xl border border-gray-medium bg-bg-secondary p-6 transition-colors duration-300 hover:border-accent">
            <div className="flex items-center justify-center gap-2.5">
              <BriefcaseIcon className="h-5 w-5 shrink-0 text-accent" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
                {t.hero.workLabel}
              </h2>
            </div>

            <ul className="mt-5 space-y-5">
              <li className="flex flex-col gap-1">
                <span className="font-semibold leading-snug text-text-white">
                  {t.hero.currentRole.title}
                </span>
                <span className="text-sm leading-snug text-gray-text">
                  {t.hero.currentRole.company}
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Status laboral (disponibilidad) */}
        <motion.div
          variants={staggerItem}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-medium bg-bg-secondary px-4 py-1.5 text-sm text-gray-text"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gray-text" />
          </span>
          {t.hero.availability}
        </motion.div>

        {/* Botones CTA */}
        <motion.div
          variants={staggerItem}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-text-white transition-colors hover:bg-accent-hover"
          >
            {t.hero.ctaProjects}
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-text-white/30 px-6 py-3 font-medium text-text-white transition-colors hover:border-text-white hover:bg-text-white/5"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
