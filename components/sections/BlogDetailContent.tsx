'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TransworldBlogData } from '@/types/templates.types';
import { FaCalendarAlt, FaClock, FaUser, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export const BlogDetailContent = ({ data, id }: { data?: TransworldBlogData, id: string }) => {
  if (!data) return null;

  // Find the exact blog from the URL id, or fallback to the first one
  const blogUrl = `/blog/${id}`;
  const blog = data.blogs.find(b => b.url === blogUrl) || data.blogs[0];

  const latestPosts = data.blogs.filter(b => b.id !== blog.id).slice(0, 4);

  return (
    <section className="bg-white py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12">

        {/* Main Content Area */}
        <div className="w-full lg:w-2/3">
          {/* Header */}
          <div className="flex items-center gap-4 text-sm font-semibold mb-6 flex-wrap">
            <span className="bg-[#ff4d15] text-white px-3 py-1 rounded text-xs uppercase tracking-wider">
              {blog.category}
            </span>
            <div className="flex items-center gap-2 text-[#64748b]">
              <FaCalendarAlt className="text-[#ff4d15]" />
              {blog.month.split(' ')[0]} {blog.day}, {blog.date.split('-')[0]}
            </div>
            <div className="flex items-center gap-2 text-[#64748b]">
              <FaClock className="text-[#ff4d15]" />
              5 Min Read
            </div>
            <div className="flex items-center gap-2 text-[#64748b]">
              <FaUser className="text-[#ff4d15]" />
              By {blog.author}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-8">
            {blog.title}
          </h1>

          <p className="text-[#64748b] text-lg leading-relaxed mb-8">
            {blog.excerpt}
          </p>

          <div className="relative w-full aspect-[21/9] mb-10 rounded-lg overflow-hidden shadow-md">
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Dummy Content matching the screenshot */}
          <div className="prose prose-lg max-w-none text-[#64748b]">
            <p className="mb-8">
              Building strength isn't just about lifting heavy weights — it's about consistency, the right technique and a well-structured workout plan. Whether you're a beginner or an experienced fitness enthusiast, these five workouts will help you build strength faster and achieve your goals.
            </p>

            <div className="space-y-8 mb-10">
              {[
                { title: 'Squats – The Foundation of Strength', desc: 'Squats target your legs, glutes and core, making them one of the most effective compound exercises. They help build lower body strength and improve overall athletic performance.' },
                { title: 'Deadlifts – Total Body Power', desc: 'Deadlifts work multiple muscle groups, including your back, legs and core. They are essential for building functional strength and improving posture.' },
                { title: 'Bench Press – Upper Body Strength', desc: 'The bench press is a classic exercise for building chest, shoulders and triceps. It\'s a must-have in any strength training routine.' },
                { title: 'Pull-Ups – Build a Stronger Back', desc: 'Pull-ups are excellent for building upper body strength, especially your back and biceps. They also improve grip strength and core stability.' },
                { title: 'Overhead Press – Shoulder Power', desc: 'This exercise targets your shoulders, triceps and upper chest, helping you build a strong and stable upper body.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#ff4d15] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#ff4d15] pl-6 py-2 my-10 bg-gray-50 italic text-[#0f172a] text-xl font-semibold">
              "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
            </blockquote>

            <p className="mb-10">
              Incorporate these workouts into your routine, stay consistent and fuel your body with proper nutrition. With the right mindset and guidance, you'll be stronger, fitter and healthier than ever before.
            </p>
          </div>

          {/* Share Section */}
          <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-gray-200">
            <span className="font-bold text-[#0f172a]">Share This Post:</span>
            <button className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:-translate-y-1 transition-transform">
              <FaFacebookF />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:-translate-y-1 transition-transform">
              <FaTwitter />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:-translate-y-1 transition-transform">
              <FaLinkedinIn />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:-translate-y-1 transition-transform">
              <FaWhatsapp />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10">

          {/* Latest Posts Widget */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#ff4d15]"></div>
              <h3 className="text-xl font-bold text-[#0f172a]">Latest Posts</h3>
            </div>

            <div className="flex flex-col gap-6">
              {latestPosts.map(post => (
                <Link href={post.url} key={post.id} className="flex gap-4 group">
                  <div className="w-24 h-20 shrink-0 relative rounded overflow-hidden">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-[#0f172a] text-sm leading-tight mb-2 group-hover:text-[#ff4d15] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-[#64748b]">
                      {post.month.split(' ')[0]} {post.day}, {post.date.split('-')[0]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Promotional Ad Widget */}
          <div className="relative rounded-lg overflow-hidden bg-black aspect-[3/4] group">
            <Image src="/blog/blog-1.jpg" alt="Promo" fill className="object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                Start Your
              </h3>
              <h3 className="text-3xl font-bold text-white mb-6">
                Fitness Journey <br /><span className="text-[#ff4d15]">Today</span>
              </h3>
              <p className="text-gray-300 text-sm mb-8">
                Get expert guidance, customized plans and real results.
              </p>
              <Link href="/contact" className="inline-block bg-[#ff4d15] text-white font-bold py-3 px-6 rounded text-center hover:bg-[#e03a00] transition-colors w-fit">
                Join Now →
              </Link>
            </div>
          </div>

          {/* Popular Tags Widget */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#ff4d15]"></div>
              <h3 className="text-xl font-bold text-[#0f172a]">Popular Tags</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Fitness', 'Nutrition', 'Weight Loss', 'Strength Training', 'Healthy Lifestyle', 'Workouts', 'Mental Health', 'Recovery', 'Gym Tips', 'Transformation'].map(tag => (
                <Link key={tag} href="#" className="px-3 py-2 bg-white border border-gray-200 text-[#64748b] text-sm rounded hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
