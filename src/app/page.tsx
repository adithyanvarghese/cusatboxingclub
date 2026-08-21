import React from 'react';
import Hero from '@/components/home/Hero';
import CoursesGrid from '@/components/home/CoursesGrid';
import CallNowSection from '@/components/home/CallNowSection';
import SectionDivider from '@/components/home/SectionDivider';
import SchedulePreview from '@/components/home/SchedulePreview';
import AboutPreview from '@/components/home/AboutPreview';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import VideoSection from '@/components/home/VideoSection';
import MedalHoldersSection from '@/components/home/MedalHoldersSection';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "CUSAT Boxing Club | Boxing Club in Ernakulam, Kerala",
  description: "CUSAT Boxing Club is the premier boxing academy located at CUSAT Sports Complex in South Kalamassery, Kochi, serving athletes, students, youth cadets, and fitness enthusiasts across Ernakulam, Kerala.",
  canonical: "/",
});

export default function HomePage() {
  const jsonLdSchemas = getJsonLdSchemas("/");

  return (
    <>
      {/* JSON-LD Structured Data for Google Rich Snippets & AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      <main className="min-h-screen bg-[#070707] text-white">
        {/* 1. Hero Header */}
        <Hero />

        {/* 2. Courses & Divisions Grid */}
        <CoursesGrid />

        {/* 3. Direct Contact & Call Desk Section */}
        <CallNowSection />

        {/* 4. Full-Bleed Action Divider */}
        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop"
          altText="CUSAT Boxing Ring Sparring in Kalamassery Kochi"
        />

        {/* 4b. Sliding Medal Holders & Champions Ticker */}
        <MedalHoldersSection />

        {/* 5. Weekly Schedule Preview */}
        <SchedulePreview />

        {/* 6. About Heritage & Facility */}
        <AboutPreview />

        {/* 6. Gym Facilities & Equipment */}
        <FacilitiesSection />

        {/* 7. Photo Gallery Preview */}
        <GalleryPreview />

        {/* 8. Training & Sparring Video Highlights */}
        <VideoSection />
      </main>
    </>
  );
}
