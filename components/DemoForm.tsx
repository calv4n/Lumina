"use client";

import { useState, type FormEvent } from "react";
import { demo, email } from "../content/home";

export function DemoForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Firmenname: ${String(data.get("firma") || "")}`,
      `Branche: ${String(data.get("branche") || "")}`,
      `Website: ${String(data.get("website") || "—")}`,
      "",
      "Gratis-Demo anfragen. Unverbindlich.",
    ].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent("Gratis-Demo")}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = href;
  }

  return (
    <section className="section demo" id="gratis-demo">
      <div className="col">
        <div className="section-head">
          <h2>{demo.title}</h2>
          <p className="sub">
            {demo.hint} <span className="ph">{demo.response}</span>
          </p>
        </div>
        <form className="demo-form surface-ink" onSubmit={onSubmit}>
          <label>
            {demo.fields.firma}
            <input name="firma" required autoComplete="organization" />
          </label>
          <label>
            {demo.fields.branche}
            <input name="branche" required />
          </label>
          <label>
            {demo.fields.website}
            <input name="website" autoComplete="url" placeholder="https://" />
          </label>
          <button className="btn btn-yellow" type="submit">
            Gratis-Demo sichern
          </button>
          <p className="form-note">{demo.note}</p>
          {sent ? (
            <p className="form-note" role="status">
              Wenn sich kein E-Mail-Programm öffnet, schreib direkt an {email}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
