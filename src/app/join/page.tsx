import React from 'react';
import JoinClient from '@/components/pages/JoinClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Join CUSAT Boxing Club | Boxing Membership in Ernakulam",
  description: "Register online for CUSAT Boxing Club membership. Training options for school cadets, CUSAT university athletes, working adults, and competitive boxers in Ernakulam.",
  canonical: "/join",
});

export default function JoinPage() {
  const jsonLdSchemas = getJsonLdSchemas("/join");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <JoinClient />
    </>
  );
}
