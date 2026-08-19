import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Contact & Location | CUSAT Sports Complex",
  description: "Get location directions, phone contact (+91 95444 57903), email, and Google Maps location for CUSAT Boxing Club in South Kalamassery, Kochi, Kerala.",
  canonical: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
