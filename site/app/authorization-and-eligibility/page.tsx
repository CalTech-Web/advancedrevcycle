import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Authorization and Eligibility",
  description:
    "Patient eligibility verification, prior authorization support, complete authorization lifecycle management, and appeals management for hospice, home health, and palliative care agencies.",
};

export default function AuthorizationAndEligibilityPage() {
  return (
    <ServicePage
      badge="Billing Support"
      title="Authorization and Eligibility Management From Start to Finish"
      intro="Authorization and eligibility errors are a leading cause of claim denials. ARC's authorization and eligibility team verifies coverage, manages the full authorization lifecycle, and handles every appeal so your billing team never has to chase approvals."
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
          "Works alongside ARC's billing team for seamless coordination across the revenue cycle",
          "Available to hospice, home health, and palliative care agencies of all sizes",
        ],
      }}
      ctaTitle="Stop Losing Revenue to Authorization Denials"
    />
  );
}
