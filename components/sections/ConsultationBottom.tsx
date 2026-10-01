import React from 'react';
import { ConsultationBottomData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const ConsultationBottom = ({ data }: { data?: ConsultationBottomData }) => {
  if (!data) return null;

  return (
    <section className="pb-16 lg:pb-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & Steps */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-[46px] font-black text-[#1a1a1a] leading-[1.15] mb-6 whitespace-pre-line">
              {data.titlePart1}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed mb-12">
              {data.description}
            </p>

            {/* Steps */}
            <div className="flex justify-between items-start relative">
              {data.steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center w-1/4 relative z-10 px-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#fff4eb] text-[var(--color-accent)] flex items-center justify-center font-bold text-lg md:text-xl mb-4 shrink-0 shadow-sm border border-orange-100">
                    {step.stepNumber}
                  </div>
                  <h4 className="font-extrabold text-[#1a1a1a] text-[10px] md:text-xs mb-1.5 leading-tight uppercase tracking-wider">
                    {step.title}
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 leading-relaxed max-w-[100px]">
                    {step.description}
                  </p>

                  {/* Arrow to the next step */}
                  {index < data.steps.length - 1 && (
                    <div className="hidden sm:block absolute top-6 -right-[15%] md:-right-[20%] text-gray-300 text-sm">
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${data.image})` }}
            />
            {/* Dark overlay specifically for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* Text Overlay */}
            <div className="absolute top-10 md:top-20 right-8 md:right-12 flex flex-col items-end rotate-[15deg]">
              <span className="text-3xl md:text-[42px] font-black text-white text-right leading-[0.9] tracking-tighter" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                {data.imageOverlayText.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
              <div className="w-16 h-1.5 bg-[var(--color-accent)] mt-4 -mr-4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
