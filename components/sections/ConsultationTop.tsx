import React from 'react';
import { ConsultationTopData } from '@/types/templates.types';
import { FaLock, FaUsers, FaBullseye, FaHeartbeat, FaBolt } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaUsers: <FaUsers />,
  FaBullseye: <FaBullseye />,
  FaHeartbeat: <FaHeartbeat />,
  FaBolt: <FaBolt />,
};

export const ConsultationTop = ({ data }: { data?: ConsultationTopData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Content */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-[46px] font-black text-[#1a1a1a] leading-[1.15] mb-6 whitespace-pre-line">
              {data.titlePart1}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed mb-12">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fff4eb] text-[var(--color-accent)] flex items-center justify-center shrink-0 text-xl">
                    {iconMap[feature.icon] || <FaBolt />}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 md:p-10 border border-gray-100 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a1a1a]">
                {data.formSubtitle}
              </span>
            </div>

            <h3 className="text-3xl md:text-[36px] font-black text-[#1a1a1a] mb-3 leading-tight">
              {data.formTitlePart1}
              <span className="text-[var(--color-accent)]">{data.formTitleHighlight}</span>
            </h3>

            <p className="text-sm text-gray-500 mb-8">
              {data.formDescription}
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors"
                />
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors appearance-none">
                  <option value="">Age</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45+">45+</option>
                </select>
                <select className="w-full sm:col-span-2 bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors appearance-none">
                  <option value="">Your Fitness Goal *</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-building">Muscle Building</option>
                  <option value="general-fitness">General Fitness</option>
                </select>
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors appearance-none">
                  <option value="">Preferred Location</option>
                  <option value="loc1">Location 1</option>
                  <option value="loc2">Location 2</option>
                </select>
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors appearance-none">
                  <option value="">Preferred Time</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
                <textarea
                  placeholder="Any Additional Information"
                  rows={3}
                  className="w-full sm:col-span-2 bg-gray-50/50 border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] hover:bg-[#b07d3c] text-white font-bold py-4 rounded-md transition-colors mt-2"
              >
                {data.buttonText}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                <FaLock />
                <span>{data.privacyText}</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
