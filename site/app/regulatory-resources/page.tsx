import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const relatedPosts = [
  {
    title: "NOE Timing: The Five-Day Window That Protects Your First Payment",
    href: "/blog/noe-timing-five-day-window",
    category: "Compliance",
    excerpt: "What the five-day NOE rule requires, where agencies lose the window, and the same-day filing protocol that eliminates the risk.",
  },
  {
    title: "Understanding the 2025 Hospice Wage Index Changes",
    href: "/blog/2025-hospice-wage-index-changes",
    category: "Regulatory Update",
    excerpt: "How the annual wage index update works, what changed in 2025, and how to verify your agency is billing at the correct adjusted rates.",
  },
  {
    title: "Home Health NOA Filing: How the Five-Day Rule Affects Your First Payment",
    href: "/blog/home-health-noa-five-day-rule",
    category: "Compliance",
    excerpt: "The NOA requirement, why agencies miss the five-day window, and the operational protocol that prevents permanent non-billable periods.",
  },
];

export const metadata: Metadata = {
  title: "Regulatory Resources",
  description:
    "Important links and regulatory resources for hospice and home health agencies, including Medicare Administrative Contractors, CMS manuals, billing codes, and payment rate calculators.",
  alternates: {
    canonical: "https://advancedrevcycle.com/regulatory-resources",
  },
};

const macResources = [
  {
    name: "Palmetto GBA",
    desc: "Processes Medicare hospice and home health claims for Jurisdictions J and M. The primary portal for billing inquiries, ADR responses, and coverage determinations in those regions.",
    url: "https://www.palmettogba.com/",
  },
  {
    name: "CGS (Celerian Group Company)",
    desc: "Handles Medicare claim adjudication and coverage guidance for Jurisdictions 15 and H. CGS publishes jurisdiction-specific bulletins that directly affect hospice billing policy.",
    url: "https://www.cgsmedicare.com/",
  },
  {
    name: "National Government Services (NGS)",
    desc: "Processes Medicare claims and issues Local Coverage Determinations for Jurisdictions 6 and K. The primary contact for claims disputes, medical review requests, and MAC-level appeals in those jurisdictions.",
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
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-reg" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-reg)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="hero-fade-1 text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Regulatory Resources</p>
          <h1 className="hero-fade-2 text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Regulatory Resources for Post-Acute Billing
          </h1>
          <p className="hero-fade-3 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Three MACs cover all of Medicare. CMS publishes the rules. Here are the pages that matter for hospice and home health billing, without the search.
          </p>
        </div>
      </section>

      {/* MAC Resources */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Medicare Administrative Contractors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {macResources.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 80}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{r.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <p className="text-[#0B7A84] text-sm font-semibold">Visit site &rarr;</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Resources */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">CMS Regulations and Guidance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cmsResources.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 80}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{r.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <p className="text-[#0B7A84] text-sm font-semibold">View manual &rarr;</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Tools */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Billing Tools and References</h2>
          <p className="text-gray-600 text-sm mb-6 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#0B7A84] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            These tools are available exclusively to ARC clients. Request access by contacting the ARC team.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {billingResources.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 80}>
                <div className="h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="font-bold text-[#26303A]">{r.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <p className="text-[#0B7A84] text-sm font-semibold">Request access from ARC &rarr;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#26303A] mb-8">Further Reading From the ARC Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, i) => (
              <ScrollReveal key={post.href} delay={i * 80}>
                <Link
                  href={post.href}
                  className="block h-full bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <span className="inline-block text-xs font-semibold text-[#0B7A84] uppercase tracking-wide mb-3">{post.category}</span>
                  <h3 className="font-bold text-[#26303A] mb-3 group-hover:text-[#0B7A84] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-[#0B7A84] text-sm font-semibold">Read more &rarr;</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#26303A] py-20 overflow-hidden">
        {/* Lime-teal-lime accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, #B8EE40, #0B7A84, #B8EE40)" }} />
        {/* Hex grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="hex-cta-reg" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
              <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-cta-reg)"/>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Your Next Billing Question</h2>
              <p className="text-gray-400 mb-8">
                ARC&apos;s billers do not use these links to look things up. They know what they say. Call or message when you need someone who already has the answer.
              </p>
              <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { stat: "99%+", label: "Collection Rate" },
                { stat: "$5B+", label: "Collected for Agencies" },
                { stat: "100%", label: "Aligned Incentives" },
                { stat: "50+", label: "U.S.-Based Billers" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-2xl font-bold text-[#B8EE40] mb-1">{item.stat}</p>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
