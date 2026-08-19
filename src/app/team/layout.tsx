import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Coaches & Champion Athletes",
  description: "Meet the certified boxing coaches and national medal-winning athletes of CUSAT Boxing Club in Kochi, Kerala.",
  canonical: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
