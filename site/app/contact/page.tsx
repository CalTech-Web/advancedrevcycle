import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Advanced RevCycle to learn how our post-acute billing specialists can improve your hospice, home health, or palliative care agency's collections.",
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
    a: "Transition timelines vary by agency size and complexity, but ARC has completed billing takeovers in under 30 days. The team handles all claims from day one while simultaneously learning your EMR system.",
  },
  {
    q: "Can ARC support our agency as we grow into new states?",
    a: "Yes. Advanced RevCycle serves agencies of all sizes across all 50 states, U.S. territories, Puerto Rico, and Hawaii. Clients have grown from single-location startups to multi-state operations.",
  },
];

export default function ContactPage() {
  return (
    <>
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
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#26303A] mb-6">Send Us a Message</h2>
              <form
                action="https://forms.caltechweb.com/api/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="site" value="advancedrevcycle.com" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#26303A] mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#26303A] mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#26303A] mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
                    placeholder="jane@agency.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#26303A] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="agencyName" className="block text-sm font-medium text-[#26303A] mb-1.5">
                    Agency Name
                  </label>
                  <input
                    type="text"
                    id="agencyName"
                    name="agencyName"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
                    placeholder="Your Hospice Agency"
                  />
                </div>
                <div>
                  <label htmlFor="lineOfCare" className="block text-sm font-medium text-[#26303A] mb-1.5">
                    Line of Care
                  </label>
                  <select
                    id="lineOfCare"
                    name="lineOfCare"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="hospice">Hospice</option>
                    <option value="home-health">Home Health</option>
                    <option value="palliative-care">Palliative Care</option>
                    <option value="multiple">Multiple Lines</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#26303A] mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent resize-none"
                    placeholder="Tell us about your agency and what you are looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF5B04] text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

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
