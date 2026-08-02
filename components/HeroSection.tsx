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
      className="relative w-full min-h-screen bg-hero-background flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-6xl mx-auto px-6 md:px-12 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-6 max-w-3xl"
        >
          <Tag
            text="Open to Internships"
            className="flex items-center justify-center bg-cream/12 w-48 h-8 rounded-2xl border border-chip-border font-bold text-cream"
          />

          <p className="font-bold text-6xl text-cream">Hi, I'm Arlim Macaldo</p>

          <p className="font-medium text-3xl text-cream-dimmed">
            CS Student at UNLV, focused on data engineering — building reliable
            pipelines and turning messy data into something usable.
          </p>

          <div className="flex items-center bg-coral text-hero-background font-bold text-white rounded-xl px-6 h-12 hover:bg-coral-hover">
            <ResumeDialog href="/Arlim-Macaldo-Resume.pdf">
              View Resume
            </ResumeDialog>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
