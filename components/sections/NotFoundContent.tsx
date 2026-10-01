import React from 'react';
import Link from 'next/link';
import { TransworldNotFoundData } from '@/types/templates.types';

export const NotFoundContent = ({ data }: { data?: TransworldNotFoundData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: `url('${data.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Removed Light Overlay as per user request */}
      
      <div className="relative z-10 container max-w-[1400px] mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Left Text Decoration */}
        <div className="hidden lg:block absolute left-4 xl:left-12 top-[35%] -translate-y-1/2 -rotate-12">
          <div className="text-2xl xl:text-3xl font-medium text-gray-400 leading-snug text-left italic">
            {data.textLeft.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <div className="w-full h-[3px] bg-[#ff4d15] mt-2 opacity-60"></div>
          </div>
        </div>

        {/* Right Text Decoration */}
        <div className="hidden lg:block absolute right-4 xl:right-12 top-[35%] -translate-y-1/2 rotate-12">
          <div className="text-3xl xl:text-4xl font-black text-gray-400 uppercase tracking-tighter leading-[0.85] text-right transform scale-y-110">
            {data.textRight.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <div className="w-full h-[3px] bg-[#ff4d15] mt-3 opacity-60"></div>
          </div>
        </div>

        {/* The 404 Visual Block */}
        <div className="relative flex items-center justify-center mb-6">

          {/* 404 Text */}
          <div className="flex items-center justify-center text-[150px] md:text-[250px] lg:text-[340px] font-black leading-none text-[#1a1a1a]">
            <span>4</span>
            <img 
              src={data.zeroImage} 
              alt={data.zeroImageAlt || "0"} 
              className="h-[140px] md:h-[230px] lg:h-[310px] object-contain -mx-2 md:-mx-6 lg:-mx-10 relative z-10" 
            />
            <span>4</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
          {data.titlePart1} <span className="text-[#ff4d15]">{data.titleHighlight}</span>
        </h2>
        
        {/* Description */}
        <p className="text-[#64748b] text-base md:text-lg max-w-2xl mb-8">
          {data.description}
        </p>
        
        {/* Button */}
        <Link 
          href={data.buttonUrl}
          className="inline-flex items-center justify-center bg-[#ff4d15] text-white px-8 py-4 font-semibold text-lg hover:bg-[#e03a0f] transition-colors"
        >
          {data.buttonText}
        </Link>
        
      </div>
    </section>
  );
};
