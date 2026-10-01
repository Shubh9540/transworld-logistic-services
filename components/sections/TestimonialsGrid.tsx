import React from 'react';
import { TransworldTestimonialsData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export const TestimonialsGrid = ({ data }: { data?: TransworldTestimonialsData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#fdfaf6] relative overflow-hidden">
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
              className="bg-white rounded-xl p-5 shadow-[0_5px_30px_rgba(0,0,0,0.08)] flex flex-col justify-start"
            >
              {/* Header (Image + Details) */}
              <div className="flex items-center gap-4 mb-4 ml-1">
                {/* Hexagon Image Container */}
                <div className="relative w-20 h-24 shrink-0">
                  {/* Orange Background Hexagon (Shifted Left) */}
                  <div className="absolute inset-0 bg-[var(--color-accent)] -translate-x-2 [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]" />
                  {/* Actual Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                </div>

                {/* Name & Details */}
                <div className="flex flex-col">
                  <h4 className="text-lg font-extrabold text-[#1a1a1a] mb-0.5 leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[var(--color-text-light)] mb-1">
                    {testimonial.designation}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-1 text-[var(--color-accent)] text-sm mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Quote Line */}
              <div className="w-8 h-[2px] bg-[var(--color-accent)] mb-4 ml-[90px]" />
              {/* Testimonial Text */}
              <div className="flex gap-3">
                <FaQuoteLeft className="text-gray-200 text-3xl shrink-0" />
                <p className="text-sm leading-relaxed text-[#4a4a4a]">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
