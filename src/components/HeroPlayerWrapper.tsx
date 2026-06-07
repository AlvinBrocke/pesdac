"use client";

import { useEffect, useRef, useState } from "react";
import { HeroBackgroundContent } from "@/remotion/HeroBackground";

const FPS = 30;
const TOTAL_FRAMES = 240; // 8-second loop

export default function HeroPlayerWrapper() {
  const [frame, setFrame] = useState(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const frameIntervalMs = 1000 / FPS;

  useEffect(() => {
    function tick(now: number) {
      if (now - lastTimeRef.current >= frameIntervalMs) {
        setFrame((f) => (f + 1) % TOTAL_FRAMES);
        lastTimeRef.current = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [frameIntervalMs]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <HeroBackgroundContent frame={frame} totalFrames={TOTAL_FRAMES} />
    </div>
  );
}
