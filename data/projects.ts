import type { Project } from "@/types/project";

/**
 * Add a project by adding an object here — no markup changes needed.
 * Order top to bottom is the order they render. Lead with your strongest
 * work, not your newest; the first banner is the one that actually gets read.
 */
export const projects: Project[] = [
  {
    slug: "realtime-ingestion-demo",
    name: "Realtime ingestion demo",
    shortDescription:
      "Streaming events into a warehouse with dbt models on top.",
    longDescription:
      "A hands-on project simulating a live event stream — producers push JSON events through Kafka, a consumer lands them in BigQuery, and dbt builds staging and mart models on top. I added tests to catch schema drift and a freshness check so stale data is obvious. Built to teach myself where realtime pipelines actually break.",
    tech: ["Python", "Kafka", "dbt", "BigQuery"],
    repoUrl: "https://github.com/arlim/realtime-ingestion-demo",
    demoUrl: "https://realtime-demo.example.com",
    current: true,
  },
  {
    slug: "nyc-taxi-pipeline",
    name: "NYC taxi pipeline",
    shortDescription:
      "Batch ETL with Airflow, partitioned and tested end to end.",
    longDescription:
      "An orchestrated batch pipeline over the public NYC taxi dataset. Airflow DAGs pull monthly files, clean and partition them, and load into Postgres with row-count and null checks between stages. A good exercise in idempotent runs and backfills without duplicating data.",
    tech: ["Python", "Airflow", "Postgres"],
    repoUrl: "https://github.com/arlim/nyc-taxi-pipeline",
  },
  {
    slug: "course-grade-analyzer",
    name: "Course grade analyzer",
    shortDescription:
      "Python and Pandas dashboard over my own transcript data.",
    longDescription:
      "A small analytics app that parses my transcript and visualizes grade trends by term and subject. Built mostly to get comfortable with Pandas reshaping and a lightweight Streamlit front end. Simple, but it shipped and I use it.",
    tech: ["Python", "Pandas", "Streamlit"],
    repoUrl: "https://github.com/arlim/course-grade-analyzer",
    demoUrl: "https://grades.example.com",
  },
];
