'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TransworldCallToActionData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const CTASection = ({ data }: { data?: TransworldCallToActionData }) => {
  if (!data) return null;

  return (
    <section className="relative bg-[#fafafa] py-12 lg:py-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* CTA Container */}
        <div className="relative rounded-[24px] overflow-hidden bg-[var(--color-primary)] flex flex-col lg:flex-row items-center justify-between shadow-2xl">

          {/* Background Image & Gradient */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={data.backgroundImage || '/banner/banner.webp'}
              alt="CTA Background"
              fill
              className="object-cover object-right"
            />
            {/* Gradient Overlay: Dark blue on left, fades to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] lg:via-[#051024]/90 to-transparent z-10" />

            {/* Green Bottom-Left Triangle Shape */}
            <div
              className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-64 h-3/4 md:h-2/3 bg-[var(--color-accent)] z-20"
              style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-30 w-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-10">

            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-left">
              {/* Subtitle */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
                <span className="text-white text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                  {data.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {data.titlePart1}
                <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
              </h2>

              {/* Description */}
              {data.description && (
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                  {data.description}
                </p>
              )}
            </div>

            {/* Right Content - Button */}
            <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
              <Link
                href={data.buttonUrl || '#'}
                className="inline-flex flex-row items-center gap-3 md:gap-4 bg-[var(--color-accent)] text-white rounded-full py-2 pl-6 md:pl-8 pr-2 hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 shrink-0 shadow-lg group"
              >
                <span className="font-bold text-sm md:text-base whitespace-nowrap">{data.buttonText || 'Get a Free Quote'}</span>
                <div className="bg-[var(--color-primary)] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                  <FaArrowRight className="text-white text-sm" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
