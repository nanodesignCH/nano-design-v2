"use client";

import { useState, type FormEvent } from "react";
import s from "./nano.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Die Nachricht konnte nicht gesendet werden.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Die Nachricht konnte nicht gesendet werden.");
      setStatus("error");
    }
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.field}>
        <span className={s.fieldLabel}>Name</span>
        <input name="name" type="text" required maxLength={100} autoComplete="name" className={s.input} />
      </label>
      <label className={s.field}>
        <span className={s.fieldLabel}>E-Mail</span>
        <input name="email" type="email" required maxLength={200} autoComplete="email" className={s.input} />
      </label>
      <label className={s.field}>
        <span className={s.fieldLabel}>Telefon (optional)</span>
        <input name="telefon" type="tel" maxLength={40} autoComplete="tel" className={s.input} />
      </label>
      <label className={`${s.field} ${s.fieldWide}`}>
        <span className={s.fieldLabel}>Nachricht</span>
        <textarea name="message" required maxLength={5000} rows={5} className={`${s.input} ${s.textarea}`} />
      </label>
      {/* honeypot, hidden from people and assistive tech */}
      <label className={s.honeypot} aria-hidden>
        website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className={`${s.fieldWide} ${s.formFoot}`}>
        <button type="submit" className={`${s.button} ${s.buttonAccent}`} disabled={status === "sending"}>
          {status === "sending" ? "wird gesendet …" : "nachricht senden →"}
        </button>
        <p className={s.formStatus} aria-live="polite" role={status === "error" ? "alert" : undefined}>
          {status === "sent" && "Danke für deine Nachricht. Ich melde mich so bald wie möglich."}
          {status === "error" && error}
        </p>
      </div>
    </form>
  );
}
