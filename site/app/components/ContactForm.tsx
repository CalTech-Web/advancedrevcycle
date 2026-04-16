"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = (data.get("firstName") as string) || "";
    const lastName = (data.get("lastName") as string) || "";

    const payload = {
      site: "advancedrevcycle.com",
      name: `${firstName} ${lastName}`.trim(),
      email: data.get("email") as string,
      phone: (data.get("phone") as string) || "",
      message: [
        data.get("agencyName") ? `Agency: ${data.get("agencyName")}` : "",
        data.get("lineOfCare") ? `Line of Care: ${data.get("lineOfCare")}` : "",
        data.get("message") as string,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 bg-[#B8EE40] rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#26303A] mb-3">Message Received</h3>
        <p className="text-gray-600">Thank you for reaching out. Our team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-[#26303A] mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#26303A] mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
              placeholder="Jane"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#26303A] mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
              placeholder="Smith"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#26303A] mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            placeholder="jane@agency.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#26303A] mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="agencyName" className="block text-sm font-medium text-[#26303A] mb-1.5">
            Agency Name
          </label>
          <input
            type="text"
            id="agencyName"
            name="agencyName"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            placeholder="Your Hospice Agency"
          />
        </div>
        <div>
          <label htmlFor="lineOfCare" className="block text-sm font-medium text-[#26303A] mb-1.5">
            Line of Care
          </label>
          <select
            id="lineOfCare"
            name="lineOfCare"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent bg-white"
          >
            <option value="">Select one</option>
            <option value="hospice">Hospice</option>
            <option value="home-health">Home Health</option>
            <option value="palliative-care">Palliative Care</option>
            <option value="multiple">Multiple Lines</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#26303A] mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent resize-none"
            placeholder="Tell us about your agency and what you are looking for..."
          />
        </div>
        {status === "error" && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#FF5B04] text-white font-semibold py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
