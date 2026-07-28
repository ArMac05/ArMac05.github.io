// types/experience.ts
export interface Experience {
  /** Stable key for React. */
  id: string;
  /** Shown in the left column, e.g. "Jun 2025 — present". */
  dateRange: string;
  /** Small label under the date: "Part-time", "On campus", "Summer". */
  employmentType?: string;
  /** Job title. */
  role: string;
  /** Where you did it. */
  organization: string;
  /**
   * Fallback for the logo tile when no image is set.
   * Two letters reads best — type them, don't derive them.
   */
  initials: string;
  /**
   * Organization logo. Omit and the breen initials tile renders instead.
   * Square images work best; put files in public/logos/.
   */
  logo?: {
    src: string;
    /** e.g. "University Data Lab logo". */
    alt: string;
  };
  /** One or two sentences: what you did, and what you took from it. */
  description: string;
  /** Tools and skills used. Most relevant first. */
  tech: string[];
}
