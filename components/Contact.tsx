"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Section, { SectionTitle } from "./Section";
import { social } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./icons";
import { fadeInUp } from "@/lib/animations";

// TODO: reemplaza por tu endpoint real de Formspree (https://formspree.io)
// Ej: "https://formspree.io/f/abcdwxyz"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contacto">
      <SectionTitle subtitle={t.contact.subtitle}>{t.contact.title}</SectionTitle>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Formulario */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-gray-text"
            >
              {t.contact.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-gray-medium bg-bg-secondary px-4 py-3 text-text-white placeholder:text-gray-text/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-text"
            >
              {t.contact.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-gray-medium bg-bg-secondary px-4 py-3 text-text-white placeholder:text-gray-text/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-gray-text"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-medium bg-bg-secondary px-4 py-3 text-text-white placeholder:text-gray-text/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? t.contact.submitting : t.contact.submit}
          </button>

          {/* Estado del envío */}
          {status === "success" && (
            <p className="text-sm text-green-500" role="status">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-accent" role="alert">
              {t.contact.error.replace("{email}", social.email)}
            </p>
          )}
        </motion.form>

        {/* Links sociales */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          <p className="text-gray-text">{t.contact.socialIntro}</p>
          <div className="flex flex-col gap-3">
            <SocialLink
              href={social.linkedin}
              label="LinkedIn"
              detail="diego-andrés-lopez"
              icon={<LinkedinIcon className="h-5 w-5" />}
            />
            <SocialLink
              href={social.github}
              label="GitHub"
              detail="andre051223"
              icon={<GithubIcon className="h-5 w-5" />}
            />
            <SocialLink
              href={`mailto:${social.email}`}
              label="Email"
              detail={social.email}
              icon={<EmailIcon className="h-5 w-5" />}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function SocialLink({
  href,
  label,
  detail,
  icon,
}: {
  href: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-gray-medium bg-bg-secondary p-4 transition-colors hover:border-accent"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="font-medium text-text-white">{label}</span>
        <span className="text-sm text-gray-text">{detail}</span>
      </span>
    </a>
  );
}
