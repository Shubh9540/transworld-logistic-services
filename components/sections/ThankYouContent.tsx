import React from 'react';
import Link from 'next/link';
import { TransworldThankYouData } from '@/types/templates.types';

export const ThankYouContent = ({ data }: { data?: TransworldThankYouData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative min-h-[500px] flex items-center justify-center py-20 px-4"
      style={{
        backgroundImage: data.backgroundImage ? `url('${data.backgroundImage}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
           {/* Check icon */}
           <div className="w-24 h-24 bg-[#ff4d15] rounded-full flex items-center justify-center text-white text-4xl shadow-[0_0_30px_rgba(255,77,21,0.5)]">
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path></svg>
           </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-6">
          {data.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-[#ff4d15] tracking-widest uppercase mb-4">
          {data.subtitle}
        </h3>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          {data.description}
        </p>
        <Link 
          href={data.buttonUrl}
          className="inline-flex items-center gap-3 bg-[#ff4d15] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-[#051024] transition-colors rounded"
        >
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
};
