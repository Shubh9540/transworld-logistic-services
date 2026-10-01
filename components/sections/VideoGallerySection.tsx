'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TransworldVideoGalleryData } from '@/types/templates.types';
import { FaPlay, FaTimes } from 'react-icons/fa';

export const VideoGallerySection = ({ data }: { data?: TransworldVideoGalleryData }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (!data) return null;

  const visibleVideos = data.videos.slice(0, visibleCount);
  const hasMore = visibleCount < data.videos.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const closePopup = () => {
    setActiveVideo(null);
  };

  return (
    <section className="bg-[#051024] py-16 lg:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c49250] opacity-5 pointer-events-none skew-x-12 translate-x-32"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[#ff4d15]"></div>
            <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
              {data.subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {data.titlePart1} <span className="text-[#ff4d15]">{data.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded overflow-hidden group cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              {/* Thumbnail Area */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#ff4d15] group-hover:text-white transition-colors duration-300">
                    <FaPlay className="text-[#051024] group-hover:text-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h3 className="text-[#0f172a] font-bold text-lg mb-2 leading-tight group-hover:text-[#ff4d15] transition-colors">
                  {video.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-[#ff4d15] text-white font-semibold px-8 py-3 rounded hover:bg-[#e03a00] transition-colors"
            >
              {data.loadMoreText}
            </button>
          </div>
        )}
      </div>

      {/* Video Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closePopup}
            className="fixed top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-[#ff4d15] transition-colors text-3xl z-[60]"
          >
            <FaTimes />
          </button>

          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded overflow-hidden">
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
