import React from 'react';
import { PricingCardsData } from '@/types/templates.types';
import { FaCheckCircle } from 'react-icons/fa';

export const PricingCards = ({ data }: { data?: PricingCardsData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]">
              {data.subtitle}
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl md:text-[50px] font-black text-[#1a1a1a] mb-4 leading-tight">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {data.plans?.map((plan) => (
            <div
              key={plan.id}
              className="group relative flex flex-col bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:bg-[#111827]"
            >
              {/* Top Orange Banner (Visible only on Hover) */}
              <div className="absolute top-0 left-0 w-full h-8 bg-[var(--color-accent)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                  Most Popular
                </span>
              </div>

              {/* Card Content Wrapper (adds padding for the banner on hover) */}
              <div className="flex flex-col flex-grow p-8 pt-10 group-hover:pt-14 transition-all duration-300">

                {/* Header */}
                <div className="mb-6 border-b border-gray-100 group-hover:border-gray-700 pb-6 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-1 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-4 transition-colors duration-300">
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-black text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                      ₹{plan.price}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 font-medium transition-colors duration-300">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[var(--color-accent)] text-lg shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4a4a4a] group-hover:text-gray-300 leading-tight transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full py-3 rounded text-sm font-bold bg-gray-100 text-[#1a1a1a] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
