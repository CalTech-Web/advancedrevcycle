import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Billing Resources",
  description:
    "Billing resources, regulatory links, case studies, webinars, and more for hospice, home health, and palliative care agencies.",
  alternates: {
    canonical: "https://advancedrevcycle.com/resources",
  },
};

const resourceLinks = [
  {
    category: "Regulatory",
    items: [
      { label: "Palmetto GBA", url: "https://www.palmettogba.com/", desc: "Medicare Administrative Contractor, Jurisdictions J and M" },
      { label: "CGS Medicare", url: "https://www.cgsmedicare.com/", desc: "Medicare Administrative Contractor, Jurisdictions 15 and H" },
      { label: "National Government Services", url: "https://www.ngsmedicare.com/", desc: "Medicare Administrative Contractor, Jurisdictions 6 and K" },
      { label: "CMS Manuals", url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals", desc: "Full CMS regulations and guidance library" },
      { label: "Medicare Benefit Policy, Chapter 9", url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/bp102c09.pdf", desc: "Hospice coverage, conditions of participation" },
      { label: "Medicare Benefit Policy, Chapter 11", url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/bp102c11.pdf", desc: "End Stage Renal Disease facility benefit" },
    ],
  },
  {
    category: "ARC Resources",
    items: [
      { label: "Case Studies", url: "/case-studies", desc: "Real results for hospice, home health, and palliative care agencies" },
      { label: "Webinars", url: "/webinars", desc: "Educational content on billing, coding, and compliance" },
      { label: "Blog", url: "/blog", desc: "Industry insights, regulatory updates, and billing best practices" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Billing and Regulatory Resources
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            The pages and documents ARC&apos;s own team keeps bookmarked. MAC portals, CMS manuals, and the billing references that actually matter for post-acute care.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {resourceLinks.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-[#26303A] mb-8">{cat.category}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                    >
                      <h3 className="font-bold text-[#26303A] mb-2 group-hover:text-[#0B7A84] transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <p className="text-[#0B7A84] text-sm font-semibold">
                        {item.url.startsWith("http") ? "Visit site" : "View"} &rarr;
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Resources CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#26303A] mb-5">These Links Are a Starting Point</h2>
          <p className="text-gray-600 mb-8">
            ARC&apos;s billers already know what these documents say. When a government manual cannot answer your question fast enough, that is why we exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/regulatory-resources/" className="inline-block bg-[#0B7A84] text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors">
              Regulatory Resources
            </Link>
            <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
