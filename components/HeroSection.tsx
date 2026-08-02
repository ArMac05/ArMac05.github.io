"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ResumeDialog } from "@/components/ResumeDialog";
import Tag from "@/components/tag";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 1]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-svh bg-hero-background flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-6xl mx-auto px-6 py-28 md:px-12 md:py-0 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-5 max-w-3xl md:gap-6"
        >
          <Tag
            text="Open to Internships"
            className="inline-flex items-center justify-center bg-cream/12 px-4 py-1.5 rounded-2xl border border-chip-border text-sm font-bold text-cream md:text-base"
          />

          <p className="font-bold text-4xl text-cream sm:text-5xl md:text-6xl">
            Hi, I&apos;m Arlim Macaldo
          </p>

          <p className="font-medium text-lg text-cream-dimmed sm:text-xl md:text-3xl">
            CS Student at UNLV, focused on data engineering — building reliable
            pipelines and turning messy data into something usable.
          </p>

          {/* className lives on the dialog's own anchor so the whole pill is tappable. */}
          <ResumeDialog
            href="/Arlim-Macaldo-Resume.pdf"
            className="inline-flex items-center bg-coral font-bold text-white rounded-xl px-6 h-12 transition-colors hover:bg-coral-hover"
          >
            View Resume
          </ResumeDialog>
        </motion.div>
      </motion.div>
    </section>
  );
}
