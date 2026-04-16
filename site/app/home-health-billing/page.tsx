import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Home Health Billing Services",
  description:
    "Complete home health billing for Medicare, Medicaid, Medicare Advantage, VA, and commercial payers. ARC files all NOAs with PDGM expertise, proactive follow-up, and on-demand AR reporting.",
  alternates: {
    canonical: "https://advancedrevcycle.com/home-health-billing",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://advancedrevcycle.com/home-health-billing/#service",
      name: "Home Health Billing",
      description:
        "Complete home health billing services including NOA filing, all-payer claims submission under PDGM, payment posting, proactive claims follow-up, federal and state compliance oversight, and on-demand AR reporting.",
      url: "https://advancedrevcycle.com/home-health-billing",
      provider: { "@id": "https://advancedrevcycle.com/#organization" },
      serviceType: "Home Health Billing",
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", name: "Home Health Agencies" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
        { "@type": "ListItem", position: 2, name: "Home Health Billing", item: "https://advancedrevcycle.com/home-health-billing" },
      ],
    },
  ],
};

export default function HomeHealthBillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ServicePage
        badge="Home Health Billing"
        title="Complete Home Health Billing From Admission Through Payment"
        intro="Home health billing under PDGM means the primary diagnosis code sets your payment grouping before the first claim is filed. Our home health billers know that dependency. They handle NOA filing, all-payer claims, and follow every episode through disputes and reconsiderations until payment clears."
        features={[
          {
            title: "Notice of Admission (NOA) Filing",
            desc: "Timely and accurate NOA filing to protect your Medicare reimbursement from the first day of a home health episode.",
          },
          {
            title: "All-Payer Claims Submission",
            desc: "Create and submit claims for Medicare, Medicaid, Medicare Advantage, VA, and commercial insurance with clean claim verification.",
          },
          {
            title: "Electronic and Manual Payment Posting",
            desc: "Thorough payment posting from 835 files or manually, with full reconciliation and reporting.",
          },
          {
            title: "Proactive Claims Follow-Up",
            desc: "Every claim is tracked through disputes, appeals, and reconsiderations until payment is confirmed.",
          },
          {
            title: "Federal and State Compliance Oversight",
            desc: "Ongoing billing compliance oversight covering both federal CMS requirements and state-level regulations.",
          },
          {
            title: "On-Demand AR Reporting",
            desc: "Detailed accounts receivable reporting integrated with your EMR, available whenever you need it.",
          },
        ]}
        whySection={{
          title: "Why Home Health Agencies Choose ARC",
          points: [
            "Home health billing specialists with deep PDGM knowledge and experience across all payer types",
            "Works with your existing EMR system, no conversion required and no integration fees",
            "Proactive daily monitoring to catch issues before they become collections problems",
            "All 50 states, U.S. territories, Puerto Rico, and Hawaii served by our distributed U.S. team",
            "100% contingency pricing aligned with your agency's financial success",
          ],
        }}
        relatedServices={[
          {
            title: "Coding and OASIS Review",
            href: "/coding-and-oasis-review",
            desc: "PDGM-aligned ICD-10 coding and four levels of OASIS review to protect your clinical grouping and payment rate.",
          },
          {
            title: "Hospice Billing",
            href: "/hospice-billing",
            desc: "Full-cycle hospice billing with NOE filing, all-payer claims, and proactive follow-up for hospice agencies.",
          },
          {
            title: "Authorization and Eligibility",
            href: "/authorization-and-eligibility",
            desc: "Eligibility verification and prior authorization management to prevent denials before they happen.",
          },
        ]}
        relatedPosts={[
          {
            title: "Home Health NOA Filing: How the Five-Day Rule Affects Your First Payment",
            href: "/blog/home-health-noa-five-day-rule",
            category: "Compliance",
          },
          {
            title: "Why PDGM Primary Diagnosis Selection Matters More Than Ever",
            href: "/blog/pdgm-primary-diagnosis-selection",
            category: "Coding",
          },
          {
            title: "Transitioning from In-House to Outsourced Billing: What to Expect",
            href: "/blog/outsourced-billing-transition",
            category: "Operations",
          },
        ]}
        ctaTitle="Get Every Home Health Dollar You Have Earned"
      />
    </>
  );
}
