import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Advanced RevCycle team. We hire 1 biller for every 50 applicants. Our remote, U.S.-based team of 50+ billing professionals serves hospice, home health, and palliative care agencies nationwide.",
};

const values = [
  {
    title: "Exclusive Focus",
    desc: "We work exclusively in post-acute care. Every team member becomes a genuine expert in hospice, home health, and palliative billing, not a generalist handling dozens of specialties.",
  },
  {
    title: "Remote-First",
    desc: "Our team is fully remote and distributed across the U.S., giving billing professionals the flexibility to work from anywhere while serving agencies nationwide.",
  },
  {
    title: "High Standards",
    desc: "We hire 1 biller for every 50 applicants. Our standards are high because our clients depend on it. Joining ARC means joining a team that takes their craft seriously.",
  },
  {
    title: "Mission-Driven",
    desc: "Many ARC team members have personal connections to hospice and palliative care. The work is not just a job. It funds compassionate end-of-life care for patients and families.",
  },
];

const photos = [
  "/assets/gallery/careers-1.jpg",
  "/assets/gallery/careers-2.jpg",
  "/assets/gallery/careers-3.jpg",
  "/assets/gallery/careers-4.jpg",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#26303A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#B8EE40] text-sm font-semibold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mb-6">
            Careers at Advanced RevCycle
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            ARC hires 1 biller for every 50 applicants. If you are exceptional at post-acute billing and want to work with a team that sets the standard, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={photo}
                  alt="ARC team members"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0B7A84] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "U.S.-Based Billers" },
              { value: "1 in 50", label: "Hiring Selectivity" },
              { value: "20+", label: "Years Avg Experience" },
              { value: "Remote", label: "Work From Anywhere" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-[#B8EE40] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F5F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#0B7A84] text-sm font-semibold uppercase tracking-widest mb-3">Our Culture</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#26303A]">What It Means to Work at ARC</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-[#B8EE40] rounded-full flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#26303A] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#26303A] mb-5">Interested in Joining the Team?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are always looking for exceptional billers with post-acute experience. If you have deep hospice, home health, or palliative care billing expertise and want to work with a team that matches your standards, reach out.
          </p>
          <Link href="/contact" className="inline-block bg-[#FF5B04] text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
