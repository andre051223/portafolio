import type { Variants } from "framer-motion";

/**
 * Variantes reutilizables de animación.
 * Nota: el respeto a `prefers-reduced-motion` se gestiona globalmente con
 * <MotionConfig reducedMotion="user"> en app/layout.tsx, que neutraliza
 * transformaciones (slide/scale) cuando el usuario lo solicita.
 */

// Aparecer con desvanecido + desplazamiento hacia arriba
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Contenedor que escalona la entrada de sus hijos (stagger)
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Item simple para usarse dentro de un staggerContainer
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};
