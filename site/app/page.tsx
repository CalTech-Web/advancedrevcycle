import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "99%+", label: "Collection Rate" },
  { value: "$5B+", label: "Collected for Agencies" },
  { value: "50+", label: "U.S.-Based Billers" },
  { value: "20+", label: "Years Avg Experience" },
];

const services = [
  {
    title: "Hospice Billing",
    desc: "Full-cycle billing for Medicare, Medicaid, VA, and commercial payers with proactive claims follow-up.",
    href: "/hospice-billing",
    icon: "🏥",
  },
  {
    title: "Home Health Billing",
    desc: "All-payer billing with electronic and manual payment posting, reconciliation, and on-demand AR reporting.",
    href: "/home-health-billing",
    icon: "🏠",
  },
  {
    title: "Palliative Care Billing",
    desc: "Comprehensive claims creation, secondary payer billing, and full appeals management.",
    href: "/palliative-care-billing",
    icon: "💙",
  },
  {
    title: "Authorization and Eligibility",
    desc: "Patient eligibility verification, prior authorization support, and appeals management.",
    href: "/authorization-and-eligibility",
    icon: "✅",
  },
  {
    title: "Contracting and Credentialing",
    desc: "Contract negotiation, credentialing, provider enrollment, and payer relations.",
    href: "/contracting-and-credentialing",
    icon: "📋",
  },
  {
    title: "Coding and OASIS Review",
    desc: "ICD-10 coding, PDGM-aligned diagnosis selection, and four levels of OASIS review.",
    href: "/coding-and-oasis-review",
    icon: "🔍",
  },
];

const process = [
  { phase: "Onboarding", title: "EMR Immersion", desc: "Deep dive into your EMR system from day one, accelerating for familiar platforms or rapidly building proficiency with new ones." },
  { phase: "Daily", title: "Proactive Monitoring", desc: "Run daily 60-day payer reports, check overnight patient status changes, and identify problems before they become issues." },
  { phase: "Ongoing", title: "Clean Claim Submission", desc: "File all required notices and submit clean claims for every payer with verification at each step." },
  { phase: "Ongoing", title: "Payment Posting", desc: "Post payments electronically or manually with thorough reconciliation and live AR reporting in your EMR." },
  { phase: "Ongoing", title: "Claims Follow-Up", desc: "Proactively follow every claim through disputes, appeals, and reconsiderations until it is paid." },
  { phase: "Ongoing", title: "Client Communication", desc: "Immediate notification of coverage changes or payer issues. Never let anything sit idle." },
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center" id="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/gallery/hero-bg.jpg"
            alt="Healthcare professional caring for a patient"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#26303A]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-4">Post-Acute Billing Specialists</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Tech-Enabled.<br />Human-Driven.<br />Revenue Optimized.
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies nationwide. With 50+ seasoned billers and $5B+ collected, we treat your revenue like our own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-center"
            >
              Contact Us
            </Link>
            <a
              href="#howWeDo"
              className="inline-block bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center"
            >
              How We Do It
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0B7A84] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-[#B8EE40] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
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
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-[#0B7A84] text-sm font-semibold">Learn more &rarr;</p>
              </Link>
            ))}
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
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#B8EE40] text-xs font-semibold">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMR Logos */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#26303A] font-bold text-xl mb-3">Works With Any EMR System</p>
          <p className="text-center text-gray-500 text-sm mb-10">No platform conversion required. No integration fees. Ever.</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {emrLogos.map((emr) => (
              <div key={emr.name} className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={emr.file}
                  alt={emr.name}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Collect What You Have Earned?</h2>
          <p className="text-teal-100 text-lg mb-10">
            Join hospice, home health, and palliative care agencies across all 50 states. ARC only earns when you collect.
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
