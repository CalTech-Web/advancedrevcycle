import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Home Health Billing",
  description:
    "Complete home health billing services for Medicare, Medicaid, Medicare Advantage, VA, and commercial payers. ARC files all NOAs with proactive follow-up and on-demand AR reporting.",
};

export default function HomeHealthBillingPage() {
  return (
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
      ctaTitle="Get Every Home Health Dollar You Have Earned"
    />
  );
}
