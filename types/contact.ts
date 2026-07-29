export type ContactIcon = "github" | "linkedin" | "resume";

export interface ContactLink {
  /** Stable key for React. */
  id: string;
  /** Which icon to render in the tile. */
  icon: ContactIcon;
  /** Tile title, e.g. "GitHub". */
  label: string;
  /** Small line under the title, e.g. "github.com/arlim". */
  detail: string;
  href: string;
  /** True for external sites — opens in a new tab. False for local files. */
  external?: boolean;
}

export interface ContactInfo {
  /** Shown as the big coral button and used for the mailto link. */
  email: string;
  /** Small pill above the heading. Omit to hide it. */
  badge?: string;
  heading: string;
  /** One or two sentences under the heading. */
  blurb: string;
  links: ContactLink[];
}
