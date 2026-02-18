"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxDegrees?: number; // rotation amplitude
};

export default function SpinOnScroll({ children, className, maxDegrees = 18 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const norm = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2))); // -1..1 around center
      const deg = norm * maxDegrees * -1; // invert so scroll down rotates clockwise
      el.style.transform = `rotate(${deg.toFixed(2)}deg)`;
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
  }, [maxDegrees]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
