import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export default function Button({
  children,
  href = "#contact",
  outline = false,
}: {
  children: ReactNode;
  href?: string;
  outline?: boolean;
}) {
  return (
    <a className={`button ${outline ? "button--outline" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}
