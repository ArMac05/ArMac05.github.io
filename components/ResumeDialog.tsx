// components/ResumeDialog.tsx
"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { X, ExternalLink } from "lucide-react";

export function ResumeDialog({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  function open(e: MouseEvent<HTMLAnchorElement>) {
    // let cmd/ctrl/shift-click open a real tab
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    // mobile browsers don't render PDFs in iframes — send them to the tab
    if (window.matchMedia("(max-width: 767px)").matches) return;
    e.preventDefault();
    ref.current?.showModal();
  }

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={open}
        className={className}
      >
        {children}
      </a>

      <dialog
        ref={ref}
        aria-label="Resume"
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-auto h-[85vh] w-[min(900px,92vw)] overflow-hidden rounded-xl bg-coral p-0 backdrop:bg-charcoal-ink/60 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between border-b border-default-hairline-border px-5 py-3">
          <span className="text-sm font-medium text-cream">Resume</span>
          <div className="flex items-center gap-1">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-ash-muted-text transition-colors hover:bg-cream hover:text-charcoal-ink"
              aria-label="Open in new tab"
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="rounded-md p-2 text-ash-muted-text transition-colors hover:bg-cream hover:text-charcoal-ink"
              aria-label="Close"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <iframe src={href} title="Resume" className="w-full flex-1 border-0" />
      </dialog>
    </>
  );
}
