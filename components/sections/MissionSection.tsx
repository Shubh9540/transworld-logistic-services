import React from 'react';
import { TransworldMissionData } from '@/types/templates.types';
import Image from 'next/image';

export const MissionSection = ({ data }: { data?: TransworldMissionData }) => {
  if (!data) return null;

  return (
    <section className="relative bg-white py-16 lg:py-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <div className="relative flex flex-col">
            {/* Background Number */}
            <div className="absolute -top-6 lg:-top-10 -left-4 md:-left-8 lg:-left-10 select-none pointer-events-none z-[-1]">
              <span className="text-[120px] md:text-[180px] lg:text-[240px] font-black text-gray-100 leading-none">
                {data.backgroundNumber}
              </span>
            </div>
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1a1a1a] uppercase">
                {data.subtitle}
              </span>
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-[50px] lg:text-[56px] font-black text-[#1a1a1a] leading-[1.1] mb-6 uppercase italic">
              {data.titlePart1}
              <br />
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            {/* Descriptions */}
            <div className="space-y-6 text-[#4a4a4a] text-base md:text-lg leading-relaxed">
              <p>{data.description1}</p>
              <p>{data.description2}</p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            {/* Top-Left Red Corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-t-[8px] border-l-[8px] border-[#ff2e2e] z-0" />

            {/* Image Container */}
            <div className="relative z-10 shadow-2xl">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom-Right Red Corner */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-[8px] border-r-[8px] border-[#ff2e2e] z-0" />

            {/* Dot Pattern (Decorative) */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-32 bg-[radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:8px_8px] z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};
