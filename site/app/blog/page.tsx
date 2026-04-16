import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Billing insights, regulatory updates, and best practices for hospice, home health, and palliative care agencies from Advanced RevCycle.",
};

const posts = [
  {
    title: "Understanding the 2025 Hospice Wage Index Changes",
    category: "Regulatory Update",
    excerpt:
      "The 2025 Medicare hospice wage index update moved reimbursement rates for agencies in dozens of geographic areas. Agencies that missed the adjustment discovered the gap when claims came back short. The changes are not complicated, but they require action before the next billing period.",
    date: "March 2026",
    image: "/assets/gallery/careers-blog.jpg",
  },
  {
    title: "Why PDGM Primary Diagnosis Selection Matters More Than Ever",
    category: "Coding",
    excerpt:
      "Under the Patient-Driven Groupings Model, the primary diagnosis determines your clinical grouping and reimbursement rate. A suboptimal selection is not a minor issue, it is lost revenue on every episode.",
    date: "February 2026",
    image: "/assets/gallery/careers-eligibility.jpg",
  },
  {
    title: "Transitioning from In-House to Outsourced Billing: What to Expect",
    category: "Operations",
    excerpt:
      "The decision to outsource billing is one of the easier ones. The handoff is where agencies get into trouble. A poorly timed transition can stall AR for months. Getting the timing and the steps right keeps collections intact from day one.",
    date: "January 2026",
    image: "/assets/gallery/about-team.png",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Billing Insights for Post-Acute Care
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            CMS issues updates. MACs publish bulletins. Rules that governed hospice reimbursement last year may not apply the same way today. These are the billing topics ARC&apos;s team has been watching closely.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#0B7A84] bg-[#0B7A84]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-bold text-[#26303A] mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">The Rules Change. The Collections Do Not Have To.</h2>
          <p className="text-teal-100 mb-8">
            CMS and the MACs move fast. ARC tracks every update that affects reimbursement. Contact us when a change has you uncertain.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
