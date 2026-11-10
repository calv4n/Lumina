"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

const groups = {
  services: [
    {
      name: "Ollama",
      file: "ollama-icon.jpeg",
      tone: "paper",
      tilt: 18,
      travel: 78,
    },
    {
      name: "Docker",
      file: "docker.png",
      tone: "paper",
      tilt: -18,
      travel: 106,
    },
    { name: "Python", file: "python.png", tone: "soft", tilt: -10, travel: 66 },
  ],
  approach: [
    {
      name: "Django",
      file: "django.png",
      tone: "django",
      tilt: -22,
      travel: 76,
    },
    {
      name: "Kubernetes",
      file: "kubernetes.jpeg",
      tone: "kubernetes",
      tilt: 22,
      travel: 100,
    },
  ],
};

// Adapted from calv4n/calvin-pfrender's FloatingToolIcons, without Framer Motion.
export function FloatingToolIcons({
  variant,
}: {
  variant: keyof typeof groups;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const icons = Array.from(
      root.querySelectorAll<HTMLElement>("[data-travel]"),
    );
    let frame = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      if (motion.matches) {
        icons.forEach((icon) => icon.style.removeProperty("transform"));
        return;
      }
      if (!visible) return;
      const rect = root.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      icons.forEach((icon) => {
        const travel = Number(icon.dataset.travel);
        const offset = 0.5 - progress;
        icon.style.transform = `translate3d(0, ${offset * travel}px, 0) rotate(${-offset * 30}deg)`;
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              visible = entry.isIntersecting;
              if (visible) schedule();
            },
            { rootMargin: "100px" },
          )
        : null;
    observer?.observe(root);
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`tool-float-stage tool-float-${variant}`}
      aria-hidden="true"
    >
      {groups[variant].map((tool, index) => (
        <div
          className={`tool-float tool-float-${index + 1}`}
          data-travel={tool.travel}
          key={tool.name}
        >
          <div className="scroll-reveal-item">
            <div
              className={`tool-tile tool-tile-${tool.tone}`}
              style={{ "--tool-tilt": `${tool.tilt}deg` } as CSSProperties}
            >
              <Image
                src={`/images/tools/${tool.file}`}
                alt=""
                width={72}
                height={72}
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
