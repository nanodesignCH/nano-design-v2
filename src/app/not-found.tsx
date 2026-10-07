import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 bg-ink px-6 text-center text-white">
      <p className="text-[11.2px] tracking-[0.25em] text-ochre lowercase">404</p>
      <h1 className="text-[clamp(56px,12vw,160px)] leading-[0.88] font-black tracking-[-0.04em] lowercase">
        seite
        <span className="block font-light">nicht gefunden.</span>
      </h1>
      <Link
        href="/"
        className="border border-white/85 px-8 py-[14px] text-[12.8px] tracking-[0.16em] text-white/85 lowercase transition-colors hover:bg-white hover:text-ink"
      >
        zur startseite →
      </Link>
    </main>
  );
}
