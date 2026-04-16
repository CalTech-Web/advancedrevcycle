import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from hospice, home health, and palliative care agencies that partnered with Advanced RevCycle. See how ARC improved collections, reduced AR, and enabled rapid growth.",
  alternates: {
    canonical: "https://advancedrevcycle.com/case-studies",
  },
};

const caseStudies = [
  {
    industry: "Western U.S. Hospice Provider",
    challenge:
      "Previous billing company failed to adapt to Medicare regulatory changes, causing collections to stall and accounts receivable to climb steadily.",
    result:
      "Collected every delayed payment within seven months, including over $1 million during a massive state billing system transition.",
    timeline: "7 months",
    badge: "Hospice",
    quote:
      "When ARC took over it was a complete 180. A breath of fresh air. Everything they said was proven with our collections.",
    metric: { value: "$1M+", label: "Recovered in 7 Months" },
  },
  {
    industry: "Non-Profit Hospice, Savannah, GA",
    challenge:
      "Disorganized billing processes, insufficient coding knowledge, and annual receivable write-offs of approximately 10% (roughly $1 million per year).",
    result:
      "Reduced weekly billing time from 10 hours to 1 hour and cut receivable write-offs from 10% to 5% over a 2.5-year engagement.",
    timeline: "2.5 years",
    badge: "Hospice",
    quote:
      "Working with Advanced RevCycle is one of the easiest decisions I have ever made in my life.",
    metric: { value: "10 hrs → 1 hr", label: "Weekly Billing Time" },
  },
  {
    industry: "Hospice Startup, Multi-State",
    challenge:
      "No billing experience from day one, vulnerability to compliance errors, and startup pressure to begin collecting immediately.",
    result:
      "Expanded to four states across Arizona, Utah, California, and Texas. Hundreds of thousands collected within months. Full compliance maintained throughout.",
    timeline: "Ongoing from startup",
    badge: "Hospice",
    quote:
      "Without ARC, we wouldn't have been able to grow as fast as we have. No matter how big we get, we will never leave them.",
    metric: { value: "4 States", label: "Billed from Day One" },
  },
  {
    industry: "Hospice of Lansing, Michigan",
    challenge:
      "In-house biller retired and the agency had difficulty finding a qualified specialized replacement without disrupting operations.",
    result:
      "Clean AR maintained, steady revenue flow restored, and billing discrepancies resolved with clear communication throughout the transition.",
    timeline: "Ongoing since January 2021",
    badge: "Hospice",
    quote:
      "They do it so well that we don't have to worry about our collections. Everything comes in every month.",
    metric: { value: "3+ Years", label: "Consistent Clean AR" },
  },
  {
    industry: "Maryland Hospice",
    challenge:
      "Lost its entire in-house billing staff unexpectedly, leading to inconsistent revenue and rapidly aging accounts receivable.",
    result:
      "Increased revenue with consistent monthly collections. Billing takeover completed in under 30 days with no disruption to the existing EMR system.",
    timeline: "Under 30 days",
    badge: "Hospice",
    quote:
      "Instead of having us convert our health records system, they were able to use our existing system. Everyone here feels so fortunate.",
    metric: { value: "30 Days", label: "Billing Takeover Complete" },
  },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Advanced RevCycle Client Case Studies",
  description:
    "Real results from hospice, home health, and palliative care agencies that partnered with Advanced RevCycle for revenue cycle management.",
  url: "https://advancedrevcycle.com/case-studies",
  itemListElement: caseStudies.map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      name: cs.industry,
      description: `Challenge: ${cs.challenge} Result: ${cs.result}`,
      url: "https://advancedrevcycle.com/case-studies",
      publisher: { "@id": "https://advancedrevcycle.com/#organization" },
    },
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-cs" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-cs)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="hero-fade-1 text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Results</p>
          <h1 className="hero-fade-2 text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Real Results for Post-Acute Agencies
          </h1>
          <p className="hero-fade-3 text-gray-300 text-lg max-w-2xl leading-relaxed">
            A non-profit in Savannah was writing off 10% of AR annually, roughly $1 million. A western hospice had claims stalled during a state billing system transition. These are not outliers. This is what billing looks like when it falls behind regulation, and what the numbers looked like after ARC took over.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Metric banner */}
                  <div className="bg-[#26303A] px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block bg-[#0B7A84] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {cs.badge}
                      </span>
                      <span className="text-white/50 text-sm">{cs.timeline}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-[#B8EE40] leading-none">{cs.metric.value}</span>
                      <span className="text-white/70 text-sm font-medium">{cs.metric.label}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-[#26303A] mb-5">{cs.industry}</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-semibold text-[#FF5B04] uppercase tracking-wide mb-2">The Challenge</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#0B7A84] uppercase tracking-wide mb-2">The Result</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-72 bg-[#F8F5F2] rounded-xl p-6 flex flex-col justify-center">
                        <p className="text-[#26303A] text-sm leading-relaxed italic mb-4">&ldquo;{cs.quote}&rdquo;</p>
                        <p className="text-[#0B7A84] text-xs font-semibold uppercase tracking-wide">{cs.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Your Agency&apos;s Numbers Are Not Fixed</h2>
          <p className="text-teal-100 mb-8">
            A Savannah non-profit cut annual write-offs in half over two and a half years. A startup billed four states clean from day one. Tell us where you are and we will tell you what is possible.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
