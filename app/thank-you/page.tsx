import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { ThankYouContent } from '@/components/sections/ThankYouContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ThankYouPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-[#0f172a] p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <ThankYouContent data={sectionData.ThankYouContent?.variants?.TransworldThankYou1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
