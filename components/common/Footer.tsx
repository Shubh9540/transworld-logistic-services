import React from 'react';
import Link from 'next/link';
import { TransworldFooterData } from '@/types/templates.types';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
  FaPaperPlane,
  FaBox,
  FaHeadset,
  FaLeaf,
  FaUsers,
  FaGlobe
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaClock': return <FaClock />;
    case 'FaPaperPlane': return <FaPaperPlane />;
    case 'FaBox': return <FaBox />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaLeaf': return <FaLeaf />;
    case 'FaUsers': return <FaUsers />;
    case 'FaGlobe': return <FaGlobe />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: TransworldFooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden mt-auto">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-right bg-no-repeat bg-cover md:bg-cover" 
        style={{ backgroundImage: `url('${data.backgroundImage || '/main logo/footer_bg.webp'}')` }} 
      />

      {/* Main Content Overlay for dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] to-transparent z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 gap-10 pb-12 border-b border-gray-700/50">

          {/* Column 1: Logo & Description (4 columns wide) */}
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-6">
            <Link href="/" className="inline-block w-fit mb-6">
              <img
                src={data.logo}
                alt={data.logoAlt}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {data.description}
            </p>
            
            {/* Contact Items inline below description */}
            {data.contact && (
              <div className="flex flex-col gap-5 mt-2">
                {data.contact.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#0a1832] text-[var(--color-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white text-sm font-semibold">{item.text}</p>
                      {item.subText && (
                        <p className="text-gray-400 text-xs">{item.subText}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-[#0a1832] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-accent)] transition-all duration-300 shrink-0"
                >
                  {renderIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 columns wide) */}
          {data.columns.length > 0 && (
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-lg font-bold text-white relative w-fit pb-3">
                {data.columns[0].title}
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--color-accent)]"></div>
              </h3>
              <ul className="flex flex-col gap-4 mt-2">
                {data.columns[0].links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-3 group"
                    >
                      <FaChevronRight className="text-[12px] text-[var(--color-accent)]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 3: Our Services (2 columns wide) */}
          {data.columns.length > 1 && (
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-lg font-bold text-white relative w-fit pb-3">
                {data.columns[1].title}
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--color-accent)]"></div>
              </h3>
              <ul className="flex flex-col gap-4 mt-2">
                {data.columns[1].links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-3 group"
                    >
                      <FaChevronRight className="text-[12px] text-[var(--color-accent)]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 4: Newsletter (4 columns wide) */}
          {data.newsletter && (
            <div className="flex flex-col gap-6 lg:col-span-4">
              <h3 className="text-lg font-bold text-white relative w-fit pb-3">
                {data.newsletter.title}
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[var(--color-accent)]"></div>
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                {data.newsletter.description}
              </p>

              <div className="mt-2 relative">
                <input 
                  type="email" 
                  placeholder={data.newsletter.placeholder} 
                  className="w-full bg-[#0a1832] border border-gray-600/50 rounded text-sm px-4 py-3 pr-[60px] text-white focus:outline-none focus:border-[var(--color-accent)] placeholder-gray-500"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-[var(--color-accent)] hover:bg-[#b08146] text-white px-5 rounded-r transition-colors flex items-center justify-center">
                  {renderIcon(data.newsletter.buttonIcon)}
                </button>
              </div>

              {/* Features (Safe & Secure, etc) */}
              {data.features && (
                <div className="grid grid-cols-4 gap-2 mt-8 pt-8 border-t border-gray-700/50">
                  {data.features.map((feature, idx) => (
                    <div key={feature.id} className={`flex flex-col items-center text-center ${idx !== data.features!.length - 1 ? 'border-r border-gray-700/50' : ''}`}>
                      <div className="text-white text-2xl mb-2 hover:text-[var(--color-accent)] transition-colors">
                        {renderIcon(feature.icon)}
                      </div>
                      <p className="text-white text-[10px] sm:text-xs whitespace-pre-line leading-tight">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-4 text-xs text-gray-400">
          
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8">
            <p>{data.copyright}</p>
            
            {/* Divider only on desktop */}
            <div className="hidden md:block w-[1px] h-4 bg-gray-600"></div>

            {data.bottomLinks && (
              <div className="flex items-center gap-4">
                {data.bottomLinks.map((link, index) => (
                  <React.Fragment key={link.id}>
                    <Link href={link.url} className="hover:text-[var(--color-accent)] transition-colors">
                      {link.label}
                    </Link>
                    {index < data.bottomLinks!.length - 1 && <span>|</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {data.bottomRight && (
            <div className="flex items-center gap-3 text-white tracking-wider">
              <div className="text-[var(--color-accent)] text-lg">
                {renderIcon(data.bottomRight.icon)}
              </div>
              <span className="font-bold text-[10px] md:text-xs">{data.bottomRight.text}</span>
              <div className="w-10 h-[1px] bg-[var(--color-accent)] hidden md:block"></div>
            </div>
          )}

        </div>
      </div>
    </footer>
  );
};
