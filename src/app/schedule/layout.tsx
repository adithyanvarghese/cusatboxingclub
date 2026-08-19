import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Weekly Training Schedule & Batch Timings",
  description: "View morning (6:00 AM - 8:30 AM) and evening (4:30 PM - 7:30 PM) boxing training batch schedules at CUSAT Sports Arena in Kalamassery, Kochi.",
  canonical: "/schedule",
});

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
