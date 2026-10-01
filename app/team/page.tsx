import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamSection } from '@/components/sections/TeamSection';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData = rawData as unknown as TransworldTemplateData;
  const commonData = templateData?.common;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const breadcrumbData = commonData?.breadcrumbs?.TeamBreadcrumb;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <TeamSection data={sectionData.Team?.variants?.TransworldTeam1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
