import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldAwardsCertificationsData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const AwardsCertifications = ({ data }: { data?: TransworldAwardsCertificationsData }) => {
  if (!data) return null;

  return (
    <section className="bg-white relative z-10 py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl lg:text-[54px] font-black leading-none text-[#0f284b] tracking-tight flex items-center gap-4">
              {data.titlePart1} {data.titleHighlight}
              <div className="hidden md:block w-20 h-[2px] bg-[var(--color-accent)] ml-4" />
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 flex-1 justify-end">
            <p className="text-[#0f284b] text-base max-w-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-2xl border border-blue-50/50 shadow-sm p-4 lg:p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">

              {/* Image Container */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden mb-6">
                <Image
                  src={cert.image || '/award/c1.webp'}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[#0f284b] font-bold text-xl leading-tight mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm leading-snug">
                {cert.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

