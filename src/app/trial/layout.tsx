import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Book Free Boxing Trial Training Session",
  description: "Book a 100% free trial boxing session at CUSAT Boxing Club in Kalamassery, Kochi. Experience professional coaching, heavy bag drills, and ring footwork.",
  canonical: "/trial",
});

export default function TrialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
