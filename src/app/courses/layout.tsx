import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Boxing Training Courses & Programs",
  description: "Explore amateur boxing, school cadet programs, youth competitive sparring, and adult boxing fitness classes at CUSAT Boxing Club in Kalamassery, Kochi.",
  canonical: "/courses",
});

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
