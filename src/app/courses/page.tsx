import React from 'react';
import CoursesClient from '@/components/pages/CoursesClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Boxing Classes in Ernakulam | CUSAT Boxing Club Programs",
  description: "Explore structured boxing classes in Ernakulam for school cadets, university athletes, beginners, and adult fitness members at CUSAT Boxing Club in Kalamassery, Kochi.",
  canonical: "/courses",
});

export default function CoursesPage() {
  const jsonLdSchemas = getJsonLdSchemas("/courses");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <CoursesClient />
    </>
  );
}
