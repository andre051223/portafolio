# Portafolio — Diego López

Portafolio web profesional de una sola página, **bilingüe (español / inglés)**, construido con Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion. Todo el contenido está centralizado y es editable desde un único archivo de datos.

> 🔗 **Demo:** https://portafolio-diegolopez-beta.vercel.app

## Tabla de contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Desarrollo local](#desarrollo-local)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Personalización](#personalización)
- [Sistema de diseño](#sistema-de-diseño)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)

## Características

- 🌐 **Bilingüe (es / en)** — cambio de idioma en caliente mediante un Context de React; la preferencia se persiste en `localStorage` y actualiza el atributo `lang` del documento.
- 🎯 **Contenido centralizado** — textos, proyectos, experiencia y recomendaciones viven en `lib/data.ts`. No hay que tocar componentes para actualizar el sitio.
- ✨ **Animaciones accesibles** — Framer Motion con variantes reutilizables que respetan `prefers-reduced-motion`.
- 📱 **Diseño responsive** mobile-first en todas las secciones.
- 📄 **CV descargable** en ambos idiomas (`cv-es.pdf` / `cv-en.pdf`).
- 📬 **Formulario de contacto** funcional vía Formspree (sin backend propio).
- 🔍 **SEO y Open Graph** configurados en `app/layout.tsx`.

## Tecnologías

| Tecnología    | Versión | Uso                                        |
| ------------- | ------- | ------------------------------------------ |
| Next.js       | 14.2.5  | Framework (App Router)                     |
| React         | 18.3.1  | Librería de interfaz                       |
| TypeScript    | 5.5.4   | Tipado estático                            |
| Tailwind CSS  | 3.4.7   | Estilos utilitarios                        |
| Framer Motion | 11.3.19 | Animaciones                                |
| next/font     | —       | Fuentes Inter y JetBrains Mono (self-host) |

## Requisitos previos

- Node.js 18.17 o superior.
- npm (incluido con Node.js).

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación quedará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando         | Descripción                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Inicia el servidor de desarrollo         |
| `npm run build` | Genera el build de producción            |
| `npm run start` | Sirve el build de producción             |
| `npm run lint`  | Ejecuta ESLint (next/core-web-vitals)    |

## Estructura del proyecto

```
app/
  layout.tsx           Metadatos SEO/OG, fuentes, LanguageProvider y MotionConfig
  page.tsx             Ensambla todas las secciones en orden
  globals.css          Estilos base y reglas de prefers-reduced-motion
components/
  Navbar.tsx           Navbar fija, menú móvil, backdrop-blur y LanguageSwitch
  LanguageSwitch.tsx   Botón de cambio de idioma (es / en)
  Hero.tsx             Perfil: foto, nombre, educación y estado "Disponible"
  Skills.tsx           Grid de tecnologías agrupadas por categoría
  Projects.tsx         Tarjetas de proyectos (con soporte para confidenciales)
  Experience.tsx       Timeline vertical agrupado por categoría
  Recommendations.tsx  Testimonios / recomendaciones profesionales
  Contact.tsx          Formulario (Formspree) y enlaces sociales
  Footer.tsx           Pie de página
  Section.tsx          Wrapper de animación reutilizable + SectionTitle
  icons.tsx            Íconos SVG inline
lib/
  data.ts              Contenido editable en es / en + tipos (single source of truth)
  i18n.tsx             LanguageProvider, hook useLanguage y persistencia
  animations.ts        Variantes de Framer Motion
public/
  profile.png          Foto de perfil (se recorta en círculo)
  cv-es.pdf            CV en español
  cv-en.pdf            CV en inglés
  projects/            Capturas de los proyectos
```

## Arquitectura

**Internacionalización.** `lib/data.ts` exporta `content: Record<Lang, SiteContent>` con dos objetos completos (`es` y `en`) tipados por la interfaz `SiteContent`. `lib/i18n.tsx` expone un `LanguageProvider` que:

1. Inicializa el idioma en `"es"` y lo restaura desde `localStorage` al montar.
2. Mantiene sincronizado `document.documentElement.lang`.
3. Persiste el idioma solo cuando el usuario lo cambia (para no sobrescribir el valor guardado con el inicial).

Los componentes consumen el contenido con el hook `useLanguage()`, que devuelve `{ lang, setLang, t }`, donde `t` es el `SiteContent` del idioma activo.

**Datos independientes del idioma.** `profile` (nombre, foto) y `social` (LinkedIn, GitHub, email) viven fuera de los objetos `es`/`en` porque no cambian entre idiomas.

## Personalización

Todo el contenido editable está en **`lib/data.ts`**. Busca además los comentarios `TODO` en el código para los puntos de configuración externos.

1. **`lib/data.ts`** — el archivo principal a editar:
   - `social`: LinkedIn, GitHub y email.
   - `profile`: nombre y ruta de la foto.
   - `es` / `en`: textos de navegación, hero, skills, proyectos, experiencia, recomendaciones y contacto para cada idioma.
   - `projects[].demoUrl`: enlaces reales de cada proyecto (usa `confidential: true` para ocultar el enlace y mostrar la etiqueta de confidencial).
2. **Imágenes en `public/`**
   - `public/profile.png`: foto de perfil cuadrada.
   - `public/projects/*.png`: capturas de los proyectos (referenciadas en `projects[].image`).
3. **`components/Contact.tsx`**
   - `FORMSPREE_ENDPOINT`: crea un formulario gratuito en [formspree.io](https://formspree.io) y pega tu endpoint (`https://formspree.io/f/xxxx`).
4. **`app/layout.tsx`**
   - `SITE_URL`: tu dominio final en Vercel (se usa para SEO y Open Graph).
5. **`public/cv-es.pdf` y `public/cv-en.pdf`**: reemplaza por tus CV reales (conserva los nombres).
6. **`public/og-image.png`** *(opcional)*: imagen de 1200×630 para las previews en redes sociales.

## Sistema de diseño

Paleta y fuentes definidas en `tailwind.config.ts`.

| Token             | Valor     | Uso                         |
| ----------------- | --------- | --------------------------- |
| `bg`              | `#0a0a0a` | Fondo principal             |
| `bg-secondary`    | `#111111` | Fondo secundario / tarjetas |
| `gray-medium`     | `#1f1f1f` | Bordes                      |
| `gray-text`       | `#9ca3af` | Texto secundario            |
| `text-white`      | `#f9fafb` | Texto principal             |
| `accent`          | `#dc2626` | Acento (rojo)               |
| `accent-hover`    | `#b91c1c` | Acento en hover             |

- **Tipografías:** `Inter` (texto general) y `JetBrains Mono` (tecnologías / snippets), cargadas con `next/font` y expuestas como variables CSS.
- **Tema:** oscuro por defecto con acento rojo.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com), selecciona **New Project** e importa el repositorio.
3. Vercel detectará automáticamente el framework **Next.js**. No requiere variables de entorno.
4. Pulsa **Deploy**.

## Accesibilidad y rendimiento

- Todas las animaciones respetan `prefers-reduced-motion` mediante `<MotionConfig reducedMotion="user">` y reglas en `globals.css`.
- Estados del formulario anunciados con `role="status"` y `role="alert"`.
- Diseño mobile-first y responsive en todas las secciones.
- Fuentes self-hosted con `next/font` (sin peticiones a terceros y con `display: swap`).
- Íconos de tecnologías servidos desde [Simple Icons](https://simpleicons.org).
