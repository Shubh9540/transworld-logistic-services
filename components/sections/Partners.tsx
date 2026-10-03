'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TransworldPartnersData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Partners = ({ data }: { data?: TransworldPartnersData }) => {
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

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-white relative overflow-hidden py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
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
        <div className="relative mt-10">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y py-4">
              {data.partners?.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_16.666%] pl-4"
                >
                  {/* Card */}
                  <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-b-4 border-b-[var(--color-accent)] h-32 flex items-center justify-center p-4 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-300"
                    />
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
                className="absolute top-1/2 -left-2 md:-left-8 lg:-left-12 -translate-y-1/2 w-10 h-10 bg-[var(--color-primary)] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors duration-300 z-10 outline-none focus:outline-none"
                aria-label="Previous partner"
              >
                <FaChevronLeft className="text-sm mr-1" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute top-1/2 -right-2 md:-right-8 lg:-right-12 -translate-y-1/2 w-10 h-10 bg-[var(--color-primary)] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors duration-300 z-10 outline-none focus:outline-none"
                aria-label="Next partner"
              >
                <FaChevronRight className="text-sm ml-1" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {isMounted && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full outline-none focus:outline-none transition-colors duration-300 ${index === selectedIndex ? 'bg-[var(--color-accent)]' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
