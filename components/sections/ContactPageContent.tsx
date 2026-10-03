'use client';

import React from 'react';
import { ContactFullData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaHeadset,
  FaShieldAlt,
  FaHandshake,
  FaUser,
  FaCommentAlt,
  FaArrowRight
} from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
  FaClock: <FaClock />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaLocationArrow: <FaLocationArrow />,
  FaHeadset: <FaHeadset />,
  FaShieldAlt: <FaShieldAlt />,
  FaHandshake: <FaHandshake />
};

export const ContactPageContent = ({ data }: { data?: ContactFullData }) => {
  if (!data) return null;

  return (
    <section className="bg-[#fdfaf6] py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* Top Heading */}
        <SectionHeading
          subtitle={data.subtitle}
          titlePart1={data.titlePart1}
          titleHighlight={data.titleHighlight}
          description={data.description}
        />

        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {data.features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xl mb-4 shadow-md">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-extrabold text-[var(--color-primary)] text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {feature.description}
              </p>
              {feature.value && (
                <p className="font-bold text-[var(--color-accent)] text-sm">
                  {feature.value.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== feature.value!.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Dark Block (Map + Form + Features) */}
        <div className="bg-[var(--color-primary)] rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-8">

            {/* Map Area */}
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden border-4 border-white/10 relative min-h-[400px]">
              <iframe
                src={data.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </div>

            {/* Form Area */}
            <div 
              className="w-full lg:w-1/2 p-4 lg:p-8 md:p-10 text-white flex flex-col justify-center relative z-10"
              style={data.formBgImage ? {
                backgroundImage: `linear-gradient(to right, var(--color-primary) 0%, rgba(5, 16, 36, 0.4) 100%), url(${data.formBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              } : undefined}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] font-bold tracking-[0.2em] text-xs uppercase">
                  {data.formSubtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                {data.formTitlePart1} <span className="text-[var(--color-accent)]">{data.formTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                {data.formDescription}
              </p>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                  {/* Phone Input */}
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                  {/* Subject Input */}
                  <div className="relative">
                    <FaCommentAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Subject *"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <FaCommentAlt className="absolute left-4 top-5 text-gray-400" />
                  <textarea
                    placeholder="Your Message *"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-accent)] transition-colors text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                  <button type="button" className="group flex items-center justify-center gap-3 bg-[var(--color-accent)] text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 w-full sm:w-auto whitespace-nowrap">
                    <span className="whitespace-nowrap">Send A Message</span>
                    <div className="bg-white text-[var(--color-primary)] rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shrink-0">
                      <FaArrowRight className="text-xs" />
                    </div>
                  </button>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaShieldAlt />
                    <span>Your information is safe with us.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Strip Features */}
          <div className="border-t border-white/10 bg-white/5 p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {data.bottomFeatures.map((feat) => (
                <div key={feat.id} className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-accent)] text-xl group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] transition-all duration-300">
                    {iconMap[feat.icon]}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1">{feat.title}</h5>
                    <p className="text-xs text-gray-400">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
