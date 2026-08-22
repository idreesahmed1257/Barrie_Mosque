"use client";
import Image from "next/image";
import "@fontsource/quicksand";
import ramadanCalendar from "@/assets/images/shared/Ramadan Calendar 2026.jpeg";

const RamadanCalendar2026Page = () => {
  return (
    <main style={{ textAlign: "center", padding: "40px 16px" }}>
      <h1 style={{ marginBottom: "24px" }}>Ramadan Calendar 2026</h1>
      <Image
        src={ramadanCalendar}
        alt="Ramadan Calendar 2026"
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />
      <div style={{ marginTop: "24px" }}>
        <a
          href={ramadanCalendar.src}
          download="Ramadan Calendar 2026.jpeg"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#C69B47",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: 600,
          }}
        >
          Download Calendar
        </a>
      </div>
    </main>
  );
};

export default RamadanCalendar2026Page;

