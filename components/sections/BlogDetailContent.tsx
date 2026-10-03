'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldBlogData } from '@/types/templates.types';
import { FaClock, FaUser, FaComments } from 'react-icons/fa';

export const BlogDetailContent = ({ data, id }: { data?: TransworldBlogData, id: string }) => {
  if (!data) return null;

  // Find the exact blog from the URL id, or fallback to the first one
  const blogUrl = `/blog/${id}`;
  const blog = data.blogs.find(b => b.url === blogUrl) || data.blogs[0];

  const latestPosts = data.blogs.filter(b => b.id !== blog.id).slice(0, 3);

  // Calculate dynamic categories from blogs
  const categoriesMap = data.blogs.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Create an array of categories, ensuring at least some dummy ones if data is sparse to match design
  let categories = Object.entries(categoriesMap).map(([name, count]) => ({ name, count }));

  // To highlight one word in the title if possible, else render as is
  const titleWords = blog.title.split(' ');
  const lastWord = titleWords.pop();
  const restTitle = titleWords.join(' ');

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row items-start gap-12">

        {/* Main Content Area */}
        <div className="w-full lg:flex-1">

          <div className="relative w-full aspect-[16/10] mb-8 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              fill
              className="object-cover"
            />
            {/* Date Badge over image */}
            <div className="absolute top-6 right-6 bg-white text-center rounded-lg overflow-hidden shadow-lg border-t-4 border-[var(--color-accent)] flex flex-col min-w-[70px]">
              <div className="bg-white text-[#0f284b] font-black text-2xl px-3 pt-3 pb-0 leading-none">{blog.day}</div>
              <div className="bg-white text-[#0f284b] text-xs font-bold px-3 pb-3 pt-1 uppercase">{blog.month.substring(0, 3)}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0f284b] text-white text-xs font-bold tracking-wider uppercase">
              <FaUser /> BY {blog.author || 'ADMIN'}
            </div>
            <div className="flex items-center gap-2 text-[#0f284b] font-bold text-xs uppercase tracking-wider">
              <FaComments className="text-[var(--color-accent)]" size={16} /> COMMENTS (05)
            </div>
            <div className="flex items-center gap-2 text-[#0f284b] font-bold text-xs uppercase tracking-wider">
              <FaClock className="text-[var(--color-accent)]" size={16} /> 4 MIN READ
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#0f284b] leading-tight mb-8">
            {restTitle} <span className="text-[var(--color-accent)]">{lastWord}</span>
          </h1>

          <div className="prose prose-lg max-w-none text-gray-500 mb-10 leading-relaxed">
            <p className="mb-6 text-[15px] md:text-base">
              Your team's brilliance, determination, and confidence will drive you to conquer new frontiers; greatness lies within you. greatness lies within will driveYour team's brilliance, determination, and confidence will drive you to conquer new frontiers; greatness lies within you. greatness lies within will driveYour team's brilliance, determination, and confidence will drive you to conquer new frontiers; greatness lies within you.
            </p>
            <p className="mb-10 text-[15px] md:text-base">
              The wise man therefore always holds in these matters to this principle of selection. He rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains to the selection point.
            </p>

            <blockquote className="my-12 bg-[#f8f9fc] p-10 rounded-xl relative flex flex-col">
              <div className="text-[var(--color-accent)] text-6xl font-serif absolute top-6 left-6 leading-none">“</div>
              <p className="text-[#0f284b] text-lg font-bold italic mb-8 relative z-10 pl-10 pr-4 leading-relaxed">
                "Your team's brilliance, determination, and confidence will drive you to conquer new frontiers; greatness lies within you. greatness lies within driveYour team's brilliance, determination, and confidence will drive you to conquer new frontiers; greatness lies within you"
              </p>
              <div className="flex items-center gap-4 self-end">
                <div className="w-12 h-[2px] bg-[var(--color-accent)]"></div>
                <span className="text-[#0f284b] font-bold text-sm tracking-wider">Kane Williamson / <span className="text-[var(--color-accent)]">CEO</span></span>
              </div>
            </blockquote>

            <h2 className="text-3xl md:text-4xl font-black text-[#0f284b] mb-6">
              How Are Federal Contractors <span className="text-[var(--color-accent)]">Expected.</span>
            </h2>

            <p className="mb-10 text-[15px] md:text-base">
              Out enigma ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image src="/blog/1.jpg" alt="Detail 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image src="/blog/2.jpg" alt="Detail 2" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Sidebar */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-10 sticky top-32 h-fit">

          {/* Categories Widget */}
          <div className="bg-[#f8f9fc] p-8 md:p-10 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[2px] bg-[var(--color-accent)]"></div>
              <h3 className="text-2xl font-black text-[#0f284b]">Categories</h3>
            </div>

            <ul className="flex flex-col gap-3">
              {categories.map((cat) => {
                const isActive = cat.name === blog.category; // Highlight the current blog's category
                return (
                  <li key={cat.name}>
                    <Link
                      href={`/blog?category=${cat.name}`}
                      className={`flex items-center justify-between px-6 py-4 rounded-lg font-bold text-sm transition-colors ${isActive ? 'bg-[var(--color-accent)] text-white' : 'bg-white text-[#0f284b] hover:bg-[var(--color-accent)] hover:text-white'}`}
                    >
                      <span>{cat.name}</span>
                      <span>({String(cat.count).padStart(2, '0')})</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Recent Posts Widget */}
          <div className="bg-[#f8f9fc] p-8 md:p-10 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[2px] bg-[var(--color-accent)]"></div>
              <h3 className="text-2xl font-black text-[#0f284b]">Recent Post</h3>
            </div>

            <div className="flex flex-col gap-8">
              {latestPosts.map(post => (
                <Link href={post.url} key={post.id} className="flex flex-col gap-5 group">
                  <div className="w-full aspect-[2/1] relative rounded-lg overflow-hidden shadow-sm">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-[#0f284b] text-[17px] leading-snug group-hover:text-[var(--color-accent)] transition-colors pr-4">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
