import React from 'react';
import Image from 'next/image';
import { TransworldAwardsMilestonesData } from '@/types/templates.types';

export const AwardsMilestones = ({ data }: { data?: TransworldAwardsMilestonesData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfaf6] py-16 lg:py-12 relative z-10">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl lg:text-[54px] font-black leading-none text-[#0f284b] tracking-tight flex items-center gap-4">
              {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
              <div className="hidden md:block w-20 h-[2px] bg-[var(--color-accent)] ml-4" />
            </h2>
          </div>
          <p className="text-[#0f284b] text-base lg:text-lg max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Grid of Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.milestones.map((milestone) => (
            <div key={milestone.id} className="bg-white rounded-2xl border border-blue-50/50 shadow-sm p-4 flex gap-6 items-center hover:shadow-md transition-shadow">

              {/* Image Container */}
              <div className="w-[120px] h-[140px] relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shrink-0">
                <Image
                  src={milestone.image || '/award/a1.webp'}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 py-2">
                <h3 className="text-[#0f284b] font-bold text-lg leading-tight mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-snug">
                  {milestone.description}
                </p>
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mb-3" />
                <span className="text-[#0f284b] text-base">
                  {milestone.year}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

