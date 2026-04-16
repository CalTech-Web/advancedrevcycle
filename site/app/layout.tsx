import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Advanced RevCycle | Post-Acute Revenue Cycle Management",
    template: "%s | Advanced RevCycle",
  },
  description:
    "Tech-Enabled. Human-Driven. Revenue Optimized. Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies with a 99%+ collection rate and $5B+ collected.",
  metadataBase: new URL("https://advancedrevcycle.com"),
  openGraph: {
    siteName: "Advanced RevCycle",
    url: "https://advancedrevcycle.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://advancedrevcycle.com/#organization",
      name: "Advanced RevCycle",
      alternateName: "ARC",
      url: "https://advancedrevcycle.com",
      logo: {
        "@type": "ImageObject",
        url: "https://advancedrevcycle.com/assets/logos/arc-logo.svg",
        width: 300,
        height: 62,
      },
      description:
        "Tech-Enabled. Human-Driven. Revenue Optimized. Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies nationwide with a 99%+ collection rate and over $5 billion collected.",
      telephone: "+1-888-737-3585",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3014 Dauphine Street, Ste A, PMB 490596",
        addressLocality: "New Orleans",
        addressRegion: "LA",
        postalCode: "70117",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Orleans",
          addressRegion: "LA",
          addressCountry: "US",
        },
      },
      sameAs: [
        "https://www.youtube.com/channel/UCXUFt6nvN3KgdpmbAEr5PCQ/featured",
        "https://www.facebook.com/hospicemanagement/",
        "https://www.linkedin.com/company/advanced-hospice-management/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Post-Acute Revenue Cycle Management Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospice Billing", url: "https://advancedrevcycle.com/hospice-billing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Health Billing", url: "https://advancedrevcycle.com/home-health-billing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Palliative Care Billing", url: "https://advancedrevcycle.com/palliative-care-billing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Authorization and Eligibility", url: "https://advancedrevcycle.com/authorization-and-eligibility" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contracting and Credentialing", url: "https://advancedrevcycle.com/contracting-and-credentialing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coding and OASIS Review", url: "https://advancedrevcycle.com/coding-and-oasis-review" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://advancedrevcycle.com/#website",
      url: "https://advancedrevcycle.com",
      name: "Advanced RevCycle",
      publisher: { "@id": "https://advancedrevcycle.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
