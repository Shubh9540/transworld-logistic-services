import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AwardsCounter } from '@/components/sections/AwardsCounter';
import { AwardsMilestones } from '@/components/sections/AwardsMilestones';
import { AwardsCertifications } from '@/components/sections/AwardsCertifications';
import { AwardsCommitment } from '@/components/sections/AwardsCommitment';

export const dynamic = 'force-dynamic';

export default function AwardsPage() {
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.AwardsBreadcrumb} />
      <AwardsCounter data={sectionData.AwardsCounter?.variants?.TransworldAwardsCounter1} />
      <AwardsMilestones data={sectionData.AwardsMilestones?.variants?.TransworldAwardsMilestones1} />
      <AwardsCertifications data={sectionData.AwardsCertifications?.variants?.TransworldAwardsCertifications1} />
      <AwardsCommitment data={sectionData.AwardsCommitment?.variants?.TransworldAwardsCommitment1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
