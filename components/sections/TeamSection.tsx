import React from 'react';
import { TransworldTeamData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

export const TeamSection = ({ data }: { data?: TransworldTeamData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFacebookF': return <FaFacebookF size={12} />;
      case 'FaInstagram': return <FaInstagram size={12} />;
      case 'FaTwitter': return <FaTwitter size={12} />;
      case 'FaPinterestP': return <FaPinterestP size={12} />;
      default: return null;
    }
  };

  return (
    <section className="bg-[#fafafa] py-16 lg:py-12 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
            <span className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase">
              {data.subtitle}
            </span>
            <div className="w-12 h-[3px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#0f284b] leading-[1.1] mb-6 tracking-tight">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          <p className="text-[#4a4a4a] text-base md:text-lg max-w-2xl mx-auto font-medium">
            {data.description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {data.members.map((member) => (
            <div key={member.id} className="relative flex flex-col group">

              {/* Image Container with background styling */}
              <div className="relative mb-8 mx-auto w-full max-w-[340px]">

                {/* Skewed Rhombus Green Outline */}
                <div className="absolute -top-3 -bottom-3 left-5 right-5 md:-top-4 md:-bottom-4 md:left-9 md:right-9 border-[2px] border-[var(--color-accent)] rounded-2xl skew-x-[20deg] z-0 pointer-events-none transition-transform duration-500 group-hover:scale-105" />

                {/* Navy side pill */}
                <div className="absolute top-1/2 -right-5 md:-right-6 w-5 md:w-6 h-24 md:h-28 bg-[#0f284b] -translate-y-1/2 rounded-r-xl z-0 transition-transform duration-500 group-hover:translate-x-1" />

                {/* Main Image */}
                <Link href={`/team/${member.id}`} className="block relative w-full h-[320px] sm:h-[300px] lg:h-[340px] xl:h-[360px] overflow-hidden rounded-2xl z-10 shadow-sm bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Floating Social Icons (Vertically Centered on the Edge) */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[19px] flex flex-col gap-2 z-20">
                  {member.social.map((soc) => (
                    <a
                      key={soc.id}
                      href={soc.url}
                      className="w-[38px] h-[38px] rounded-lg bg-[#0f284b] flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors shadow-md border-[2px] border-white"
                    >
                      {renderIcon(soc.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Text Info */}
              <div className="text-left px-2 sm:px-0">
                <p className="text-[11px] font-black tracking-widest text-[var(--color-accent)] uppercase mb-1">{member.role}</p>
                <Link href={`/team/${member.id}`} className="inline-block">
                  <h3 className="text-[20px] md:text-[24px] font-extrabold text-[#0f284b] hover:text-[var(--color-accent)] transition-colors leading-tight">
                    {member.name}
                  </h3>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
