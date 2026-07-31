import * as motion from "motion/react-client";
import { ExperienceItem } from "./ExperienceItem";
import { experience as defaultExperience } from "@/data/experiences";
import type { Experience } from "@/types/experience";

interface ExperienceSectionProps {
  /** Defaults to everything in data/experience.ts. Pass a subset to filter. */
  items?: Experience[];
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  /** Section heading. */
  heading?: string;
}

export function ExperienceSection({
  items = defaultExperience,
  eyebrow = "Experience",
  heading = "Where I've been learning",
}: ExperienceSectionProps) {
  if (items.length === 0) return null;

  return (
    <section id="experience" className="bg-white px-6 py-16 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mx-auto mt-24 max-w-[1080px]"
      >
        <span className="mb-2.5 inline-block text-[13px] font-medium uppercase tracking-[0.08em] text-gold-primary">
          {eyebrow}
        </span>
        <h2 className="mb-7 text-[26px] font-medium text-charcoal-ink">
          {heading}
        </h2>

        {items.map((item, i) => (
          <ExperienceItem
            key={item.id}
            experience={item}
            isLast={i === items.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
