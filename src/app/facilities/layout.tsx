import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Boxing Ring & Gym Facilities",
  description: "Tour the high-performance boxing ring, heavy leather bags, speed bags, and conditioning facilities at CUSAT Sports Complex, Kochi.",
  canonical: "/facilities",
});

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
