import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StatsCounter from "./components/StatsCounter";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Advanced RevCycle | Post-Acute Revenue Cycle Management",
  description:
    "Tech-Enabled. Human-Driven. Revenue Optimized. Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies with a 99%+ collection rate and $5B+ collected.",
  alternates: {
    canonical: "https://advancedrevcycle.com",
  },
};

const stats = [
  { value: "99%+", label: "Collection Rate" },
  { value: "$5B+", label: "Collected for Agencies" },
  { value: "50+", label: "U.S.-Based Billers" },
  { value: "10+", label: "Years in Post-Acute" },
];

const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  hospice: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
      <path d="M12 7v4m-2-2h4" />
    </svg>
  ),
  homehealth: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M9 21V12h6v9" />
      <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" />
      <path d="M5 21h14" />
    </svg>
  ),
  palliative: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  auth: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  contracting: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  coding: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const services = [
  {
    title: "Hospice Billing",
    desc: "The only line of care we work in. Every NOE, every MAC jurisdiction, and every claim followed until paid.",
    href: "/hospice-billing",
    iconKey: "hospice",
  },
  {
    title: "Home Health Billing",
    desc: "PDGM-aware billing from NOA filing through final payment. Every episode tracked, every discrepancy resolved.",
    href: "/home-health-billing",
    iconKey: "homehealth",
  },
  {
    title: "Palliative Care Billing",
    desc: "Medicare, Medicaid, VA, and commercial plans on the same patient. We manage primary, secondary, and patient billing without losing track of any layer.",
    href: "/palliative-care-billing",
    iconKey: "palliative",
  },
  {
    title: "Authorization and Eligibility",
    desc: "Most denials start before services begin. ARC verifies eligibility upfront and manages every authorization through re-approval.",
    href: "/authorization-and-eligibility",
    iconKey: "auth",
  },
  {
    title: "Contracting and Credentialing",
    desc: "You cannot bill a payer you are not credentialed with. ARC handles applications, renewals, and escalations.",
    href: "/contracting-and-credentialing",
    iconKey: "contracting",
  },
  {
    title: "Coding and OASIS Review",
    desc: "Under PDGM, the primary diagnosis sets your payment rate. ARC selects codes to CMS conventions across four levels of OASIS review.",
    href: "/coding-and-oasis-review",
    iconKey: "coding",
  },
];

const process = [
  { phase: "Onboarding", title: "EMR Immersion", desc: "Deep dive into your EMR system from day one, accelerating for familiar platforms or rapidly building proficiency with new ones." },
  { phase: "Daily", title: "Proactive Monitoring", desc: "Run daily 60-day payer reports, catch overnight status changes, and flag problems before they stall collections." },
  { phase: "Ongoing", title: "Clean Claim Submission", desc: "File all required notices and submit clean claims for every payer with verification at each step." },
  { phase: "Ongoing", title: "Payment Posting", desc: "Post payments electronically or manually with thorough reconciliation and live AR reporting in your EMR." },
  { phase: "Ongoing", title: "Claims Follow-Up", desc: "Proactively follow every claim through disputes, appeals, and reconsiderations until it is paid." },
  { phase: "Ongoing", title: "Client Communication", desc: "Immediate notification of coverage changes or payer issues, with a follow-up call if email goes unanswered. Nothing sits idle." },
];

const testimonials = [
  {
    quote: "When ARC took over it was a complete 180. A breath of fresh air. Everything they said was proven with our collections.",
    role: "Hospice CEO",
  },
  {
    quote: "They do it so well that we don't have to worry about our collections. Everything comes in every month, and we can just focus on patient care.",
    role: "Hospice CEO",
  },
  {
    quote: "ARC works relentlessly and pushes our people just the right amount.",
    role: "Hospice CEO",
  },
  {
    quote: "Without ARC, we wouldn't have been able to grow as fast as we have. No matter how big we get, we will never leave them. They're an amazing company.",
    role: "Hospice Owner",
  },
];

const emrLogos = [
  { name: "Netsmart", file: "/assets/products/emr-netsmart.svg" },
  { name: "MatrixCare", file: "/assets/products/emr-matrixcare.webp" },
  { name: "Mumms Software", file: "/assets/products/emr-mumms.png" },
  { name: "WellSky", file: "/assets/products/emr-wellsky.webp" },
  { name: "Axxess", file: "/assets/products/emr-axxess.png" },
  { name: "Homecare Homebase", file: "/assets/products/emr-homecarehomebase.webp" },
  { name: "HospiceMD", file: "/assets/products/emr-hospicemd.jpg" },
  { name: "KanTime", file: "/assets/products/emr-kantime.svg" },
  { name: "Complia Health", file: "/assets/products/emr-compliahealth.png" },
  { name: "Careficient", file: "/assets/products/emr-careficient.svg" },
  { name: "Delta Health Tech", file: "/assets/products/emr-deltahealthtech.jpg" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Advanced RevCycle Manages Post-Acute Billing",
  description:
    "The six-step process ARC uses to manage hospice, home health, and palliative care revenue cycles, from EMR onboarding through proactive claims follow-up.",
  step: process.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.desc,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center" id="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/gallery/hero-bg.jpg"
            alt="Healthcare professional caring for a patient"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#26303A]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="hero-fade-1 text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-4">Post-Acute Billing Specialists</p>
          <h1 className="hero-fade-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Tech-Enabled.<br />Human-Driven.<br />Revenue Optimized.
          </h1>
          <p className="hero-fade-3 text-gray-200 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            We work in one corner of healthcare, hospice, home health, and palliative care. That focus is not a limitation. It is why our 50+ billers have collected over $5 billion for agencies of all sizes, and why every one of them earns only when you do.
          </p>
          <div className="hero-fade-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FF5B04] text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <a
              href="#howWeDo"
              className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors text-center w-full sm:w-auto"
            >
              How We Do It
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0B7A84] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">Billing Solutions Built for Post-Acute Care</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every service is designed exclusively for hospice, home health, and palliative care agencies, not adapted from a generalist billing firm.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = ServiceIcons[s.iconKey];
              return (
                <ScrollReveal key={s.href} delay={i * 75}>
                  <Link
                    href={s.href}
                    className="block h-full bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0B7A84]/10 flex items-center justify-center mb-4 group-hover:bg-[#0B7A84]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#0B7A84]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    <p className="mt-4 text-[#0B7A84] text-sm font-semibold">Learn more &rarr;</p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 bg-white" id="howWeDo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A] mb-6">How We Do It</h2>
              <div className="space-y-6">
                {process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0B7A84] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs text-[#FF5B04] font-semibold uppercase tracking-wide mb-0.5">{step.phase}</p>
                      <h3 className="font-bold text-[#26303A] mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/gallery/how-we-do-it.png"
                alt="ARC billing team at work"
                width={600}
                height={480}
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#B8EE40] rounded-xl p-5 shadow-lg">
                <p className="text-2xl font-bold text-[#26303A]">100%</p>
                <p className="text-sm text-[#26303A] font-medium">Contingency Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Client Voices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative overflow-hidden bg-white/5 border-l-4 border-[#B8EE40] border-t border-r border-b border-t-white/10 border-r-white/10 border-b-white/10 rounded-xl p-6 h-full">
                  {/* Decorative quote watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 -right-2 text-[120px] leading-none text-white/5 font-serif select-none"
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="relative text-[#B8EE40] text-xs font-semibold">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMR Logos */}
      <section className="bg-[#F8F5F2] py-16 overflow-hidden">
        <p className="text-center text-[#26303A] font-bold text-xl mb-3">Works With Any EMR System</p>
        <p className="text-center text-gray-500 text-sm mb-10">No platform conversion required. No integration fees. Ever.</p>
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8F5F2] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8F5F2] to-transparent" />
          {/* Scrolling track, logos duplicated for seamless loop */}
          <div className="flex items-center gap-12 marquee-track w-max">
            {[...emrLogos, ...emrLogos].map((emr, i) => (
              <div
                key={`${emr.name}-${i}`}
                className="flex items-center justify-center h-12 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
                aria-hidden={i >= emrLogos.length ? "true" : undefined}
              >
                <Image
                  src={emr.file}
                  alt={i < emrLogos.length ? emr.name : ""}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey / CTA */}
      <section className="bg-[#0B7A84] py-20" id="surveyForm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Collect What You Have Already Earned</h2>
          <p className="text-teal-100 text-lg mb-10">
            ARC serves agencies in all 50 states, Puerto Rico, Hawaii, and the U.S. Virgin Islands. The fee is a percentage of collections, nothing else.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF5B04] text-white font-semibold px-10 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
