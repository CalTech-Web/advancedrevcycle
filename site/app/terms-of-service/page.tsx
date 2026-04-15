import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Advanced RevCycle, LLC.",
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#26303A] mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: April 2026</p>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using the website at advancedrevcycle.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Use of the Website</h2>
            <p>
              You may use this website for lawful purposes only. You agree not to use this website in any way that violates applicable local, state, national, or international laws or regulations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Advanced RevCycle, LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Disclaimer of Warranties</h2>
            <p>
              This website is provided on an &ldquo;as is&rdquo; basis without any warranties of any kind, express or implied. Advanced RevCycle, LLC does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Limitation of Liability</h2>
            <p>
              Advanced RevCycle, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Louisiana, without regard to its conflict of law provisions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#26303A] mb-3">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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
