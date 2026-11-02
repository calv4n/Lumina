"use client";

import { useState } from "react";
import { Copy } from "./Copy";
import { faq } from "../content/home";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2>{faq.title}</h2>
          <p className="sub">
            <Copy text={faq.sub} />
          </p>
        </div>
        <div className="faq-list">
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className={isOpen ? "faq is-open" : "faq"} key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq-symbol" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div className="faq-panel">
                  <div className="faq-panel-inner">
                    <p>
                      <Copy text={item.a} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
