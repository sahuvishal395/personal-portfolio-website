"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  delay?: number;
  id?: string;
}

export default function BentoCard({
  children,
  className = "",
  span = 1,
  rowSpan = 1,
  delay = 0,
  id,
}: BentoCardProps) {
  const spanClass = span === 2 ? "bento-span-2" : span === 3 ? "bento-span-3" : "";
  const rowClass = rowSpan === 2 ? "bento-row-2" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`glass-card p-6 overflow-hidden ${spanClass} ${rowClass} ${className}`}
      id={id}
    >
      {children}
    </motion.div>
  );
}
