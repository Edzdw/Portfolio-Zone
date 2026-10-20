import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
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
          <a href="#contact" className="button button--small">
            Đặt lịch chụp <ArrowUpRight size={14} />
          </a>
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
