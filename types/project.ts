export interface Project {
  /** Stable identifier — used as the React key and the anchor id. */
  slug: string;
  /** Shown collapsed and expanded. Keep it short. */
  name: string;
  /** One line, visible in the collapsed state. Aim for under ~90 characters. */
  shortDescription: string;
  /** The full story, revealed on expand. A paragraph or two. */
  longDescription: string;
  /** Tech stack chips. Order matters — put the most relevant tool first. */
  tech: string[];
  /** Public repo URL. Omit if the repo is private. */
  repoUrl?: string;
  /** Live demo URL. Omit and the coral demo button won't render. */
  demoUrl?: string;
  /** Screenshot of the actual project. Omit to show the placeholder. */
  image?: {
    src: string;
    /** Describe what the screenshot shows, not "screenshot of project". */
    alt: string;
  };
  /** Marks the current/most recent project with a coral node on the pole. */
  current?: boolean;
}
