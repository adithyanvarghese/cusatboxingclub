import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Join CUSAT Boxing Club | Membership Registration",
  description: "Join CUSAT Boxing Club in Kalamassery, Kochi. Open to school students, university athletes, and working professionals. Register online today.",
  canonical: "/join",
});

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
