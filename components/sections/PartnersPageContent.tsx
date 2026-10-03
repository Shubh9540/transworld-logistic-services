import React from 'react';
import Link from 'next/link';
import { TransworldPartnersData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const PartnersPageContent = ({ data }: { data?: TransworldPartnersData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4 tracking-tight">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">{data.description}</p>
        </div>

        {/* Partners Grid — 6 cols × 3 rows on desktop, repeat logos to fill */}
        {(() => {
          const cols = 6;
          const rows = 3;
          const total = cols * rows; // 18 slots
          const repeated = Array.from({ length: total }, (_, i) => ({
            ...data.partners[i % data.partners.length],
            _key: `${data.partners[i % data.partners.length].id}-${i}`,
          }));
          return (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {repeated.map((partner) => (
                <div
                  key={partner._key}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-28 flex items-center justify-center p-5"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          );
        })()}

        {/* CTA */}
        {data.ctaText && data.ctaUrl && (
          <div className="flex justify-center mt-6">
            <Link
              href={data.ctaUrl}
              className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 group"
            >
              <span>{data.ctaText}</span>
              <span className="bg-white text-[var(--color-primary)] group-hover:text-[var(--color-accent)] rounded-full p-1 group-hover:translate-x-1 transition-all duration-300">
                <FaArrowRight className="text-xs" />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
