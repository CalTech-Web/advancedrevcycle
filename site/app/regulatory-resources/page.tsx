import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulatory Resources",
  description:
    "Important links and regulatory resources for hospice and home health agencies, including Medicare Administrative Contractors, CMS manuals, billing codes, and payment rate calculators.",
};

const macResources = [
  {
    name: "Palmetto GBA",
    desc: "Medicare Administrative Contractor for Jurisdictions J and M.",
    url: "https://www.palmettogba.com/",
  },
  {
    name: "CGS (Celerian Group Company)",
    desc: "Medicare Administrative Contractor for Jurisdictions 15 and H.",
    url: "https://www.cgsmedicare.com/",
  },
  {
    name: "National Government Services (NGS)",
    desc: "Medicare Administrative Contractor for Jurisdictions 6 and K.",
    url: "https://www.ngsmedicare.com/",
  },
];

const cmsResources = [
  {
    name: "Medicare Benefit Policy Manual, Chapter 9",
    desc: "Hospice and Medicare coverage policy, conditions of participation, and benefit period requirements.",
    url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/bp102c09.pdf",
  },
  {
    name: "Medicare Benefit Policy Manual, Chapter 11",
    desc: "End Stage Renal Disease facility benefit coverage and policy.",
    url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/bp102c11.pdf",
  },
  {
    name: "CMS Regulations and Guidance Manuals",
    desc: "Full library of CMS guidance manuals covering Medicare and Medicaid programs.",
    url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals",
  },
];

const billingResources = [
  {
    name: "Hospice Medicare Billing Codes Sheet",
    desc: "Reference list of hospice revenue codes, condition codes, and occurrence codes for Medicare claims.",
    url: "#",
  },
  {
    name: "Hospice Payment Rates Calculator",
    desc: "Calculate current hospice payment rates by level of care and geographic location.",
    url: "#",
  },
  {
    name: "Claims Payment Issue Log",
    desc: "Track and document open claims payment issues with MACs and payers.",
    url: "#",
  },
];

export default function RegulatoryResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Regulatory Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Regulatory Resources for Post-Acute Billing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Three MACs cover all of Medicare. CMS publishes the rules. Here are the pages that matter for hospice and home health billing, without the search.
          </p>
        </div>
      </section>

      {/* MAC Resources */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Medicare Administrative Contractors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {macResources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{r.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                <p className="text-[#0B7A84] text-sm font-semibold">Visit site &rarr;</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Resources */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">CMS Regulations and Guidance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cmsResources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{r.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                <p className="text-[#0B7A84] text-sm font-semibold">View manual &rarr;</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Tools */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Billing Tools and References</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {billingResources.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#26303A] mb-2">{r.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                <p className="text-[#0B7A84] text-sm font-semibold">Contact ARC for access &rarr;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Your Next Billing Question</h2>
          <p className="text-teal-100 mb-8">
            ARC&apos;s billers do not use these links to look things up. They know what they say. Call or message when you need someone who already has the answer.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
