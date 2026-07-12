import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
  x = 0,
  custom = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  custom?: number
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
    ease: [0.25, 0.25, 0.25, 0.75] as const
  }),
};

const Stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

export { fadeUp, fadeIn, Reveal, Stagger };