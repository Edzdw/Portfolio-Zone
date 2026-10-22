import { useBooking } from "../booking/BookingProvider";
import { useEffect, useRef, useState } from "react";
import { Instagram, Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
export const links = [
  ["Trang chủ", "home"],
  ["Dịch vụ", "services"],
  ["Portfolio", "portfolio"],
  ["Giới thiệu", "about"],
  ["Liên hệ", "contact"],
];
export function Brand() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="Shutter and Magic — Trang chủ"
    >
      <span className="brand-star">✦</span>
      <span>
        {site.name}
        <small>COSPLAY PHOTOGRAPHY</small>
      </span>
    </a>
  );
}
export default function Header() {
  const { openBooking } = useBooking();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const hero = document.getElementById("home");
    if (!header || !hero) return;

    let observer: IntersectionObserver | undefined;
    const watchHero = () => {
      observer?.disconnect();
      const edge = Math.ceil(header.getBoundingClientRect().bottom);
      // Read immediately for restored scroll positions and direct section links.
      setPastHero(hero.getBoundingClientRect().bottom <= edge);
      if (!("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          setPastHero(
            !entry.isIntersecting && entry.boundingClientRect.bottom <= edge,
          );
        },
        { rootMargin: `-${edge}px 0px 0px 0px`, threshold: 0 },
      );
      observer.observe(hero);
    };

    watchHero();
    // Re-measure the edge when the header switches between mobile and desktop.
    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(watchHero)
        : undefined;
    resizeObserver?.observe(header);
    window.addEventListener("resize", watchHero);
    return () => {
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", watchHero);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="header"
      data-surface={pastHero ? "glass" : "hero"}
      data-menu-open={open}
    >
      <div className="header-inner">
        <Brand />
        <nav
          id="main-menu"
          className={open ? "nav is-open" : "nav"}
          aria-label="Điều hướng chính"
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="social-icon"
            href="#contact"
            aria-label="Thông tin Instagram"
          >
            <Instagram size={18} />
          </a>
          <button
            type="button"
            className="button button--small"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
          >
            Đặt lịch chụp <ArrowUpRight size={14} />
          </button>
          <button
            className="menu-toggle icon-button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
