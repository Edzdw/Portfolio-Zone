import { useState } from "react";
import { Camera, Sparkles, Check, ArrowUpRight } from "lucide-react";
import { services, type Service } from "../../data/services";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  return (
    <section className="section container" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">✦ DỊCH VỤ</p>
          <h2>
            Photography <em>Service</em>
          </h2>
          <p>
            Hai phong cách chụp, cùng một đam mê — ghi lại những
            <br className="desktop-break" /> khoảnh khắc đẹp nhất của bạn.
          </p>
        </div>
        <a href="#contact" className="small-link">
          Cùng lên concept nhé <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="service-grid">
        {services.map((service, i) => (
          <article className="service-card" key={service.id}>
            <div className="service-image">
              <ImagePlaceholder
                src={service.image}
                alt={service.title}
                tone={service.tone}
                label={
                  service.id === "studio"
                    ? "STUDIO / PORTRAIT"
                    : "COSPLAY / CHARACTER"
                }
              />
              <span className="handwritten">{service.note}</span>
            </div>
            <div className="service-info">
              <div className="service-title">
                {i === 0 ? <Camera /> : <Sparkles />}
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>
                    <Check size={13} />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                className="button button--outline"
                onClick={() => setSelected(service)}
              >
                Xem chi tiết <ArrowUpRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <Modal label={selected.title} onClose={() => setSelected(null)}>
          <div className="service-detail">
            <span className="eyebrow">✦ PHOTOGRAPHY SERVICE</span>
            <h2>{selected.title}</h2>
            <p className="handwritten">{selected.subtitle}</p>
            <p>{selected.detail}</p>
            <div onClick={() => setSelected(null)}>
              <Button>Liên hệ tư vấn</Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
