import Link from "next/link";
import StatsCounter from "./StatsCounter";
import ScrollReveal from "./ScrollReveal";

interface ServiceFeature {
  title?: string;
  desc: string;
}

interface RelatedService {
  title: string;
  href: string;
  desc: string;
}

interface RelatedPost {
  title: string;
  href: string;
  category: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  intro: string;
  features: ServiceFeature[];
  whySection?: {
    title: string;
    points: string[];
  };
  ctaTitle?: string;
  relatedServices?: RelatedService[];
  relatedPosts?: RelatedPost[];
}

export default function ServicePage({ badge, title, intro, features, whySection, ctaTitle, relatedServices, relatedPosts }: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-sp" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-sp)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">{badge}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">{title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60} className="w-full">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-8 h-8 bg-[#0B7A84] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {f.title && <h3 className="font-bold text-[#26303A] mb-2">{f.title}</h3>}
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why ARC */}
      {whySection && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#26303A] mb-8">{whySection.title}</h2>
              <ul className="space-y-4">
                {whySection.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#B8EE40] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="bg-[#0B7A84] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={[
            { value: "99%+", label: "Collection Rate" },
            { value: "$5B+", label: "Collected for Agencies" },
            { value: "50+", label: "U.S.-Based Billers" },
            { value: "10+", label: "Years in Post-Acute" },
          ]} />
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#26303A] mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-[#F8F5F2] rounded-xl p-6 border border-gray-200 hover:border-[#0B7A84] hover:shadow-md hover:bg-white transition-all"
                >
                  <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="text-[#0B7A84] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* From Our Blog */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-[#F8F5F2] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#26303A] mb-8">From Our Blog</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-semibold text-[#0B7A84] bg-[#0B7A84]/10 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-[#26303A] mt-4 leading-snug group-hover:text-[#0B7A84] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#0B7A84] text-sm font-semibold mt-3">Read article &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#F8F5F2] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#26303A] mb-5">
            {ctaTitle || "Ready to Improve Your Collections?"}
          </h2>
          <p className="text-gray-600 mb-8">No flat fees. No retainers. ARC earns only when you collect.</p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
