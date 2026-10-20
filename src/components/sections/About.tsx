import {
  Camera,
  Heart,
  MapPin,
  Star,
  Gamepad2,
  Sparkles,
  Cat,
} from "lucide-react";
import { site } from "../../data/site";
import ImagePlaceholder from "../ui/ImagePlaceholder";
export default function About() {
  return (
    <section className="section container" id="about">
      <div className="about-panel">
        <div className="about-copy">
          <p className="eyebrow pink">✦ VỀ PHOTOGRAPHER</p>
          <h2>
            Hi, I’m <em>{site.photographer}</em> <Cat size={29} />
          </h2>
          <p>{site.description}</p>
          <div className="interests">
            {[
              [Cat, "Anime"],
              [Gamepad2, "Game"],
              [Sparkles, "Cosplay"],
              [Camera, "Photography"],
            ].map(([Icon, label]) => {
              const C = Icon as typeof Camera;
              return (
                <span key={String(label)}>
                  <C size={23} />
                  {String(label)}
                </span>
              );
            })}
          </div>
        </div>
        <div className="about-polaroid">
          <ImagePlaceholder
            alt="Chân dung photographer"
            tone="sage"
            label="YOUR PORTRAIT"
          />
          <span className="handwritten">See you in the next adventure!</span>
          <span className="tape" />
        </div>
        <div className="about-facts">
          {[
            [Camera, "Kinh nghiệm", site.experience],
            [Heart, "Phong cách", "Tự nhiên, sinh động, đậm chất nhân vật"],
            [MapPin, "Địa điểm", site.location],
            [Star, "Thiết bị", site.equipment],
          ].map(([Icon, title, value]) => {
            const C = Icon as typeof Camera;
            return (
              <div className="fact" key={String(title)}>
                <C size={23} />
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(value)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
