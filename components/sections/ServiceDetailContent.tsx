import React from 'react';
import Image from 'next/image';
import { ServiceDetailMainContentData } from '@/types/templates.types';
import { FaCheckCircle, FaAward, FaUsers, FaGlobe, FaShieldAlt, FaClock } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward size={48} />;
    case 'FaUsers': return <FaUsers size={48} />;
    default: return <FaAward size={48} />;
  }
};

export const ServiceDetailContent = ({ data }: { data?: ServiceDetailMainContentData }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col gap-10 w-full">
      
      {/* Main Image with Overlay */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={data.mainImage}
          alt={data.titlePart1 + ' ' + data.titleHighlight}
          fill
          className="object-cover"
        />
        
        {/* Angled Dark Overlay matching 2nd screenshot */}
        <div className="absolute top-0 right-0 h-full w-[450px] hidden lg:block overflow-hidden">
          
          {/* Skewed Backgrounds Container */}
          <div className="absolute top-0 left-8 w-[150%] h-full -skew-x-[15deg] origin-bottom flex">
            {/* Leftmost dark grey line */}
            <div className="w-[6px] h-full bg-[#1e293b]"></div>
            {/* Gap */}
            <div className="w-[4px] h-full bg-transparent"></div>
            {/* Yellow line */}
            <div className="w-[3px] h-full bg-[var(--color-accent)]"></div>
            {/* Gap */}
            <div className="w-[4px] h-full bg-transparent"></div>
            {/* Main Dark Blue Background */}
            <div className="flex-1 h-full bg-[#051024]"></div>
          </div>
          
          {/* Content (Unskewed) */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center pl-[110px] pr-10 text-white">
            <div className="mb-8">
              <h3 className="text-2xl leading-snug font-black tracking-widest uppercase">
                {data.imageOverlayTitlePart1}<br />
                {data.imageOverlayTitlePart2 && <span className="text-[var(--color-accent)]">{data.imageOverlayTitlePart2}</span>}<br />
                {data.imageOverlayTitlePart3}
              </h3>
              <div className="w-12 h-[3px] bg-[var(--color-accent)] mt-5"></div>
            </div>
            
            <ul className="flex flex-col gap-6">
              {data.imageFeatures.map((feature, index) => {
                let Icon = FaGlobe;
                if (index === 1) Icon = FaShieldAlt;
                if (index === 2) Icon = FaClock;
                return (
                  <li key={feature.id} className="flex items-center gap-5">
                    <div className="text-[var(--color-accent)] shrink-0 border-2 border-[var(--color-accent)] rounded-full p-2">
                      <Icon size={18} />
                    </div>
                    <span className="text-[15px] text-gray-200 font-medium">{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-black text-[#0f284b] mb-2">
          {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
        </h2>
        
        {data.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-500 leading-relaxed">
            {paragraph}
          </p>
        ))}

        <ul className="flex flex-col gap-3 mt-4 mb-4">
          {data.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="text-[var(--color-accent)] mt-1 shrink-0">
                <FaCheckCircle size={18} />
              </div>
              <span className="text-gray-500 leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {data.bottomCards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-full border-[3px] border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
              {renderIcon(card.icon)}
            </div>
            <h4 className="text-[#0f284b] text-2xl font-bold mb-4">{card.title}</h4>
            <p className="text-gray-500 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
