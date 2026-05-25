// components/CTAButtons.jsx

"use client";

import Link from "next/link";

export default function CTAButtons() {
  const buttonStyle = `
    rounded px-8 md:px-12 py-3
    overflow-hidden group relative
    text-white font-bold text-sm md:text-base
    transition-all ease-out duration-300
    hover:ring-2 hover:ring-offset-2
  `;

  const shineEffect = `
    absolute right-0 w-8 h-32 -mt-12
    transition-all duration-1000
    transform translate-x-12 bg-white
    opacity-10 rotate-12
    group-hover:-translate-x-40 ease
  `;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
      
      {/* Explore Tours */}
      <Link
        href="#"
        className={`${buttonStyle}
        bg-rose-600 hover:bg-gradient-to-r
        hover:from-red-500 hover:to-red-400
        hover:ring-red-400`}
      >
        <span className={shineEffect}></span>
        <span className="relative">Explore Tours</span>
      </Link>

      {/* Plan My Trip */}
      <Link
        href="#"
        className={`${buttonStyle}
        bg-white/10 backdrop-blur-md border border-white/30
        hover:bg-white hover:text-black
        hover:ring-white`}
      >
        <span className={shineEffect}></span>
        <span className="relative">Plan My Trip</span>
      </Link>

      {/* WhatsApp Us */}
      <Link
        href="#"
        className={`${buttonStyle}
        bg-green-600 hover:bg-gradient-to-r
        hover:from-green-500 hover:to-emerald-400
        hover:ring-green-400`}
      >
        <span className={shineEffect}></span>
        <span className="relative">WhatsApp Us</span>
      </Link>
    </div>
  );
}