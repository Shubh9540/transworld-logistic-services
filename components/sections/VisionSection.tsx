import React from 'react';
import { TransworldVisionData } from '@/types/templates.types';
import Image from 'next/image';
import { FaBinoculars } from 'react-icons/fa';

export const VisionSection = ({ data }: { data?: TransworldVisionData }) => {
  if (!data) return null;

  return (
    <section className="relative bg-[#fafafa] overflow-hidden py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <div className="relative flex flex-col pr-0 lg:pr-6 order-2 lg:order-1 mt-16 lg:mt-0">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
              <span className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase">
                {data.subtitle || 'Our Vision'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0f284b] leading-[1.1] mb-6 tracking-tight">
              {data.titlePart1}{' '}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            {/* Descriptions */}
            <div className="space-y-4 text-[#4a4a4a] text-base md:text-lg leading-relaxed font-medium">
              <p>{data.description1}</p>
              {data.description2 && <p>{data.description2}</p>}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative order-1 lg:order-2">
            {/* Navy Background Shape */}
            <div className="absolute top-10 -bottom-8 -left-6 w-[40%] bg-[#0f284b] rounded-3xl z-0 hidden md:block" />

            {/* Green Background Shape */}
            <div className="absolute -top-6 -bottom-4 -right-6 w-[60%] bg-[var(--color-accent)] rounded-3xl z-0 hidden md:block" />

            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-[6px] border-white">
              <Image
                src={data.image || '/mission/vision.jpg'}
                alt={data.imageAlt || 'Vision'}
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-5 md:p-6 flex items-center gap-4 min-w-[260px]">
              <div className="flex items-center justify-center shrink-0">
                <FaBinoculars className="text-[#0f284b] text-[56px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0f284b] font-black text-xl uppercase leading-tight mb-1">
                  Our Vision
                </span>
                <span className="text-[#0f284b] font-semibold text-sm">
                  A Better Tomorrow
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
