"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ServiceDetailSidebarData } from '@/types/templates.types';
import { FaPhoneAlt, FaFilePdf, FaArrowRight, FaGlobe } from 'react-icons/fa';

export const ServiceDetailSidebar = ({ data }: { data?: ServiceDetailSidebarData }) => {
  const pathname = usePathname();
  if (!data) return null;

  return (
    <div className="flex flex-col gap-8 w-full xl:w-[350px] shrink-0 sticky top-32 h-fit">
      
      {/* Services List Box */}
      <div className="bg-[#0f284b] rounded-xl overflow-hidden shadow-lg">
        <div className="p-6">
          <h3 className="text-white text-xl font-bold mb-6">Our Services</h3>
          <ul className="flex flex-col gap-3">
            {data.servicesList.map((service) => {
              const isActive = pathname === service.url;
              return (
                <li key={service.id}>
                  <Link
                    href={service.url}
                    className={`flex items-center justify-between p-4 rounded transition-colors group ${isActive ? 'bg-[var(--color-accent)] text-white' : 'bg-white text-[#0f284b] hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-[var(--color-accent)]'}>
                        <FaGlobe size={18} />
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <FaArrowRight size={12} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-[var(--color-accent)]'} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Help Box */}
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#051024] flex flex-col h-[480px]">
        {/* Top Section with Image and Text */}
        <div className="relative flex-1 p-6 z-10">
          <div className="absolute top-0 right-0 w-[60%] h-full z-0">
            <Image
              src={data.helpBox.bgImage || '/service/service_bg.jpg'}
              alt="Help Background"
              fill
              className="object-cover object-right"
            />
            {/* Gradient to fade image into dark blue on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051024] via-[#051024]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-[70%] pt-2">
            <span className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-wider mb-2 block">{data.helpBox.subtitle}</span>
            <h3 className="text-white text-3xl font-bold leading-tight mb-4">{data.helpBox.title}</h3>
            <p className="text-gray-300 text-xs leading-relaxed">{data.helpBox.description}</p>
          </div>
        </div>

        {/* Curved White Bottom Section */}
        <div className="relative h-[160px] bg-white mt-auto z-20 shrink-0">
          {/* SVG Curve at the top of the white box */}
          <div className="absolute -top-10 left-0 w-full h-10 overflow-hidden">
             {/* The accent shadow/line */}
             <svg className="absolute bottom-0 left-0 w-full h-full text-[var(--color-accent)]" viewBox="0 0 100 20" preserveAspectRatio="none">
               <path d="M0 20 Q50 0 100 20 Z" fill="currentColor" />
             </svg>
             {/* The white curve slightly lower */}
             <svg className="absolute bottom-[-4px] left-0 w-full h-full text-white" viewBox="0 0 100 20" preserveAspectRatio="none">
               <path d="M0 20 Q50 0 100 20 Z" fill="currentColor" />
             </svg>
          </div>
          
          {/* Centered Phone Icon over the curve */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[var(--color-accent)] border-4 border-white flex items-center justify-center text-white z-30 shadow-md">
            <FaPhoneAlt size={24} />
          </div>

          <div className="p-6 pt-12 flex flex-col items-center text-center">
            <div className="text-[#051024] font-black text-2xl mb-1">{data.helpBox.phone}</div>
            <div className="text-gray-500 text-sm">{data.helpBox.phoneLabel}</div>
          </div>
        </div>
      </div>

      {/* Download Box removed as per user request */}

    </div>
  );
};
