'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TransworldBlogData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaArrowRight, FaCalendarAlt, FaComment } from 'react-icons/fa';

export const BlogSection = ({ data }: { data?: TransworldBlogData }) => {
  if (!data || !data.blogs || data.blogs.length === 0) return null;

  const mainPost = data.blogs[0];
  const subPosts = data.blogs.slice(1, 3);

  return (
    <section className="relative bg-[#fafafa] overflow-hidden py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-sm uppercase">
              {data.subtitle}
            </span>
            <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4 tracking-tight">
            {data.titlePart1}
            <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
          </h2>

          {data.description && (
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
          
          {/* Main Large Post */}
          {mainPost && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col group h-full">
              {/* Image */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={mainPost.image}
                  alt={mainPost.imageAlt || 'Blog image'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute bottom-0 right-0 bg-[var(--color-accent)] text-white px-6 py-2 text-sm font-bold tracking-wide shadow-md"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                >
                  {mainPost.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-gray-500 text-[13px] font-medium">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <FaCalendarAlt className="text-[var(--color-accent)]" /> 
                    {mainPost.dateFull || `${mainPost.month} ${mainPost.day}, 2025`}
                  </span>
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <FaComment className="text-[var(--color-accent)]" /> 
                    {mainPost.comments || 'Comment'}
                  </span>
                </div>
                
                {/* Title */}
                <Link href={mainPost.url} className="mb-5 inline-block">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-3">
                    {mainPost.title}
                  </h3>
                </Link>
                
                {/* Footer (Author & Button) */}
                <div className="mt-auto flex flex-row items-center justify-between gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-[var(--color-accent)] shrink-0 bg-gray-100">
                      <Image 
                        src={mainPost.authorImage || '/team/c1.webp'} 
                        alt={mainPost.author || 'Author'} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--color-primary)] text-sm leading-tight whitespace-nowrap">{mainPost.author}</span>
                      <span className="text-gray-500 text-[12px] whitespace-nowrap">{mainPost.dateFull || `${mainPost.month} ${mainPost.day}, 2025`}</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <Link 
                    href={mainPost.url} 
                    className="inline-flex flex-row items-center gap-2 bg-[var(--color-accent)] text-white rounded-full py-1.5 pl-5 pr-1.5 hover:bg-[var(--color-primary)] transition-colors shrink-0"
                  >
                    <span className="font-bold text-[13px] whitespace-nowrap">{mainPost.readMoreText || 'Read More'}</span>
                    <div className="bg-[var(--color-primary)] w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      <FaArrowRight className="text-white text-[10px]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Sub Posts Stack */}
          <div className="flex flex-col gap-6 h-full">
            {subPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col sm:flex-row group flex-1 relative"
              >
                {/* Image */}
                <div className="relative w-full sm:w-[180px] md:w-[200px] shrink-0 h-48 sm:h-auto overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.imageAlt || 'Blog image'} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div 
                    className="absolute bottom-0 right-0 bg-[var(--color-accent)] text-white px-4 py-1 text-[11px] md:text-[12px] font-bold tracking-wide shadow-md"
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                  >
                    {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-5 flex-1 flex flex-col bg-white">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-2 text-gray-500 text-[12px] font-medium">
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <FaCalendarAlt className="text-[var(--color-accent)]" /> 
                      {post.dateFull || `${post.month} ${post.day}, 2025`}
                    </span>
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                      <FaComment className="text-[var(--color-accent)]" /> 
                      {post.comments || 'Comment'}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <Link href={post.url} className="mb-4 inline-block pr-10">
                    <h3 className="text-[15px] md:text-[17px] font-bold text-[var(--color-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                  </Link>
                  
                  {/* Author */}
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-9 h-9 relative rounded-full overflow-hidden border-2 border-[var(--color-accent)] shrink-0 bg-gray-100">
                      <Image 
                        src={post.authorImage || '/team/c2.webp'} 
                        alt={post.author || 'Author'} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--color-primary)] text-[13px] leading-tight whitespace-nowrap">{post.author}</span>
                      <span className="text-gray-500 text-[11px] whitespace-nowrap">{post.dateFull || `${post.month} ${post.day}, 2025`}</span>
                    </div>
                  </div>
                  
                  {/* Arrow Button */}
                  <Link 
                    href={post.url} 
                    className="absolute right-4 bottom-4 md:right-5 md:bottom-5 w-8 h-8 bg-[var(--color-accent)] hover:bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white transition-colors shadow-md group-hover:scale-110 duration-300"
                    aria-label={`Read more about ${post.title}`}
                  >
                    <FaArrowRight className="text-[11px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
