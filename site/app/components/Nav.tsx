"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const billingDropdown = [
  { label: "Hospice Billing", href: "/hospice-billing" },
  { label: "Home Health Billing", href: "/home-health-billing" },
  { label: "Palliative Care Billing", href: "/palliative-care-billing" },
];

const supportDropdown = [
  { label: "Authorization and Eligibility", href: "/authorization-and-eligibility" },
  { label: "Contracting and Credentialing", href: "/contracting-and-credentialing" },
  { label: "Regulatory Resources", href: "/regulatory-resources" },
  { label: "Coding and OASIS Review", href: "/coding-and-oasis-review" },
];

const resourcesDropdown = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Webinars", href: "/webinars" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billingOpen, setBillingOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logos/arc-logo.svg"
              alt="Advanced RevCycle"
              width={200}
              height={41}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium text-[#26303A] hover:text-[#0B7A84] transition-colors">
              About
            </Link>

            {/* Billing Solutions */}
            <div className="relative" onMouseEnter={() => setBillingOpen(true)} onMouseLeave={() => setBillingOpen(false)}>
              <button className="text-sm font-medium text-[#26303A] hover:text-[#0B7A84] transition-colors flex items-center gap-1">
                Billing Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {billingOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 z-50 border border-gray-100">
                  {billingDropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-[#26303A] hover:bg-[#F8F5F2] hover:text-[#0B7A84]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Billing Support */}
            <div className="relative" onMouseEnter={() => setSupportOpen(true)} onMouseLeave={() => setSupportOpen(false)}>
              <button className="text-sm font-medium text-[#26303A] hover:text-[#0B7A84] transition-colors flex items-center gap-1">
                Billing Support
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {supportOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 z-50 border border-gray-100">
                  {supportDropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-[#26303A] hover:bg-[#F8F5F2] hover:text-[#0B7A84]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="text-sm font-medium text-[#26303A] hover:text-[#0B7A84] transition-colors flex items-center gap-1">
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50 border border-gray-100">
                  {resourcesDropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-[#26303A] hover:bg-[#F8F5F2] hover:text-[#0B7A84]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/careers" className="text-sm font-medium text-[#26303A] hover:text-[#0B7A84] transition-colors">
              Careers
            </Link>

            <Link
              href="/contact"
              className="bg-[#FF5B04] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-2">
            <Link href="/about" className="block px-4 py-2 text-sm font-medium text-[#26303A] hover:text-[#0B7A84]" onClick={() => setMobileOpen(false)}>About</Link>

            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Billing Solutions</p>
              {billingDropdown.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm text-[#26303A] hover:text-[#0B7A84]" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Billing Support</p>
              {supportDropdown.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm text-[#26303A] hover:text-[#0B7A84]" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Resources</p>
              {resourcesDropdown.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm text-[#26303A] hover:text-[#0B7A84]" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/careers" className="block px-4 py-2 text-sm font-medium text-[#26303A] hover:text-[#0B7A84]" onClick={() => setMobileOpen(false)}>Careers</Link>
            <div className="px-4 pt-2">
              <Link href="/contact" className="block text-center bg-[#FF5B04] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
