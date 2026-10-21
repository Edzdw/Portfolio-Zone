import { type CSSProperties } from "react";
import useHeroSlideshow from "../../hooks/useHeroSlideshow";
import { heroPhotos } from "../../data/hero";
import { ArrowDownRight, Play, Pause } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";
export default function Hero() {
  const {
    heroRef,
    frame,
    enabled,
    playing,
    markReady,
    toggle,
    setHovered,
    setFocused,
  } = useHeroSlideshow(heroPhotos.length);
  const photo = heroPhotos[frame.current];
  return (
    <section
      ref={heroRef}
      className="hero"
      data-playing={playing}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setFocused(false);
      }}
      id="home"
      style={
        {
          "--hero-mobile-position": photo.mobilePosition,
          "--hero-quote-color": photo.quoteColor,
        } as CSSProperties
      }
    >
      <div
        className="hero-art"
        role="group"
        aria-label="Ảnh cosplay nổi bật"
        aria-roledescription="trình chiếu"
        aria-live="off"
      >
        {heroPhotos.map((item, index) => (
          <div
            key={item.src}
            className={`hero-slide ${index === frame.current ? "is-active" : index === frame.previous ? "is-previous" : ""}`}
            aria-hidden={index !== frame.current}
            style={
              { "--hero-mobile-position": item.mobilePosition } as CSSProperties
            }
          >
            <ImagePlaceholder
              src={item.src}
              srcSet={item.srcSet}
              sizes="(max-width: 760px) 100vw, 77vw"
              width={item.width}
              height={item.height}
              priority={index === 0}
              eager
              onLoad={() => markReady(index)}
              position={item.position}
              alt={item.alt}
              tone="blue"
              label="COSPLAY PHOTOGRAPHY"
            />
          </div>
        ))}
      </div>
      <div className="container hero-content">
        <p className="eyebrow">
          COSPLAY <span>PHOTOGRAPHY</span>
        </p>
        <h1>
          Capture
          <br />
          Your
          <br />
          Favorite <em>World</em>
        </h1>
        <p className="hero-description">
          Lưu giữ khoảnh khắc bạn yêu thích
          <br />
          qua từng khung hình.
        </p>
        <div className="hero-buttons">
          <Button>Đặt lịch chụp</Button>
          <a className="text-button" href="#portfolio">
            <Play size={23} fill="currentColor" />
            Xem portfolio
          </a>
        </div>
        <div className="hero-footnote">
          <span className="tiny-star">✦</span> Your character. Your story. Our
          magic.
        </div>
      </div>
      <div className="hero-note handwritten">
        Nhân vật
        <br />
        có thể là ước mơ,
        <br />
        nhưng khoảnh khắc
        <br />
        thì có thật.<span>— Shutter&Magic ✧</span>
      </div>
      <a href="#services" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight size={20} />
      </a>
      <div
        className="hero-playback"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
      >
        <button
          className="hero-playback-toggle"
          onClick={toggle}
          aria-label={enabled ? "Tạm dừng trình chiếu" : "Phát trình chiếu"}
        >
          {enabled ? (
            <Pause size={13} aria-hidden="true" />
          ) : (
            <Play size={13} aria-hidden="true" />
          )}
        </button>
        <div className="hero-slide-indicators" aria-hidden="true">
          {heroPhotos.map((item, index) => (
            <span
              key={item.src}
              className={frame.current === index ? "is-active" : ""}
            >
              <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
