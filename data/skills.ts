import { Skill } from "@/types/skills";

export const skills: Skill[] = [
  {
    id: "languages",
    category: "Langauges",
    name: ["Python", "SQL", "React", "C++"],
  },
  {
    id: "data & orchestration",
    category: "Data & Orchestration",
    name: ["DBT", "Apache Airflow", "Spark"],
  },
  {
    id: "storage & cloud",
    category: "Storage & Cloud",
    name: ["BigQuery", "PostgreSQL", "DuckDB"],
  },
  {
    id: "dev tools",
    category: "Dev Tools",
    name: ["VScode", "Docker", "Git", "Databricks"],
  },
];
