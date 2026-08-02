import type { Project } from "@/types/project";
import nbaDashboard from "@/public/NBA-metrics-powerBI.png";

/**
 * Add a project by adding an object here — no markup changes needed.
 * Order top to bottom is the order they render. Lead with your strongest
 * work, not your newest; the first banner is the one that actually gets read.
 */
export const projects: Project[] = [
  {
    slug: "nba-data-pipeline",
    name: "NBA Data Pipeline",
    shortDescription:
      "Full end-to-end pipeline of basketball game data for the current year with a dashboard.",
    longDescription:
      "Designed an end-to-end data pipeline using medallion architecture (Bronze, Silver, Gold) to ingest and transform NBA game data, automated pipeline runs with Airflow and containerized the environment with Docker for reproducible, isolated development, and built a PowerBI dashboard delivering player and game insights from the Gold layer.",
    tech: ["Python", "SQL", "Airflow", "DBT", "DuckDB", "PowerBI", "Docker"],
    repoUrl: "https://github.com/ArMac05/NBA-Data-Engineering-Pipeline",
    current: true,
    image: {
      src: nbaDashboard,
      alt: "Power BI dashboard of NBA team metrics — points per game, points allowed, and per-quarter scoring",
    },
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    shortDescription: "Portfolio website to understand me a little better.",
    longDescription:
      "Built and deployed a personal portfolio site with Next.js, React, TypeScript, and Tailwind CSS, driven by a typed content model that renders experience, projects, and skills from structured data rather than hardcoded markup. Implemented responsive layouts and accessible semantic markup, with automated builds and deployment to GitHub Pages via GitHub Actions.",
    tech: ["React", "Typescript", "Tailwind"],
    repoUrl: "https://github.com/ArMac05/ArMac05.github.io",
  },
];
