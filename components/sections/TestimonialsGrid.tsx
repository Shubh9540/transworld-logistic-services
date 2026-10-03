import React from 'react';
import { TransworldTestimonialsData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export const TestimonialsGrid = ({ data }: { data?: TransworldTestimonialsData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfaf6] relative overflow-hidden py-8 lg:py-12">
      {/* Huge background quotes */}
      <div className="absolute top-10 right-20 text-9xl text-gray-200 opacity-30 pointer-events-none leading-none z-0">
        <FaQuoteLeft />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <SectionHeading
          subtitle={data.subtitle}
          titlePart1={data.titlePart1}
          titleHighlight={data.titleHighlight}
          description={data.description}
        />

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
          {data.testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] h-full flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Top Row: Quote icon and Stars */}
                <div className="flex items-center justify-between mb-4">
                  <FaQuoteLeft className="text-3xl text-[#d4dbb6]" />
                  <div className="flex gap-1 text-[var(--color-accent)] text-xs sm:text-sm">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-[var(--color-accent)] mb-6" />
              </div>

              {/* Footer (Avatar + Info) */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[17px] font-bold text-[var(--color-primary)] mb-0.5 leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-[13px] text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

              {/* Bottom Right Huge Quote Icon */}
              <div className="absolute -bottom-4 -right-2 text-7xl text-[#f0f4e6] opacity-70 z-0 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
