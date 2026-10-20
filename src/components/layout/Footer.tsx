import { Brand, links } from "./Header";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Brand />
        <nav aria-label="Điều hướng cuối trang">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <span className="handwritten">
          Thanks for
          <br />
          your support! ✧
        </span>
      </div>
      <div className="container footer-bottom">
        <span>Cosplay × Photography × Memories</span>
        <span>
          © {new Date().getFullYear()} Shutter&Magic. Made with a little magic.
        </span>
        <a href="#home">Về đầu trang ↑</a>
      </div>
    </footer>
  );
}
