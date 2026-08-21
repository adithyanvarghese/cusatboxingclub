import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: "CUSAT Boxing Club",
  shortName: "CUSAT Boxing",
  description: "CUSAT Boxing Club is the premier boxing academy located at CUSAT Sports Complex in South Kalamassery, Kochi, serving school children, youth cadets, university athletes, working professionals, and fitness enthusiasts across Ernakulam, Kerala.",
  url: "https://cusatboxingclub.vercel.app",
  ogImage: "https://cusatboxingclub.vercel.app/logo.jpg",
  location: "University Road, CUSAT Sports Complex, South Kalamassery, Kalamassery, Kochi, Kerala 682022, India",
  phone: "+91 95444 57903",
  email: "boxing@cusat.ac.in",
  mapsUrl: "https://maps.app.goo.gl/9unYxnqjWt1CWZBP6",
  googleVerification: "google46f4e11a5869ebab",
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
  const defaultTitle = "CUSAT Boxing Club | Boxing Club in Ernakulam, Kerala";
  const fullTitle = !title
    ? defaultTitle
    : title.includes("CUSAT Boxing Club")
    ? title
    : `${title} | CUSAT Boxing Club`;

  const cleanCanonical = canonical.startsWith("/") ? canonical : `/${canonical}`;
  const fullCanonical = `${SITE_CONFIG.url}${cleanCanonical}`;

  return {
    title: fullTitle,
    description,
    authors: [{ name: "CUSAT Boxing Club", url: SITE_CONFIG.url }],
    creator: "CUSAT Boxing Club",
    publisher: "Cochin University of Science and Technology",
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: fullCanonical,
    },
    verification: {
      google: SITE_CONFIG.googleVerification,
    },
    other: {
      "geo.region": "IN-KL",
      "geo.placename": "South Kalamassery, Kalamassery, Kochi, Ernakulam, Kerala",
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
          alt: `${SITE_CONFIG.name} — Official Banner`
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

export function getJsonLdSchemas(pathname: string = "/") {
  const baseUrl = SITE_CONFIG.url;

  const organizationSchema = {
    "@type": "SportsClub",
    "@id": `${baseUrl}/#organization`,
    "name": "CUSAT Boxing Club",
    "alternateName": ["CUSAT Boxing Gym", "CUSAT Boxing Academy", "Cochin University Boxing Club"],
    "url": baseUrl,
    "logo": `${baseUrl}/logo.jpg`,
    "image": `${baseUrl}/logo.jpg`,
    "description": SITE_CONFIG.description,
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "priceRange": "₹₹",
    "sameAs": [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.whatsapp
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "University Road, CUSAT Sports Complex, South Kalamassery",
      "addressLocality": "Kalamassery, Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.0435,
      "longitude": 76.3248
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Ernakulam District"
      },
      {
        "@type": "City",
        "name": "Kochi"
      },
      {
        "@type": "City",
        "name": "Kalamassery"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "08:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:30",
        "closes": "19:30"
      }
    ],
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Cochin University of Science and Technology",
      "alternateName": "CUSAT",
      "url": "https://www.cusat.ac.in/"
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is CUSAT Boxing Club located in Ernakulam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CUSAT Boxing Club is located at University Road, CUSAT Sports Complex, South Kalamassery, Kalamassery, Kochi, Kerala 682022, within Ernakulam district."
        }
      },
      {
        "@type": "Question",
        "name": "Is CUSAT Boxing Club open to non-CUSAT students and the general public?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CUSAT Boxing Club is 100% open to school children (ages 8+), youth cadets, college students, working professionals, and boxing enthusiasts across Ernakulam and Kochi."
        }
      },
      {
        "@type": "Question",
        "name": "What are the training batch timings at CUSAT Boxing Club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Training sessions run Monday through Saturday: Morning Session (6:00 AM – 8:30 AM) and Evening Session (4:30 PM – 7:30 PM)."
        }
      },
      {
        "@type": "Question",
        "name": "Does CUSAT Boxing Club offer free trial sessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CUSAT Boxing Club offers free trial sessions for beginners and prospective boxers. You can register for a free trial online on the official website."
        }
      },
      {
        "@type": "Question",
        "name": "What boxing programs are offered at CUSAT Boxing Club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CUSAT Boxing Club offers School Boxing Cadets (ages 8-17), Youth & Junior Boxing, CUSAT University Varsity Squad training, and General Adult Fitness & Amateur Boxing."
        }
      }
    ]
  };

  const rawPath = pathname === "/" ? "" : pathname.replace(/^\//, "");
  const formattedPageName = rawPath
    ? rawPath.charAt(0).toUpperCase() + rawPath.slice(1)
    : "Home";

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}${pathname}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...(pathname !== "/" ? [{
        "@type": "ListItem",
        "position": 2,
        "name": formattedPageName,
        "item": `${baseUrl}${pathname}`
      }] : [])
    ]
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, faqSchema, breadcrumbSchema]
  };
}

