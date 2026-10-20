import { testimonials } from "../../data/testimonials";
export default function Testimonials() {
  return (
    <section className="section container testimonials">
      <div className="section-heading">
        <div>
          <p className="eyebrow">✦ FEEDBACK</p>
          <h2>
            Khách hàng nói gì? <span className="title-line" />
          </h2>
        </div>
        <span className="sample-badge">Nội dung minh họa</span>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <article className="testimonial" key={t.name}>
            <div className="review-person">
              <span className="avatar">{t.initials}</span>
              <div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                <span className="stars" aria-label="5 trên 5 sao">
                  ★★★★★
                </span>
              </div>
              <span className="quote-mark">“</span>
            </div>
            <blockquote>“{t.quote}”</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
