import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#26303A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logos/arc-logo.svg"
              alt="Advanced RevCycle"
              width={180}
              height={37}
              className="brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Tech-Enabled. Human-Driven. Revenue Optimized.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              (888) 737-3585
            </p>
            <p className="text-gray-400 text-sm">
              3014 Dauphine Street, Ste A<br />
              New Orleans, LA 70117
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a href="https://www.youtube.com/channel/UCXUFt6nvN3KgdpmbAEr5PCQ/featured" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B8EE40] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/hospicemanagement/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B8EE40] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/advanced-hospice-management/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B8EE40] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Billing Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B8EE40] mb-4">Billing Solutions</h3>
            <ul className="space-y-2">
              {[
                { label: "Hospice Billing", href: "/hospice-billing" },
                { label: "Palliative Care Billing", href: "/palliative-care-billing" },
                { label: "Home Health Billing", href: "/home-health-billing" },
                { label: "Authorization and Eligibility", href: "/authorization-and-eligibility" },
                { label: "Contracting and Credentialing", href: "/contracting-and-credentialing" },
                { label: "Regulatory Resources", href: "/regulatory-resources" },
                { label: "Coding and OASIS Review", href: "/coding-and-oasis-review" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B8EE40] mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { label: "Important Links", href: "/resources" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Webinars", href: "/webinars" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B8EE40] mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Join hundreds of hospice, home health, and palliative care agencies collecting more with ARC.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FF5B04] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Advanced RevCycle, LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://caltechweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Powered by Caltechweb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
