import React from 'react';
import { TransworldContactData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
  FaClock: <FaClock />,
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaYoutube: <FaYoutube />,
  FaLinkedinIn: <FaLinkedinIn />,
};

export const ContactTop = ({ data }: { data?: TransworldContactData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Info */}
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

            <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed mb-12 max-w-md">
              {data.description}
            </p>

            <div className="flex flex-col gap-8 mb-12">
              {data.contactInfo.map((info) => (
                <div key={info.id} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 text-xl shadow-md">
                    {iconMap[info.icon] || <FaPhoneAlt />}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-1.5 leading-tight text-lg">
                      {info.title}
                    </h4>
                    {info.lines.map((line, idx) => (
                      <p key={idx} className="text-sm text-gray-500 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center text-sm hover:bg-[var(--color-accent)] transition-colors"
                >
                  {iconMap[social.icon]}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#fdfaf6] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">
                    {data.formSubtitle}
                  </span>
                </div>
                <h3 className="text-3xl md:text-[38px] font-black text-[#1a1a1a] leading-tight">
                  {data.formTitlePart1}
                  <span className="text-[var(--color-accent)]">{data.formTitleHighlight}</span>
                </h3>
              </div>
              <p className="text-xs text-gray-500 max-w-[120px] text-right hidden sm:block">
                {data.formDescription}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2">Subject <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#1a1a1a] mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[var(--color-accent)] focus:ring-[var(--color-accent)] accent-[var(--color-accent)]" />
                  <span className="text-xs text-gray-500">I agree to be contacted by Transworld.</span>
                </label>

                <button
                  type="submit"
                  className="bg-[var(--color-accent)] hover:bg-[#b07d3c] text-white font-bold py-3 px-8 rounded transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {data.submitText}
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
