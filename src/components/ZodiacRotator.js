'use client';
import { useEffect, useState } from "react";

const zodiacSigns = [
  { symbol: "♈", name: "Aries" },
  { symbol: "♉", name: "Taurus" },
  { symbol: "♊", name: "Gemini" },
  { symbol: "♋", name: "Cancer" },
  { symbol: "♌", name: "Leo" },
  { symbol: "♍", name: "Virgo" },
  { symbol: "♎", name: "Libra" },
  { symbol: "♏", name: "Scorpio" },
  { symbol: "♐", name: "Sagittarius" },
  { symbol: "♑", name: "Capricorn" },
  { symbol: "♒", name: "Aquarius" },
  { symbol: "♓", name: "Pisces" },
];

export default function ZodiacWheel({ className = "" }) {
  const total = zodiacSigns.length;
  const radius = 140; // radius in pixels

  return (
    <div className={`relative w-[350px] h-[350px] mx-auto ${className}`}>
      {/* Rotating Circle */}
      <div className="absolute inset-0 animate-spin-slow rounded-full">
        {zodiacSigns.map((sign, i) => {
          const angle = (360 / total) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={sign.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-md font-semibold"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              }}
            >
              <div className="text-center">
                <div className="text-2xl">{sign.symbol}</div>
                <div className="text-xs">{sign.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Sun */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black rounded-full w-20 h-20 flex items-center justify-center shadow-xl text-xl font-bold">
        ☀️
      </div>
    </div>
  );
}
