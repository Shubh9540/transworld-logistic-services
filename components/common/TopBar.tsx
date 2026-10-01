'use client';
import React from 'react';
import { TopBarData } from '@/types/templates.types';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGlobe, FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaGlobe': return <FaGlobe />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex justify-between items-stretch bg-[var(--color-primary)] text-white text-[13px] font-medium h-[46px] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-stretch pl-4 sm:pl-8 lg:pl-12 pr-0">
        
        {/* Left Side - Contact Info */}
        <div className="flex items-center">
          
          {/* Phone */}
          {data.phone && (
            <div className="flex items-center gap-2 mr-3">
              <FaPhoneAlt className="text-[14px] text-[var(--color-accent)]" />
              <span className="tracking-wide">{data.phone}</span>
            </div>
          )}

          {/* Separator */}
          {data.phone && data.email && <div className="w-[1px] h-4 bg-white/30 mx-2" />}
          
          {/* Email */}
          {data.email && (
            <div className="flex items-center gap-2 mx-3">
              <FaEnvelope className="text-[14px] text-[var(--color-accent)]" />
              <span className="tracking-wide">{data.email}</span>
            </div>
          )}

          {/* Separator */}
          {data.email && data.address && <div className="w-[1px] h-4 bg-white/30 mx-2" />}

          {/* Address */}
          {data.address && (
            <div className="flex items-center gap-2 mx-3">
              <FaMapMarkerAlt className="text-[14px] text-[var(--color-accent)]" />
              <span className="tracking-wide">{data.address}</span>
            </div>
          )}

        </div>

        {/* Right Side - Hours & Social Icons (Olive Green shape) */}
        <div className="bg-[var(--color-accent)] h-full flex items-center pl-8 pr-8 lg:pr-12 rounded-l-[30px] self-stretch ml-4 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] relative">
          <div className="flex items-center gap-6 relative z-10">
            
            {/* Hours/Clock */}
            {data.hours && (
              <div className="flex items-center gap-2">
                <div className="bg-white text-[var(--color-accent)] rounded-full w-6 h-6 flex items-center justify-center">
                  <FaClock className="text-[12px]" />
                </div>
                <span className="font-semibold text-white tracking-wide">{data.hours}</span>
              </div>
            )}

            {/* Separator inside green area */}
            {data.hours && data.socialLinks && data.socialLinks.length > 0 && (
              <div className="w-[1px] h-5 bg-white/30" />
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {data.socialLinks?.map((link) => (
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
                  key={link.id}
                  href={link.url}
                  className="text-white border border-white/50 rounded flex items-center justify-center w-7 h-7 transition-all duration-300 bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[12px]">{renderIcon(link.icon)}</span>
                </motion.a>
              ))}
            </div>

          </div>
          
          {/* Extended background pseudo-element to cover right margin inside container */}
          <div className="absolute right-[-50px] top-0 h-full w-[50px] bg-[var(--color-accent)] z-0" />
        </div>
        
      </div>
    </motion.div>
  );
};
