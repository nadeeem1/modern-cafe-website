import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Scroll-triggered fade-and-rise wrapper used across all sections
 * to keep entrance motion consistent.
 */
export default function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
