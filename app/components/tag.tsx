import { ReactNode } from "react";

interface TagProps {
  text: string;
  icon?: ReactNode;
  className: string;
  text_className: string;
}

function Tag({ text, icon, className = "", text_className = "" }: TagProps) {
  return (
    <div className={`${className}`}>
      <p className={`${text_className}`}>{text}</p>
    </div>
  );
}

export default Tag;
