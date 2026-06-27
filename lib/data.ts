/**
 * Datos del portafolio centralizados.
 * Edita aquí enlaces, proyectos, experiencia, etc.
 */

// ---- Enlaces sociales / contacto ----
export const social = {
  linkedin: "https://www.linkedin.com/in/diego-andr%C3%A9s-lopez/",
  github: "https://github.com/andre051223",
  email: "diegolopez.tech@gmail.com",
};

// Enlaces de navegación (anclas a cada sección)
export const navLinks = [
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Recomendaciones", href: "#recomendaciones" },
  { label: "Contacto", href: "#contacto" },
];

// ---- Perfil (sección de presentación al inicio) ----
export const profile = {
  name: "Diego López",
  photo: "/profile.png",
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
};

// ---- Categorías de Skills ----
// `slug` corresponde a Simple Icons (https://simpleicons.org). `null` => ícono genérico.
export interface Skill {
  name: string;
  slug: string | null;
}
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "JavaScript (ES6+)", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
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
];

// ---- Proyectos ----
export interface Project {
  name: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  image?: string; // ruta de la foto del proyecto (en /public)
  confidential?: boolean; // muestra etiqueta "Proyecto confidencial" y oculta links
}

export const projects: Project[] = [
  {
    name: "Studyhub",
    description:
      "Plataforma web que centraliza notas, temporizador de estudio y gestor de tareas. Arquitectura MVC con API REST.",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    // TODO: coloca la foto en /public/projects/studyhub.png
    image: "/projects/studyhub.png",
    demoUrl: "https://studyhub-diegolopez.vercel.app/",
  },
  {
    name: "Dotaciones Sariss",
    description:
      'Landing Page corporativa para la empresa "Dotaciones Sariss" enfocada en dotación empresarial para pequeñas y medianas empresas.',
    stack: ["Next.js 14", "Tailwind CSS", "Vercel"],
    // TODO: coloca la foto en /public/projects/dotaciones-sariss.png
    image: "/projects/dotaciones-sariss.png",
    demoUrl: "https://dotaciones-sariss.vercel.app/",
  },
  {
    name: "Perfila Career",
    description:
      "Plataforma de orientación vocacional para Latinoamérica. Integré la API de Anthropic en un agente conversacional con calibración cultural por país.",
    stack: ["Next.js", "API de Anthropic", "Supabase"],
    confidential: true,
  },
];

// ---- Experiencia (timeline) ----
export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Perfila.ai",
    role: "Desarrollador Web & Prompt Engineer",
    dates: "Mar 2026 – Jun 2026",
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
    company: "Perfila.ai",
    role: "Auditor de Contenido Educativo",
    dates: "Abr 2025 – Jul 2025",
    bullets: [
      "Revisé contenido educativo y entregué feedback cuantitativo y cualitativo.",
      "Revisé 75 horas de contenido en 3 meses mediante un nuevo esquema de evaluación.",
    ],
  },
  {
    company: "Amaevolucionar",
    role: "AI Powered Content Creator & Video Editor | Proyecto Freelance",
    dates: "Mar 2025 – Jul 2025",
    bullets: [
      "Apoyé a la fundadora de la empresa (Tania Pineda Lopetegui) en el desarrollo de Agentes de Inteligencia Artificial para optimizar los procesos internos de la empresa.",
      "Potencié la presencia digital de la fundadora de la empresa editando los videos de su canal de YouTube y automatizando el proceso de publicación de sus post en redes sociales a través de la plataforma Metricool.",
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
];

// ---- Recomendaciones ----
export interface Recommendation {
  quote: string;
  author: string;
  role: string;
}

export const recommendations: Recommendation[] = [
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
];
