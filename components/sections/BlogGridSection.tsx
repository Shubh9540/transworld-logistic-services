'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TransworldBlogData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const BlogGridSection = ({ data }: { data?: TransworldBlogData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg group flex flex-col border border-gray-100">
              {/* Image Container with Date Badge */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Date Badge */}
                <div className="absolute top-0 left-6 bg-[#ff4d15] text-white text-center py-2 px-4 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold leading-none">{blog.day}</span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase mt-1">{blog.month}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                {/* Category with Line */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#ff4d15] tracking-widest uppercase">
                    {blog.category}
                  </span>
                  <div className="h-[2px] w-8 bg-[#ff4d15]"></div>
                </div>

                {/* Title */}
                <Link href={blog.url} className="mb-4 inline-block">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] leading-tight group-hover:text-[#ff4d15] transition-colors">
                    {blog.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-1">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={blog.url}
                  className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-sm group-hover:text-[#ff4d15] transition-colors mt-auto w-fit"
                >
                  {blog.readMoreText || "Read More"}
                  <FaArrowRight className="text-[#ff4d15]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
