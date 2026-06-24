import type { Config } from "tailwindcss";

const config: Config = {
  // Escaneamos todos los archivos donde usamos clases de Tailwind
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada del portafolio
        bg: {
          DEFAULT: "#0a0a0a", // Background principal
          secondary: "#111111", // Background secundario
        },
        gray: {
          medium: "#1f1f1f", // Gris medio (bordes / tarjetas)
          text: "#9ca3af", // Gris de texto secundario
        },
        text: {
          white: "#f9fafb", // Blanco de texto
        },
        accent: {
          DEFAULT: "#dc2626", // Acento rojo
          hover: "#b91c1c", // Acento rojo (hover)
        },
      },
      fontFamily: {
        // Variables expuestas desde next/font en app/layout.tsx
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        // Pulso del punto verde "Disponible"
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
      backgroundImage: {
        // Grid sutil para el fondo del Hero
        "grid-subtle":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
