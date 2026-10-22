import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowUpRight, Download, QrCode } from "lucide-react";
import Modal from "../ui/Modal";
import { site } from "../../data/site";
import "./zalo.css";

const ZaloContext = createContext<(() => void) | null>(null);
export function useZaloContact() {
  const open = useContext(ZaloContext);
  if (!open) throw new Error("ZaloContactProvider is required");
  return open;
}
export default function ZaloContactProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <ZaloContext.Provider value={() => setOpen(true)}>
      {children}
      <button
        type="button"
        className="zalo-floating"
        aria-label={`Nhắn ${site.photographer} qua Zalo — mở mã QR`}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <span className="zalo-floating-label">Nhắn mình qua Zalo</span>
        <span className="zalo-wordmark" aria-hidden="true">
          Zalo
        </span>
      </button>
      {open && (
        <Modal
          label={`Kết nối Zalo với ${site.photographer}`}
          onClose={() => setOpen(false)}
          className="zalo-modal"
        >
          <div className="zalo-modal-body">
            <p className="eyebrow pink">LET’S TALK ABOUT YOUR NEXT SHOOT</p>
            <h2>
              Nhắn mình qua <em>Zalo</em>
            </h2>
            <p className="zalo-intro">
              Quét mã để trao đổi concept và lịch chụp với {site.photographer}{" "}
              nhé.
            </p>
            <div className="zalo-qr-frame">
              <img
                src={site.zalo.qrImage}
                alt={`Mã QR liên hệ Zalo của ${site.photographer}`}
                width={592}
                height={592}
              />
            </div>
            <div className="zalo-modal-actions">
              {site.zalo.profileUrl && (
                <a
                  className="button zalo-open"
                  href={site.zalo.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mở Zalo <ArrowUpRight size={15} />
                </a>
              )}
              <a
                className="button button--outline"
                href={site.zalo.qrImage}
                download="shutter-magic-zalo-qr.png"
              >
                <Download size={15} />
                Lưu mã QR
              </a>
            </div>
            <p className="zalo-help">
              <QrCode size={14} /> Đang xem trên điện thoại? Bạn có thể lưu mã
              để quét từ ảnh trong Zalo.
            </p>
          </div>
        </Modal>
      )}
    </ZaloContext.Provider>
  );
}
