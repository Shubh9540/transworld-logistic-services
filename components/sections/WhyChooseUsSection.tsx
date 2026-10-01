'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TransworldWhyChooseUsData, WhyChooseUsFeature } from '@/types/templates.types';
import {
  FaUsers, FaCog, FaShieldAlt,
  FaBox, FaGlobe, FaHeadset, FaClipboardList, FaDumbbell, FaChartLine, FaHeartbeat
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaCog': return <FaCog />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaBox': return <FaBox />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaHeadset': return <FaHeadset />;
    // Fallbacks just in case
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaDumbbell': return <FaDumbbell />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    default: return <FaUsers />;
  }
};

const FeatureCard = ({ feature }: { feature: WhyChooseUsFeature }) => (
  <div className="flex items-stretch bg-white shadow-[0_5px_20px_rgba(0,0,0,0.06)] rounded-xl w-full max-w-[340px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] relative z-20 overflow-hidden group">
    <div className="bg-[var(--color-accent)] w-20 flex items-center justify-center shrink-0 text-white text-3xl relative transition-colors group-hover:bg-[var(--color-primary)]">
      <div className="absolute inset-1.5 border border-white/40 rounded-lg pointer-events-none transition-colors group-hover:border-white/60" />
      <motion.div whileHover={{ scale: 1.1 }}>
        {renderIcon(feature.icon)}
      </motion.div>
    </div>
    <div className="flex-1 p-4">
      <h3 className="font-bold text-[var(--color-primary)] text-[15px] mb-1">{feature.title}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

export const WhyChooseUsSection = ({ data }: { data?: TransworldWhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="relative py-16 lg:py-12 bg-[#fbfcf8] overflow-hidden">
      {/* Background Map Faint */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(/about/choose-bg.png)`, backgroundSize: 'cover' }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3"
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
            className="text-3xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-4"
          >
            {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm md:text-base"
          >
            {data.description}
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-6 items-center">

          {/* Left Column Features */}
          <div className="flex flex-col gap-6 lg:gap-10 items-center lg:items-end w-full">
            {data.features.slice(0, 3).map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center w-full justify-center lg:justify-end"
              >
                <FeatureCard feature={feature} />

                {/* Dotted Line (Desktop only) */}
                <div className="hidden lg:flex absolute left-[100%] top-1/2 -translate-y-1/2 items-center w-8 xl:w-16 z-0">
                  <div className="w-full border-t-2 border-dashed border-[var(--color-accent)] opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] border-[2.5px] border-white shadow-sm shrink-0 -ml-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative px-4 flex justify-center py-6 lg:py-0 order-first lg:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-[350px] md:max-w-[450px] xl:max-w-[500px]"
            >
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Right Column Features */}
          <div className="flex flex-col gap-6 lg:gap-10 items-center lg:items-start w-full">
            {data.features.slice(3, 6).map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center w-full justify-center lg:justify-start"
              >
                {/* Dotted Line (Desktop only) */}
                <div className="hidden lg:flex absolute right-[100%] top-1/2 -translate-y-1/2 items-center w-8 xl:w-16 z-0">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] border-[2.5px] border-white shadow-sm shrink-0 -mr-1" />
                  <div className="w-full border-t-2 border-dashed border-[var(--color-accent)] opacity-60" />
                </div>

                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
