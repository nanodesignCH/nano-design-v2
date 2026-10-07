export type ContactInput = {
  name: string;
  email: string;
  telefon: string;
  message: string;
};

export type ContactResult =
  | { ok: true; data: ContactInput; spam: boolean }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const field = (v: unknown) => (typeof v === "string" ? v.trim() : "");
// single-line fields end up in mail headers (subject, reply-to): no control characters
const CONTROL_RE = /[\u0000-\u001f\u007f]/;

/** Validates the contact form payload. Honeypot hits are reported as spam, not as errors. */
export function validateContact(body: unknown): ContactResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Ungültige Anfrage." };
  const b = body as Record<string, unknown>;
  const data: ContactInput = {
    name: field(b.name),
    email: field(b.email),
    telefon: field(b.telefon),
    message: field(b.message),
  };

  if (field(b.website)) return { ok: true, data, spam: true };
  if (!data.name || data.name.length > 100 || CONTROL_RE.test(data.name))
    return { ok: false, error: "Bitte gib deinen Namen an." };
  if (!EMAIL_RE.test(data.email) || data.email.length > 200 || /[,;]/.test(data.email))
    return { ok: false, error: "Bitte gib eine gültige E-Mail-Adresse an." };
  if (data.telefon.length > 40) return { ok: false, error: "Die Telefonnummer ist zu lang." };
  if (data.message.length < 5 || data.message.length > 5000)
    return { ok: false, error: "Bitte schreib eine Nachricht (max. 5000 Zeichen)." };

  return { ok: true, data, spam: false };
}
