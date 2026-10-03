'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TransworldTestimonialsData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Testimonials = ({ data }: { data?: TransworldTestimonialsData }) => {
  if (!data) return null;

  // Use Embla Carousel with looping enabled
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Autoplay functionality (infinite loop sliding)
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-[#fafafa] relative overflow-hidden py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-sm uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4 tracking-tight">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          {data.description && (
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Slider Container with Nav Arrows */}
        <div className="relative mt-12 md:mt-16">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6 touch-pan-y py-4">
              {data.testimonials?.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] h-full flex flex-col justify-between group overflow-hidden">

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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {isMounted && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute top-1/2 -left-2 md:-left-8 lg:-left-16 xl:-left-20 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-accent)] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors duration-300 z-10 outline-none focus:outline-none"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm md:text-base mr-1" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute top-1/2 -right-2 md:-right-8 lg:-right-16 xl:-right-20 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-accent)] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors duration-300 z-10 outline-none focus:outline-none"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm md:text-base ml-1" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {isMounted && (
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full outline-none focus:outline-none transition-colors duration-300 ${index === selectedIndex ? 'bg-[var(--color-accent)]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
