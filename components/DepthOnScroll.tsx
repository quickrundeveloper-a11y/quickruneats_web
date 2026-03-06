"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxScale?: number; // subtle zoom toward center (0..~0.2)
  side?: "left" | "right" | "top" | "bottom"; // which side to move inward from
  translatePx?: number; // max shift toward center
  axis?: "x" | "y"; // movement axis
  mode?: "linear" | "circle"; // movement path
  radiusPx?: number; // circle radius (when mode=circle)
  phaseDeg?: number; // phase offset for circle path
  reverse?: boolean; // reverse direction
  motion?: "pull" | "inout";
};

export default function DepthOnScroll({
  children,
  className,
  maxScale = 0.06,
  side = "left",
  translatePx = 16,
  axis = "x",
  mode = "linear",
  radiusPx,
  phaseDeg = 0,
  reverse = false,
  motion = "pull",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.willChange = "transform";
    el.style.transformOrigin = "50% 50%";
    el.style.transition = "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)";

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const norm = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2))); // -1..1
      const s = 1 + maxScale * (1 - Math.abs(norm));
      const base = motion === "inout" ? norm : 1 - Math.abs(norm);
      if (mode === "circle") {
        const r = radiusPx ?? translatePx;
        const sign = reverse ? -1 : 1;
        const angle = sign * norm * Math.PI + (phaseDeg * Math.PI) / 180;
        const tx = r * Math.cos(angle);
        const ty = r * Math.sin(angle);
        el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) scale(${s.toFixed(3)})`;
      } else if (axis === "y") {
        const dirY = side === "top" ? 1 : side === "bottom" ? -1 : 1;
        const ty = dirY * translatePx * base;
        el.style.transform = `translateY(${ty.toFixed(2)}px) scale(${s.toFixed(3)})`;
      } else {
        const dirX = side === "left" ? 1 : -1;
        const tx = dirX * translatePx * base;
        el.style.transform = `translateX(${tx.toFixed(2)}px) scale(${s.toFixed(3)})`;
      }
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxScale, side, translatePx, motion, axis, mode, radiusPx, phaseDeg, reverse]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
