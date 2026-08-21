import React from 'react';
import TeamClient from '@/components/pages/TeamClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Boxing Coaches in Ernakulam | CUSAT Boxing Varsity Squad",
  description: "Meet state & national certified boxing coaches, varsity team captains, and boxing champions representing CUSAT Boxing Club in Ernakulam, Kerala.",
  canonical: "/team",
});

export default function TeamPage() {
  const jsonLdSchemas = getJsonLdSchemas("/team");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <TeamClient />
    </>
  );
}
