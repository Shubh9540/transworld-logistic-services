import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldAwardsMilestonesData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const AwardsMilestones = ({ data }: { data?: TransworldAwardsMilestonesData }) => {
  if (!data) return null;

  return (
    <section
      className="py-16 lg:py-12 bg-[#0f172a] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/90"></div>

      <div className="container mx-auto px-4 max-w-[1500px] relative z-10">
        <div className="flex flex-col xl:flex-row gap-8 items-end justify-between">

          {/* Left Text Content */}
          <div className="w-full xl:w-[280px] flex flex-col items-start xl:mb-0 shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
              <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">
                {data.subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {data.titlePart1} <br className="hidden xl:block" /> <span className="text-[#ff4d15]">{data.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {data.description}
            </p>
            {data.buttonUrl && data.buttonText && (
              <Link
                href={data.buttonUrl}
                className="inline-flex items-center gap-2 bg-[#ff4d15] text-white font-semibold px-6 py-3 rounded hover:bg-[#e03a00] transition-colors"
              >
                {data.buttonText}
                <FaArrowRight />
              </Link>
            )}
          </div>

          {/* Right Cards Grid */}
          <div className="w-full flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-5 mt-6 sm:mt-10 xl:mt-0">
              {data.milestones.map((milestone) => (
                <div key={milestone.id} className="group flex flex-col h-full mt-6 sm:mt-10 lg:mt-0">
                  {/* Image Container - Reverted to proper flow layout */}
                  <div className="w-full h-24 sm:h-52 relative z-10 -mb-4 sm:-mb-6 transition-transform duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-3 pointer-events-none">
                    <Image
                      src={`${milestone.image}?v=2`}
                      alt={milestone.imageAlt}
                      fill
                      className="object-contain object-bottom"
                      unoptimized={true}
                    />
                  </div>

                  {/* Card Content - Restored h-full and flex-1 for desktop */}
                  <div className="bg-white rounded px-2 sm:px-5 pb-3 sm:pb-6 pt-6 sm:pt-12 shadow-lg relative z-0 text-center sm:text-left transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(255,77,21,0.2)] flex-1 flex flex-col items-center sm:items-start h-full">
                    <h3 className="text-xs sm:text-lg xl:text-xl font-bold text-[#0f172a] mb-1 sm:mb-1 leading-tight">
                      {milestone.title}
                    </h3>
                    <div className="text-[11px] sm:text-lg xl:text-xl font-bold text-[#ff4d15] mb-2 sm:mb-3">
                      {milestone.year}
                    </div>
                    <div className="w-6 sm:w-8 h-[2px] bg-[#ff4d15] mb-2 sm:mb-4 shrink-0"></div>
                    <p className="text-[#64748b] text-[10px] sm:text-sm leading-snug hidden sm:block">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
