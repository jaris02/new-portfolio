// app/components/Hero.tsx
'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen flex items-center bg-[#f7f7f7] px-4 md:px-0 mt-[-40px]"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Text */}
        <div className="text-center md:text-left px-2 md:px-4 md:m-5 order-2 md:order-1">
          <p className="uppercase tracking-[0.3em] text-xs text-[#555] mb-2 md:mb-4 font-light mt-[80px] md:mt-[100px]">
            HELLO, MY NAME IS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#333] leading-tight mb-4 md:mb-6">
            <span className="font-normal block md:inline">SIRAJ</span>{' '}
            <span className="font-extrabold block md:inline">MOHAMMED</span>
          </h1>
          <p className="text-[#555] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-md font-light leading-relaxed mx-auto md:mx-0">
            Im a Software Developer with a strong background in Accounting & Finance
          </p>
          <button className="bg-[#333] rounded-sm text-white text-xs tracking-[0.3em] px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-gray-800 transition uppercase">
            MY WORK
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end h-full order-1 md:order-2">
          <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full relative transform translate-y-8 md:translate-y-0">
            <Image
              src="/036A2528-Photoroom.png"
              alt="Siraj Mohammed"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}