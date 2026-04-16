import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ICD-10 Coding and OASIS Review Services",
  description:
    "PDGM-aligned ICD-10 coding and four levels of OASIS review for home health agencies. Expert diagnosis selection and assessment accuracy to protect your clinical grouping and reimbursement rate.",
  alternates: {
    canonical: "https://advancedrevcycle.com/coding-and-oasis-review",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://advancedrevcycle.com/coding-and-oasis-review/#service",
      name: "ICD-10 Coding and OASIS Review",
      description:
        "Four levels of OASIS review and PDGM-aligned ICD-10 coding for home health agencies, including primary diagnosis selection per CMS conventions, assessment accuracy validation, Plan of Care alignment, and homebound status verification.",
      url: "https://advancedrevcycle.com/coding-and-oasis-review",
      provider: { "@id": "https://advancedrevcycle.com/#organization" },
      serviceType: "Medical Coding and OASIS Review",
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", name: "Home Health Agencies" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
        { "@type": "ListItem", position: 2, name: "Coding and OASIS Review", item: "https://advancedrevcycle.com/coding-and-oasis-review" },
      ],
    },
  ],
};

const levels = [
  {
    level: "Level 1",
    title: "ICD-10 Coding",
    items: [
      "ICD-10 coding per CMS conventions",
      "PDGM-aligned primary diagnosis selection",
      "Documentation review",
      "Active comorbidity coding",
    ],
  },
  {
    level: "Level 2",
    title: "Coding + Assessment",
    items: [
      "Everything in Level 1",
      "Assessment accuracy validation",
      "Documentation justification",
      "Assessment holds for missing face-to-face documentation",
    ],
  },
  {
    level: "Level 3",
    title: "Coding + Assessment + Plan of Care",
    items: [
      "Everything in Level 2",
      "Plan of Care alignment verification",
      "Documentation gap identification",
      "Homebound status validation",
    ],
  },
  {
    level: "Level 4",
    title: "Comprehensive Review",
    items: [
      "Everything in Level 3",
      "Full Plan of Care building",
      "Complete documentation package review",
      "End-to-end coding, assessment, and plan of care",
    ],
  },
];

export default function CodingAndOasisReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-coding" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-coding)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Coding and OASIS Review</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            ICD-10 Coding and OASIS Review Built for Home Health
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            The primary diagnosis code does not just describe the patient. Under PDGM, it determines the clinical grouping and the payment rate. ARC acquired Rapid Coding and OASIS Review (RCO) in November 2025 to bring expert coding and OASIS review into the billing platform, across four levels of review depth.
          </p>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Service Levels</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">Four Levels of Review to Match Your Needs</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the level of review that matches your agency&apos;s complexity and compliance requirements. All levels include expert ICD-10 coding per CMS conventions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((l) => (
              <div key={l.level} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <div className="inline-block bg-[#0B7A84] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {l.level}
                </div>
                <h3 className="font-bold text-[#26303A] mb-4 leading-snug">{l.title}</h3>
                <ul className="space-y-2">
                  {l.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#0B7A84] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#26303A] mb-8">Why Accurate Coding Matters Under PDGM</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Under PDGM, the primary diagnosis code is the variable that sets your clinical grouping and payment rate. An incorrect code is not just a documentation problem, it is lost revenue on every episode.
            </p>
            <p>
              ARC&apos;s coding team works from CMS conventions and PDGM payment logic to select the primary diagnosis that accurately reflects the patient&apos;s condition. This is not upcoding. It is capturing every code that is clinically supported and legitimately earned.
            </p>
            <p>
              The OASIS review layers add assessment accuracy validation, Plan of Care alignment, and homebound status verification. Each layer reduces audit exposure while confirming your documentation reflects what your clinical team actually delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0B7A84] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "4", label: "Levels of Review" },
              { value: "CMS", label: "Convention Aligned" },
              { value: "PDGM", label: "Expertise" },
              { value: "100%", label: "Contingency Model" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-[#B8EE40] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Home Health Billing",
                href: "/home-health-billing",
                desc: "Complete home health billing from NOA filing through payment, covering all payers under PDGM.",
              },
              {
                title: "Hospice Billing",
                href: "/hospice-billing",
                desc: "Full-cycle hospice billing with NOE filing, all-payer claims, and proactive follow-up.",
              },
              {
                title: "Authorization and Eligibility",
                href: "/authorization-and-eligibility",
                desc: "Eligibility verification and prior authorization management to prevent denials before they happen.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* From Our Blog */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">From Our Blog</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Why PDGM Primary Diagnosis Selection Matters More Than Ever",
                href: "/blog/pdgm-primary-diagnosis-selection",
                category: "Coding",
              },
              {
                title: "Home Health NOA Filing: How the Five-Day Rule Affects Your First Payment",
                href: "/blog/home-health-noa-five-day-rule",
                category: "Compliance",
              },
              {
                title: "Transitioning from In-House to Outsourced Billing: What to Expect",
                href: "/blog/outsourced-billing-transition",
                category: "Operations",
              },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-semibold text-[#0B7A84] bg-[#0B7A84]/10 px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <h3 className="font-bold text-[#26303A] mt-4 leading-snug group-hover:text-[#0B7A84] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#0B7A84] text-sm font-semibold mt-3">Read article &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#26303A] mb-5">
            Get Every Code Right From the First Episode
          </h2>
          <p className="text-gray-600 mb-8">If PDGM coding is not your team's primary expertise, the cost shows up in your grouping rate. Tell us your current review process and we will tell you which level closes the gap.</p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
