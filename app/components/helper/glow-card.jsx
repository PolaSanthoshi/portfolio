"use client"; // important! must be the very first line

import React, { useEffect } from "react";

export default function GlowCard({ identifier, children }) {
  useEffect(() => {
    // Run only in the browser
    if (typeof document === "undefined") return;

    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    if (!CONTAINER || !CARDS) return;

    function UPDATE(e) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = CONTAINER.getBoundingClientRect();

      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;

      CARDS.forEach((card) => {
        card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
      });
    }

    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier}`}>
      <div className={`glow-card-${identifier}`}>
        {children} {/* ← Render the actual content passed from Education/Experience */}
      </div>
    </div>
  );
}
