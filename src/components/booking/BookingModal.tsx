import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle, Sparkles } from "lucide-react";
import Modal from "../ui/Modal";
import {
  emptyBooking,
  sendBooking,
  todayLocal,
  validateBooking,
  type BookingDraft,
  type BookingService,
} from "../../lib/booking";
import { site } from "../../data/site";
import "./booking.css";

type Props = { open: boolean; service?: BookingService; onClose: () => void };
export default function BookingModal({ open, service, onClose }: Props) {
  const [draft, setDraft] = useState<BookingDraft>({ ...emptyBooking });
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingDraft, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const busy = useRef(false);
  const request = useRef<AbortController | null>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (open && service) setDraft((current) => ({ ...current, service }));
  }, [open, service]);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    if (status === "success" || status === "error") feedback.current?.focus();
  }, [status]);
  function update<K extends keyof BookingDraft>(
    key: K,
    value: BookingDraft[K],
  ) {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }
  function close() {
    if (busy.current) return;
    if (status === "success") {
      setDraft({ ...emptyBooking });
      setErrors({});
    }
    setStatus("idle");
    setMessage("");
    onClose();
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const invalid = validateBooking(draft);
    setErrors(invalid);
    const first = Object.keys(invalid)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    busy.current = true;
    setStatus("sending");
    setMessage("");
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      await sendBooking(draft, controller.signal);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(
        controller.signal.aborted
          ? "Kết nối mất quá lâu nên chưa xác nhận được kết quả. Bạn kiểm tra mạng hoặc nhắn mình trực tiếp trước khi gửi lại nhé."
          : error instanceof TypeError
            ? "Không kết nối được. Thông tin của bạn vẫn được giữ lại; bạn kiểm tra mạng rồi thử lại nhé."
            : error instanceof Error
              ? error.message
              : "Chưa gửi được yêu cầu. Bạn thử lại sau nhé.",
      );
    } finally {
      window.clearTimeout(timeout);
      busy.current = false;
      request.current = null;
    }
  }
  if (!open) return null;
  const inputProps = (key: keyof BookingDraft) => ({
    name: key,
    id: `booking-${key}`,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `booking-error-${key}` : undefined,
  });
  const errorFor = (key: keyof BookingDraft) =>
    errors[key] ? (
      <span className="booking-field-error" id={`booking-error-${key}`}>
        {errors[key]}
      </span>
    ) : null;
  return (
    <Modal
      label="Gửi yêu cầu chụp"
      onClose={close}
      closeDisabled={status === "sending"}
      className="booking-modal"
    >
      {status === "success" ? (
        <div
          className="booking-success"
          ref={feedback}
          tabIndex={-1}
          role="status"
        >
          <span className="booking-success-icon">
            <Check size={28} />
          </span>
          <p className="eyebrow pink">A NEW STORY BEGINS</p>
          <h2>Đã nhận yêu cầu của bạn!</h2>
          <p>
            Cảm ơn bạn đã chọn Shutter&Magic. Mình sẽ liên hệ qua số điện thoại
            bạn để lại để trao đổi concept và xác nhận lịch.
          </p>
          <p className="booking-note">
            Lịch chụp sẽ được chốt sau khi mình trao đổi với bạn.
          </p>
          <button className="button" onClick={close}>
            Xong rồi <Check size={15} />
          </button>
        </div>
      ) : (
        <div className="booking-body">
          <p className="eyebrow pink">
            <Sparkles size={12} /> LET’S MAKE A LITTLE MAGIC
          </p>
          <h2>
            Câu chuyện tiếp theo <em>của bạn</em>
          </h2>
          <p className="booking-intro">
            Kể mình nghe ý tưởng nhé. Mình sẽ liên hệ để cùng lên concept và
            trao đổi lịch chụp.
          </p>
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            aria-busy={status === "sending"}
          >
            <fieldset
              disabled={status === "sending"}
              className="booking-fields"
            >
              <div className="booking-row">
                <label className="booking-field" htmlFor="booking-name">
                  Tên / nickname <span>*</span>
                  <input
                    {...inputProps("name")}
                    value={draft.name}
                    onChange={(e) => update("name", e.target.value)}
                    autoComplete="name"
                    maxLength={80}
                    placeholder="Mình gọi bạn là…"
                    required
                  />
                  {errorFor("name")}
                </label>
                <label className="booking-field" htmlFor="booking-phone">
                  Số điện thoại / Zalo <span>*</span>
                  <input
                    {...inputProps("phone")}
                    value={draft.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={25}
                    placeholder="09xx xxx xxx"
                    required
                  />
                  {errorFor("phone")}
                </label>
              </div>
              <label className="booking-field" htmlFor="booking-service">
                Bạn muốn chụp gì? <span>*</span>
                <select
                  {...inputProps("service")}
                  value={draft.service}
                  onChange={(e) =>
                    update("service", e.target.value as BookingService)
                  }
                >
                  <option value="Cosplay">Cosplay — nhân vật bạn yêu</option>
                  <option value="Studio">Studio — chân dung & concept</option>
                  <option value="Figure">Figure — mô hình & sản phẩm</option>
                </select>
                {errorFor("service")}
              </label>
              {draft.service === "Cosplay" && (
                <label className="booking-field" htmlFor="booking-character">
                  Nhân vật bạn sẽ cosplay <span>*</span>
                  <input
                    {...inputProps("character")}
                    value={draft.character}
                    onChange={(e) => update("character", e.target.value)}
                    maxLength={160}
                    placeholder="Tên nhân vật, game / anime hoặc phiên bản…"
                    required
                  />
                  {errorFor("character")}
                </label>
              )}
              <div className="booking-row">
                <label className="booking-field" htmlFor="booking-date">
                  Ngày dự kiến <small>Không bắt buộc</small>
                  <input
                    {...inputProps("date")}
                    value={draft.date}
                    onChange={(e) => update("date", e.target.value)}
                    type="date"
                    min={todayLocal()}
                  />
                  {errorFor("date")}
                </label>
                <label className="booking-field" htmlFor="booking-location">
                  Địa điểm / tên fes <small>Không bắt buộc</small>
                  <input
                    {...inputProps("location")}
                    value={draft.location}
                    onChange={(e) => update("location", e.target.value)}
                    maxLength={180}
                    placeholder="Chưa chọn cũng được nhé"
                  />
                </label>
              </div>
              <label className="booking-field" htmlFor="booking-notes">
                Ý tưởng của bạn <small>Không bắt buộc</small>
                <textarea
                  {...inputProps("notes")}
                  value={draft.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  maxLength={2000}
                  rows={3}
                  placeholder="Concept, số người, link ảnh tham khảo hoặc điều bạn muốn hỏi…"
                />
              </label>
            </fieldset>
            {status === "error" && (
              <div
                className="booking-error"
                ref={feedback}
                tabIndex={-1}
                role="alert"
              >
                {message}
                {site.facebook && (
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nhắn Facebook <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}
            <p className="booking-note">
              Mình dùng thông tin bạn gửi để tư vấn và liên hệ xác nhận lịch
              chụp.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="button booking-submit"
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle size={16} className="booking-spinner" /> Đang
                  gửi…
                </>
              ) : (
                <>
                  Gửi yêu cầu chụp <ArrowUpRight size={16} />
                </>
              )}
            </button>
            <p className="booking-footer-note">
              Một ý tưởng nhỏ, một bộ ảnh đáng nhớ. ♡
            </p>
          </form>
        </div>
      )}
    </Modal>
  );
}
