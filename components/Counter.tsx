"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, direction = "up" }: { value: number, direction?: "up" | "down" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  // FIX: margin "-100px" gagal trigger di viewport mobile yang pendek.
  // amount: 0.3 -> animasi jalan begitu 30% elemen terlihat, konsisten di semua device.
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}
