import React from 'react';
import Link from 'next/link';
import { TransworldAwardsCommitmentData } from '@/types/templates.types';
import { FaArrowRight, FaShieldAlt, FaUsers, FaChartBar } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt': return <FaShieldAlt className="w-5 h-5 text-[#ff4d15]" />;
    case 'FaUsers': return <FaUsers className="w-5 h-5 text-[#ff4d15]" />;
    case 'FaChartBar': return <FaChartBar className="w-5 h-5 text-[#ff4d15]" />;
    default: return null;
  }
};

export const AwardsCommitment = ({ data }: { data?: TransworldAwardsCommitmentData }) => {
  if (!data) return null;

  return (
    <section
      className="py-10 lg:py-14 mb-12 lg:mb-10 bg-[#0f172a] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/80"></div>

      {/* Diagonal Orange Shape */}
      <div className="hidden lg:block absolute top-0 left-[55%] bottom-0 w-24 bg-[#ff4d15] -skew-x-[20deg] z-0 opacity-90"></div>

      <div className="container mx-auto px-4 max-w-[1500px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">

          {/* Left Side */}
          <div className="w-full lg:w-[45%] xl:w-[40%]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4">
              {data.titlePart1} <span className="text-[#ff4d15]">{data.titleHighlight}</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-xl">
              {data.description}
            </p>

            <Link
              href={data.buttonUrl}
              className="inline-flex items-center gap-2 bg-[#ff4d15] text-white font-semibold px-6 py-3 rounded hover:bg-[#e03a00] transition-colors"
            >
              {data.buttonText}
              <FaArrowRight />
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[50%] flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-end">

            {/* Features List */}
            <div className="flex flex-col w-full md:w-auto shrink-0">
              {data.features.map((feature, index) => (
                <React.Fragment key={feature.id}>
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-12 h-12 rounded-full border border-[#ff4d15] flex items-center justify-center flex-shrink-0 bg-[#0f172a]/80">
                      {renderIcon(feature.icon)}
                    </div>
                    <div>
                      <h4 className="text-gray-200 text-sm leading-snug">
                        {feature.title} <br />
                        {feature.description}
                      </h4>
                    </div>
                  </div>
                  {index !== data.features.length - 1 && (
                    <div className="w-full h-[1px] bg-white/10"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right Highlight Text */}
            <div className="text-left shrink-0">
              <h3 className="text-4xl xl:text-5xl font-bold uppercase leading-[0.95] whitespace-nowrap">
                <span className="text-white/20 block">{data.rightHighlightText.split(' ')[0]}</span>
                <span className="text-white/40 block">{data.rightHighlightText.split(' ')[1]}</span>
                <span className="text-[#ff4d15] block">{data.rightHighlightText.split(' ')[2]}</span>
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
