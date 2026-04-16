import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Hospice Billing",
  description:
    "Full-cycle hospice billing for Medicare, Medicaid, VA, and commercial payers. ARC files all NOEs, NOCs, and NOTRs with proactive claims follow-up and 99%+ collection rate.",
  alternates: {
    canonical: "https://advancedrevcycle.com/hospice-billing",
  },
};

export default function HospiceBillingPage() {
  return (
    <ServicePage
      badge="Hospice Billing"
      title="Expert Hospice Billing That Collects What You Have Earned"
      intro="Most billing companies call themselves specialists. Hospice is our only line of care. Our billers know every MAC quirk, every Notice of Election deadline, and every regulatory shift that can stall your AR. We work on contingency, so the 99%+ collection rate matters to us as much as it does to you."
      features={[
        {
          title: "NOE, NOC, and NOTR Filing",
          desc: "We file all Notice of Elections, Notices of Change, and Notices of Termination/Revocation accurately and on time to protect your Medicare eligibility.",
        },
        {
          title: "All-Payer Claims Submission",
          desc: "Create and submit claims for Medicare, Medicaid, VA, and commercial insurance payers with clean claim verification at every step.",
        },
        {
          title: "Electronic and Manual Payment Posting",
          desc: "Post payments from 835 files electronically or manually, with thorough reconciliation and live AR reporting integrated into your EMR.",
        },
        {
          title: "Proactive Claims Follow-Up",
          desc: "We follow every claim through disputes, appeals, and reconsiderations until it is paid, documenting every step in real time.",
        },
        {
          title: "Compliance Oversight and Audit Protection",
          desc: "Ongoing hospice billing compliance oversight to identify issues before they become audit risks.",
        },
        {
          title: "Live AR Reporting",
          desc: "Real-time reporting of billed and unbilled accounts receivable integrated directly with your EMR system.",
        },
      ]}
      whySection={{
        title: "Why Hospice Agencies Choose ARC",
        points: [
          "Dedicated hospice billing specialists, not generalist billers assigned to your account",
          "Deep knowledge of all three Medicare Administrative Contractors, Palmetto GBA, CGS, and National Government Services",
          "Experience with all hospice EMR platforms including Netsmart, MatrixCare, Mumms, and more",
          "100% contingency pricing, no flat fees or retainers, you pay only when you collect",
          "U.S.-based team that clients describe as feeling just like an in-house billing department",
        ],
      }}
      ctaTitle="Start Collecting Every Hospice Dollar You Have Earned"
    />
  );
}
