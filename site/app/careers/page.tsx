import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers at Advanced RevCycle | Post-Acute Billing Jobs",
  description:
    "Join the Advanced RevCycle team. We hire 1 biller for every 50 applicants. Remote U.S.-based roles for post-acute billing specialists in hospice, home health, and palliative care revenue cycle management.",
  alternates: {
    canonical: "https://advancedrevcycle.com/careers",
  },
};

const values = [
  {
    title: "Exclusive Focus",
    desc: "We work only in post-acute care. Every biller becomes a genuine expert in hospice, home health, or palliative billing, not a generalist cycling through dozens of specialties.",
  },
  {
    title: "Remote-First",
    desc: "The team is fully remote and distributed across the U.S. Billing professionals work from wherever they are while serving agencies in every state.",
  },
  {
    title: "High Standards",
    desc: "We hire 1 biller for every 50 applicants. The agencies we serve cannot afford billing mistakes, and neither can we. Joining ARC means working with people who take this craft seriously.",
  },
  {
    title: "Mission-Driven",
    desc: "Many ARC team members have personal connections to hospice and palliative care. The work is not just a job. Every claim filed and every dollar collected funds care for patients and families at the end of life.",
  },
];

const whatWeLookFor = [
  {
    title: "Deep Payer Knowledge",
    desc: "You know how Medicare hospice billing works at the MAC level. You understand the difference between Palmetto GBA, CGS, and NGS jurisdictions. When a claim is pended, you know why before the denial notice arrives.",
  },
  {
    title: "EMR Fluency",
    desc: "You have worked inside at least one major post-acute EMR, such as Netsmart, MatrixCare, WellSky, Axxess, or Homecare Homebase, and you pick up new platforms without extended onboarding.",
  },
  {
    title: "AR Discipline",
    desc: "You do not let claims age without a status. You run daily reports, document every follow-up action, and escalate claims that are stuck before deadlines close.",
  },
  {
    title: "Regulatory Awareness",
    desc: "You track CMS updates, MAC bulletins, and annual rule changes that affect hospice and home health reimbursement. You do not learn about wage index changes from a denied claim.",
  },
];

const faqItems = [
  {
    q: "What types of billing roles does ARC typically hire for?",
    a: "Most open roles are for hospice billers, home health billers, and palliative care billing specialists. We also hire for coding and OASIS review positions through our RCO division, and for authorization and eligibility specialists with Medicare Advantage experience.",
  },
  {
    q: "Is prior post-acute billing experience required?",
    a: "Yes. ARC works exclusively in hospice, home health, and palliative care. Candidates who have billed in other specialties and are looking to transition may be considered if they demonstrate strong Medicare and Medicaid billing fundamentals, but direct post-acute experience is the most relevant background.",
  },
  {
    q: "Are all positions fully remote?",
    a: "Yes. The ARC team is entirely remote and distributed across the U.S. Billers work from home and serve agencies in all 50 states, U.S. territories, Puerto Rico, and Hawaii.",
  },
  {
    q: "How does ARC's hiring process work?",
    a: "The process typically includes a structured application review, a skills assessment relevant to the role, and interviews with the billing leadership team. The selectivity is real: approximately 1 candidate is hired for every 50 applicants.",
  },
  {
    q: "What does a typical day look like for an ARC biller?",
    a: "Billers start each day running 60-day payer reports and checking overnight patient status changes for their assigned agency accounts. The day involves claim submission, payment posting, denial follow-up, and direct communication with agency contacts about coverage changes or documentation gaps. No two days are identical because payer activity is continuous.",
  },
  {
    q: "Does ARC offer training for new hires?",
    a: "Yes. Every new biller goes through structured onboarding that covers ARC's workflow systems, the specific EMR platforms used by their assigned accounts, and the payer-specific billing rules relevant to their line of care. Experienced billers are paired with new team members during the initial period.",
  },
];

const photos = [
  "/assets/gallery/careers-1.jpg",
  "/assets/gallery/careers-2.jpg",
  "/assets/gallery/careers-3.jpg",
  "/assets/gallery/careers-4.jpg",
];

const careersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://advancedrevcycle.com/careers/#page",
      url: "https://advancedrevcycle.com/careers",
      name: "Careers at Advanced RevCycle | Post-Acute Billing Jobs",
      description:
        "Remote post-acute billing jobs at Advanced RevCycle. We hire hospice billers, home health billing specialists, OASIS coders, and authorization experts. 1 hired for every 50 applicants.",
      isPartOf: { "@id": "https://advancedrevcycle.com/#website" },
      about: { "@id": "https://advancedrevcycle.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://advancedrevcycle.com/careers/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersPageSchema) }}
      />
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-careers" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-careers)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Careers at Advanced RevCycle
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            ARC hires 1 biller for every 50 applicants. The bar is not a filter for its own sake. Every agency we serve is counting on the person reviewing their claims to already know what most billers are still figuring out. If that is how you approach this work, reach out.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="relative h-56 rounded-xl overflow-hidden" style={{ aspectRatio: 'auto' }}>
                <Image
                  src={photo}
                  alt="ARC team members"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0B7A84] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "U.S.-Based Billers" },
              { value: "1 in 50", label: "Hiring Selectivity" },
              { value: "20+", label: "Years Avg Experience" },
              { value: "Remote", label: "Work From Anywhere" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-[#B8EE40] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Our Culture</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">What It Means to Work at ARC</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-[#B8EE40] rounded-full flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#26303A] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Who Succeeds Here</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">What We Look For</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              ARC billers are not learning hospice and home health billing on the job. They bring the knowledge and the discipline to apply it without supervision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whatWeLookFor.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 flex flex-col min-h-[200px]">
                  <h3 className="font-bold text-[#26303A] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Frequently Asked</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">Careers FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-7 list-none">
                  <h3 className="font-bold text-[#26303A] text-base leading-snug">{item.q}</h3>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B7A84]/10 flex items-center justify-center text-[#0B7A84] transition-transform group-open:rotate-180">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-7 pb-7">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section className="bg-[#0B7A84] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Interested in Joining the Team?</h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            The agencies we serve depend on our billers knowing post-acute care better than anyone else on the call. One accepted for every fifty who apply. If that standard sounds like yours, reach out.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
