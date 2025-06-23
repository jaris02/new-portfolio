'use client';
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] text-[#f7f7f7] bg-black flex items-center justify-center transition-opacity duration-1000",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <h1 className="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-wider flex">
        S
        <span className="relative">
          i
          <span className="absolute top-[-0.6em] left-[0.3em] w-2 h-2 rounded-full bg-white animate-blink" />
        </span>
        raj.
      </h1>
    </div>
  );
}
