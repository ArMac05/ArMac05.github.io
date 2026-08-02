import Image from "next/image";
import type { Experience } from "@/types/experience";
import Tag from "./tag";

interface ExperienceItemProps {
  experience: Experience;
  /** Adds the closing rule so the last row isn't left open-bottomed. */
  isLast?: boolean;
}

export function ExperienceItem({
  experience,
  isLast = false,
}: ExperienceItemProps) {
  const {
    dateRange,
    employmentType,
    role,
    organization,
    initials,
    logo,
    description,
    tech,
  } = experience;

  return (
    <article
      className={`grid grid-cols-1 gap-3 border-t border-default-hairline-border py-5 md:grid-cols-[160px_1fr] md:gap-8 md:px-6 md:py-6 ${
        isLast ? "border-b" : ""
      }`}
    >
      {/* One line on phones, stacked in the date column on desktop. */}
      <div className="flex flex-wrap items-baseline gap-x-2 md:block">
        <p className="text-[13px] font-medium text-charcoal-ink">{dateRange}</p>
        {employmentType && (
          <p className="text-xs text-ash-subtle md:mt-1">{employmentType}</p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center gap-3">
          {logo ? (
            <div className="relative h-[42px] w-[42px] flex-none overflow-hidden rounded-[10px] border border-default-hairline-border bg-white">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-1"
                sizes="42px"
              />
            </div>
          ) : (
            <div
              className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[10px] bg-hero-background text-sm font-medium text-cream"
              aria-hidden="true"
            >
              {initials}
            </div>
          )}

          <div className="min-w-0">
            <h3 className="text-base font-medium text-charcoal-ink">{role}</h3>
            <p className="mt-0.5 text-[13px] text-ash-muted-text">
              {organization}
            </p>
          </div>
        </div>

        <p className="mb-3 mt-2 text-sm leading-relaxed text-charcoal-ink">
          {description}
        </p>

        {tech.length > 0 && (
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {tech.map((item) => (
              <Tag
                key={item}
                text={item}
                className="bg-cream hover:bg-chip-border transition-colors border-gold-primary text-sm text-gold-text"
              />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
