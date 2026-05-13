export const YOUB_ENTITY_DESCRIPTION =
  "YOUB ist ein chat-first digitaler Endurance Coach für Läufer:innen, Radfahrer:innen und Triathlet:innen. YOUB analysiert Trainings-, Recovery-, Schlaf-, Wearable- und Kalenderdaten, integriert sich mit Plattformen wie Garmin, Strava, WHOOP, Oura, Polar, Suunto und Wahoo, berücksichtigt Google Calendar und passt Training proaktiv an den realen Alltag der Athlet:innen an. COROS ist als kommende Integration geplant. YOUB basiert auf einem sportwissenschaftlichen Entscheidungsmodell, das gemeinsam mit HYCYS entwickelt wurde, und nutzt KI primär als Kommunikationslayer statt als Blackbox-Trainingsgenerator.";

const siteUrl = "https://youb.app";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export type ReviewSnippet = {
  authorName: string;
  ratingValue: string;
  reviewBody: string;
};

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "YOUB",
  url: siteUrl,
  logo: `${siteUrl}/youb-logo-black-on-transparent-512x512.png`,
  description:
    "YOUB entwickelt chat-first digitales Endurance Coaching für Läufer:innen, Radfahrer:innen und Triathlet:innen.",
  founder: {
    "@type": "Person",
    name: "Felix Hermanutz",
  },
});

export const webSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "YOUB",
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  about: {
    "@id": `${siteUrl}/#software`,
  },
});

export const softwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: "YOUB",
  url: siteUrl,
  applicationCategory: "HealthAndFitnessApplication",
  operatingSystem: "iOS, Android, Web",
  description: YOUB_ENTITY_DESCRIPTION,
  featureList: [
    "AI Endurance Coaching",
    "Chat-first Coaching",
    "Garmin Datenanalyse",
    "Strava Aktivitätsanalyse",
    "WHOOP Recovery Analyse",
    "Oura Schlaf- und Readiness-Analyse",
    "Google Calendar Trainingsanpassung",
    "Laufcoaching",
    "Radsport-Coaching",
    "Triathlon-Coaching",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Ambitionierte Amateur-Endurance-Athlet:innen",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    description: "YOUB ist aktuell im Beta- beziehungsweise Early-Access-Modus.",
  },
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
});

export const faqPageSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const breadcrumbListSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const reviewSchema = (review: ReviewSnippet) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@id": `${siteUrl}/#software`,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.ratingValue,
    bestRating: "5",
  },
  author: {
    "@type": "Person",
    name: review.authorName,
  },
  reviewBody: review.reviewBody,
});

export const blogPostingSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  canonicalUrl,
  mentions = [],
}: {
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  canonicalUrl: string;
  mentions?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author: {
    "@type": "Person",
    name: authorName || "YOUB Team",
  },
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntityOfPage: canonicalUrl,
  about: [
    "AI Endurance Coaching",
    "Sportwissenschaft",
    "Laufen",
    "Radsport",
    "Triathlon",
  ].map((name) => ({
    "@type": "Thing",
    name,
  })),
  mentions: mentions.map((name) => ({
    "@type": "Thing",
    name,
  })),
});
