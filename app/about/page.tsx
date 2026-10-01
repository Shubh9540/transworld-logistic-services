import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageContent } from '@/components/sections/AboutPageContent';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData.breadcrumbs['AboutBreadcrumb']} />
      <AboutPageContent data={sectionData.AboutPageContent?.variants?.TransworldAboutPageContent1} />
      <ProcessSection data={sectionData.Process?.variants?.TransworldProcess1} />
      <Testimonials data={sectionData.Testimonials?.variants?.TransworldTestimonials1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
