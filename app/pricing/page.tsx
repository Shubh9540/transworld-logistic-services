import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

// Common Components
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';

// Page Specific Components
import { PricingCards } from '@/components/sections/PricingCards';
import { PricingTable } from '@/components/sections/PricingTable';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.PricingBreadcrumb} />
      
      <PricingCards data={sectionData.PricingCards?.variants?.TransworldPricingCards1} />
      <PricingTable data={sectionData.PricingTable?.variants?.TransworldPricingTable1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
