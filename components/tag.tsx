import { twMerge } from "tailwind-merge";

interface TagProps {
  text: string;
  className?: string;
}

// tag.tsx
export default function Tag({ text, className = "" }: TagProps) {
  return (
    <span
      className={twMerge("rounded-2xl border-1 px-3 py-1 w-fit ...", className)}
    >
      {text}
    </span>
  );
}
