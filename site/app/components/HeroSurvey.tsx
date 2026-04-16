"use client";

import { useState } from "react";

const linesOfCare = [
  { value: "", label: "Select your line of care" },
  { value: "Hospice", label: "Hospice" },
  { value: "Home Health", label: "Home Health" },
  { value: "Palliative Care", label: "Palliative Care" },
  { value: "Multiple Lines", label: "Multiple Lines" },
];

const trustItems = [
  "99%+ collection rate",
  "100% contingency pricing",
  "No EMR conversion required",
];

export default function HeroSurvey() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      site: "advancedrevcycle.com",
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: "",
      message: [
        "Source: Hero CTA — Free Billing Analysis Request",
        data.get("agencyName") ? `Agency: ${data.get("agencyName")}` : "",
        data.get("lineOfCare") ? `Line of Care: ${data.get("lineOfCare")}` : "",
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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center justify-center min-h-[380px] text-center gap-4 p-8">
        <div className="w-14 h-14 bg-[#B8EE40] rounded-full flex items-center justify-center">
          <svg className="w-7 h-7 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[#26303A] font-bold text-xl mb-2">Request Received</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our team will reach out within one business day to discuss your agency&apos;s billing needs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
      {/* Header */}
      <div className="bg-[#0B7A84] px-8 py-6">
        <p className="text-[#B8EE40] text-xs font-bold uppercase tracking-widest mb-2">
          Free Billing Analysis
        </p>
        <p className="text-white font-bold text-xl leading-snug">
          See what you could be collecting.
        </p>
        <p className="text-white/70 text-sm mt-1.5">
          No commitment. No cost until we collect.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
        <div>
          <label
            htmlFor="hero-name"
            className="block text-xs font-semibold text-[#26303A] uppercase tracking-wide mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="hero-name"
            name="name"
            required
            placeholder="Jane Smith"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="hero-agency"
            className="block text-xs font-semibold text-[#26303A] uppercase tracking-wide mb-1.5"
          >
            Agency Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="hero-agency"
            name="agencyName"
            required
            placeholder="Your Hospice Agency"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="hero-line"
            className="block text-xs font-semibold text-[#26303A] uppercase tracking-wide mb-1.5"
          >
            Line of Care <span className="text-red-500">*</span>
          </label>
          <select
            id="hero-line"
            name="lineOfCare"
            required
            defaultValue=""
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent bg-white"
          >
            {linesOfCare.map((l) => (
              <option key={l.value} value={l.value} disabled={l.value === ""}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="hero-email"
            className="block text-xs font-semibold text-[#26303A] uppercase tracking-wide mb-1.5"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="hero-email"
            name="email"
            required
            placeholder="jane@youragency.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
          />
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#FF5B04] text-white font-bold py-3.5 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60 text-sm tracking-wide"
        >
          {status === "submitting" ? "Submitting..." : "Request Free Analysis"}
        </button>

        <div className="pt-2 border-t border-gray-100 space-y-1.5">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#0B7A84] flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs text-gray-500">{item}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
