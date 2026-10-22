import { createContext, useContext, useState, type ReactNode } from "react";
import type { BookingService } from "../../lib/booking";
import BookingModal from "./BookingModal";
const BookingContext = createContext<{
  openBooking: (service?: BookingService) => void;
} | null>(null);
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("BookingProvider is required");
  return context;
}
export default function BookingProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<{ service?: BookingService } | null>(
    null,
  );
  return (
    <BookingContext.Provider
      value={{ openBooking: (service) => setRequest({ service }) }}
    >
      {children}
      <BookingModal
        open={request !== null}
        service={request?.service}
        onClose={() => setRequest(null)}
      />
    </BookingContext.Provider>
  );
}
