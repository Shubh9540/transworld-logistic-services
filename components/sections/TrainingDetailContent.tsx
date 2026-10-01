import React from 'react';
import { TrainingDetailItem } from '@/types/templates.types';
import Image from 'next/image';
import { FaDumbbell, FaChartLine, FaHeartbeat, FaBullseye, FaClipboardList, FaAppleAlt, FaUsers, FaStar, FaUser, FaChartBar, FaClock, FaUserFriends, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export const TrainingDetailContent = ({ data }: { data?: TrainingDetailItem }) => {
  if (!data) return null;

  const renderIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'FaDumbbell': return <FaDumbbell size={size} className="text-[var(--color-accent)]" />;
      case 'FaChartLine': return <FaChartLine size={size} className="text-[var(--color-accent)]" />;
      case 'FaHeartbeat': return <FaHeartbeat size={size} className="text-[var(--color-accent)]" />;
      case 'FaBullseye': return <FaBullseye size={size} className="text-[var(--color-accent)]" />;
      case 'FaClipboardList': return <FaClipboardList size={size} className="text-[var(--color-accent)]" />;
      case 'FaAppleAlt': return <FaAppleAlt size={size} className="text-[var(--color-accent)]" />;
      case 'FaUsers': return <FaUsers size={size} className="text-[var(--color-accent)]" />;
      case 'FaStar': return <FaStar size={size} className="text-[var(--color-accent)]" />;
      default: return <FaDumbbell size={size} className="text-[var(--color-accent)]" />;
    }
  };

  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column (Overview) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1a1a1a] uppercase">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-[50px] font-black text-[#1a1a1a] leading-[1.1] mb-6">
              {data.titlePart1}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            </h2>

            <div className="text-[#4a4a4a] text-base md:text-lg leading-relaxed space-y-6 mb-12 whitespace-pre-line">
              {data.description}
            </div>

            {/* Overview Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {data.overviewFeatures.map((feat) => (
                <div key={feat.id} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    {renderIcon(feat.icon, 28)}
                  </div>
                  <h4 className="font-bold text-[#1a1a1a] mb-2">{feat.title}</h4>
                  <p className="text-sm text-[#6b7280]">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Sidebar Box) */}
          <div className="lg:col-span-4">
            <div className="bg-[#f8f9fa] rounded-xl p-8 border border-gray-100 shadow-sm sticky top-24">
              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaUser size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Program Type</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.programType}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaChartBar size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Level</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.level}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaClock size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Duration</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.duration}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaUserFriends size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Trainer Support</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.trainerSupport}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaDumbbell size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Equipment</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.equipment}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaMapMarkerAlt size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">Location</h5>
                    <p className="text-sm text-[#4a4a4a]">{data.location}</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <h5 className="font-bold text-[#1a1a1a] mb-4">Suitable For</h5>
                <ul className="space-y-3">
                  {data.suitableFor.map((sf) => (
                    <li key={sf.id} className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                      <FaCheckCircle size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                      {sf.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Section: Highlights */}
      <div className="bg-white py-16 lg:py-12 border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Images */}
            <div className="relative">
              <div className="absolute top-0 -left-6 w-32 h-32 bg-[var(--color-accent)] z-0" />
              <div className="absolute bottom-6 right-0 w-40 h-40 bg-[var(--color-accent)] z-0" />
              <div className="relative z-10 p-6 pb-12 pr-12">
                <div className="relative h-[450px] w-full">
                  <Image
                    src={data.image1}
                    alt="Training Image"
                    fill
                    className="object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-[250px] w-[250px] border-[8px] border-white z-20 hidden md:block">
                  <Image
                    src={data.image2}
                    alt="Training Image Small"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Highlights List */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1a1a1a] uppercase">
                  {data.highlightsSubtitle}
                </span>
              </div>

              <h2 className="text-4xl md:text-[50px] font-black text-[#1a1a1a] leading-[1.1] mb-10">
                {data.highlightsTitlePart1}
                <span className="text-[var(--color-accent)]">{data.highlightsTitleHighlight}</span>
              </h2>

              <div className="space-y-6">
                {data.highlights.map((hl) => (
                  <div key={hl.id} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                      {renderIcon(hl.icon, 24)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a1a] text-lg mb-1">{hl.title}</h4>
                      <p className="text-[#6b7280]">{hl.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 pb-16 lg:pb-12">
        <div className="relative bg-[#0a0e14] rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image with overlay gradient */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-right bg-no-repeat opacity-60 md:opacity-100"
            style={{ backgroundImage: `url(${data.bannerBgImage})` }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0e14] via-[#0a0e14]/90 to-[#0a0e14]/20" />

          <div className="relative z-10 px-8 py-12 md:px-16 md:py-20 text-white w-full md:w-2/3 lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-gray-300">
                {data.bannerSubtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black mb-4 tracking-tight leading-[1.1]">
              {data.bannerTitlePart1}
              <span className="text-[var(--color-accent)]">{data.bannerTitleHighlight}</span>
            </h2>

            <p className="text-sm md:text-base text-gray-300">
              {data.bannerDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
