import Image from "next/image";
import Tag from "./tag";
import {
  ExternalLink,
  ChevronDown,
  Image as ImagePlaceholderIcon,
} from "lucide-react";
import type { Project } from "@/types/project";

/**
 * lucide-react dropped brand marks in v1, so the GitHub logo is inline.
 * Sized by the `size` prop, inherits color via currentColor.
 */
function GithubMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

interface ProjectBannerProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
  /** True for the first banner — trims the pole so it starts at the node. */
  isFirst: boolean;
  /** True for the last banner — trims the pole so it stops at the node. */
  isLast: boolean;
}

export function ProjectBanner({
  project,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}: ProjectBannerProps) {
  const panelId = `${project.slug}-panel`;
  const headingId = `${project.slug}-heading`;

  const railHeight = isFirst
    ? "top-4 bottom-0"
    : isLast
      ? "top-0 h-4"
      : "top-0 bottom-0";

  return (
    <div className="flex">
      {/* Narrower rail on phones — 44px of gutter is a lot out of 375px. */}
      <div className="relative w-7 flex-none md:w-11" aria-hidden="true">
        <span
          className={`absolute left-[11px] w-0.5 bg-hero-background ${railHeight}`}
        />
        <span
          className={`absolute left-1 top-2.5 box-border h-4 w-4 rounded-full border-[3px] border-white ${
            project.current ? "bg-coral" : "bg-gold-primary"
          }`}
        />
      </div>

      <article className="mb-4 flex-1 overflow-hidden rounded-r-[14px] border border-default-hairline-border bg-paper">
        <h3 id={headingId} className="sr-only">
          {project.name}
        </h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-paper md:gap-4 md:px-5 md:py-4"
        >
          <span>
            <span className="block text-base font-medium text-charcoal-ink">
              {project.name}
            </span>
            <span className="mt-0.5 block text-[13px] text-ash-muted-text">
              {project.shortDescription}
            </span>
          </span>
          <ChevronDown
            size={20}
            className={`flex-none text-gold-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            className="border-t border-default-hairline-border px-4 pb-5 md:px-5 md:pb-6"
          >
            {project.image ? (
              <div className="relative mt-4 h-40 w-full overflow-hidden rounded-xl border border-default-hairline-border md:mt-5 md:h-[200px]">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            ) : (
              <div className="mt-4 flex h-40 w-full items-center justify-center rounded-xl border border-default-hairline-border bg-cream-dimmed text-ash-subtle md:mt-5 md:h-[200px]">
                <ImagePlaceholderIcon size={40} aria-hidden="true" />
              </div>
            )}

            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {project.tech.map((tool) => (
                <Tag
                  key={tool}
                  text={tool}
                  className="bg-cream hover:bg-chip-border transition-colors border-gold-primary text-sm text-gold-text"
                />
              ))}
            </ul>

            <p className="mt-4 text-[15px] leading-relaxed text-charcoal-ink">
              {project.longDescription}
            </p>

            {(project.repoUrl || project.demoUrl) && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-coral rounded-[10px] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-coral-hover md:py-2"
                  >
                    <GithubMark size={16} />
                    View repo
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[10px] bg-coral px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-coral-hover md:py-2"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Live demo
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
}
