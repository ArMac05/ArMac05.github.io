"use client";

import { useSyncExternalStore } from "react";
import { twMerge } from "tailwind-merge";
import * as motion from "motion/react-client";

interface TagProps {
  text: string;
  className?: string;
}

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Drag is a mouse-only flourish. On a touchscreen a draggable span swallows
 * the swipe, so a thumb landing on a tag would stop the page from scrolling.
 * Server renders as "not fine" so the pre-hydration markup never binds drag.
 */
function useFinePointer() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );
}

export default function Tag({ text, className = "" }: TagProps) {
  const canDrag = useFinePointer();

  return (
    <motion.span
      drag={canDrag}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 50, bounceDamping: 25 }}
      className={twMerge("rounded-2xl border-1 px-3 py-1 w-fit", className)}
    >
      {text}
    </motion.span>
  );
}
