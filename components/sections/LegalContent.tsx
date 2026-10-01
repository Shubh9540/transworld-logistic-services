import React from 'react';
import { TransworldLegalContentData } from '@/types/templates.types';
import { 
  FaFileAlt, 
  FaDesktop, 
  FaBoxOpen, 
  FaShieldAlt, 
  FaUser, 
  FaLightbulb, 
  FaLink, 
  FaExclamationTriangle, 
  FaEdit, 
  FaGavel, 
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaFileAlt: <FaFileAlt />,
  FaDesktop: <FaDesktop />,
  FaBoxOpen: <FaBoxOpen />,
  FaShieldAlt: <FaShieldAlt />,
  FaUser: <FaUser />,
  FaLightbulb: <FaLightbulb />,
  FaLink: <FaLink />,
  FaExclamationTriangle: <FaExclamationTriangle />,
  FaEdit: <FaEdit />,
  FaGavel: <FaGavel />,
  FaEnvelope: <FaEnvelope />,
  FaCheckCircle: <FaCheckCircle />
};

export const LegalContent = ({ data }: { data?: TransworldLegalContentData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]"></div>
            <span className="text-sm font-bold text-[var(--color-accent)] tracking-[0.2em] uppercase">
              {data.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] leading-tight mb-6">
            {data.titlePart1} <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-4xl">
            {data.description}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {data.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            const numberString = (index + 1).toString().padStart(2, '0');
            const iconName = section.icon || 'FaFileAlt';

            return (
              <div
                key={section.id}
                className="bg-[#fcfcfd] rounded-xl border border-gray-100 flex overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Number Box */}
                <div 
                  className={`w-16 md:w-20 flex-shrink-0 flex items-center justify-center text-white font-black text-xl md:text-2xl ${
                    isEven ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-primary)]'
                  }`}
                >
                  {numberString}
                </div>

                {/* Icon Box */}
                <div className="hidden sm:flex w-20 flex-shrink-0 items-center justify-center border-r border-gray-100">
                  <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-xl text-[var(--color-primary)] shadow-sm">
                    {iconMap[iconName] || <FaFileAlt />}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 p-5 md:px-6 md:py-5 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-extrabold text-[var(--color-primary)] mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
