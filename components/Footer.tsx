"use client";

import { social } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-medium">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-gray-text">
          © {year} Diego López. {t.footer.madeWith}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-text transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-text transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="text-gray-text transition-colors hover:text-accent"
          >
            <EmailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
