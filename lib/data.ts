/**
 * Datos del portafolio centralizados, organizados por idioma (es / en).
 * Edita aquí enlaces, proyectos, experiencia, textos de UI, etc.
 */

export type Lang = "es" | "en";

// ---- Enlaces sociales / contacto (independientes del idioma) ----
export const social = {
  linkedin: "https://www.linkedin.com/in/diego-andr%C3%A9s-lopez/",
  github: "https://github.com/andre051223",
  email: "diegolopez.tech@gmail.com",
};

// ---- Perfil (independiente del idioma) ----
export const profile = {
  name: "Diego López",
  photo: "/profile.png",
};

// ---- Tipos ----
export interface Skill {
  name: string;
  slug: string | null; // slug de Simple Icons (https://simpleicons.org). null => ícono genérico.
}
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  image?: string; // ruta de la foto del proyecto (en /public)
  confidential?: boolean; // muestra etiqueta "Proyecto confidencial" y oculta links
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}
export interface ExperienceCategory {
  title: string;
  items: ExperienceItem[];
}

export interface Recommendation {
  quote: string;
  author: string;
  role: string;
}

export interface SiteContent {
  nav: {
    links: { label: string; href: string }[];
    downloadCv: string;
    cvUrl: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    education: { title: string; institution: string }[];
    availability: string;
    ctaProjects: string;
    ctaContact: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    confidentialLabel: string;
    linkLabel: string;
    items: Project[];
  };
  experience: {
    title: string;
    categories: ExperienceCategory[];
  };
  recommendations: {
    title: string;
    items: Recommendation[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string; // usa {email} como marcador
    socialIntro: string;
  };
  footer: {
    madeWith: string;
  };
}

// ============================================================
// Contenido en ESPAÑOL
// ============================================================
const es: SiteContent = {
  nav: {
    links: [
      { label: "Stack", href: "#stack" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Recomendaciones", href: "#recomendaciones" },
      { label: "Contacto", href: "#contacto" },
    ],
    downloadCv: "Descargar CV",
    cvUrl: "/cv-es.pdf",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    education: [
      {
        title: "8° semestre de Ingeniería de Sistemas",
        institution: "Fundación Universitaria del Área Andina",
      },
      {
        title: "Master en Inteligencia Artificial",
        institution: "Daxus Latam",
      },
      {
        title: "Escuela de Desarrollo Web",
        institution: "Platzi",
      },
    ],
    availability: "Disponible para nuevos proyectos profesionales",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactarme",
  },
  skills: {
    title: "Habilidades / Stack",
    subtitle: "Tecnologías y herramientas con las que trabajo a diario.",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML5", slug: "html5" },
          { name: "CSS3", slug: "css" },
          { name: "JavaScript (ES6+)", slug: "javascript" },
          { name: "TypeScript", slug: "typescript" },
          { name: "Tailwind CSS", slug: "tailwindcss" },
          { name: "Next.js", slug: "nextdotjs" },
        ],
      },
      {
        title: "Backend / DB",
        skills: [
          { name: "Python", slug: "python" },
          { name: "Supabase", slug: "supabase" },
          { name: "MySQL", slug: "mysql" },
        ],
      },
      {
        title: "Inteligencia Artificial",
        skills: [
          { name: "API de Anthropic", slug: "anthropic" },
          { name: "API de OpenAI", slug: "openai" },
          { name: "Make", slug: "make" },
          { name: "n8n", slug: "n8n" },
          { name: "Prompt Engineering", slug: null },
        ],
      },
      {
        title: "Herramientas",
        skills: [
          { name: "Git", slug: "git" },
          { name: "GitHub", slug: "github" },
          { name: "Vercel", slug: "vercel" },
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    confidentialLabel: "Confidencial",
    linkLabel: "Enlace",
    items: [
      {
        name: "Studyhub",
        description:
          "Plataforma web que centraliza notas, temporizador de estudio y gestor de tareas. Arquitectura MVC con API REST.",
        stack: ["Next.js", "Tailwind CSS", "Supabase"],
        image: "/projects/studyhub.png",
        demoUrl: "https://my-studyhub.vercel.app",
      },
      {
        name: "Dotaciones Sariss",
        description:
          'Landing Page corporativa para la empresa "Dotaciones Sariss" enfocada en dotación empresarial para pequeñas y medianas empresas.',
        stack: ["Next.js 14", "Tailwind CSS", "Vercel"],
        image: "/projects/dotaciones-sariss.png",
        demoUrl: "https://dotaciones-sariss.vercel.app/",
      },
      {
        name: "EA Network Latam",
        description:
          "Landing page corporativa para la asociación Executive Assistants Network Latam enfocada en dar a conocer esta comunidad de asistentes ejecutivos.",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/projects/ea-network-latam.png",
        demoUrl: "https://ea-network-latam.vercel.app/",
      },
    ],
  },
  experience: {
    title: "Experiencia Laboral",
    categories: [
      {
        title: "Desarrollo Web & Inteligencia Artificial",
        items: [
          {
            company: "Perfila.ai",
            role: "Desarrollador Web & Prompt Engineer | Proyecto Freelance",
            dates: "Mar 2026 – Jul 2026",
            bullets: [
              "Desarrollé plataforma de orientación vocacional para el mercado latinoamericano.",
              "Integré la API de Anthropic en un agente conversacional multi-bloque con calibración cultural por país.",
            ],
          },
          {
            company: "Castor Data S.A.S",
            role: "Desarrollador Web",
            dates: "Ago 2025 – Dic 2025",
            bullets: [
              "Me enfoqué en el desarrollo e implementación de landing pages corporativas usando HTML5, CSS3 y JavaScript.",
              "Gestioné el e-commerce de la empresa mediante el ERP Odoo 17.",
            ],
          },
          {
            company: "Amaevolucionar",
            role: "AI Specialist | Proyecto Freelance",
            dates: "Mar 2025 – Jul 2025",
            bullets: [
              "Apoyé a la fundadora de la empresa (Tania Pineda Lopetegui) en el desarrollo de Agentes de Inteligencia Artificial para optimizar los procesos internos de la empresa.",
            ],
          },
          {
            company: "ITS Infocom",
            role: "Practicante SENA en Desarrollo de Software",
            dates: "Nov 2022 – Mar 2023",
            bullets: [
              "Desarrollé diversas páginas web para integrarlas al sitio oficial de la compañía, aplicando estándares de marca y optimizando la experiencia de usuario (UX).",
            ],
          },
        ],
      },
      {
        title: "Auditoría de Contenido Educativo",
        items: [
          {
            company: "Perfila.ai",
            role: "Auditor de Contenido Educativo | Proyecto Freelance",
            dates: "Abr 2025 – Jul 2025",
            bullets: [
              "Revisé contenido educativo y entregué feedback cuantitativo y cualitativo.",
              "Revisé 75 horas de contenido en 3 meses mediante un nuevo esquema de evaluación.",
            ],
          },
          {
            company: "Platzi",
            role: "Quality Control Associate",
            dates: "Nov 2023 – Nov 2024",
            bullets: [
              "Revisé más de 100 cursos en áreas de programación, IA, marketing y habilidades blandas.",
            ],
          },
        ],
      },
    ],
  },
  recommendations: {
    title: "Recomendaciones",
    items: [
      {
        quote:
          "Tuve el privilegio de trabajar con Diego durante un período clave en mi empresa, y sinceramente, su aporte fue invaluable. Desde el primer día demostró un nivel de compromiso que pocas veces se ve: siempre dispuesto, rápido, con un alto estándar de calidad y una actitud proactiva que marcó la diferencia.\n\nNo solo es un programador talentoso, con una capacidad técnica excepcional y un enfoque orientado a soluciones, sino que también es una persona que se pone la camiseta por el equipo y el proyecto. Su disposición constante a aprender, adaptarse y aportar más allá de lo esperado lo convirtió en un pilar fundamental para nosotros.\n\nRecomiendo a Diego sin ninguna duda a cualquier empresa que esté buscando un profesional disciplinado, inteligente, autónomo y con una mentalidad de mejora continua. Si tienes la oportunidad de sumarlo a tu equipo, no lo dudes. Será un gran acierto.",
        author: "Tania Pineda Lopetegui",
        role: "CEO · Amaevolucionar",
      },
      {
        quote:
          "Diego formó parte del equipo revisor de Perfila durante 3 meses, y su desempeño fue excepcional. Destaca por su orientación al detalle, su compromiso y su capacidad para entregar siempre más de lo que se le solicita. Estas cualidades lo convierten en un colaborador clave y una pieza fundamental en cualquier equipo. Lo recomiendo ampliamente para proyectos que requieran precisión, dedicación y trabajo en equipo.",
        author: "Michelle Engelmann",
        role: "COO · Perfila.ai",
      },
      {
        quote:
          "Diego es un profesional muy comprometido con su rol. Trabajé con él por un año y se destacó por su atención al detalle y compromiso con la calidad de los proyectos asignados. Diego es muy resolutivo, siempre dispuesto a aprender sobre múltiples temas, y además, se mantiene actualizado en las últimas tendencias en tecnología. Sin duda será capaz de adaptarse rápidamente a cualquier equipo de trabajo y ejecutar proyectos eficientemente.",
        author: "Ayesha Morales",
        role: "Ex-Course Director · Platzi",
      },
      {
        quote:
          "Tuve el privilegio de trabajar con Diego durante su tiempo como Asociado en Platzi, de noviembre de 2023 a noviembre de 2024. A lo largo del año, Diego demostró no solo un desempeño excepcional como Asociado de Control de Calidad, sino también un notable crecimiento personal y profesional.\n\nDiego revisó más de 100 cursos con meticulosidad, brindando constantemente comentarios valiosos que mejoraron la calidad de nuestro contenido. Lo que realmente destacó fue su capacidad de adaptación y mejora, afrontando desafíos y perfeccionando continuamente sus habilidades. Su atención al detalle, actitud proactiva y apertura a la retroalimentación lo convirtieron en un miembro invaluable de nuestro equipo.\n\nDurante este año, el crecimiento de Diego se hizo evidente en su creciente confianza, eficiencia y profundidad de análisis. No me cabe duda de que su dedicación y experiencia en constante evolución lo convertirán en un gran aporte para cualquier organización.",
        author: "Sura Cedeño",
        role: "Associate Coordinator · Platzi",
      },
    ],
  },
  contact: {
    title: "Trabajemos juntos",
    subtitle:
      "Estoy disponible para proyectos freelance y oportunidades de empleo remoto. Escríbeme.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto…",
    submit: "Enviar mensaje",
    submitting: "Enviando…",
    success: "¡Mensaje enviado! Te responderé pronto.",
    error:
      "Hubo un error al enviar. Inténtalo de nuevo o escríbeme directamente a {email}.",
    socialIntro: "También puedes encontrarme en estos canales:",
  },
  footer: {
    madeWith: "Hecho con Next.js & Tailwind CSS.",
  },
};

// ============================================================
// Contenido en INGLÉS (traducción contextual, no literal)
// ============================================================
const en: SiteContent = {
  nav: {
    links: [
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#proyectos" },
      { label: "Experience", href: "#experiencia" },
      { label: "Recommendations", href: "#recomendaciones" },
      { label: "Contact", href: "#contacto" },
    ],
    downloadCv: "Download Resume",
    cvUrl: "/cv-en.pdf",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    education: [
      {
        title: "Systems Engineering student, 8th semester",
        institution: "Fundación Universitaria del Área Andina",
      },
      {
        title: "Master's Program in Artificial Intelligence",
        institution: "Daxus Latam",
      },
      {
        title: "Web Development School",
        institution: "Platzi",
      },
    ],
    availability: "Open to new professional opportunities",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  skills: {
    title: "Skills / Stack",
    subtitle: "Technologies and tools I work with every day.",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML5", slug: "html5" },
          { name: "CSS3", slug: "css" },
          { name: "JavaScript (ES6+)", slug: "javascript" },
          { name: "TypeScript", slug: "typescript" },
          { name: "Tailwind CSS", slug: "tailwindcss" },
          { name: "Next.js", slug: "nextdotjs" },
        ],
      },
      {
        title: "Backend / DB",
        skills: [
          { name: "Python", slug: "python" },
          { name: "Supabase", slug: "supabase" },
          { name: "MySQL", slug: "mysql" },
        ],
      },
      {
        title: "Artificial Intelligence",
        skills: [
          { name: "Anthropic API", slug: "anthropic" },
          { name: "OpenAI API", slug: "openai" },
          { name: "Make", slug: "make" },
          { name: "n8n", slug: "n8n" },
          { name: "Prompt Engineering", slug: null },
        ],
      },
      {
        title: "Tools",
        skills: [
          { name: "Git", slug: "git" },
          { name: "GitHub", slug: "github" },
          { name: "Vercel", slug: "vercel" },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    confidentialLabel: "Confidential",
    linkLabel: "Live site",
    items: [
      {
        name: "Studyhub",
        description:
          "Web platform that brings together notes, a study timer, and a task manager in one place. MVC architecture with a REST API.",
        stack: ["Next.js", "Tailwind CSS", "Supabase"],
        image: "/projects/studyhub.png",
        demoUrl: "https://my-studyhub.vercel.app",
      },
      {
        name: "Dotaciones Sariss",
        description:
          "Corporate landing page for Dotaciones Sariss, a company that provides workwear and workplace supplies for small and mid-sized businesses.",
        stack: ["Next.js 14", "Tailwind CSS", "Vercel"],
        image: "/projects/dotaciones-sariss.png",
        demoUrl: "https://dotaciones-sariss.vercel.app/",
      },
      {
        name: "EA Network Latam",
        description:
          "Corporate landing page for the Executive Assistants Network Latam, built to raise awareness of this community of executive assistants.",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/projects/ea-network-latam.png",
        demoUrl: "https://ea-network-latam.vercel.app/",
      },
    ],
  },
  experience: {
    title: "Work Experience",
    categories: [
      {
        title: "Web Development & Artificial Intelligence",
        items: [
          {
            company: "Perfila.ai",
            role: "Web Developer & Prompt Engineer",
            dates: "Mar 2026 – Jul 2026",
            bullets: [
              "Built a career guidance platform for the Latin American market.",
              "Integrated the Anthropic API into a multi-block conversational agent with country-specific cultural calibration.",
            ],
          },
          {
            company: "Castor Data S.A.S",
            role: "Web Developer",
            dates: "Aug 2025 – Dec 2025",
            bullets: [
              "Built and shipped corporate landing pages using HTML5, CSS3, and JavaScript.",
              "Managed the company's e-commerce operations through the Odoo 17 ERP.",
            ],
          },
          {
            company: "Amaevolucionar",
            role: "AI Powered Content Creator | Freelance Project",
            dates: "Mar 2025 – Jul 2025",
            bullets: [
              "Partnered with the company's founder (Tania Pineda Lopetegui) to build AI agents that streamlined the company's internal processes.",
            ],
          },
          {
            company: "ITS Infocom",
            role: "Programming Apprentice",
            dates: "Nov 2022 – Mar 2023",
            bullets: [
              "Built several web pages to integrate into the company's official website, applying brand standards and optimizing the user experience (UX).",
            ],
          },
        ],
      },
      {
        title: "Educational Content Auditing",
        items: [
          {
            company: "Perfila.ai",
            role: "Educational Content Auditor",
            dates: "Apr 2025 – Jul 2025",
            bullets: [
              "Reviewed educational content and delivered quantitative and qualitative feedback.",
              "Audited 75 hours of content in 3 months under a newly introduced evaluation framework.",
            ],
          },
          {
            company: "Platzi",
            role: "Quality Control Associate",
            dates: "Nov 2023 – Nov 2024",
            bullets: [
              "Reviewed 100+ courses across programming, AI, marketing, and soft skills.",
            ],
          },
        ],
      },
    ],
  },
  recommendations: {
    title: "Recommendations",
    items: [
      {
        quote:
          "I had the privilege of working with Diego during a key period for my company, and honestly, his contribution was invaluable. From day one he showed a level of commitment you rarely see: always willing to help, fast, holding himself to a high standard of quality, and bringing a proactive attitude that made a real difference.\n\nHe is not only a talented programmer with exceptional technical skills and a solution-oriented mindset, but also someone who goes all in for the team and the project. His constant willingness to learn, adapt, and deliver beyond what was expected made him a cornerstone for us.\n\nI recommend Diego without hesitation to any company looking for a disciplined, intelligent, self-driven professional with a continuous-improvement mindset. If you have the chance to add him to your team, don't think twice. It will be a great call.",
        author: "Tania Pineda Lopetegui",
        role: "CEO · Amaevolucionar",
      },
      {
        quote:
          "Diego was part of Perfila's review team for 3 months, and his performance was exceptional. He stands out for his attention to detail, his commitment, and his ability to consistently deliver more than what is asked of him. These qualities make him a key collaborator and a core piece of any team. I highly recommend him for projects that require precision, dedication, and teamwork.",
        author: "Michelle Engelmann",
        role: "COO · Perfila.ai",
      },
      {
        quote:
          "Diego is a professional who is deeply committed to his role. I worked with him for a year, and he stood out for his attention to detail and his commitment to the quality of every project he was assigned. Diego is a strong problem solver, always eager to learn about a wide range of topics, and he stays current with the latest trends in technology. Without a doubt, he will be able to adapt quickly to any team and execute projects efficiently.",
        author: "Ayesha Morales",
        role: "Former Course Director · Platzi",
      },
      {
        quote:
          "I had the privilege of working with Diego during his time as an Associate at Platzi, from November 2023 to November 2024. Throughout the year, Diego demonstrated not only outstanding performance as a Quality Control Associate, but also remarkable personal and professional growth.\n\nDiego meticulously reviewed more than 100 courses, consistently providing valuable feedback that improved the quality of our content. What truly stood out was his ability to adapt and improve, taking on challenges and continuously sharpening his skills. His attention to detail, proactive attitude, and openness to feedback made him an invaluable member of our team.\n\nOver the course of the year, Diego's growth was evident in his increasing confidence, efficiency, and depth of analysis. I have no doubt that his dedication and ever-evolving expertise will make him a great asset to any organization.",
        author: "Sura Cedeño",
        role: "Associate Coordinator · Platzi",
      },
    ],
  },
  contact: {
    title: "Let's work together",
    subtitle:
      "I'm available for freelance projects and remote job opportunities. Drop me a line.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project…",
    submit: "Send message",
    submitting: "Sending…",
    success: "Message sent! I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly at {email}.",
    socialIntro: "You can also find me on these channels:",
  },
  footer: {
    madeWith: "Built with Next.js & Tailwind CSS.",
  },
};

export const content: Record<Lang, SiteContent> = { es, en };
