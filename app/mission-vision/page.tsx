import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MissionSection } from '@/components/sections/MissionSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

export const dynamic = 'force-dynamic';

export default function MissionVisionPage() {
  const templateData = rawData as unknown as TransworldTemplateData;
  const commonData = templateData?.common;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const breadcrumbData = commonData?.breadcrumbs?.MissionVisionBreadcrumb;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-[var(--color-bg-light)]">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <MissionSection data={sectionData.Mission?.variants?.TransworldMission1} />
      <VisionSection data={sectionData.Vision?.variants?.TransworldVision1} />
      <Testimonials data={sectionData.Testimonials?.variants?.TransworldTestimonials1} />
      <CTASection data={sectionData.CTA?.variants?.TransworldCTA1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
