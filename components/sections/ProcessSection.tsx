'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TransworldProcessData } from '@/types/templates.types';
import { FaFileAlt, FaBox, FaTruck, FaShippingFast, FaPlane } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFileAlt': return <FaFileAlt />;
    case 'FaBox': return <FaBox />;
    case 'FaTruck': return <FaTruck />;
    case 'FaShippingFast': return <FaShippingFast />;
    default: return <FaBox />;
  }
};

export const ProcessSection = ({ data }: { data?: TransworldProcessData }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!data?.steps || data.steps.length === 0) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.steps.length);
    }, 4000); // plane moves every 4 seconds
    return () => clearInterval(interval);
  }, [data]);

  if (!data) return null;

  const numSteps = data.steps.length;

  return (
    <section className="relative py-16 lg:py-12 bg-white overflow-hidden text-center">
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover' }}
      />

      <div className="relative z-10 max-w-[1250px] mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
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

        {/* PROCESS STEPS */}
        <div className="relative mt-24">

          {/* Dashed Line Background (only visible on desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[var(--color-accent)] opacity-40 z-0" />

          {/* Flying Airplane (Desktop only) */}
          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-[30px] z-10 pointer-events-none">
            <motion.div
              className="absolute text-[var(--color-accent)] text-2xl drop-shadow-md"
              initial={{ left: '0%' }}
              animate={{ left: `${(activeStep / (numSteps - 1)) * 100}%` }}
              transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              style={{ x: '-50%' }} // Center the icon on the current step position
            >
              <FaPlane />
            </motion.div>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 relative z-20">
            {data.steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <div key={step.id} className="flex flex-col items-center relative">

                  {/* Octagon Icon Container */}
                  <div className="relative mb-6">
                    {/* Blink/Highlight Shadow Effect behind active octagon */}
                    <motion.div
                      className="absolute inset-0 bg-[var(--color-accent)] rounded-full blur-xl z-[-1]"
                      animate={{ opacity: isActive ? 0.6 : 0, scale: isActive ? 1.2 : 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* The Octagon */}
                    <motion.div
                      className={`relative w-[90px] h-[90px] bg-[var(--color-accent)] flex items-center justify-center transition-all duration-500
                        ${isActive ? 'scale-110 shadow-2xl' : 'scale-100 shadow-md'}`}
                      style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }}
                    >
                      {/* Inner border line for the octagon */}
                      <div
                        className="absolute inset-1.5 border border-white/50 pointer-events-none"
                        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }}
                      />
                      {/* Icon */}
                      <div className="text-white text-3xl">
                        {renderIcon(step.icon)}
                      </div>
                    </motion.div>

                    {/* Number Badge (Top Right) */}
                    <div
                      className="absolute -top-1 -right-3 w-8 h-8 bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shadow-lg"
                      style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' }}
                    >
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center px-4">
                    <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
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
