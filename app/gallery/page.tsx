import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ImageGallerySection } from '@/components/sections/ImageGallerySection';
import { VideoGallerySection } from '@/components/sections/VideoGallerySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData.breadcrumbs['GalleryBreadcrumb']} />
      <ImageGallerySection data={sectionData.ImageGallery?.variants?.TransworldImageGallery1} />
      <VideoGallerySection data={sectionData.VideoGallery?.variants?.TransworldVideoGallery1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
