import { useZaloContact } from "../contact/ZaloContact";
import { useBooking } from "../booking/BookingProvider";
import { useState } from "react";
import { Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
export default function Contact() {
  const openZalo = useZaloContact();
  const { openBooking } = useBooking();
  const [notice, setNotice] = useState("");
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <span className="handwritten">
          Let’s create
          <br />
          something amazing!
        </span>
        <div>
          <p className="eyebrow pink">YOUR NEXT STORY STARTS HERE</p>
          <h2>Bạn muốn đặt lịch chụp?</h2>
          <p>
            Nhắn mình, cùng biến ý tưởng của bạn thành những khung hình nhé!
          </p>
        </div>
        <div className="contact-buttons">
          <button
            type="button"
            className="button contact-zalo"
            onClick={openZalo}
          >
            Zalo <ArrowUpRight size={14} />
          </button>
          <button
            type="button"
            className="button"
            onClick={() => openBooking()}
          >
            Gửi yêu cầu chụp <ArrowUpRight size={14} />
          </button>
          {[
            { name: "Facebook", url: site.facebook, Icon: Facebook },
            { name: "Instagram", url: site.instagram, Icon: Instagram },
          ].map(({ name, url, Icon }) =>
            url ? (
              <a
                key={name}
                className={`button contact-${name.toLowerCase()}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={17} />
                {name}
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <button
                key={name}
                className={`button contact-${name.toLowerCase()}`}
                onClick={() =>
                  setNotice(
                    `Kênh ${name} đang được cập nhật. Bạn vui lòng quay lại sau nhé!`,
                  )
                }
              >
                <Icon size={17} />
                {name}
                <ArrowUpRight size={14} />
              </button>
            ),
          )}
        </div>
      </div>
      {notice && (
        <div className="contact-notice container" role="status">
          {notice}
          <button onClick={() => setNotice("")} aria-label="Đóng thông báo">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
