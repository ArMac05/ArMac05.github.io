"use client";

import { twMerge } from "tailwind-merge";
import * as motion from "motion/react-client";
import { useMotionValue } from "motion/react";
import { animate } from "motion";

interface TagProps {
  text: string;
  className?: string;
}

// tag.tsx
export default function Tag({ text, className = "" }: TagProps) {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  return (
    <motion.span
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 50, bounceDamping: 25 }}
      className={twMerge("rounded-2xl border-1 px-3 py-1 w-fit ...", className)}
    >
      {text}
    </motion.span>
  );
}
