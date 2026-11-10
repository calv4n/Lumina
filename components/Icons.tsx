export function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ico">
      <path
        d="M12 5v12M6.5 12.5 12 18l5.5-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSee() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="benefit-ico">
      <circle
        cx="16"
        cy="16"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4 16h4M24 16h4M16 4v4M16 24v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPay() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="benefit-ico">
      <rect
        x="5"
        y="8"
        width="22"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M5 13h22" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconDomain() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="benefit-ico">
      <circle
        cx="16"
        cy="16"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="4.5"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6 16h20M7.5 11.5h17M7.5 20.5h17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function IconHelp() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="benefit-ico">
      <circle
        cx="16"
        cy="16"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12.5 13a3.5 3.5 0 1 1 4.8 3.3c-.8.4-1.3 1-1.3 1.9V19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function Starburst() {
  const lines = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const length = 34 + (i % 4) * 12;
    return {
      x2: 80 + Math.cos(angle) * length,
      y2: 80 + Math.sin(angle) * length,
    };
  });
  return (
    <svg className="starburst" viewBox="0 0 160 160" aria-hidden="true">
      {lines.map((line, i) => (
        <line key={i} x1="80" y1="80" x2={line.x2} y2={line.y2} />
      ))}
      <circle cx="80" cy="80" r="2.4" />
    </svg>
  );
}

export function SketchCircle() {
  return (
    <svg className="sketch" viewBox="0 0 160 160" aria-hidden="true">
      <ellipse cx="80" cy="80" rx="54" ry="51" />
      <ellipse cx="82" cy="78" rx="49" ry="55" transform="rotate(-8 80 80)" />
      <ellipse cx="78" cy="83" rx="56" ry="48" transform="rotate(5 80 80)" />
    </svg>
  );
}

export function Glyph({ kind }: { kind: number }) {
  if (kind === 0) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 4l2.2 9.8L28 16l-9.8 2.2L16 28l-2.2-9.8L4 16l9.8-2.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (kind === 1) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle
          cx="16"
          cy="16"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (kind === 2) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M8 16h16M16 8v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect
        x="8"
        y="8"
        width="16"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PageArt({ label }: { label?: string }) {
  return (
    <div className="page-art">
      <svg viewBox="0 0 160 220" aria-hidden="true">
        <rect x="28" y="18" width="104" height="184" rx="8" />
        <path d="M44 48h72M44 64h48M44 92h72M44 108h64M44 124h40" />
        <rect x="44" y="148" width="36" height="22" rx="6" />
      </svg>
      {label ? <span>{label}</span> : null}
    </div>
  );
}
