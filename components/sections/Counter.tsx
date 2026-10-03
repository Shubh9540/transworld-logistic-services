'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TransworldCounterData } from '@/types/templates.types';
import { FaUsers, FaDumbbell, FaAward, FaChartLine, FaTruck, FaWarehouse, FaGlobeAmericas } from 'react-icons/fa';

// Custom Hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isIntersecting, end, duration]);

  return { count, ref };
};

const AnimatedNumber = ({ value, suffix }: { value: string; suffix: string }) => {
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const { count, ref } = useCountUp(isNaN(numValue) ? 0 : numValue, 2500);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] leading-none mt-10 mb-3 tracking-tight">
      {count}
      {suffix}
    </div>
  );
};

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaDumbbell': return <FaDumbbell />;
    case 'FaAward': return <FaAward />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaTruck': return <FaTruck />;
    case 'FaWarehouse': return <FaWarehouse />;
    case 'FaGlobeAmericas': return <FaGlobeAmericas />;
    default: return null;
  }
};

export const Counter = ({ data }: { data?: TransworldCounterData }) => {
  if (!data) return null;

  return (
    <section className="bg-gray-50/50 py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-6 sm:gap-x-8 mt-12">
          {data.stats.map((stat, index) => {
            const isEven = index % 2 === 0;
            const iconBg = isEven ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-accent)]';
            const shapeBg = isEven ? 'bg-gray-100' : 'bg-[#e7efd3]'; // light green for odd, light gray for even

            return (
              <div
                key={stat.id}
                className="relative bg-white rounded-2xl p-6 pb-10 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] flex flex-col items-center z-10"
              >
                {/* Top Right Decorative Shape */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${shapeBg} rounded-bl-[100px] rounded-tr-2xl -z-10`} />

                {/* Icon Circle (Overlapping Top Edge) */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[6px] sm:border-[8px] border-white shadow-sm flex items-center justify-center text-white text-3xl sm:text-4xl ${iconBg}`}>
                  {renderIcon(stat.icon)}
                </div>

                {/* Content */}
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />

                {/* Separator Line */}
                <div className="w-10 h-1 bg-[var(--color-accent)] mx-auto mb-4" />

                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
