import React from 'react';
import GalleryClient from '@/components/pages/GalleryClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "CUSAT Boxing Club Gallery | Boxing Training in Ernakulam",
  description: "Browse photo captures, equipment views, and video bout highlights from CUSAT Boxing Club at CUSAT Sports Complex in Kalamassery, Kochi, Ernakulam.",
  canonical: "/gallery",
});

export default function GalleryPage() {
  const jsonLdSchemas = getJsonLdSchemas("/gallery");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <GalleryClient />
    </>
  );
}
