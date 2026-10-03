'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaTruck, FaBox, FaWarehouse, FaProjectDiagram, FaCubes, FaArrowRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import { TransworldServicesData } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlane': return <FaPlane />;
    case 'FaShip': return <FaShip />;
    case 'FaTruck': return <FaTruck />;
    case 'FaBox': return <FaBox />;
    case 'FaWarehouse': return <FaWarehouse />;
    case 'FaProjectDiagram': return <FaProjectDiagram />;
    case 'FaCubes': return <FaCubes />;
    default: return <FaBox />;
  }
};

export const Services = ({ data }: { data?: TransworldServicesData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    let interval: NodeJS.Timeout;
    const autoplay = () => {
      interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 4000);
    };

    autoplay();

    emblaApi.on('pointerDown', () => clearInterval(interval));
    emblaApi.on('pointerUp', () => autoplay());

    return () => clearInterval(interval);
  }, [emblaApi, onInit, onSelect]);

  if (!data) return null;

  return (
    <section className="relative bg-[#f9faf6] overflow-hidden py-8 lg:py-12">
      {/* Background Map Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${data.bgImage})`, backgroundSize: 'cover' }}
      />

      {/* Decorative side elements to match screenshot (using clip-path for clean triangles) */}
      {/* Left side navy triangle with green border effect */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-[var(--color-accent)] hidden lg:block" style={{ clipPath: 'polygon(0 15%, 100% 100%, 0 100%)', zIndex: 0 }} />
      <div className="absolute bottom-0 left-0 w-[290px] h-[390px] bg-[var(--color-primary)] hidden lg:block" style={{ clipPath: 'polygon(0 20%, 100% 100%, 0 100%)', zIndex: 1 }} />

      {/* Right side green triangle */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--color-accent)] hidden lg:block" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', zIndex: 0 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-3"
          >
            {data.titlePart1} <br />
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-6" ref={emblaRef}>
            <div className="flex -ml-5">
              {data.services.map((service, index) => (
                <div
                  key={service.id}
                  className="pl-5 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-b-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative group mt-4"
                  >
                    {/* Top Image */}
                    <div className="relative h-[140px] rounded-t-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Icon Badge overlapping */}
                    <div
                      className={`absolute top-[120px] left-5 w-10 h-10 rounded-lg flex items-center justify-center text-xl text-white shadow-md z-10 
                        ${service.iconBgTheme === 'olive' ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-primary)]'}`}
                    >
                      {renderIcon(service.icon)}
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-8 flex-1 flex flex-col border border-t-0 border-gray-100 rounded-b-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 font-medium text-[10px]">{service.number}</span>
                        <div className="w-4 h-[2px] bg-gray-200" />
                      </div>

                      <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 text-[13px] mb-4 flex-1 leading-relaxed">
                        {service.description}
                      </p>

                      <Link
                        href={service.url}
                        className="inline-flex items-center gap-1.5 font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group/link mt-auto"
                      >
                        <span className="text-[13px]">Read More</span>
                        <div className="w-4 h-4 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-[8px] group-hover/link:translate-x-1 transition-transform">
                          <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Nav */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full border-2 border-[var(--color-accent)] 
                  ${index === selectedIndex ? 'w-3 h-3 bg-[var(--color-accent)]' : 'w-3 h-3 bg-transparent'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
