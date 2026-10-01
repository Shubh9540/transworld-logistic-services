import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { Counter } from '@/components/sections/Counter';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { BlogSection } from '@/components/sections/BlogSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.TransworldHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.TransworldAbout1} />
      <Services data={sectionData.Services?.variants?.TransworldServices1} />
      <ProcessSection data={sectionData.Process?.variants?.TransworldProcess1} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.TransworldWhyChooseUs1} />
      <Counter data={sectionData.Counter?.variants?.TransworldCounter1} />
      <Testimonials data={sectionData.Testimonials?.variants?.TransworldTestimonials1} />
      <Partners data={sectionData.Partners?.variants?.TransworldPartners1} />
      <BlogSection data={sectionData.Blog?.variants?.TransworldBlog1} />
      <CTASection data={sectionData.CTA?.variants?.TransworldCTA1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
