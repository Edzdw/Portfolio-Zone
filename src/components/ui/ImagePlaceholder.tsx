import { Aperture, Sparkles } from "lucide-react";
import { useState } from "react";
type Props = {
  src?: string;
  alt: string;
  tone?: string;
  className?: string;
  position?: string;
  label?: string;
  priority?: boolean;
  srcSet?: string;
  sizes?: string;
};
export default function ImagePlaceholder({
  src,
  alt,
  tone = "blue",
  className = "",
  position = "center",
  label = "YOUR PHOTO HERE",
  priority = false,
  srcSet,
  sizes,
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo photo--${tone} ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          srcSet={srcSet}
          sizes={sizes}
          style={{ objectPosition: position }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="mockup"
          role="img"
          aria-label={`${alt} — khung ảnh minh họa`}
        >
          <div className="mockup-orbit" />
          <div className="mockup-sun" />
          <div className="mockup-figure" />
          <Sparkles className="mockup-spark" size={26} />
          <span className="mockup-label">
            <Aperture size={16} />
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
