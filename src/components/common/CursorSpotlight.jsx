"use client";

import React, { useEffect, useRef } from "react";

export const CursorSpotlight = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    let rafId;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth interpolation (lerp) for a premium liquid feel
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (overlay) {
        overlay.style.setProperty("--x", `${currentX}px`);
        overlay.style.setProperty("--y", `${currentY}px`);
      }
      
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 select-none"
      style={{
        background: `radial-gradient(450px circle at var(--x, 0px) var(--y, 0px), rgba(59, 130, 246, 0.035), transparent 80%)`,
      }}
    />
  );
};
