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
      String(data.get("message") || ""),
      "",
      "Unverbindliche Projektanfrage über Lumina.",
    ].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent("Projektanfrage Lumina")}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = href;
  }

  return (
    <section
      className="section demo"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <span id="gratis-demo" className="anchor-alias" aria-hidden="true" />
      <div className="col">
        <div className="section-head scroll-reveal">
          <h2 id="contact-title">{demo.title}</h2>
          <p className="sub">{demo.hint}</p>
        </div>
        <form className="demo-form surface-ink" onSubmit={onSubmit}>
          <label>
            {demo.fields.firma}
            <input
              name="firma"
              required
              autoComplete="organization"
              maxLength={160}
            />
          </label>
          <label>
            {demo.fields.branche} (optional)
            <input name="branche" maxLength={160} />
          </label>
          <label>
            {demo.fields.website}
            <input
              name="website"
              autoComplete="url"
              inputMode="url"
              placeholder="https://"
              maxLength={250}
            />
          </label>
          <label className="form-wide">
            {demo.fields.message}
            <textarea name="message" rows={4} required maxLength={2000} />
          </label>
          <button className="btn btn-yellow" type="submit">
            Gratis-Demo sichern
          </button>
          <p className="form-note">{demo.note}</p>
          {sent ? (
            <p className="form-note" role="status">
              Deine Anfrage ist noch nicht gesendet. Sende die vorbereitete
              E-Mail in deinem E-Mail-Programm oder schreib direkt an{" "}
              <a className="text-link" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </p>
          ) : null}
        </form>
        <p className="contact-direct">
          Lieber direkt schreiben?{" "}
          <a className="text-link" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}
