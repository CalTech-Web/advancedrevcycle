import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Palliative Care Billing Services",
  description:
    "Comprehensive palliative care billing for Medicare, Medicaid, Medicare Advantage, VA, and commercial payers. ARC handles secondary payer claims, patient statements, and full appeals management.",
  alternates: {
    canonical: "https://advancedrevcycle.com/palliative-care-billing",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://advancedrevcycle.com/palliative-care-billing/#service",
      name: "Palliative Care Billing",
      description:
        "Comprehensive palliative care billing including all-payer claims submission, secondary payer billing, patient statements, payment posting, proactive claims follow-up, and live AR reporting.",
      url: "https://advancedrevcycle.com/palliative-care-billing",
      provider: { "@id": "https://advancedrevcycle.com/#organization" },
      serviceType: "Palliative Care Billing",
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", name: "Palliative Care Programs" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
        { "@type": "ListItem", position: 2, name: "Palliative Care Billing", item: "https://advancedrevcycle.com/palliative-care-billing" },
      ],
    },
  ],
};

export default function PalliativeCareBillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ServicePage
        badge="Palliative Care Billing"
        title="Palliative Care Billing That Navigates Every Payer Complexity"
        intro="Palliative care sits at a payer crossroads. Medicare, Medicaid, Medicare Advantage, VA, and commercial plans all show up, sometimes on the same patient. Our billers handle primary claims, secondary billing, and patient statements without losing track of any layer."
        features={[
          {
            title: "All-Payer Claims Submission",
            desc: "Create and submit claims for Medicare, Medicaid, Medicare Advantage, VA, and commercial insurance payers.",
          },
          {
            title: "Secondary Payer Billing",
            desc: "Create and submit secondary payer claims accurately and on time to maximize every reimbursement opportunity.",
          },
          {
            title: "Patient Statements",
            desc: "Generate and manage patient statements for balances after primary and secondary payer adjudication.",
          },
          {
            title: "Electronic and Manual Payment Posting",
            desc: "Post payments electronically from 835 files or manually, with reconciliation and AR reporting.",
          },
          {
            title: "Proactive Claims Follow-Up",
            desc: "Follow every claim through disputes, appeals, and reconsiderations until it is paid in full.",
          },
          {
            title: "Live AR Reporting",
            desc: "Real-time accounts receivable reporting giving your leadership team full visibility at all times.",
          },
        ]}
        whySection={{
          title: "Why Palliative Care Programs Choose ARC",
          points: [
            "Palliative care billing expertise that understands the unique payer mix and documentation requirements",
            "Secondary billing and patient statement management handled as part of the full billing cycle",
            "Same 99%+ collection rate, and because our fee is contingency-based, we pursue every denial and every appeal until the claim is paid",
            "Dedicated billing team that communicates immediately when payer issues arise",
            "Works with any EMR your palliative care program already uses, no conversion, no integration fees, no disruption",
          ],
        }}
        relatedServices={[
          {
            title: "Hospice Billing",
            href: "/hospice-billing",
            desc: "Full-cycle hospice billing with NOE filing, all-payer claims, and proactive follow-up for hospice agencies.",
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
            title: "Palliative Care Billing: How the Multi-Payer Complexity Requires Specialized Billing",
            href: "/blog/palliative-care-billing-multi-payer",
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
        ctaTitle="ARC Handles the Payer Complexity. You Handle the Care."
      />
    </>
  );
}
