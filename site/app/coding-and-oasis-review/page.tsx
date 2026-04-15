import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coding and OASIS Review",
  description:
    "ICD-10 coding, PDGM-aligned diagnosis selection, and four levels of OASIS review for home health agencies. Acquired through the RCO (Rapid Coding and OASIS Review) acquisition.",
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
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Coding and OASIS Review</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            ICD-10 Coding and OASIS Review Built for Home Health
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Through the acquisition of Rapid Coding and OASIS Review (RCO), Advanced RevCycle offers four levels of coding and OASIS review services designed specifically for home health agencies operating under PDGM.
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
              Under the Patient-Driven Groupings Model, the primary diagnosis code directly determines your agency&apos;s clinical grouping and reimbursement rate. An incorrect or suboptimal code is not just a compliance risk, it is lost revenue on every episode.
            </p>
            <p>
              ARC&apos;s coding team works from CMS conventions and PDGM payment logic to select the primary diagnosis that accurately reflects the patient&apos;s clinical picture while maximizing your legitimate reimbursement. This is not upcoding. It is ensuring every clinically appropriate code is captured.
            </p>
            <p>
              Our OASIS review layers add assessment accuracy validation, Plan of Care alignment, and homebound status verification to protect your agency from audit risk while ensuring documentation supports the full scope of care delivered.
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

      {/* CTA */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#26303A] mb-5">
            Get Every Code Right From the First Episode
          </h2>
          <p className="text-gray-600 mb-8">Contact ARC to learn which review level is right for your home health agency.</p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
