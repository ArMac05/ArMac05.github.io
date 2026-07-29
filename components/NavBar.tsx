"use client";

import { useEffect, useState } from "react";
import { navLinks as defaultLinks } from "@/data/nav";
import type { NavLink } from "@/types/nav";

interface NavbarProps {
  brand?: string;
  links?: NavLink[];
  /** Id of the hero section — the navbar expands once you scroll past it. */
  heroId?: string;
  /** Max width of the floating pill while it sits inside the hero. */
  pillMaxWidth?: number;
}

export function Navbar({
  brand = "Arlim Macaldo",
  links = defaultLinks,
  heroId = "hero",
  pillMaxWidth = 1080,
}: NavbarProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  /** Expand to full width once the hero has scrolled past. */
  useEffect(() => {
    let frame = 0;

    function measure() {
      const hero = document.getElementById(heroId);
      const heroBottom = hero
        ? hero.offsetTop + hero.offsetHeight
        : window.innerHeight;
      // Flip a little before the seam so it never lands mid-gap.
      setExpanded(window.scrollY > heroBottom - 96);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [heroId]);

  /** Highlight whichever section is currently in view. */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (inView) setActiveId(inView.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out motion-reduce:transition-none"
      style={{ padding: expanded ? "0px" : "16px 24px" }}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex items-center justify-between bg-cream px-6 py-4 transition-[max-width,border-radius,box-shadow] duration-300 ease-out motion-reduce:transition-none md:px-8"
        style={{
          maxWidth: expanded ? "100vw" : `${pillMaxWidth}px`,
          borderRadius: expanded ? "0px" : "999px",
          boxShadow: expanded
            ? "0 1px 0 0 var(--color-hairline)"
            : "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        }}
      >
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-charcoal-ink md:text-xl"
        >
          {brand}
        </a>

        <ul className="flex list-none items-center gap-5 p-0 md:gap-8">
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-semibold transition-colors md:text-base ${
                    isActive
                      ? "text-gold-contact underline underline-offset-4"
                      : "text-charcoal-ink hover:text-gold-label"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
