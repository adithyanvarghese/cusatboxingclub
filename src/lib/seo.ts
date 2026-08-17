import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: "CUSAT Boxing Club",
  shortName: "CUSAT Boxing",
  description: "CUSAT Boxing Club — Premier boxing & combat sports academy at CUSAT. 100% open to school children, youth cadets, university students, working professionals, and the general public in Kochi, Kerala.",
  url: "https://cusatboxing.com",
  ogImage: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  location: "CUSAT Sports Complex, South Kalamassery, Kochi, Kerala 682022",
  phone: "+91 95444 57903",
  email: "boxing@cusat.ac.in",
  mapsUrl: "https://maps.app.goo.gl/9unYxnqjWt1CWZBP6",
  socials: {
    instagram: "https://www.instagram.com/cusat_boxing/",
    facebook: "https://www.facebook.com/profile.php?id=100083611520793&name=xhp_nt__fb__action__open_user",
    whatsapp: "https://wa.me/919544457903"
  }
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  canonical = "/",
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = !title || title.includes("CUSAT Boxing Club")
    ? (title || "CUSAT Boxing Club")
    : `${title} | CUSAT Boxing Club`;

  const fullCanonical = `${SITE_CONFIG.url}${canonical}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "CUSAT Boxing Club", "CUSAT Boxing", "Boxing Club Kochi",
      "Cochin University Boxing", "Boxing Training Kalamassery",
      "Kids Boxing Classes Kochi", "School Boxing Cadets Kerala",
      "Kerala Boxing Association", "Boxing Gym Kalamassery",
      "Combat Sports CUSAT", "Boxing Academy Kochi"
    ],
    authors: [{ name: "CUSAT Boxing Club" }],
    creator: "CUSAT Boxing Club",
    publisher: "Cochin University of Science and Technology",
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: fullCanonical,
    },
    other: {
      "geo.region": "IN-KL",
      "geo.placename": "South Kalamassery, Kochi",
      "geo.position": "10.0435;76.3248",
      "ICBM": "10.0435, 76.3248"
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} Banner`
        }
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
