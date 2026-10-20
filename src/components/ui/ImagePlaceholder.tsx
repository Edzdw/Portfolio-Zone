import { Aperture, Sparkles } from "lucide-react";
import { useState } from "react";
type Props = {
  src?: string;
  alt: string;
  tone?: string;
  className?: string;
  position?: string;
  label?: string;
};
export default function ImagePlaceholder({
  src,
  alt,
  tone = "blue",
  className = "",
  position = "center",
  label = "YOUR PHOTO HERE",
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo photo--${tone} ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
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
