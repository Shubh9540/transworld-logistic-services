import React from 'react';
import { TransworldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: TransworldTemplateData = rawData as any;
  const sectionData = templateData?.categories?.Transworld?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  const blogData = sectionData.Blog?.variants?.TransworldBlog1;
  const blogUrl = `/blog/${id}`;
  const blog = blogData?.blogs.find(b => b.url === blogUrl) || blogData?.blogs[0];
  
  // Custom breadcrumb for the detail page
  const breadcrumbData = {
    title: blog ? blog.title : 'Blog Detail',
    bgImage: '/main logo/breadcrumb.jpg',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog', url: '/blog' },
      { label: blog ? blog.title : 'Details' }
    ]
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.TransworldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransworldHeader1} />
      <Breadcrumb data={breadcrumbData} />
      <BlogDetailContent data={blogData} id={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
