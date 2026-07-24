import { ReactNode, PropsWithChildren } from "react";
import Tag from "./tag";

interface ListProps {
  title: string;
  // tag: ReactNode;
  children: ReactNode;
  className?: string;
  text_className?: string;
}

function List_Container({
  title,
  children,
  //tag,
  className = "",
  text_className = "",
}: ListProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-2 w-1/2 bg-gold-primary border-gold-primary border-2"></div>
      <p className={`${text_className}`}>{title}</p>
      {children}
    </div>
  );
}

export default List_Container;
