// data/experience.ts
import type { Experience } from "@/types/experience";

/**
 * Newest first — recency matters most in an experience list.
 * Set `logo` to show an image; leave it off and the initials tile renders.
 */
export const experience: Experience[] = [
  {
    id: "data-intern-bi",
    dateRange: "Apr 2026 - Aug 2026",
    employmentType: "Full-time",
    role: "Data Intern (Business Intelligence)",
    organization: "Neato",
    initials: "N",
    logo: {
      src: "/thisisneato_logo.png",
      alt: "Neato Company Logo",
    },
    description:
      "QC'd and validated 20+ BigQuery tables during a company-wide data " +
      "warehouse migration, reconciling new tables against the legacy database " +
      "to confirm parity or improved accuracy before cutover, and rebuilt Omni " +
      "Analytics dashboards on the new warehouse to maintain continuity of " +
      "brand reporting. Wrote and validated SQL queries in BigQuery to support " +
      "reporting and analysis of e-commerce brand performance data, and built " +
      "an internal AI plugin (Claude, Python, React, TypeScript, SQL, BigQuery) " +
      "that generates an interactive Year in Review report for any client " +
      "brand — a prompt-driven workflow producing HTML reports with custom " +
      "charts and interactivity.",
    tech: ["SQL", "BigQuery", "Claude", "Python", "Omni Analytics"],
  },
];
