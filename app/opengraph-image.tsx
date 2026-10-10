import { ImageResponse } from "next/og";
export const alt =
  "Udbhav Chabbra — Building intelligent software for real-world problems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#101110",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        color: "#f1f2ed",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 22, color: "#d1ed9a", marginBottom: 65 }}>
        UDBHAV CHABBRA · AI & FULL-STACK ENGINEERING
      </div>
      <div
        style={{
          fontSize: 68,
          letterSpacing: -3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Building intelligent software</span>
        <span style={{ color: "#d1ed9a" }}>for real-world problems.</span>
      </div>
      <div style={{ fontSize: 22, color: "#a1a59d", marginTop: 50 }}>
        Computer Science & Data Science · MGIT, Hyderabad
      </div>
    </div>,
    size,
  );
}
