import React from 'react';
import { TeamMember } from '@/types/templates.types';
import Image from 'next/image';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter, FaPinterestP,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaUser, FaCog, FaCrosshairs, FaFileAlt, FaTruck
} from 'react-icons/fa';

export const TeamDetailContent = ({ data }: { data?: TeamMember }) => {
  if (!data) return null;

  const renderIcon = (iconName: string, iconSize?: number) => {
    switch (iconName) {
      case 'FaFacebookF': return <FaFacebookF size={14} />;
      case 'FaInstagram': return <FaInstagram size={14} />;
      case 'FaTwitter': return <FaTwitter size={14} />;
      case 'FaPinterestP': return <FaPinterestP size={14} />;
      case 'FaLinkedinIn': return <FaLinkedinIn size={14} />;
      case 'FaYoutube': return <FaYoutube size={14} />;
      case 'FaTruck': return <FaTruck size={iconSize || 48} className="text-white flex-shrink-0" />;
      default: return null;
    }
  };

  return (
    <section className="bg-white relative py-8 lg:py-12">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[url('/about/world-map.jpg')] bg-no-repeat bg-cover bg-center opacity-5 pointer-events-none z-0" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 lg:gap-16 mb-8">

          {/* Left: Image & Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative mb-8 mx-auto w-full max-w-[420px] pt-4 pr-4">

              {/* Decorative Accents */}
              {/* Top Right Olive Green Pill */}
              <div className="absolute top-0 right-10 w-32 h-6 bg-[var(--color-accent)] rounded-full z-0" />
              {/* Left Middle Navy Pill */}
              <div className="absolute top-[15%] -left-3 w-6 h-40 bg-[#0f284b] rounded-full z-0" />
              {/* Right Bottom Olive Green Pill */}
              <div className="absolute bottom-[10%] -right-1 w-6 h-64 bg-[var(--color-accent)] rounded-full z-0" />

              {/* Main Image Container */}
              <div className="relative w-full h-[450px] sm:h-[500px] overflow-hidden rounded-2xl z-10 shadow-lg bg-gray-100">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Quote Box */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 bg-white p-6 rounded-2xl shadow-2xl max-w-[280px]">
                <div className="text-[#0f284b] text-[40px] font-serif leading-none mb-2">
                  “
                </div>
                <p className="text-[#0f284b] text-[15px] font-bold leading-snug mb-4">
                  “{data.quote}”
                </p>
                <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-2">
              <h4 className="text-[var(--color-accent)] text-sm font-bold tracking-[0.2em] uppercase">
                {data.role}
              </h4>
              <div className="w-16 h-[1px] bg-gray-300" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-[#0f284b] mb-2">
              {data.name.split(' ')[0]} <span className="text-[var(--color-accent)]">{data.name.split(' ').slice(1).join(' ')}</span>
            </h2>
            <h3 className="text-xl font-bold text-[#0f284b] mb-6">
              {data.subtitle}
            </h3>

            <div className="text-[#4a4a4a] text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
              <p>{data.biography}</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {data.social.map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  className="w-10 h-10 rounded-full bg-[#0f284b] flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors shadow-md"
                >
                  {renderIcon(soc.icon)}
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-white">
                  <FaPhoneAlt size={12} />
                </div>
                <p className="text-sm font-semibold text-[#0f284b]">{data.quickInfo.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-white">
                  <FaEnvelope size={12} />
                </div>
                <p className="text-sm font-semibold text-[#0f284b]">{data.quickInfo.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-white">
                  <FaMapMarkerAlt size={12} />
                </div>
                <p className="text-sm font-semibold text-[#0f284b]">{data.quickInfo.location}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: Single Box with 3 Columns */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 lg:divide-x divide-gray-200">

            {/* Column 1: Personal Information */}
            <div className="lg:pr-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#0f284b] flex items-center justify-center flex-shrink-0 text-white">
                  <FaUser size={16} />
                </div>
                <h3 className="text-xl font-bold text-[#0f284b]">Personal Information</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Full Name', value: data.quickInfo.fullName },
                  { label: 'Designation', value: data.quickInfo.designation },
                  { label: 'Experience', value: data.quickInfo.experience },
                  { label: 'Department', value: data.quickInfo.department },
                  { label: 'Location', value: data.quickInfo.location },
                  { label: 'Email', value: data.quickInfo.email },
                  { label: 'Phone', value: data.quickInfo.phone },
                ].map((info, i) => (
                  <div key={i} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="w-28 text-[13px] font-bold text-[#0f284b]">{info.label}</span>
                    <span className="w-4 text-[13px] text-[#4a4a4a]">:</span>
                    <span className="text-[13px] text-[#4a4a4a] flex-1">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Skills & Expertise */}
            <div className="lg:px-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#0f284b] flex items-center justify-center flex-shrink-0 text-white">
                  <FaCog size={16} />
                </div>
                <h3 className="text-xl font-bold text-[#0f284b]">Skills & Expertise</h3>
              </div>
              <div className="space-y-6">
                {data.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[13px] font-bold text-[#0f284b]">{skill.name}</span>
                      <span className="text-[13px] font-bold text-[#0f284b]">{skill.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[var(--color-accent)] h-full rounded-full relative"
                        style={{ width: skill.percentage }}
                      >
                        {/* Inner shadow/highlight for depth */}
                        <div className="absolute inset-0 bg-white/20 w-1/2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Areas of Focus */}
            <div className="lg:pl-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#0f284b] flex items-center justify-center flex-shrink-0 text-white">
                  <FaCrosshairs size={16} />
                </div>
                <h3 className="text-xl font-bold text-[#0f284b]">Areas of Focus</h3>
              </div>
              <div className="space-y-4">
                {data.areasOfFocus.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <FaCheckCircle className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-[13px] font-medium text-[#0f284b]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Experience & Journey */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Timeline (Bigger Column) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#0f284b] flex items-center justify-center flex-shrink-0 text-white">
                <FaFileAlt size={16} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#0f284b]">Experience & Journey</h3>
            </div>

            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[110px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gray-200">
              {data.journey.map((item, idx) => (
                <div key={idx} className="relative flex items-start pb-10 last:pb-0">

                  {/* Year */}
                  <div className="w-[100px] flex-shrink-0 pt-0.5">
                    <span className="text-[13px] font-bold text-[#0f284b]">{item.period}</span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[var(--color-accent)] shadow shrink-0 absolute left-[110px] -translate-x-1/2 top-1" />

                  {/* Content */}
                  <div className="pl-10">
                    <h4 className="font-bold text-[#0f284b] mb-1 leading-snug">
                      {item.role} <span className="text-[var(--color-accent)]">| {item.company}</span>
                    </h4>
                    <p className="text-[13px] text-[#4a4a4a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right: Image (Smaller Column) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[300px] lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={data.journeyImage}
                alt="Journey"
                fill
                className="object-cover"
              />
            </div>

            {/* Green Badge */}
            <div className="absolute -bottom-6 right-6 md:-right-6 bg-[var(--color-accent)] p-6 rounded-lg shadow-xl flex items-center gap-4 max-w-[280px] z-10">
              {renderIcon(data.journeyBadgeIcon)}
              <p className="text-white text-[13px] font-bold leading-snug">
                {data.journeyBadgeText}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
