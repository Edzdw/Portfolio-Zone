import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  albums,
  categories,
  type Album,
  type Category,
} from "../../data/albums";
import { site } from "../../data/site";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import GalleryModal from "../ui/GalleryModal";
export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("Tất cả");
  const [selected, setSelected] = useState<Album | null>(null);
  const visible = albums.filter(
    (a) => filter === "Tất cả" || a.category === filter,
  );
  return (
    <section className="section portfolio-section container" id="portfolio">
      <div className="section-heading portfolio-heading">
        <div>
          <p className="eyebrow pink">✦ PORTFOLIO</p>
          <h2>
            Some Shots <span className="title-line" />
          </h2>
        </div>
        <div className="filters" role="group" aria-label="Lọc album">
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? "active" : ""}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {site.demoImages && (
        <p className="ai-demo-label">
          Bộ ảnh AI minh họa · Chưa phải tác phẩm chụp thực tế
        </p>
      )}
      <div
        className={`portfolio-grid ${filter !== "Tất cả" ? "is-filtered" : ""}`}
      >
        {visible.map((album) => (
          <button
            key={album.id}
            className={`album-card ${album.featured ? "album-card--featured" : ""}`}
            onClick={() => setSelected(album)}
            aria-label={`Xem album ${album.title}`}
          >
            <ImagePlaceholder
              src={album.images[0].thumbnail ?? album.images[0].src}
              srcSet={album.images[0].srcSet}
              sizes={
                album.featured
                  ? "(max-width: 760px) 100vw, 50vw"
                  : "(max-width: 760px) 50vw, 25vw"
              }
              width={album.images[0].width}
              height={album.images[0].height}
              alt={album.images[0].alt}
              position={album.images[0].position}
              tone={album.tone}
              label={album.category.toUpperCase()}
            />
            <div className="album-caption">
              <div>
                <span>{album.category}</span>
                <h3>{album.title}</h3>
              </div>
              <span className="album-count">
                {album.images.length} ảnh <ArrowUpRight size={15} />
              </span>
            </div>
            {album.featured && (
              <span className="album-note handwritten">
                Your favorite
                <br />
                little universe ✧
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="portfolio-hint">
        A few stories, a little magic. <span>✧</span> Chọn một album để khám
        phá.
      </p>
      {selected && (
        <GalleryModal album={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
