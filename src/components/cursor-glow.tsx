"use client";

import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

const SECTION_COLORS: Record<SectionName, [string, string]> = {
  Home: ["8, 148, 255", "134, 104, 255"],
  About: ["0, 168, 204", "8, 148, 255"],
  Projects: ["134, 104, 255", "201, 89, 221"],
  Skills: ["0, 200, 102", "0, 168, 204"],
  Experience: ["237, 99, 0", "255, 144, 3"],
  Contact: ["255, 46, 84", "201, 89, 221"],
};

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSectionContext();

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const [c1, c2] = SECTION_COLORS[activeSection] ?? SECTION_COLORS.Home;
    glow.style.setProperty("--glow-c1", c1);
    glow.style.setProperty("--glow-c2", c2);
  }, [activeSection]);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      glow.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
    />
  );
}
