import { validateContact } from "@/lib/contact";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// ponytail: in-memory per server instance; move to a shared store (e.g. Vercel KV) if abuse shows up
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  // drop IPs whose window has expired so the map cannot grow without bound
  for (const [key, times] of hits) if (now - times[times.length - 1] >= WINDOW_MS) hits.delete(key);
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const json = (status: number, body: object) => Response.json(body, { status });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json(429, { ok: false, error: "Zu viele Anfragen. Bitte versuch es später nochmals." });

  const body = await req.json().catch(() => null);
  const result = validateContact(body);
  if (!result.ok) return json(400, { ok: false, error: result.error });
  if (result.spam) return json(200, { ok: true }); // honeypot: pretend success, send nothing

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return json(500, { ok: false, error: "Das Formular ist gerade nicht verfügbar. Bitte schreib an info@nano-design.ch." });
  }

  const { name, email, telefon, message } = result.data;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "nano design <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || "info@nano-design.ch"],
      reply_to: email,
      subject: `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || "–"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("contact: resend responded", res.status);
    return json(502, { ok: false, error: "Die Nachricht konnte nicht gesendet werden. Bitte schreib an info@nano-design.ch." });
  }
  return json(200, { ok: true });
}
