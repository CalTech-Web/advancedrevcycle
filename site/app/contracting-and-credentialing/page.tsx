import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Contracting and Credentialing Services",
  description:
    "Contract negotiation, credentialing, provider enrollment, and payer relations for hospice, home health, and palliative care agencies. ARC handles the full credentialing lifecycle so billing gaps never happen.",
  alternates: {
    canonical: "https://advancedrevcycle.com/contracting-and-credentialing",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://advancedrevcycle.com/contracting-and-credentialing/#service",
      name: "Contracting and Credentialing",
      description:
        "Contract negotiation assistance with insurance payers, credentialing from initial application through ongoing maintenance, provider enrollment and application management, and payer relations liaison services for post-acute care agencies.",
      url: "https://advancedrevcycle.com/contracting-and-credentialing",
      provider: { "@id": "https://advancedrevcycle.com/#organization" },
      serviceType: "Contracting and Credentialing",
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", name: "Post-Acute Care Agencies" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
        { "@type": "ListItem", position: 2, name: "Contracting and Credentialing", item: "https://advancedrevcycle.com/contracting-and-credentialing" },
      ],
    },
  ],
};

export default function ContractingAndCredentialingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ServicePage
        badge="Billing Support"
        title="Contracting and Credentialing That Opens Every Payer Door"
        intro="You cannot bill a payer you are not credentialed with. Simple as that. ARC handles the full contracting and credentialing process so there is never a gap between your care delivery and your ability to bill for it. New agency, new state, or just behind on renewals, we have been through it before."
        features={[
          {
            title: "Contract Negotiation Assistance",
            desc: "Negotiate with insurance payers to secure favorable reimbursement rates and contract terms for your agency.",
          },
          {
            title: "Initial Credentialing",
            desc: "Manage the full credentialing application process from initial submission through payer approval.",
          },
          {
            title: "Ongoing Credentialing Maintenance",
            desc: "Track credentialing renewal dates and manage recredentialing before lapses can interrupt billing.",
          },
          {
            title: "Provider Enrollment",
            desc: "Handle provider enrollment and application management across all required payers.",
          },
          {
            title: "Payer Relations Liaison",
            desc: "Serve as your agency's direct liaison to payers for escalations, disputes, and relationship management.",
          },
        ]}
        whySection={{
          title: "Why Agencies Use ARC for Contracting and Credentialing",
          points: [
            "Credentialing delays cause billing gaps. ARC prevents them.",
            "Payer relations expertise built through years of working with every major MAC and commercial insurer",
            "Handles startup credentialing for new agencies and expansion credentialing for growing ones",
            "Coordinates with the billing team so credentialing status never creates a claims gap",
            "Available as a standalone service or alongside full billing services",
          ],
        }}
        relatedServices={[
          {
            title: "Hospice Billing",
            href: "/hospice-billing",
            desc: "Full-cycle hospice billing with NOE filing, all-payer claims, and proactive follow-up.",
          },
          {
            title: "Home Health Billing",
            href: "/home-health-billing",
            desc: "Complete home health billing from NOA filing through payment, covering all payers under PDGM.",
          },
          {
            title: "Authorization and Eligibility",
            href: "/authorization-and-eligibility",
            desc: "Eligibility verification and prior authorization management to prevent denials before they happen.",
          },
        ]}
        relatedPosts={[
          {
            title: "Credentialing for Post-Acute Agencies: Avoiding the Gaps That Stall Your First Claim",
            href: "/blog/post-acute-credentialing-gaps",
            category: "Operations",
          },
          {
            title: "Authorization and Eligibility Verification: Preventing Denials Before Claims Are Filed",
            href: "/blog/authorization-eligibility-denial-prevention",
            category: "Operations",
          },
          {
            title: "Transitioning from In-House to Outsourced Billing: What to Expect",
            href: "/blog/outsourced-billing-transition",
            category: "Operations",
          },
        ]}
        ctaTitle="Open Every Payer Door Before Your First Claim"
      />
    </>
  );
}
