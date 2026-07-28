// data/experience.ts
import type { Experience } from "@/types/experience";

/**
 * Newest first — recency matters most in an experience list.
 * Set `logo` to show an image; leave it off and the initials tile renders.
 */
export const experience: Experience[] = [
  {
    id: "university-data-lab",
    dateRange: "Jun 2025 — present",
    employmentType: "Part-time",
    role: "Undergraduate research assistant",
    organization: "University Data Lab",
    initials: "UL",
    logo: {
      src: "/logos/university-data-lab.png",
      alt: "University Data Lab logo",
    },
    description:
      "Help maintain the lab's data pipeline — cleaning survey datasets, writing reproducible Python scripts, and documenting schemas so other students can pick up the work.",
    tech: ["Python", "Pandas", "Git"],
  },
  {
    id: "cs-teaching-assistant",
    dateRange: "Jan 2025 — May 2025",
    employmentType: "On campus",
    role: "Teaching assistant, intro to CS",
    organization: "Department of Computer Science",
    initials: "CS",
    description:
      "Ran weekly lab sessions for 30 first-year students, graded assignments, and held office hours. Learned to explain messy technical ideas simply — which turns out to be most of the job.",
    tech: ["Python", "Teaching"],
  },
  {
    id: "campus-it-help-desk",
    dateRange: "Jun 2024 — Aug 2024",
    employmentType: "Summer",
    role: "IT help desk assistant",
    organization: "Campus IT Services",
    initials: "HD",
    description:
      "First real tech job — troubleshooting hardware and accounts, and quietly automating a few repetitive ticket tasks with small scripts. Where I got hooked on making systems do the boring parts.",
    tech: ["Bash", "Support"],
  },
];
