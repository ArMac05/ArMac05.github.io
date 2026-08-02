"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { ProjectBanner } from "./ProjectBanner";
import { projects } from "@/data/projects";

interface ProjectsSectionProps {
  /**
   * "single" closes the others when one opens (calmer page).
   * "multiple" lets visitors compare projects side by side.
   */
  mode?: "single" | "multiple";
  /** Slug to start expanded. Defaults to the first project. */
  defaultOpenSlug?: string;
}

export function ProjectsSection({
  mode = "single",
  defaultOpenSlug,
}: ProjectsSectionProps) {
  const initial = defaultOpenSlug ?? projects[0]?.slug;
  const [openSlugs, setOpenSlugs] = useState<string[]>(
    initial ? [initial] : [],
  );

  function toggle(slug: string) {
    setOpenSlugs((current) => {
      const isOpen = current.includes(slug);
      if (mode === "single") {
        return isOpen ? [] : [slug];
      }
      return isOpen ? current.filter((s) => s !== slug) : [...current, slug];
    });
  }

  return (
    <section
      id="projects"
      className="bg-paper px-6 py-12 scroll-mt-20 md:px-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-[1080px]"
      >
        <span className="text-gold-label text-lg font-normal">PROJECTS</span>
        <h2 className="mb-6 text-2xl font-medium text-charcoal-ink md:mb-7 md:text-[26px]">
          Things I&apos;ve built
        </h2>

        {projects.map((project, i) => (
          <ProjectBanner
            key={project.slug}
            project={project}
            isOpen={openSlugs.includes(project.slug)}
            onToggle={() => toggle(project.slug)}
            isFirst={i === 0}
            isLast={i === projects.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
