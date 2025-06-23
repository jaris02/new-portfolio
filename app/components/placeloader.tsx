"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // Start fade
    const finalTimer = setTimeout(() => setLoading(false), 3000); // Remove loader
    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center transition-opacity duration-1000",
        fadeOut && "opacity-0 pointer-events-none"
      )}
    >
      <h1 className="text-6xl md:text-7xl font-bold tracking-wider">
        S
        <span className="relative">
          l
          
          <span className="absolute -top-[1px] left-1/2 -translate-x-[60%] w-[10px] h-2.5 bg-white animate-blink" />
        </span>
        raj.
      </h1>
    </div>
  );
}
