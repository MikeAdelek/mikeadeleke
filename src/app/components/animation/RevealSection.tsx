"use client";

import { motion } from "framer-motion";
// import { stagger } from "./AnimateIn";

interface RevealSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function RevealSection({ id, children, className }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      // variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {children}
    </motion.section>
  );
}
