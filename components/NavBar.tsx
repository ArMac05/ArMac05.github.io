"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

/** Shared between the desktop row and the mobile drawer. */
function linkClass(isActive: boolean) {
  return isActive
    ? "text-gold-contact underline underline-offset-4"
    : "text-charcoal-ink hover:text-gold-label";
}

export function Navbar({
  brand = "Arlim Macaldo",
  links = defaultLinks,
  heroId = "hero",
  pillMaxWidth = 1080,
}: NavbarProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  /** Escape closes the drawer; so does growing past the breakpoint that hides it. */
  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 768px)");
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out motion-reduce:transition-none ${
        expanded ? "p-0" : "px-4 py-3 md:px-6 md:py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto overflow-hidden bg-cream transition-[max-width,border-radius,box-shadow] duration-300 ease-out motion-reduce:transition-none"
        style={{
          // Percent, not vw — vw counts the scrollbar gutter and overflows.
          maxWidth: expanded ? "100%" : `${pillMaxWidth}px`,
          // A capsule can't hold the drawer, so square it off while that's open.
          borderRadius: expanded ? "0px" : menuOpen ? "20px" : "999px",
          boxShadow: expanded
            ? "0 1px 0 0 var(--color-hairline)"
            : "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        }}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-3 md:px-8 md:py-4">
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            // -my-2 cancels the padding's layout cost, so the hit area grows
            // to ~40px without making the bar taller.
            className="-my-2 py-2 text-base font-semibold tracking-tight text-charcoal-ink sm:text-lg md:text-xl"
          >
            {brand}
          </a>

          <ul className="hidden list-none items-center gap-5 p-0 md:flex md:gap-8">
            {links.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-sm font-semibold transition-colors md:text-base ${linkClass(isActive)}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 flex-none items-center justify-center rounded-full text-charcoal-ink transition-colors hover:text-gold-label md:hidden"
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="border-t border-default-hairline-border px-5 pb-2 md:hidden"
        >
          <ul className="list-none p-0">
            {links.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block py-3 text-base font-semibold transition-colors ${linkClass(isActive)}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
