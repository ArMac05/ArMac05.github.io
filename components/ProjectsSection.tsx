"use client";

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
    <section id="projects" className="bg-paper px-12 py-16">
      <div className="mx-8 max-w-[1080px]">
        <span className="text-gold-label text-lg font-normal">PROJECTS</span>
        <h2 className="mb-7 text-[26px] font-medium text-Charcoal-Ink">
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
      </div>
    </section>
  );
}
