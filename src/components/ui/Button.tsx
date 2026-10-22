import { useBooking } from "../booking/BookingProvider";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export default function Button({
  children,
  href,
  outline = false,
}: {
  children: ReactNode;
  href?: string;
  outline?: boolean;
}) {
  const { openBooking } = useBooking();
  const content = (
    <>
      {children}
      <ArrowUpRight size={15} />
    </>
  );
  const className = `button ${outline ? "button--outline" : ""}`;
  return href ? (
    <a className={className} href={href}>
      {content}
    </a>
  ) : (
    <button type="button" className={className} onClick={() => openBooking()}>
      {content}
    </button>
  );
}
