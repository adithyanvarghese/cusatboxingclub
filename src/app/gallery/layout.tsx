import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Training & Tournament Photo Gallery",
  description: "Browse action photos of ring sparring, heavy bag conditioning, and championship tournament moments at CUSAT Boxing Club.",
  canonical: "/gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
