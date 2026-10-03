'use client';

import React, { useState } from 'react';
import { FAQGridData } from '@/types/templates.types';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const FAQGridSection = ({ data }: { data?: FAQGridData }) => {
  const [openLeftId, setOpenLeftId] = useState<string | null>('fq1');
  const [openRightId, setOpenRightId] = useState<string | null>(null);

  if (!data || !data.faqs) return null;

  // Split FAQs into two columns to prevent cross-column layout shifts
  const midIndex = Math.ceil(data.faqs.length / 2);
  const leftColumnFaqs = data.faqs.slice(0, midIndex);
  const rightColumnFaqs = data.faqs.slice(midIndex);

  const toggleLeftFAQ = (id: string) => {
    setOpenLeftId(openLeftId === id ? null : id);
  };

  const toggleRightFAQ = (id: string) => {
    setOpenRightId(openRightId === id ? null : id);
  };

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-bold tracking-[0.2em] text-sm uppercase">
              {data.subtitle}
            </span>
            <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6 tracking-tight">
            {data.titlePart1}{' '}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* FAQ Columns Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {leftColumnFaqs.map((faq) => {
              const isOpen = openLeftId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 ${isOpen
                      ? 'bg-[var(--color-bg-alt)] border-[var(--color-accent)]/20 shadow-md'
                      : 'bg-white border-[#f0f0f0] hover:border-gray-200 shadow-sm'
                    }`}
                >
                  <button
                    onClick={() => toggleLeftFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left focus:outline-none"
                  >
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${isOpen ? 'bg-[var(--color-accent)] text-white' : 'bg-[var(--color-primary)] text-white'
                      }`}>
                      Q
                    </div>
                    <h3 className={`font-bold text-base md:text-[17px] flex-1 pr-2 transition-colors duration-300 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'
                      }`}>
                      {faq.question}
                    </h3>
                    <div className={`text-sm shrink-0 transition-transform duration-300 ${isOpen ? 'text-[var(--color-accent)] rotate-180' : 'text-[var(--color-primary)]'
                      }`}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[4.5rem] text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {rightColumnFaqs.map((faq) => {
              const isOpen = openRightId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 ${isOpen
                      ? 'bg-[var(--color-bg-alt)] border-[var(--color-accent)]/20 shadow-md'
                      : 'bg-white border-[#f0f0f0] hover:border-gray-200 shadow-sm'
                    }`}
                >
                  <button
                    onClick={() => toggleRightFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left focus:outline-none"
                  >
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${isOpen ? 'bg-[var(--color-accent)] text-white' : 'bg-[var(--color-primary)] text-white'
                      }`}>
                      Q
                    </div>
                    <h3 className={`font-bold text-base md:text-[17px] flex-1 pr-2 transition-colors duration-300 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'
                      }`}>
                      {faq.question}
                    </h3>
                    <div className={`text-sm shrink-0 transition-transform duration-300 ${isOpen ? 'text-[var(--color-accent)] rotate-180' : 'text-[var(--color-primary)]'
                      }`}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[4.5rem] text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
