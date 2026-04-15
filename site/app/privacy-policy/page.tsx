import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Advanced RevCycle, LLC.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#26303A] mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>
        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Introduction</h2>
            <p>
              Advanced RevCycle, LLC (&ldquo;ARC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at advancedrevcycle.com.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Information We Collect</h2>
            <p>We may collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Name, email address, phone number, and agency information submitted through our contact form</li>
              <li>Communications you send to us via email or phone</li>
              <li>Information you provide when inquiring about our services</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Respond to your inquiries and communicate with you about our services</li>
              <li>Provide, operate, and improve our website and services</li>
              <li>Send you information about services, updates, and promotional content (you may opt out at any time)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our website and conducting our business, provided those parties agree to keep your information confidential.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              Advanced RevCycle, LLC<br />
              3014 Dauphine Street, Ste A, PMB 490596<br />
              New Orleans, LA 70117<br />
              Phone: (888) 737-3585
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
