# Portafolio — Diego López

Portafolio profesional de una sola página, construido con Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Desarrollo local](#desarrollo-local)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Personalización](#personalización)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)

## Tecnologías

| Tecnología    | Versión  | Uso                                      |
| ------------- | -------- | ---------------------------------------- |
| Next.js       | 14.2.5   | Framework (App Router)                   |
| React         | 18.3.1   | Librería de interfaz                     |
| TypeScript    | 5.5.4    | Tipado estático                          |
| Tailwind CSS  | 3.4.7    | Estilos utilitarios                      |
| Framer Motion | 11.3.19  | Animaciones                              |

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
  layout.tsx      Metadatos SEO, fuentes y MotionConfig
  page.tsx        Ensambla todas las secciones
  globals.css     Estilos base y prefers-reduced-motion
components/
  Navbar.tsx      Navbar fija, menú móvil y backdrop-blur
  Hero.tsx        Sección de perfil (foto, nombre, status)
  Skills.tsx      Grid de tecnologías por categoría
  Projects.tsx    Tarjetas de proyectos
  Experience.tsx  Timeline vertical
  Contact.tsx     Formulario (Formspree) y redes
  Footer.tsx      Pie de página
  Section.tsx     Wrapper de animación reutilizable
  icons.tsx       Íconos SVG inline
lib/
  data.ts         Contenido editable (textos, enlaces, proyectos)
  animations.ts   Variantes de Framer Motion
public/
  cv.pdf          Placeholder; reemplázalo por tu CV real
```

## Personalización

Busca los comentarios `TODO` en el código y actualiza los siguientes puntos.

1. `lib/data.ts`
   - `profile.institution`: nombre de tu institución educativa.
   - `projects[].demoUrl`: enlaces reales de cada proyecto.
2. Imágenes en `public/`
   - `public/profile.jpg`: foto de perfil cuadrada (se recorta en círculo).
   - `public/projects/studyhub.png` y `public/projects/dotaciones-sariss.png`: capturas de los proyectos.
3. `components/Contact.tsx`
   - `FORMSPREE_ENDPOINT`: crea un formulario gratuito en [formspree.io](https://formspree.io) y pega tu endpoint (`https://formspree.io/f/xxxx`).
4. `app/layout.tsx`
   - `SITE_URL`: tu dominio final en Vercel.
5. `public/cv.pdf`: reemplaza el placeholder por tu CV real (conserva el mismo nombre).
6. `public/og-image.png`: añade una imagen de 1200×630 para las previews en redes sociales (opcional pero recomendado).

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com), selecciona **New Project** e importa el repositorio.
3. Vercel detectará automáticamente el framework **Next.js**. No requiere variables de entorno.
4. Pulsa **Deploy**.

## Accesibilidad y rendimiento

- Todas las animaciones respetan `prefers-reduced-motion` mediante `<MotionConfig reducedMotion="user">` y reglas en `globals.css`.
- Diseño mobile-first y responsive en todas las secciones.
- Íconos de tecnologías servidos desde [Simple Icons](https://simpleicons.org) (CDN).
