import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Educational webinars on hospice and home health billing, coding, and regulatory compliance from Advanced RevCycle.",
  alternates: {
    canonical: "https://advancedrevcycle.com/webinars",
  },
};

export default function WebinarsPage() {
  return (
    <>
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

      {/* Content */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto py-20">
            <div className="w-16 h-16 bg-[#0B7A84] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.895L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#26303A] mb-4">Webinars Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ARC&apos;s billing team is recording its working knowledge of hospice and home health billing. The first sessions cover PDGM primary diagnosis selection and NOE timing requirements. Contact us if you want early access.
            </p>
            <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              Get Notified
            </Link>
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
