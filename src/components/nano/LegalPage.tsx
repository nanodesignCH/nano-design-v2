import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

/** Full og/twitter set: nested metadata is replaced, not merged, so partial fields would inherit the home page's. */
export function legalMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_CH",
      siteName: "nano design",
      url: path,
      title,
      description,
      images: "/opengraph-image",
    },
    twitter: { card: "summary_large_image", title, description, images: "/opengraph-image" },
  };
}

/** Shared shell for /impressum and /datenschutz (wording: content/nano/legal-draft.md). */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-dvh bg-ink px-6 py-16 text-white md:px-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm tracking-[0.16em] text-white/60 lowercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ochre"
        >
          ← zurück
        </Link>
        <p className="mt-16 text-[11.2px] tracking-[0.25em] text-ochre lowercase">rechtliches</p>
        <h1 className="mt-3 text-[clamp(56px,12vw,128px)] leading-[0.88] font-black tracking-[-0.04em] lowercase">{title}</h1>
        <div className="mt-16 space-y-10 text-[17px] leading-relaxed font-light text-white/80 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-ochre [&_h2]:mb-3 [&_h2]:text-[11.2px] [&_h2]:font-normal [&_h2]:tracking-[0.25em] [&_h2]:text-ochre [&_h2]:lowercase [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
        <p className="mt-24 text-sm text-white/40">© 2026 nano web &amp; print design</p>
      </div>
    </main>
  );
}
