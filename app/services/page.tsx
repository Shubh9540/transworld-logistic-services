import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { CTASection } from '@/components/sections/CTASection';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-[#fdfaf6]">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.ServicesBreadcrumb} />
      <ServicesGridSection data={sectionData.ServicesGrid?.variants?.TransworldServicesGrid1} />
      <CTASection data={sectionData.CTA?.variants?.TransworldCTA1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
