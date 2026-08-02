import * as motion from "motion/react-client";
import { Mail, FileText } from "lucide-react";
import { contact as defaultContact } from "@/data/contact";
import type { ContactIcon, ContactInfo } from "@/types/contact";
import { ResumeDialog } from "@/components/ResumeDialog";

type ContactLink = ContactInfo["links"][number];

const TILE_CLASS =
  "block rounded-xl border border-default-hairline-border bg-white p-5 transition-colors hover:border-gold-primary";

/** lucide-react dropped brand marks in v1, so brand logos are inline SVGs. */
function GithubMark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinMark({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function TileIcon({ icon }: { icon: ContactIcon }) {
  if (icon === "github") return <GithubMark size={20} />;
  if (icon === "linkedin") return <LinkedinMark size={20} />;
  return <FileText size={20} aria-hidden="true" />;
}

/** Tile guts, shared by the plain-anchor and dialog-wrapped variants. */
function TileBody({ link }: { link: ContactLink }) {
  return (
    <>
      <span className="mx-auto mb-2.5 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-gold-primary text-paper">
        <TileIcon icon={link.icon} />
      </span>
      <span className="block text-sm font-medium text-charcoal-ink">
        {link.label}
      </span>
      <span className="mt-0.5 block text-xs text-ash-subtle">
        {link.detail}
      </span>
    </>
  );
}

interface ContactSectionProps {
  /** Defaults to data/contact.ts. */
  info?: ContactInfo;
  /** Shown in the footer beside the copyright. */
  name?: string;
}

export function ContactSection({
  info = defaultContact,
  name = "Arlim Macaldo",
}: ContactSectionProps) {
  const { email, badge, heading, blurb, links } = info;
  const year = new Date().getFullYear();

  return (
    <>
      <section
        id="contact"
        className="bg-paper px-6 pb-[52px] pt-[72px] text-center md:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-[1080px]"
        >
          {badge && (
            <span className="inline-block rounded-full border border-gold-primary bg-cream px-3 py-1.5 text-xs text-gold-text">
              {badge}
            </span>
          )}

          <h2 className="mx-auto mb-3.5 mt-5 max-w-[620px] text-[34px] font-medium leading-tight text-charcoal-ink">
            {heading}
          </h2>
          <p className="mx-auto mb-8 max-w-[460px] text-[17px] leading-relaxed text-ash-muted-text">
            {blurb}
          </p>

          <a
            href={`mailto:${email}`}
            className="mb-11 inline-flex items-center gap-2 rounded-[10px] bg-coral px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-coral-hover"
          >
            <Mail size={18} aria-hidden="true" />
            {email}
          </a>

          <ul className="mx-auto grid max-w-[560px] list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.id}>
                {link.icon === "resume" ? (
                  <ResumeDialog href={link.href} className={TILE_CLASS}>
                    <TileBody link={link} />
                  </ResumeDialog>
                ) : (
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={TILE_CLASS}
                  >
                    <TileBody link={link} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <footer className="border-t border-default-hairline-border bg-paper px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between">
          <span className="text-[13px] text-ash-muted-text">{name}</span>
          <span className="text-xs text-ash-subtle">© {year}</span>
        </div>
      </footer>
    </>
  );
}
