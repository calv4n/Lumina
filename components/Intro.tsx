"use client";

import { useEffect, useRef } from "react";
import { introWords, logoPlaceholder } from "../content/home";

export function Intro() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLElement>("[data-i]"));
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const paint = (progress: number) => {
      words.forEach((word, index) => {
        const local = reduce
          ? 1
          : Math.min(1, Math.max(0, progress * words.length - index));
        word.style.setProperty("--w", local.toFixed(3));
        if (word.dataset.accent === "true") {
          word.classList.toggle("is-hot", local > 0.92);
        }
      });
    };

    if (reduce) {
      paint(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.3;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );
      paint(progress);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section intro" id="statement" ref={ref}>
      <div className="col">
        <p className="intro-text">
          {introWords.map((word, index) => (
            <span
              className={word.accent ? "intro-word is-accent" : "intro-word"}
              data-accent={word.accent ? "true" : undefined}
              data-i={index}
              key={`${word.text}-${index}`}
            >
              {word.text}{" "}
            </span>
          ))}
        </p>
        <p className="logo-note">
          <span className="ph">{logoPlaceholder}</span>
        </p>
      </div>
    </section>
  );
}
