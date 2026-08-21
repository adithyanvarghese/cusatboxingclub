import React from 'react';
import ScheduleClient from '@/components/pages/ScheduleClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Boxing Training Schedule in Ernakulam | CUSAT Boxing Club",
  description: "View morning and evening boxing training batch timings at CUSAT Boxing Club, CUSAT Sports Complex, South Kalamassery, Kochi, Ernakulam, Kerala.",
  canonical: "/schedule",
});

export default function SchedulePage() {
  const jsonLdSchemas = getJsonLdSchemas("/schedule");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <ScheduleClient />
    </>
  );
}
