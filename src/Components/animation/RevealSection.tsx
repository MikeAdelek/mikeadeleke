"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stagger } from "./index";

interface RevealSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  margin?: string;  // e.g. "-100px"
}

export function RevealSection({
  id,
  children,
  className,
  margin = "0px 0px -100px 0px",
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: margin as never,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.section>
  );
}