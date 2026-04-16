import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./data";
import ScrollReveal from "../components/ScrollReveal";

const categoryColors: Record<string, { badge: string; dot: string }> = {
  "Compliance":        { badge: "bg-purple-100 text-purple-700",  dot: "" },
  "Regulatory Update": { badge: "bg-orange-100 text-orange-700",  dot: "" },
  "Coding":            { badge: "bg-green-100 text-green-700",    dot: "" },
  "Operations":        { badge: "bg-teal-100 text-[#0B7A84]",     dot: "" },
};

export const metadata: Metadata = {
  title: "Post-Acute Billing Blog",
  description:
    "Billing insights, regulatory updates, and compliance guidance for hospice, home health, and palliative care agencies from Advanced RevCycle's team of billing specialists.",
  alternates: {
    canonical: "https://advancedrevcycle.com/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://advancedrevcycle.com/blog",
  name: "Post-Acute Billing Blog",
  description:
    "Billing insights, regulatory updates, and compliance guidance for hospice, home health, and palliative care agencies from Advanced RevCycle's team of billing specialists.",
  url: "https://advancedrevcycle.com/blog",
  publisher: { "@id": "https://advancedrevcycle.com/#organization" },
  hasPart: posts.map((post) => ({
    "@type": "Article",
    name: post.title,
    url: `https://advancedrevcycle.com/blog/${post.slug}`,
    datePublished: post.dateISO,
    description: post.excerpt,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(135deg, #26303A 0%, #0B7A84 45%, #26303A 100%)",
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hex-blog" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-blog)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="hero-fade-1 text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="hero-fade-2 text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Billing Insights for Post-Acute Care
          </h1>
          <p className="hero-fade-3 text-gray-300 text-lg max-w-2xl leading-relaxed">
            CMS issues updates. MACs publish bulletins. Rules that governed hospice reimbursement last year may not apply the same way today. These are the billing topics ARC&apos;s team has been watching closely.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {posts.map((post, i) => {
              const colors = categoryColors[post.category] ?? { badge: "bg-[#0B7A84]/10 text-[#0B7A84]", dot: "" };
              return (
                <ScrollReveal key={post.slug} delay={i * 90}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 w-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category badge overlaid on image */}
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${colors.badge}`}>
                        {post.category}
                      </span>
                      {/* Bottom gradient overlay — reveals on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-gray-400 block mb-3">{post.date}</span>
                      <h2 className="font-bold text-[#26303A] mb-3 leading-snug group-hover:text-[#0B7A84] transition-colors">{post.title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <p className="text-[#0B7A84] text-sm font-semibold mt-4">Read article &rarr;</p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
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
            <pattern id="hex-cta-blog" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <polygon points="28,2 54,16 54,84 28,98 2,84 2,16" fill="none" stroke="#ffffff" strokeWidth="1"/>
              <polygon points="28,52 54,66 54,134 28,148 2,134 2,66" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-cta-blog)"/>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">The Rules Change. The Collections Do Not Have To.</h2>
              <p className="text-gray-400 mb-8">
                CMS and the MACs move fast. ARC tracks every update that affects reimbursement. Contact us when a change has you uncertain.
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
