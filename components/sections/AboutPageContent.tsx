'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TransworldAboutData } from '@/types/templates.types';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  FaTruck, FaBox, FaLightbulb, FaChartLine,
  FaUsers, FaGlobe, FaShieldAlt, FaPhone
} from 'react-icons/fa';

// Animated counter for stats
const AnimatedCounter = ({ value, inView }: { value: string; inView: boolean }) => {
  const isPercent = value.includes('%');
  const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!inView) return;
    const animation = animate(count, numValue, { duration: 2, delay: 0.3 });
    return animation.stop;
  }, [inView, count, numValue]);

  return (
    <span className="font-black text-2xl text-[var(--color-primary)]">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const renderFeatureIcon = (iconName: string) => {
  const cls = "text-[var(--color-accent)] text-2xl";
  switch (iconName) {
    case 'FaTruck': return <FaTruck className={cls} />;
    case 'FaBox': return <FaBox className={cls} />;
    case 'FaLightbulb': return <FaLightbulb className={cls} />;
    case 'FaChartLine': return <FaChartLine className={cls} />;
    default: return <FaBox className={cls} />;
  }
};

const renderStatIcon = (iconName: string) => {
  const cls = "text-[var(--color-accent)] text-xl";
  switch (iconName) {
    case 'FaUsers': return <FaUsers className={cls} />;
    case 'FaGlobe': return <FaGlobe className={cls} />;
    case 'FaShieldAlt': return <FaShieldAlt className={cls} />;
    default: return <FaGlobe className={cls} />;
  }
};

export const AboutPageContent = ({ data }: { data?: TransworldAboutData }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-12 bg-[#f5f7f0] overflow-hidden">

      {/* World Map Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-top opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${data.worldMapBg || '/about/world-map.jpg'})`, backgroundSize: '55%' }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Image + Badge + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image — rounded card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
                <Image
                  src={data.imageMain || '/about/img.webp'}
                  alt="Logistics Operations"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Olive green vertical bars — outside right edge */}
            <div className="absolute top-6 -right-2 w-[10px] h-20 bg-[var(--color-accent)] rounded-l-md z-10" />
            <div className="absolute bottom-24 -right-2 w-[10px] h-16 bg-[var(--color-accent)] rounded-l-md z-10" />

            {/* ── Stats White Card — overlapping image bottom ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative -mt-10 mx-4 z-10"
            >
              {/* Skewed background container */}
              <div
                className="bg-white rounded-3xl shadow-xl py-6 px-4 sm:px-8"
                style={{ transform: 'skewX(-12deg)' }}
              >
                {/* Un-skewed content container */}
                <div
                  className="flex items-center justify-between"
                  style={{ transform: 'skewX(12deg)' }}
                >
                  {data.stats?.map((stat, i) => (
                    <React.Fragment key={stat.id}>
                      <div className="flex flex-col items-center text-center flex-1">
                        <div className="mb-2 text-3xl">{renderStatIcon(stat.icon)}</div>
                        <span className="font-black text-2xl sm:text-3xl text-[var(--color-primary)]">
                          <AnimatedCounter value={stat.value} inView={inView} />
                        </span>
                        <span className="text-sm font-medium text-[var(--color-primary)] mt-1 leading-tight">{stat.label}</span>
                      </div>
                      {i < (data.stats?.length || 0) - 1 && (
                        <div className="w-px h-16 bg-gray-200 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Text Content Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtitle tag */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest">
                {data.subtitle}
              </span>
              <div className="h-[2px] w-10 bg-[var(--color-accent)]" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[var(--color-primary)] leading-[1.1] mb-5">
              {data.titlePart1}
              <span className="text-[var(--color-accent)] block">{data.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-xl">
              {data.description}
            </p>

            {/* Feature Grid: 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {data.features?.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                    {renderFeatureIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-[var(--color-primary)] font-bold text-sm leading-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: Only Phone CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Phone CTA */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 shadow-md">
                  <FaPhone className="text-white text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[11px] leading-none">{data.callLabel}</span>
                  <span className="text-[var(--color-primary)] font-bold text-base leading-tight mt-0.5">
                    {data.callNumber}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
