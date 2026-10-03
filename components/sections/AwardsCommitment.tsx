import React from 'react';
import Image from 'next/image';
import { TransworldAwardsCommitmentData } from '@/types/templates.types';

export const AwardsCommitment = ({ data }: { data?: TransworldAwardsCommitmentData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfaf6] overflow-hidden py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center relative z-10">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-bold text-sm tracking-[0.2em] uppercase">
                {data.subtitle}
              </span>
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-[64px] font-black leading-[0.9] mb-8 text-[#0f284b] tracking-tight">
              {data.titlePart1}
              <br />
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              {data.description}
            </p>

            <div className="mt-8 w-10 h-[3px] bg-[var(--color-accent)]" />
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="relative min-h-[400px] lg:min-h-[550px] w-full z-10">
            {/* Olive Green Backdrop Shape */}
            <div className="absolute -bottom-4 -right-4 top-10 left-10 bg-[var(--color-accent)] rounded-2xl z-0" />

            {/* Main Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 shadow-xl">
              <Image
                src={data.backgroundImage}
                alt="Awards Trophy"
                fill
                className="object-cover object-left"
              />
            </div>

            {/* Dark overlay box on the image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0f284b]/90 backdrop-blur-sm px-6 py-8 md:px-8 md:py-10 text-white w-[240px] md:w-[280px] z-20">
              <div className="space-y-2 mb-8 text-sm md:text-base tracking-[0.2em]">
                <p className="opacity-90">{data.rightHighlightText?.split(' ')?.[0]} {data.rightHighlightText?.split(' ')?.[1]}</p>
                <p className="opacity-90">{data.rightHighlightText?.split(' ')?.[2]} {data.rightHighlightText?.split(' ')?.[3]}</p>
                <p className="opacity-90">{data.rightHighlightText?.split(' ')?.[4]}</p>
                <p className="text-[var(--color-accent)] font-bold">{data.rightHighlightText?.split(' ')?.[5]}</p>
              </div>
              <div className="w-12 h-1 bg-[var(--color-accent)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


