import React from 'react';
import ContactClient from '@/components/pages/ContactClient';
import { constructMetadata, getJsonLdSchemas } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Contact CUSAT Boxing Club | Ernakulam, Kalamassery, Kochi",
  description: "Get location map directions, phone contact (+91 95444 57903), and WhatsApp desk details for CUSAT Boxing Club at CUSAT Sports Complex, South Kalamassery, Ernakulam, Kerala 682022.",
  canonical: "/contact",
});

export default function ContactPage() {
  const jsonLdSchemas = getJsonLdSchemas("/contact");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <ContactClient />
    </>
  );
}
