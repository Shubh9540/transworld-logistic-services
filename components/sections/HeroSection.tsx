'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { TransworldHeroData } from '@/types/templates.types';
import { FaArrowRight, FaBoxOpen, FaUsers, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedCounter = ({ value }: { value: string }) => {
  const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, numValue, { duration: 2, ease: "easeOut", delay: 0.5 });
    return animation.stop;
  }, [count, numValue]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
};

export const HeroSection = ({ data }: { data?: TransworldHeroData }) => {
  if (!data || !data.slides || data.slides.length === 0) return null;

  const slide = data.slides[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const tagIcons = [
    <FaBoxOpen key="1" className="text-3xl" />,
    <FaUsers key="2" className="text-3xl" />,
    <FaGlobe key="3" className="text-3xl" />,
    <FaShieldAlt key="4" className="text-3xl" />
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[650px] lg:min-h-[500px] bg-gray-900 overflow-hidden flex items-center py-8 lg:py-12">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* Overlay to make text visible */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-10 pb-40 lg:pb-16"
      >
        <div className="max-w-[550px] text-white">

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-xs font-semibold tracking-widest uppercase text-gray-300 mb-6 flex items-center gap-4">
            {slide.tagline}
          </motion.p>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            {slide.title}
            <span className="text-[var(--color-accent)] block mt-1">
              {slide.titleHighlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-[450px]">
            {slide.description}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            {/* Get A Quote */}
            <Link
              href={slide.primaryButton.url}
              className="group bg-[var(--color-accent)] hover:bg-[#788820] text-white pl-4 sm:pl-6 pr-2 py-2 rounded-full font-semibold flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 w-fit text-sm sm:text-base"
            >
              <span>{slide.primaryButton.text}</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <FaArrowRight className="text-xs" />
              </div>
            </Link>

            {/* Our Services */}
            <Link
              href={slide.secondaryButton.url}
              className="group bg-transparent border border-white hover:bg-white hover:text-[var(--color-primary)] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 w-fit text-sm sm:text-base"
            >
              <span>{slide.secondaryButton.text}</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Stats Bar */}
      {data.footerTags && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full sm:w-[95%] lg:w-[75%] xl:w-[65%] z-40"
        >
          <div
            className="w-full bg-[#051024]/80 lg:bg-[#051024]/70 backdrop-blur-sm pt-4 pb-4 px-4 sm:px-12 lg:px-16"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
            }}
          >
            <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-between gap-y-4 gap-x-2 sm:gap-x-4 lg:gap-8 lg:pr-12">
              {data.footerTags.map((tag, i) => {
                const [count, ...textArr] = tag.split(' ');
                const text = textArr.join(' ');

                return (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-3 text-white">
                      <div className="text-white shrink-0">
                        {tagIcons[i % tagIcons.length]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg leading-tight tracking-wide">
                          <AnimatedCounter value={count} />
                        </span>
                        <span className="text-[12px] text-gray-200 leading-tight tracking-wide">{text}</span>
                      </div>
                    </div>
                    {/* Separator Line */}
                    {i < (data.footerTags?.length || 0) - 1 && (
                      <div className="hidden lg:block w-[1px] h-8 bg-white/20" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

    </section>
  );
};