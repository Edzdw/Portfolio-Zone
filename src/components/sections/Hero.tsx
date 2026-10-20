import { ArrowDownRight, Play } from "lucide-react";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-art">
        <ImagePlaceholder
          alt="Ảnh cosplay chủ đạo"
          tone="blue"
          label="HERO / YOUR FAVORITE WORLD"
        />
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
      <div className="hero-number">
        01 <span /> 03
      </div>
    </section>
  );
}
