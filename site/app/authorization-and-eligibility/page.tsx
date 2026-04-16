import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Authorization and Eligibility Management",
  description:
    "Patient eligibility verification, prior authorization support, full authorization lifecycle management, and denial appeals for hospice, home health, and palliative care agencies.",
  alternates: {
    canonical: "https://advancedrevcycle.com/authorization-and-eligibility",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://advancedrevcycle.com/authorization-and-eligibility/#service",
      name: "Authorization and Eligibility Management",
      description:
        "Patient eligibility verification, prior authorization support, complete authorization lifecycle management from initial approvals through re-authorizations, and authorization appeals management for post-acute care agencies.",
      url: "https://advancedrevcycle.com/authorization-and-eligibility",
      provider: { "@id": "https://advancedrevcycle.com/#organization" },
      serviceType: "Authorization and Eligibility Management",
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", name: "Post-Acute Care Agencies" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
        { "@type": "ListItem", position: 2, name: "Authorization and Eligibility", item: "https://advancedrevcycle.com/authorization-and-eligibility" },
      ],
    },
  ],
};

export default function AuthorizationAndEligibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ServicePage
        badge="Billing Support"
        title="Authorization and Eligibility Management From Start to Finish"
        intro="The fastest route to a denial is skipping eligibility verification before services begin. A close second is a lapsed authorization mid-episode. ARC's team verifies coverage upfront, manages the full lifecycle through re-authorizations, and handles appeals when payers push back. Your billers should be working claims, not chasing approvals."
        features={[
          {
            title: "Patient Eligibility Verification",
            desc: "Verify patient coverage, limits, deductibles, and co-pays before services begin to prevent avoidable denials.",
          },
          {
            title: "Prior Authorization Support",
            desc: "Submit prior authorizations accurately and track them through approval so care is never delayed by administrative issues.",
          },
          {
            title: "Authorization Lifecycle Management",
            desc: "Manage the complete authorization lifecycle from initial approvals through re-authorizations without gaps or lapses.",
          },
          {
            title: "Authorization Appeals Management",
            desc: "Handle all appeals for authorization denials and eligibility disputes to recover every reimbursement that has been denied.",
          },
        ]}
        whySection={{
          title: "Why Agencies Trust ARC for Authorization and Eligibility",
          points: [
            "Proactive verification before service delivery eliminates most avoidable denials at the source",
            "Full lifecycle management means no authorization lapses that could interrupt reimbursement",
            "Appeals expertise recovers revenue from denials that most agencies write off",
            "Integrated directly with ARC's billing team so nothing falls through between authorization and claims",
            "Available to hospice, home health, and palliative care agencies of all sizes",
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
            title: "Contracting and Credentialing",
            href: "/contracting-and-credentialing",
            desc: "Contract negotiation, credentialing, and provider enrollment so your agency can bill every payer.",
          },
        ]}
        ctaTitle="Stop Losing Revenue to Authorization Denials"
      />
    </>
  );
}
