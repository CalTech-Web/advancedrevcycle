import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Advanced RevCycle to learn how our post-acute billing specialists can improve your hospice, home health, or palliative care agency's collections.",
  alternates: {
    canonical: "https://advancedrevcycle.com/contact",
  },
};

const faqs = [
  {
    q: "What lines of care does Advanced RevCycle serve?",
    a: "Advanced RevCycle exclusively serves hospice, home health, and palliative care agencies. The team is not adapted from a generalist billing firm. Every billing rule, compliance requirement, and payer quirk we know comes from working only in these three lines of care.",
  },
  {
    q: "Do I have to switch my EMR system to work with ARC?",
    a: "No. Advanced RevCycle works with any EMR platform your agency already uses, including Netsmart, MatrixCare, WellSky, Axxess, Homecare Homebase, Mumms, KanTime, Careficient, Complia Health, HospiceMD, and Delta Health Technologies.",
  },
  {
    q: "How does your pricing work?",
    a: "Advanced RevCycle runs on 100% contingency. Fees are a percentage of what is collected. There are no flat monthly fees or retainers. ARC earns only when your agency does.",
  },
  {
    q: "What collection rate can I expect?",
    a: "ARC maintains a 99%+ collection rate and has a 100% reduction in AR track record for clients who fully transition billing to the team. In total, ARC has collected over $5 billion for agencies of all sizes.",
  },
  {
    q: "How long does the onboarding process take?",
    a: "ARC has completed billing takeovers in under 30 days. For larger agencies the timeline extends, but claims coverage starts from day one while the team learns your EMR in parallel. Revenue does not wait during a transition.",
  },
  {
    q: "Can ARC support our agency as we grow into new states?",
    a: "Yes. ARC serves agencies in all 50 states, Puerto Rico, Hawaii, and the U.S. Virgin Islands. One hospice startup expanded to four states across Arizona, Utah, California, and Texas without switching billing teams or disrupting operations.",
  },
  {
    q: "How is ARC different from an in-house billing team?",
    a: "An in-house biller knows your system, your state, and your payer mix. That knowledge has limits. ARC's 50+ billers work simultaneously across every MAC, all 50 states, and every major EMR platform. They have seen the edge cases your in-house team is encountering for the first time. And because fees are contingency-based, there are no salaries, benefits, turnover costs, or training gaps.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Contact Advanced RevCycle
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Most agencies that contact ARC have a billing problem they have been trying to solve on their own. Our team responds quickly and will tell you honestly whether we are the right fit.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#26303A] mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0B7A84] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#26303A]">Phone</p>
                      <a href="tel:8887373585" className="text-[#0B7A84] hover:underline">(888) 737-3585</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0B7A84] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#26303A]">Address</p>
                      <p className="text-gray-600 text-sm">3014 Dauphine Street, Ste A, PMB 490596<br />New Orleans, LA 70117</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="bg-[#26303A] rounded-2xl p-8">
                <h3 className="font-bold text-white mb-6">Why Agencies Choose ARC</h3>
                <div className="space-y-4">
                  {[
                    { stat: "99%+", label: "Collection Rate" },
                    { stat: "$5B+", label: "Collected for Agencies" },
                    { stat: "100%", label: "Contingency, No Flat Fees" },
                    { stat: "50+", label: "U.S.-Based Billers" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-[#B8EE40] font-bold">{item.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-[#26303A]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-[#26303A] mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
