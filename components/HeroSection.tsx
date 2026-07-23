'use client';

import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/images/IMG_8728.JPG.jpeg',
  '/images/IMG_8729.JPG.jpeg',
  '/images/IMG_8730.JPG.jpeg',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-margin-desktop overflow-hidden" data-purpose="hero-section">
      {/* Carousel background images */}
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: index === current ? 1 : 0,
          }}
        />
      ))}

      {/* Black slight tint overlay to match the dark color with services and contact */}
      <div className="absolute inset-0 bg-[#131313]/40 z-0 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-display-lg text-white mb-6 font-bold leading-tight max-w-3xl">
          Designing Spaces That Capture Attention.
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-xl mb-10 font-body-md font-light tracking-wide">
          We create innovative exhibition booths, interiors, and brand experiences that help businesses stand out.
        </p>

        <div className="flex items-center gap-4">
          <a
            className="px-7 py-3 rounded-full border border-white text-white text-xs uppercase tracking-widest font-semibold bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            href="#"
          >
            Get a Free Consultation
          </a>
          <a
            className="px-7 py-3 rounded-full border border-white/60 text-white text-xs uppercase tracking-widest font-semibold bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            href="#"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
