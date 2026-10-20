import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Album } from "../../data/albums";
import { site } from "../../data/site";
import Modal from "./Modal";
import ImagePlaceholder from "./ImagePlaceholder";
export default function GalleryModal({
  album,
  onClose,
}: {
  album: Album;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const count = album.images.length;
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [count]);
  const photo = album.images[index];
  return (
    <Modal
      onClose={onClose}
      label={`Album ${album.title}`}
      className="gallery-modal"
    >
      <ImagePlaceholder
        key={`${album.id}-${index}`}
        src={photo.src}
        alt={photo.alt}
        position={photo.position}
        tone={album.tone}
        priority
        label={`PHOTO ${String(index + 1).padStart(2, "0")}`}
      />
      <div className="gallery-bottom">
        <div>
          <span className="eyebrow">{album.category}</span>
          <h3>{album.title}</h3>
          <p>{photo.alt}</p>
          {site.demoImages && <p>Ảnh AI minh họa</p>}
        </div>
        <div className="gallery-controls">
          <button
            className="icon-button"
            aria-label="Ảnh trước"
            disabled={count < 2}
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
          >
            <ChevronLeft />
          </button>
          <span aria-live="polite">
            {index + 1} / {count}
          </span>
          <button
            className="icon-button"
            aria-label="Ảnh tiếp theo"
            disabled={count < 2}
            onClick={() => setIndex((i) => (i + 1) % count)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </Modal>
  );
}
