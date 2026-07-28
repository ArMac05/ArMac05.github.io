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
      className={`gap-3 border-t border-Default-Hairline-Border px-6 py-6 md:grid-cols-[160px_1fr] md:gap-8 ${
        isLast ? "border-b" : ""
      }`}
    >
      <div>
        <p className="text-[13px] font-medium text-Charcoal-Ink">{dateRange}</p>
        {employmentType && (
          <p className="mt-1 text-xs text-Ash-Subtle">{employmentType}</p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center gap-3">
          {logo ? (
            <div className="relative h-[42px] w-[42px] flex-none overflow-hidden rounded-[10px] border border-Default-Hairline-Border bg-white">
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
              className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[10px] bg-hero-background text-sm font-medium text-Cream"
              aria-hidden="true"
            >
              {initials}
            </div>
          )}

          <div>
            <h3 className="text-base font-medium text-Charcoal-Ink">{role}</h3>
            <p className="mt-0.5 text-[13px] text-Ash-muted-text">
              {organization}
            </p>
          </div>
        </div>

        <p className="mb-3 mt-2 text-sm leading-relaxed text-Charcoal-Ink">
          {description}
        </p>

        {tech.length > 0 && (
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {tech.map((item) => (
              <Tag
                key={item}
                text={item}
                className="bg-Cream border-gold-primary text-xs text-gold-text"
              />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
