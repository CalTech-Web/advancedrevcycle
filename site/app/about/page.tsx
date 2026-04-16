import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Advanced RevCycle",
  description:
    "Advanced RevCycle is a New Orleans-based, tech-enabled revenue cycle management company exclusively serving hospice, palliative care, and home health agencies nationwide.",
  alternates: {
    canonical: "https://advancedrevcycle.com/about",
  },
};

const leadership = [
  {
    name: "Delaine Henry",
    title: "Chief Executive Officer",
    bio: "Delaine founded what is now Advanced RevCycle over a decade ago, starting with a single biller in New Orleans and building to 50+ billing professionals across the U.S. She is still in every conversation that matters.",
    quote: "At ARCM, our mission to serve you is truly personal.",
    image: null,
  },
  {
    name: "Matt Timmins",
    title: "President",
    bio: "Matt brings 18+ years driving revenue in post-acute healthcare and 15+ years with EMR platforms and billing technology. Based in Traverse City, MI, he is the person most agencies talk to when they want to understand what ARC can actually do for them.",
    quote: null,
    image: null,
  },
  {
    name: "Nicolas (Nic) Perkin",
    title: "Chairman",
    bio: "Nic is Chairman and CEO of Perkin Industries, the majority owner of Advanced RevCycle, with headquarters in New Orleans and operations in New York and the Bay Area.",
    quote: null,
    image: null,
  },
];

const differentiators = [
  "Exclusive post-acute focus, only hospice, home health, and palliative care",
  "99%+ collection rate and $5B+ collected for agencies of all sizes",
  "100% contingency pricing, fees scale with your collections",
  "U.S.-based billing team only, 1 hired for every 50 applicants",
  "20+ years average experience per biller",
  "Works with any EMR, no conversion or integration fees",
  "Serves all 50 states, U.S. territories, Puerto Rico, and Hawaii",
  "Tech-enabled with AI, automation, and proprietary workflow technology",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://advancedrevcycle.com/about/#page",
      url: "https://advancedrevcycle.com/about",
      name: "About Advanced RevCycle",
      description:
        "Advanced RevCycle is a New Orleans-based, tech-enabled revenue cycle management company exclusively serving hospice, palliative care, and home health agencies nationwide.",
      isPartOf: { "@id": "https://advancedrevcycle.com/#website" },
      about: { "@id": "https://advancedrevcycle.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://advancedrevcycle.com/about/#delaine-henry",
      name: "Delaine Henry",
      jobTitle: "Chief Executive Officer",
      worksFor: { "@id": "https://advancedrevcycle.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://advancedrevcycle.com/about/#matt-timmins",
      name: "Matt Timmins",
      jobTitle: "President",
      worksFor: { "@id": "https://advancedrevcycle.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://advancedrevcycle.com/about/#nicolas-perkin",
      name: "Nicolas Perkin",
      jobTitle: "Chairman",
      worksFor: { "@id": "https://advancedrevcycle.com/#organization" },
    },
  ],
};

const featuredPosts = [
  {
    title: "Transitioning from In-House to Outsourced Billing: What to Expect",
    href: "/blog/outsourced-billing-transition",
    category: "Operations",
    excerpt: "How the billing handoff works, what a pre-transition audit covers, and why the first 30 days determine whether collections stay intact.",
  },
  {
    title: "Medicare Advantage Billing for Hospice and Home Health",
    href: "/blog/medicare-advantage-billing-post-acute",
    category: "Operations",
    excerpt: "How MA billing differs from traditional Medicare, why prior authorization changes the billing workflow, and how to build an MA-ready operation.",
  },
  {
    title: "Hospice Accounts Receivable Management: How to Keep Your AR Under Control",
    href: "/blog/hospice-accounts-receivable-management",
    category: "Operations",
    excerpt: "How to read a hospice AR aging report, what each bucket signals, and the proactive follow-up process that keeps AR from compounding.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-about" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-about)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Post-Acute Billing Specialists Since Day One
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Advanced RevCycle started over a decade ago with one biller and one mission. Today, 50+ U.S.-based billers have collected over $5 billion for hospice, home health, and palliative care agencies nationwide. The focus has never changed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">How We Got Here</p>
              <h2 className="text-3xl font-bold text-[#26303A] mb-6">Built From the Ground Up in Post-Acute Care</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Advanced RevCycle started as Advanced Hospice Management, one biller and one line of care. Where other billing companies eventually drifted into hospice from the outside, ARC was built from inside it.
                </p>
                <p>
                  In November 2025, ARC acquired Rapid Coding and OASIS Review (RCO) and rebranded. The move added specialized coding and OASIS review services to the platform. A strategic investment from Kolos Partners came alongside it, focused on accelerating AI-driven automation across the revenue cycle.
                </p>
                <p>
                  Today, 50+ billers work remotely across the U.S. and serve agencies in all 50 states. The founding commitment has not changed. We work only in post-acute care, and we earn only when you collect.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/gallery/about-team.png"
                alt="Advanced RevCycle team"
                width={600}
                height={450}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Why ARC</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">What Makes Us Different</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-[#F8F5F2] rounded-xl p-6 border border-gray-100 flex flex-col items-start">
                <div className="w-8 h-8 bg-[#B8EE40] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#26303A] leading-relaxed font-medium text-left">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-[#0B7A84] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-[#26303A] mb-1">{leader.name}</h3>
                <p className="text-[#0B7A84] text-sm font-semibold mb-4">{leader.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                {leader.quote && (
                  <blockquote className="border-l-2 border-[#B8EE40] pl-4 text-left mt-4">
                    <p className="text-sm text-gray-600 italic">&ldquo;{leader.quote}&rdquo;</p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Our Blog */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">From Our Blog</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">What Our Billers Know</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The knowledge that ARC&apos;s billers apply every day, explained in plain language for agency leaders who want to understand the billing they depend on.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block bg-[#F8F5F2] rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <span className="inline-block text-xs font-semibold text-[#0B7A84] uppercase tracking-wide mb-3">{post.category}</span>
                <h3 className="font-bold text-[#26303A] mb-3 group-hover:text-[#0B7A84] transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-[#0B7A84] text-sm font-semibold">Read more &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Tell Us Where Your AR Stands</h2>
          <p className="text-teal-100 mb-8">
            ARC charges nothing until you collect. Tell us your line of care, your current AR position, and what has been falling through the cracks. We will be direct about whether we can help.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
