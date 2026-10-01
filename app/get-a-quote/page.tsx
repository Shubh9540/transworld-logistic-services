import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { GetQuoteContent } from '@/components/sections/GetQuoteContent';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const dynamic = 'force-dynamic';

export default function GetQuotePage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-[#0f172a] p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      <Breadcrumb data={commonData.breadcrumbs?.GetQuoteBreadcrumb} />

      <GetQuoteContent data={sectionData.GetQuoteContent?.variants?.TransworldGetQuote1} />
      
      <Footer data={commonData.Footer} />
    </main>
  );
}

// force refresh
