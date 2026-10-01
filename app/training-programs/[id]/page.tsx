import { TransworldTemplateData, TrainingDetailItem } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TrainingDetailContent } from '@/components/sections/TrainingDetailContent';

export const dynamic = 'force-dynamic';

export default async function TrainingProgramsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const templateData = rawData as unknown as TransworldTemplateData;
  const commonData = templateData?.common;
  const sectionData = templateData?.categories?.Transworld?.sections;
  
  const programs = sectionData?.TrainingDetail?.variants?.TransworldTrainingDetail1?.programs || [];
  const programData = programs.find((p) => p.id === id) || programs[0]; // fallback to first if not found for dummy data

  if (!programData) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold">Training Program Not Found</h2>
      </div>
    );
  }

  // Create a custom breadcrumb
  const breadcrumbData = {
    title: "PROGRAM DETAILS",
    paths: [
      { label: "Home", url: "/" },
      { label: "Programs", url: "/training-programs" },
      { label: programData.programType }
    ],
    bgImage: "/main logo/breadcrumb.jpg"
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TrainingDetailContent data={programData} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
