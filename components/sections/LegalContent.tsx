import React from 'react';
import { TransworldLegalContentData } from '@/types/templates.types';

export const LegalContent = ({ data }: { data?: TransworldLegalContentData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
            <span className="text-sm font-bold text-[#4a4a4a] tracking-[0.2em] uppercase">
              {data.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-8">
            {data.titlePart1} <span className="text-[#ff4d15]">{data.titleHighlight}</span>
          </h2>
          <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-5xl">
            {data.description}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col">
          {data.sections.map((section, index) => (
            <div
              key={section.id}
              className={`py-8 ${index === 0 ? 'border-t border-gray-100 mt-4' : 'border-t border-gray-100'}`}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#0f172a] mb-3">{section.title}</h3>
              <p className="text-[#64748b] text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
