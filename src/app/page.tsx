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
import { constructMetadata, SITE_CONFIG } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "CUSAT Boxing Club",
  description: "CUSAT Boxing Club — Premier boxing club at CUSAT, Kochi. Open to school children, youth cadets, university athletes, and the general public.",
  canonical: "/",
});

export default function HomePage() {
  const jsonLdSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsOrganization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        "name": SITE_CONFIG.name,
        "alternateName": SITE_CONFIG.shortName,
        "url": SITE_CONFIG.url,
        "logo": SITE_CONFIG.ogImage,
        "image": SITE_CONFIG.ogImage,
        "description": SITE_CONFIG.description,
        "telephone": SITE_CONFIG.phone,
        "sameAs": [
          SITE_CONFIG.socials.instagram,
          SITE_CONFIG.socials.facebook
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CUSAT Sports Complex, South Kalamassery",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682022",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "SportsActivityLocation",
        "@id": `${SITE_CONFIG.url}/#location`,
        "name": "CUSAT Boxing Arena",
        "url": SITE_CONFIG.url,
        "telephone": SITE_CONFIG.phone,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.0435,
          "longitude": 76.3248
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CUSAT Sports Complex, South Kalamassery",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682022",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      <main className="min-h-screen bg-[#070707] text-white">
        {/* 1. Fenriz Style Hero Header */}
        <Hero />

        {/* 2. Unsere Kurse (Courses & Divisions Grid) */}
        <CoursesGrid />

        {/* 3. Direct Contact & Call Desk Section */}
        <CallNowSection />

        {/* 4. Full-Bleed Action Divider */}
        <SectionDivider
          imageSrc="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop"
          altText="CUSAT Boxing Ring Sparring"
        />

        {/* 4b. Sliding Medal Holders & Champions Ticker */}
        <MedalHoldersSection />

        {/* 5. Kursplan (Weekly Schedule Preview) */}
        <SchedulePreview />

        {/* 6. Über uns (About Heritage & Facility) */}
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
