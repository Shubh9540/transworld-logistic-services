import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailSidebar } from '@/components/sections/ServiceDetailSidebar';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { CTASection } from '@/components/sections/CTASection';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  const variantKey = `Transworld${id}1`;
  const detailData = sectionData.ServiceDetailPageContent?.variants?.[variantKey];

  if (!detailData) return <div>Service not found</div>;

  return (
    <main className="bg-[#fdfaf6]">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.ServicesBreadcrumb} />
      
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col xl:flex-row items-start gap-10">
          <ServiceDetailSidebar data={detailData.sidebar} />
          <ServiceDetailContent data={detailData.content} />
        </div>
      </section>

      <CTASection data={sectionData.CTA?.variants?.TransworldCTA1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
