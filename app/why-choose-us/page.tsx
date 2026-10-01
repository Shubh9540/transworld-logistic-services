import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { Counter } from '@/components/sections/Counter';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function WhyChooseUsPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData.breadcrumbs['WhyChooseUsBreadcrumb']} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.TransworldWhyChooseUs1} />
      <Counter data={sectionData.Counter?.variants?.TransworldCounter1} />
      <Testimonials data={sectionData.Testimonials?.variants?.TransworldTestimonials1} />
      <CTASection data={sectionData.CTA?.variants?.TransworldCTA1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
