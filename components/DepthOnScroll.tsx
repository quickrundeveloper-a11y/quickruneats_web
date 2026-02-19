"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxScale?: number; // subtle zoom toward center (0..~0.2)
  side?: "left" | "right"; // which side to move inward from
  translatePx?: number; // max horizontal shift toward center
  motion?: "pull" | "inout";
};

export default function DepthOnScroll({
  children,
  className,
  maxScale = 0.06,
  side = "left",
  translatePx = 16,
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
      const dir = side === "left" ? 1 : -1;
      const base = motion === "inout" ? norm : 1 - Math.abs(norm);
      const tx = dir * translatePx * base;
      el.style.transform = `translateX(${tx.toFixed(2)}px) scale(${s.toFixed(3)})`;
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
  }, [maxScale, side, translatePx, motion]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
