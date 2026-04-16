"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  "Below Expectations",
  "Average",
  "Above Average",
  "Performing 100%",
];

export default function HeroSurvey() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setSubmitted(true);
    // Route to contact page after a short pause so the user sees the confirmation
    setTimeout(() => {
      router.push(`/contact?billing_performance=${encodeURIComponent(selected)}`);
    }, 1200);
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
          <svg className="w-12 h-12 text-[#0B7A84]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p className="text-[#26303A] font-semibold text-lg">Got it. Connecting you with ARC now.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="text-[#FF5B04] font-bold text-lg mb-1">Billing Practices Survey</p>
          <p className="text-[#26303A] font-semibold text-base mb-5">
            How do you feel your billing team is performing?
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {options.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                  selected === opt
                    ? "border-[#0B7A84] bg-[#0B7A84]/5"
                    : "border-gray-200 hover:border-[#0B7A84]/40"
                }`}
              >
                <input
                  type="radio"
                  name="billing_performance"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="accent-[#0B7A84] w-4 h-4 flex-shrink-0"
                />
                <span className="text-[#26303A] text-sm font-medium">{opt}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            disabled={!selected}
            className="w-full bg-[#0B7A84] hover:bg-[#096670] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Submit
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Takes less than 30 seconds. No commitment required.
          </p>
        </form>
      )}
    </div>
  );
}
