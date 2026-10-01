'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldFAQData } from '@/types/templates.types';
import { FaHeadset, FaShieldAlt, FaUsers, FaFileAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus, FaMinus } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaHeadset: <FaHeadset />,
  FaShieldAlt: <FaShieldAlt />,
  FaUsers: <FaUsers />,
  FaFileAlt: <FaFileAlt />,
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
  FaMapMarkerAlt: <FaMapMarkerAlt />
};

export const FAQSection = ({ data }: { data?: TransworldFAQData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs[0]?.id || null);

  if (!data) return null;

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#fdfaf6] py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          {data.topStats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-4">
              <div className="text-3xl text-[#ff4d15]">
                {iconMap[stat.icon]}
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-sm md:text-base leading-tight mb-1">{stat.title}</h4>
                <p className="text-xs text-[#64748b]">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Promo Card */}
            <div className="relative rounded-lg overflow-hidden bg-black aspect-[3/5] group">
              <Image src={data.promo.image} alt={data.promo.imageAlt} fill className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center bg-gradient-to-t from-black/80 to-transparent">
                <div className="mt-auto">
                  <h3 className="text-3xl font-bold text-white leading-none mb-1">{data.promo.title}</h3>
                  <h3 className="text-3xl font-bold text-[#ff4d15] mb-4">{data.promo.titleHighlight}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {data.promo.description}
                  </p>
                  <Link href={data.promo.buttonUrl} className="inline-flex items-center gap-2 bg-[#ff4d15] text-white font-bold py-3 px-6 rounded hover:bg-[#e03a00] transition-colors w-fit">
                    {data.promo.buttonText} &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
                <h3 className="text-xl font-bold text-[#0f172a]">{data.contactBox.title}</h3>
              </div>

              <div className="flex flex-col gap-6">
                {data.contactBox.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-[#ff4d15] text-white rounded-full flex items-center justify-center text-lg">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] text-sm mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-[#64748b] text-xs">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right FAQ List */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
              <span className="text-xs font-bold text-[#4a4a4a] tracking-[0.2em] uppercase">
                {data.subtitle}
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between items-start mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight max-w-lg">
                {data.titlePart1} <span className="text-[#ff4d15]">{data.titleHighlight}</span>
              </h2>
              <p className="text-[#64748b] text-sm leading-relaxed md:max-w-xs pt-2">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {data.faqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                const num = (index + 1).toString().padStart(2, '0');

                return (
                  <div
                    key={faq.id}
                    className={`rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#fff5f2]' : 'bg-white border border-gray-100 hover:border-gray-200 shadow-sm'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 flex items-center gap-4 text-left focus:outline-none"
                    >
                      <div className="w-8 h-8 shrink-0 rounded-full bg-[#ff4d15] text-white flex items-center justify-center font-bold text-sm">
                        {num}
                      </div>
                      <h3 className="font-bold text-[#0f172a] text-base flex-1 pr-4">{faq.question}</h3>
                      <div className={`text-[#ff4d15] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pl-[4.5rem] text-[#64748b] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
