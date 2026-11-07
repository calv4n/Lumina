import { Fragment, type ReactNode } from "react";

const TOKEN =
  /(==.+?==|\[PLATZHALTER:[^\]]+\]|\[ZU BESTÄTIGEN:[^\]]+\]|\[[^\]]+\]\([^)]+\))/g;

export function Copy({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;
        if (part.startsWith("==") && part.endsWith("==")) {
          return (
            <span className="mark" key={index}>
              {part.slice(2, -2)}
            </span>
          );
        }
        if (
          part.startsWith("[PLATZHALTER:") ||
          part.startsWith("[ZU BESTÄTIGEN:")
        ) {
          return (
            <span className="ph" key={index}>
              {part}
            </span>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a className="text-link" href={link[2]} key={index}>
              {link[1]}
            </a>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function EmailLink({ children }: { children?: ReactNode }) {
  return (
    <a className="text-link" href="mailto:contact@calvinpfrender.dev">
      {children ?? "contact@calvinpfrender.dev"}
    </a>
  );
}
