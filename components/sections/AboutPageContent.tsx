"use client";

import React, { useEffect, useRef, useState } from 'react';
import { TransworldAboutPageContentData } from '@/types/templates.types';

export const AboutPageContent = ({ data }: { data?: TransworldAboutPageContentData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="py-16 lg:py-12 bg-white overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: IMAGES */}
          <div
            className={`relative w-full h-[400px] sm:h-[450px] md:h-auto md:aspect-square transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
          >
            {/* Orange Dotted Patterns */}
            <div className="absolute top-[2%] left-[2%] w-24 md:w-32 h-24 md:h-32 opacity-30 pointer-events-none bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] [background-size:18px_18px] z-0" />
            <div className="absolute top-[8%] right-[5%] md:right-[10%] w-24 md:w-40 h-24 md:h-32 opacity-30 pointer-events-none bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] [background-size:18px_18px] z-0" />

            {/* Top Center Orange Slanted Shape */}
            <div className="absolute top-0 right-[35%] w-32 md:w-40 h-4 md:h-5 bg-[var(--color-primary)] z-0 transform skew-x-[30deg]" />

            {/* Secondary Image */}
            <div className="absolute top-[8%] left-[10%] w-[45%] md:w-[42%] h-[60%] md:h-[68%] z-10 border-4 border-white shadow-xl overflow-hidden bg-white">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${data.image2})` }}
                title={data.image2Alt}
              />
            </div>

            {/* Left Orange Polygon */}
            <div className="absolute top-[45%] left-[-2%] w-12 md:w-16 h-28 md:h-36 bg-[var(--color-primary)] z-0 [clip-path:polygon(100%_0,100%_100%,0_75%,0_25%)]" />

            {/* Main Image */}
            <div className="absolute bottom-[10%] md:bottom-0 right-0 w-[65%] h-[70%] md:h-[75%] z-20 border-4 border-white shadow-xl overflow-hidden bg-white">
              <div
                className="w-full h-full bg-cover bg-[center_top]"
                style={{ backgroundImage: `url(${data.image1})` }}
                title={data.image1Alt}
              />
            </div>

            {/* Top Right Orange Polygon */}
            <div className="absolute top-[12%] right-0 w-12 md:w-16 h-24 md:h-32 bg-[var(--color-primary)] z-0 [clip-path:polygon(0_20%,100%_0,100%_100%,0_80%)]" />

            {/* Experience Badge */}
            <div className="absolute bottom-[22%] md:bottom-[15%] left-[8%] md:left-[15%] z-30 bg-[var(--color-primary)] text-white pt-6 md:pt-8 pb-8 md:pb-10 px-6 lg:px-10 rounded shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 min-w-[140px] md:min-w-[180px]">
              <div className="absolute -top-[16px] md:-top-[24px] left-0 w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-transparent border-r-[16px] md:border-r-[24px] border-r-[var(--color-primary)] border-b-[16px] md:border-b-[24px] border-b-[var(--color-primary)]" />
              <span className="text-[48px] md:text-[60px] lg:text-[72px] font-black leading-none mb-1">{data.experienceYears}</span>
              <span className="text-[10px] md:text-[13px] font-bold tracking-[0.05em] whitespace-pre-line text-center uppercase leading-snug">
                {data.experienceLabel}
              </span>
              <div className="w-8 md:w-10 h-[2px] bg-white mt-3 md:mt-4" />
            </div>

            {/* Bottom Tags */}
            <div className="absolute bottom-[-5%] md:bottom-0 left-0 md:left-2 z-20 flex gap-3 md:gap-4 items-center">
              <div className="w-[3px] h-[40px] md:h-[50px] bg-[var(--color-primary)]" />
              <div className="flex flex-col gap-[1px] md:gap-[2px] text-[9px] md:text-[11px] font-bold tracking-[0.25em] text-gray-500 uppercase">
                {data.bottomTags?.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HEADING + DESCRIPTIONS ONLY */}
          <div
            className={`relative z-20 pt-10 lg:pt-0 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Watermark */}
            <div className="absolute top-[-5%] left-0 text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-extrabold text-[#f6f6f6] uppercase leading-none z-[-1] pointer-events-none select-none tracking-tight font-sans whitespace-nowrap">
              {data.watermarkText}
            </div>

            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--color-primary)] font-bold">//</span>
              <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#1a1a1a] leading-[1.1] mb-8">
              {data.titlePart1}
              <span className="text-[var(--color-primary)] block mt-2">{data.titleHighlight}</span>
            </h2>

            {/* Multiple Descriptions */}
            <div className="flex flex-col gap-5">
              {data.descriptions.map((para, idx) => (
                <p key={idx} className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
