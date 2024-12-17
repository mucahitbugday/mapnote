"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import YandexMap from "@/components/Maps/YandexMap";

export default function Home() {

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <YandexMap />
    </div>
  );
}
