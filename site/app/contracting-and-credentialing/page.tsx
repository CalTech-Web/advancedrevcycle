import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Contracting and Credentialing",
  description:
    "Contract negotiation assistance, credentialing, provider enrollment, and payer relations liaison services for hospice, home health, and palliative care agencies.",
};

export default function ContractingAndCredentialingPage() {
  return (
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
      ctaTitle="Open Every Payer Door Before Your First Claim"
    />
  );
}
