import { TransworldTemplateData, TeamMember } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';

export const dynamic = 'force-dynamic';

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData = rawData as unknown as TransworldTemplateData;
  const commonData = templateData?.common;
  const sectionData = templateData?.categories?.Transworld?.sections;
  
  const teamMembers = sectionData?.Team?.variants?.TransworldTeam1?.members || [];
  const memberData = teamMembers.find((m) => m.id === id);

  if (!memberData) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Team Member Not Found</h2>
      </div>
    );
  }

  // Create a custom breadcrumb using the member's name
  const breadcrumbData = {
    title: "TEAM DETAILS",
    paths: [
      { label: "Home", url: "/" },
      { label: "Our Team", url: "/team" },
      { label: memberData.name }
    ],
    bgImage: "/main logo/breadcrumb.jpg"
  };

  return (
    <main className="bg-[var(--color-bg-light)]">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TeamDetailContent data={memberData} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
