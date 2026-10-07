import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "nano design – web & print design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const barlowBlack = await readFile(join(process.cwd(), "src/app/fonts/Barlow-Black.ttf"));

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#080808",
          color: "#fff",
          fontFamily: "Barlow",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              border: "4px solid #fff",
              fontSize: 34,
              letterSpacing: "-0.03em",
            }}
          >
            nd
          </div>
          <div style={{ fontSize: 22, letterSpacing: "0.3em", color: "#c9a84c" }}>web · print · digital</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 196, lineHeight: 0.88, letterSpacing: "-0.04em" }}>
          <span>nano</span>
          <span style={{ color: "rgba(255,255,255,0.88)" }}>design.</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Barlow", data: barlowBlack, style: "normal", weight: 900 }] },
  );
}
