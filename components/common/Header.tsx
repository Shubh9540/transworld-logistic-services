'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/Button';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!data) return null;

  return (
    <header className="w-full bg-white shadow-md relative z-40">
      <div className="flex items-center justify-between h-20 lg:h-24 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center h-full"
        >
          <Link href="/" className="relative z-10 block">
            <img
              src={data.logo}
              alt={data.logoAlt}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-10" ref={dropdownRef}>
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6 xl:gap-8"
          >
            {data.navLinks.map((link, index) => {
              const isActive = index === 0;
              const hasDropdown = link.subLinks && link.subLinks.length > 0;
              const isOpen = openDropdown === link.id;

              return (
                <div key={link.id} className="relative">
                  {hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.id)}
                      className="flex items-center gap-1 font-semibold text-sm xl:text-base whitespace-nowrap text-[#1a1a1a] hover:text-[var(--color-accent)] transition-colors duration-300 group"
                    >
                      {link.label}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180 text-[var(--color-accent)]' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.url || '#'}
                      className={`font-semibold text-sm xl:text-base whitespace-nowrap relative group transition-colors duration-300
                        ${isActive ? 'text-[var(--color-accent)]' : 'text-[#1a1a1a] hover:text-[var(--color-accent)]'}
                      `}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-accent)]" />
                      )}
                      {!isActive && (
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 bg-white shadow-xl border-t-2 border-[var(--color-accent)] min-w-[200px] z-50"
                      >
                        {link.subLinks!.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.url}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3 text-sm text-[#1a1a1a] hover:text-[var(--color-accent)] hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.nav>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button text={data.contactButton.text} url={data.contactButton.url} />
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-[var(--color-primary)] text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-1 z-50 overflow-hidden"
          >
            {data.navLinks.map((link, index) => {
              const isActive = index === 0;
              const hasDropdown = link.subLinks && link.subLinks.length > 0;
              const isMobOpen = openMobileDropdown === link.id;

              return (
                <div key={link.id}>
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(isMobOpen ? null : link.id)}
                        className="w-full flex items-center justify-between font-semibold text-base pb-2 border-b border-gray-100 text-[#1a1a1a] py-2"
                      >
                        {link.label}
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${isMobOpen ? 'rotate-180 text-[var(--color-accent)]' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-1 pl-4 py-2 border-b border-gray-100 overflow-hidden"
                          >
                            {link.subLinks!.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.url}
                                onClick={() => { setIsMobileMenuOpen(false); setOpenMobileDropdown(null); }}
                                className="text-sm text-gray-500 hover:text-[var(--color-accent)] py-2 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.url || '#'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-semibold text-base block py-2 border-b border-gray-100 last:border-0 transition-colors duration-300
                        ${isActive ? 'text-[var(--color-accent)]' : 'text-[#1a1a1a] hover:text-[var(--color-accent)]'}
                      `}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <Button 
              text={data.contactButton.text} 
              url={data.contactButton.url} 
              className="mt-4 w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
