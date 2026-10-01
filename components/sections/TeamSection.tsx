import React from 'react';
import { TransworldTeamData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const TeamSection = ({ data }: { data?: TransworldTeamData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFacebookF': return <FaFacebookF size={14} />;
      case 'FaInstagram': return <FaInstagram size={14} />;
      case 'FaLinkedinIn': return <FaLinkedinIn size={14} />;
      case 'FaYoutube': return <FaYoutube size={14} />;
      default: return null;
    }
  };

  return (
    <section className="bg-[var(--color-bg-alt)] py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1a1a1a] uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-4xl md:text-[50px] font-black text-[#1a1a1a] leading-[1.1] mb-4">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          <p className="text-[#4a4a4a] text-base md:text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden border-b-[4px] border-[var(--color-accent)] transition-transform hover:-translate-y-2 duration-300 flex flex-col">

              {/* Image linking to detail page */}
              <Link href={`/team/${member.id}`} className="block relative w-full h-[300px] md:h-[250px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/team/${member.id}`} className="hover:text-[var(--color-accent)] transition-colors">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{member.name}</h3>
                </Link>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-3">{member.role}</p>
                <p className="text-sm text-[#4a4a4a] mb-6 flex-grow">{member.shortDescription}</p>

                {/* Socials */}
                <div className="flex gap-3">
                  {member.social.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[var(--color-accent)] hover:text-white transition-colors"
                    >
                      {renderIcon(soc.icon)}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
