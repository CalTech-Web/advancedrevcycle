import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt.slice(0, 160),
    alternates: {
      canonical: `https://advancedrevcycle.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt.slice(0, 160),
      url: `https://advancedrevcycle.com/blog/${post.slug}`,
    },
  };
}

function buildSchema(post: (typeof posts)[0]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://advancedrevcycle.com/blog/${post.slug}/#post`,
        headline: post.title,
        description: post.excerpt.slice(0, 160),
        url: `https://advancedrevcycle.com/blog/${post.slug}`,
        image: `https://advancedrevcycle.com${post.image}`,
        author: {
          "@type": "Organization",
          "@id": "https://advancedrevcycle.com/#organization",
          name: "Advanced RevCycle",
        },
        publisher: { "@id": "https://advancedrevcycle.com/#organization" },
        articleSection: post.category,
        keywords: [
          "hospice billing",
          "home health billing",
          "post-acute revenue cycle",
          "Medicare billing",
          post.category.toLowerCase(),
        ].join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://advancedrevcycle.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://advancedrevcycle.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://advancedrevcycle.com/blog/${post.slug}` },
        ],
      },
    ],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\n+/);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(post)) }}
      />

      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#B8EE40] text-sm font-semibold">{post.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm">{post.date} &middot; Advanced RevCycle</p>
        </div>
      </section>

      {/* Featured image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-gray max-w-none">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-[#26303A] mt-10 mb-4">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("**") && block.endsWith("**")) {
              return (
                <p key={i} className="font-semibold text-[#26303A] mt-6 mb-2">
                  {block.replace(/\*\*/g, "")}
                </p>
              );
            }
            if (/^\*\*[^*]+\*\*/.test(block)) {
              const parts = block.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {parts.map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j} className="text-[#26303A]">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            }
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {block}
              </p>
            );
          })}
        </div>

        {/* Related service callout */}
        {post.relatedService && (
          <div className="mt-12 bg-[#F8F5F2] rounded-2xl p-8 border border-gray-100">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Related Service</p>
            <h3 className="text-xl font-bold text-[#26303A] mb-3">{post.relatedService.title}</h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Advanced RevCycle provides dedicated {post.relatedService.title.toLowerCase()} to hospice, home health, and palliative care agencies nationwide. 100% contingency pricing, no flat fees.
            </p>
            <Link
              href={post.relatedService.href}
              className="inline-block bg-[#0B7A84] text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm"
            >
              Learn About {post.relatedService.title}
            </Link>
          </div>
        )}
      </article>

      {/* CTA */}
      <section className="bg-[#0B7A84] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Questions About Your Billing?</h2>
          <p className="text-teal-100 mb-8">
            ARC's team tracks every regulatory update that affects hospice, home health, and palliative care reimbursement. Contact us and we will be direct about whether we can help.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
