import React from 'react';
import { TransworldContactLocationData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const ContactLocation = ({ data }: { data?: TransworldContactLocationData }) => {
  if (!data) return null;

  return (
    <section className="bg-white">
      {/* 
        Grid layout: 
        Left side: Map 
        Right side: Dark content block
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Map */}
        <div className="h-[400px] lg:h-[500px] w-full">
          <iframe 
            src={data.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          />
        </div>

        {/* Right: Content */}
        <div className="relative h-[400px] lg:h-[500px] bg-[#111827] flex items-center">
          {/* Background Image (darkened) */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${data.backgroundImage})` }}
          />
          {/* Dark Overlay Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent" />
          
          <div className="relative z-10 p-10 lg:p-16 max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-300">
                {data.subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-[46px] font-black text-white leading-[1.1] mb-6 whitespace-pre-line">
              {data.titlePart1}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
              {data.description}
            </p>
            
            <a 
              href={data.buttonUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors font-bold py-3 px-8 text-sm"
            >
              {data.buttonText}
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
