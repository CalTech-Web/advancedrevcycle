import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Palliative Care Billing",
  description:
    "Comprehensive palliative care billing for Medicare, Medicaid, Medicare Advantage, VA, and commercial payers. ARC handles secondary payer claims, patient statements, and full appeals management.",
};

export default function PalliativeCareBillingPage() {
  return (
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
          "Same 99%+ collection rate and 100% contingency model as our hospice and home health services",
          "Dedicated billing team that communicates immediately when payer issues arise",
          "Works with any EMR your palliative care program already uses, no conversion, no disruption",
        ],
      }}
      ctaTitle="Let ARC Handle Your Palliative Care Billing"
    />
  );
}
