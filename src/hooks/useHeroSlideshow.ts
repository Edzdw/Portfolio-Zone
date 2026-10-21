import { useCallback, useEffect, useRef, useState } from "react";

export const HERO_INTERVAL = 7000;

export default function useHeroSlideshow(count: number) {
  const heroRef = useRef<HTMLElement>(null);
  const remaining = useRef(HERO_INTERVAL);
  const [frame, setFrame] = useState({ current: 0, previous: -1 });
  const [ready, setReady] = useState<Set<number>>(() => new Set());
  const [enabled, setEnabled] = useState(() =>
    typeof window === "undefined"
      ? false
      : !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(
    () =>
      typeof document !== "undefined" && document.visibilityState !== "hidden",
  );
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      if (media.matches) setEnabled(false);
    };
    const onVisibility = () =>
      setVisible(document.visibilityState !== "hidden");
    media.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            if (entry) setInView(entry.isIntersecting);
          })
        : undefined;
    if (heroRef.current) observer?.observe(heroRef.current);
    return () => {
      media.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, []);

  const playing =
    enabled && !hovered && !focused && visible && inView && ready.size > 1;

  useEffect(() => {
    if (!playing) return;
    const started = performance.now();
    let fired = false;
    const timer = window.setTimeout(() => {
      fired = true;
      remaining.current = HERO_INTERVAL;
      // Skip unavailable photos; retain the current image until another is loaded.
      let next = frame.current;
      for (let step = 1; step < count; step++) {
        const candidate = (frame.current + step) % count;
        if (ready.has(candidate)) {
          next = candidate;
          break;
        }
      }
      setFrame({ current: next, previous: frame.current });
    }, remaining.current);
    return () => {
      window.clearTimeout(timer);
      if (!fired)
        remaining.current = Math.max(
          0,
          remaining.current - (performance.now() - started),
        );
    };
  }, [playing, frame.current, ready, count]);

  const markReady = useCallback((index: number) => {
    setReady((current) =>
      current.has(index) ? current : new Set([...current, index]),
    );
  }, []);

  const toggle = () => {
    setEnabled((value) => !value);
    // An explicit Play action takes effect immediately, including with keyboard focus.
    setHovered(false);
    setFocused(false);
  };

  return {
    heroRef,
    frame,
    enabled,
    playing,
    markReady,
    toggle,
    setHovered,
    setFocused,
  };
}
