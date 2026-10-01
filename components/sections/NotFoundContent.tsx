import React from 'react';
import Link from 'next/link';
import { TransworldNotFoundData } from '@/types/templates.types';
import { FaHome, FaArrowRight } from 'react-icons/fa';

export const NotFoundContent = ({ data }: { data?: TransworldNotFoundData }) => {
  if (!data) return null;

  return (
    <section 
      className="bg-white py-16 lg:py-24 overflow-hidden relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url('${data.zeroImage}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Fallback overlay in case image doesn't cover well on mobile */}
      <div className="absolute inset-0 bg-white/60 lg:bg-transparent pointer-events-none"></div>

      <div className="max-w-[1250px] w-full mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-left max-w-2xl">
          <span className="text-[var(--color-accent)] font-extrabold tracking-[0.3em] text-xl md:text-2xl mb-4">
            O O P S !
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-primary)] leading-tight mb-6 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed max-w-md">
            The page you are looking for might have been moved, renamed or no longer exists. Let's get you back on track.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link 
              href={data.buttonUrl || "/"}
              className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-8 py-4 font-bold rounded-[30px] hover:bg-[var(--color-primary)] transition-all shadow-md group"
            >
              <FaHome className="text-2xl" />
              <span className="text-lg">Go to Home</span>
              <FaArrowRight className="text-base font-normal transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-white border-[3px] border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 font-bold rounded-[30px] hover:bg-[var(--color-primary)] hover:text-white transition-all group shadow-sm"
            >
              <span className="text-lg">Contact Us</span>
              <FaArrowRight className="text-base font-normal transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
