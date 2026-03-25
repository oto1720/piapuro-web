import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #334155 100%)",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            opacity: 0.9,
            marginBottom: 14,
          }}
        >
          福岡大学 公認サークル
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: -1.5,
            marginBottom: 22,
          }}
        >
          福大ピアプロ
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.35,
            maxWidth: 1000,
            opacity: 0.95,
          }}
        >
          創作活動を通じて仲間と共に成長し、素敵な作品を生み出すサークルです。
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
