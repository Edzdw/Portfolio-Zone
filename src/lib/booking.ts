export const BOOKING_ENDPOINT = "https://formspree.io/f/xaeqrzwk";
export type BookingService = "Cosplay" | "Studio" | "Figure";
export type BookingDraft = {
  name: string;
  phone: string;
  service: BookingService;
  character: string;
  date: string;
  location: string;
  notes: string;
};
export const emptyBooking: BookingDraft = {
  name: "",
  phone: "",
  service: "Cosplay",
  character: "",
  date: "",
  location: "",
  notes: "",
};
export function todayLocal() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function validateBooking(
  draft: BookingDraft,
): Partial<Record<keyof BookingDraft, string>> {
  const errors: Partial<Record<keyof BookingDraft, string>> = {};
  if (!draft.name.trim())
    errors.name = "Bạn cho mình biết tên hoặc nickname nhé.";
  const digits = draft.phone.replace(/\D/g, "");
  if (
    !/^\+?[\d\s().-]+$/.test(draft.phone.trim()) ||
    digits.length < 9 ||
    digits.length > 15
  )
    errors.phone = "Nhập số điện thoại hợp lệ, từ 9–15 chữ số.";
  if (!["Cosplay", "Studio", "Figure"].includes(draft.service))
    errors.service = "Bạn chọn một dịch vụ nhé.";
  if (draft.service === "Cosplay" && !draft.character.trim())
    errors.character = "Bạn dự định cosplay nhân vật nào?";
  if (draft.date && draft.date < todayLocal())
    errors.date = "Bạn chọn ngày từ hôm nay trở đi nhé.";
  return errors;
}
export async function sendBooking(draft: BookingDraft, signal: AbortSignal) {
  const body = new FormData();
  body.set("_subject", `Yêu cầu chụp ${draft.service} — ${draft.name.trim()}`);
  body.set("name", draft.name.trim());
  body.set("phone", draft.phone.trim());
  body.set("service", draft.service);
  if (draft.service === "Cosplay")
    body.set("character", draft.character.trim());
  if (draft.date) body.set("preferred_date", draft.date);
  if (draft.location.trim())
    body.set("location_or_event", draft.location.trim());
  if (draft.notes.trim()) body.set("notes", draft.notes.trim());
  body.set("_gotcha", "");
  const response = await fetch(BOOKING_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
    signal,
  });
  const result = await response.json().catch(() => null);
  if (response.status === 429)
    throw new Error(
      "Hiện chưa gửi được yêu cầu. Bạn thử lại sau hoặc nhắn mình qua Facebook / Instagram nhé.",
    );
  if (!response.ok || result?.ok !== true)
    throw new Error(
      "Chưa gửi được yêu cầu. Thông tin vẫn được giữ lại; bạn kiểm tra lại hoặc nhắn mình trực tiếp nhé.",
    );
}
