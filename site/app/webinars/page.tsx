import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-Acute Billing Webinars",
  description:
    "Educational webinars on hospice billing, home health billing, PDGM coding, NOE compliance, and Medicare regulations from Advanced RevCycle's post-acute billing specialists.",
  alternates: {
    canonical: "https://advancedrevcycle.com/webinars",
  },
};

const webinarsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "NOE Timing and the Five-Day Window",
      description:
        "Why late Notice of Election filings result in permanent non-billable periods, how to identify the root causes in your current workflow, and the operational changes that prevent future losses.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      url: "https://advancedrevcycle.com/webinars",
      organizer: { "@id": "https://advancedrevcycle.com/#organization" },
      location: { "@type": "VirtualLocation", url: "https://advancedrevcycle.com/webinars" },
    },
    {
      "@type": "Event",
      name: "PDGM Primary Diagnosis Selection for Home Health",
      description:
        "How the Patient-Driven Groupings Model turns primary diagnosis selection into a payment calculation. Clinical groupings, LUPA thresholds, and how to conduct an episode-level coding review.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      url: "https://advancedrevcycle.com/webinars",
      organizer: { "@id": "https://advancedrevcycle.com/#organization" },
      location: { "@type": "VirtualLocation", url: "https://advancedrevcycle.com/webinars" },
    },
    {
      "@type": "Event",
      name: "Navigating MAC-Specific Billing Requirements",
      description:
        "Palmetto GBA, CGS, and National Government Services each publish guidance that goes beyond the CMS base rules. This session covers the MAC-specific requirements that most commonly affect hospice and home health billing.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      url: "https://advancedrevcycle.com/webinars",
      organizer: { "@id": "https://advancedrevcycle.com/#organization" },
      location: { "@type": "VirtualLocation", url: "https://advancedrevcycle.com/webinars" },
    },
    {
      "@type": "Event",
      name: "Transitioning from In-House to Outsourced Billing",
      description:
        "How to structure a billing handoff that keeps collections intact from day one, what the pre-transition audit should cover, and how to measure whether the transition succeeded.",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      url: "https://advancedrevcycle.com/webinars",
      organizer: { "@id": "https://advancedrevcycle.com/#organization" },
      location: { "@type": "VirtualLocation", url: "https://advancedrevcycle.com/webinars" },
    },
  ],
};

const upcomingTopics = [
  {
    title: "NOE Timing and the Five-Day Window",
    desc: "Why late Notice of Election filings result in permanent non-billable periods, how to identify the root causes in your current workflow, and the operational changes that prevent future losses.",
    category: "Compliance",
  },
  {
    title: "PDGM Primary Diagnosis Selection for Home Health",
    desc: "How the Patient-Driven Groupings Model turns primary diagnosis selection into a payment calculation. Clinical groupings, LUPA thresholds, and how to conduct an episode-level coding review.",
    category: "Coding",
  },
  {
    title: "Navigating MAC-Specific Billing Requirements",
    desc: "Palmetto GBA, CGS, and National Government Services each publish guidance that goes beyond the CMS base rules. This session covers the MAC-specific requirements that most commonly affect hospice and home health billing.",
    category: "Regulatory",
  },
  {
    title: "Transitioning from In-House to Outsourced Billing",
    desc: "How to structure a billing handoff that keeps collections intact from day one, what the pre-transition audit should cover, and how to measure whether the transition succeeded.",
    category: "Operations",
  },
];

export default function WebinarsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webinarsSchema) }}
      />
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Webinars</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Post-Acute Billing Education
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Most billing education covers theory. ARC&apos;s sessions are built by the billers who work these claims daily, focused on the documentation calls, payer patterns, and CMS specifics that determine what post-acute agencies actually collect.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-16 h-16 bg-[#0B7A84] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.895L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#26303A] mb-4">Sessions Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ARC&apos;s billing team is recording its working knowledge of hospice and home health billing. The sessions below represent the first topics in production. Contact us to get notified when each session is available.
            </p>
            <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              Get Early Access
            </Link>
          </div>

          {/* Upcoming Topics */}
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTopics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[#0B7A84] bg-[#0B7A84]/10 px-3 py-1 rounded-full">
                    {topic.category}
                  </span>
                  <span className="text-xs text-[#FF5B04] font-semibold">Coming Soon</span>
                </div>
                <h3 className="font-bold text-[#26303A] mb-3 leading-snug">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ARC Webinars */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Why These Sessions Are Different</p>
              <h2 className="text-3xl font-bold text-[#26303A] mb-6">Built from Active Claims Experience</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  General billing education tends to restate the regulation. ARC&apos;s sessions come from 50+ billers who encounter these exact situations on active claims every day, across every MAC territory and every major EMR system.
                </p>
                <p>
                  When a session covers NOE timing, it includes the specific places in the admissions workflow where the five-day window gets missed, not just the rule itself. When a session covers PDGM coding, it includes the clinical grouping logic as it appears in real claims, not as it reads in the final rule.
                </p>
                <p>
                  The goal is for attendees to return to their teams with changes they can implement the same day, not concepts they need to translate into practice.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "50+", label: "U.S.-Based Billers" },
                { value: "20+", label: "Years Avg Experience" },
                { value: "$5B+", label: "Collected for Agencies" },
                { value: "99%+", label: "Collection Rate" },
              ].map((s) => (
                <div key={s.label} className="bg-[#F8F5F2] rounded-xl p-6 text-center border border-gray-100">
                  <p className="text-3xl font-bold text-[#0B7A84] mb-1">{s.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Watch on YouTube</h2>
          <p className="text-teal-100 mb-8">
            ARC&apos;s YouTube channel covers common billing errors, payer-specific quirks, and regulatory updates that affect collections. Short, specific, no sales pitch.
          </p>
          <a
            href="https://www.youtube.com/channel/UCXUFt6nvN3KgdpmbAEr5PCQ/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0B7A84] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>
    </>
  );
}
