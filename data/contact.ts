import type { ContactInfo } from "@/types/contact";

export const contact: ContactInfo = {
  email: "arlim.macaldo@gmail.com",
  badge: "Open to internships",
  heading: "Let's build something together.",
  blurb:
    "Looking for a data engineering internship where I can learn from people who do this for real. The fastest way to reach me is email.",
  links: [
    {
      id: "github",
      icon: "github",
      label: "GitHub",
      detail: "github.com/arlim",
      href: "https://github.com/ArMac05",
      external: true,
    },
    {
      id: "linkedin",
      icon: "linkedin",
      label: "LinkedIn",
      detail: "linkedin.com/in/arlim",
      href: "https://www.linkedin.com/in/arlim-macaldo",
      external: true,
    },
    {
      id: "resume",
      icon: "resume",
      label: "Résumé",
      detail: "PDF, one page",
      href: "/Arlim-Macaldo-Resume.pdf",
    },
  ],
};
