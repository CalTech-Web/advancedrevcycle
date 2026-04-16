"use client";

import { useState } from "react";

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const linesOfCare = [
  { value: "", label: "Line of care (optional)" },
  { value: "Hospice", label: "Hospice" },
  { value: "Home Health", label: "Home Health" },
  { value: "Palliative Care", label: "Palliative Care" },
  { value: "Multiple Lines", label: "Multiple Lines" },
];

export default function HeroSurvey() {
  const [rawVolume, setRawVolume] = useState("");
  const [collectionRate, setCollectionRate] = useState(88);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lineOfCare, setLineOfCare] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const volume = parseFloat(rawVolume.replace(/,/g, "")) || 0;
  const hasResult = volume > 0;
  const annualVolume = volume * 12;
  const annualGap = annualVolume * ((99 - collectionRate) / 100);
  const monthlyGap = annualGap / 12;

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    if (digits === "") { setRawVolume(""); return; }
    setRawVolume(parseInt(digits, 10).toLocaleString());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMsg("");

    const payload = {
      site: "advancedrevcycle.com",
      name,
      email,
      phone: phone || "",
      message: [
        "Source: Hero Calculator — Revenue Recovery Estimate",
        agency ? `Agency: ${agency}` : "",
        lineOfCare ? `Line of Care: ${lineOfCare}` : "",
        `Monthly Billing Volume: ${formatCurrency(volume)}`,
        `Current Collection Rate: ${collectionRate}%`,
        `Estimated Annual Recovery: ${formatCurrency(annualGap)}`,
        `Estimated Monthly Recovery: ${formatCurrency(monthlyGap)}`,
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
        setSubmitStatus("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setSubmitStatus("error");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again.");
      setSubmitStatus("error");
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center justify-center min-h-[360px] text-center gap-4 p-8">
        <div className="w-14 h-14 bg-[#B8EE40] rounded-full flex items-center justify-center">
          <svg className="w-7 h-7 text-[#26303A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[#26303A] font-bold text-xl mb-2">You&apos;re on our list.</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our team will call or email within one business day to walk through recovering{" "}
            <span className="font-semibold text-[#FF5B04]">{formatCurrency(annualGap)}</span> in annual collections. No pressure, no sales pitch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
      {/* Header */}
      <div className="bg-[#0B7A84] px-7 py-5">
        <p className="text-[#B8EE40] text-xs font-bold uppercase tracking-widest mb-1.5">
          Free Revenue Recovery Calculator
        </p>
        <p className="text-white font-bold text-lg leading-snug">
          See exactly how much your agency is leaving uncollected.
        </p>
      </div>

      <div className="px-7 py-6 space-y-5">
        {/* Monthly volume */}
        <div>
          <label className="block text-xs font-semibold text-[#26303A] uppercase tracking-wide mb-1.5">
            Monthly Billing Volume
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm select-none">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={rawVolume}
              onChange={handleVolumeChange}
              placeholder="e.g. 200,000"
              className="w-full border border-gray-200 rounded-lg pl-7 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Total billed to all payers per month</p>
        </div>

        {/* Collection rate slider */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-xs font-semibold text-[#26303A] uppercase tracking-wide">
              Your Current Collection Rate
            </label>
            <span className="text-[#0B7A84] font-bold text-lg tabular-nums leading-none">
              {collectionRate}%
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={98}
            step={1}
            value={collectionRate}
            onChange={(e) => setCollectionRate(Number(e.target.value))}
            className="w-full accent-[#0B7A84] cursor-pointer h-1.5"
          />
          <div className="flex justify-between text-xs mt-1.5">
            <span className="text-gray-400">50% (industry low)</span>
            <span className="text-[#0B7A84] font-semibold">ARC average: 99%+</span>
          </div>
        </div>

        {/* Result */}
        {hasResult ? (
          <div className="rounded-xl overflow-hidden border border-[#FF5B04]/25">
            <div className="bg-[#FFF8F5] px-5 py-4">
              <p className="text-xs text-gray-500 font-medium mb-1">
                Your agency may be leaving uncollected
              </p>
              <p className="text-4xl font-bold text-[#FF5B04] tabular-nums leading-none">
                {formatCurrency(annualGap)}
              </p>
              <p className="text-sm font-semibold text-[#26303A] mt-1.5">
                per year{" "}
                <span className="text-gray-400 font-normal text-xs">
                  &nbsp;&middot;&nbsp; {formatCurrency(monthlyGap)}/month
                </span>
              </p>
            </div>
            <div className="bg-[#0B7A84]/8 px-5 py-2.5 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#0B7A84] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-[#0B7A84] font-medium">
                Calculated by closing your gap from {collectionRate}% to ARC&apos;s 99%+ rate
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 px-5 py-6 text-center">
            <p className="text-sm font-semibold text-[#26303A] mb-1">Enter your billing volume above</p>
            <p className="text-xs text-gray-400">
              Most agencies are surprised by how much is left on the table.
            </p>
          </div>
        )}

        {/* CTA */}
        {hasResult && !showForm && (
          <div>
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#FF5B04] text-white font-bold py-3.5 rounded-lg hover:bg-orange-600 transition-colors text-sm tracking-wide"
            >
              Get My Free Recovery Plan →
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              No commitment. We respond within 1 business day.
            </p>
          </div>
        )}

        {/* Expanded contact form */}
        {hasResult && showForm && (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-gray-100">
            {/* Recovery amount reminder above form */}
            <div className="flex items-center justify-between bg-[#FFF8F5] rounded-lg px-4 py-2.5 mb-1">
              <p className="text-xs text-gray-500">Potential annual recovery</p>
              <p className="text-base font-bold text-[#FF5B04] tabular-nums">{formatCurrency(annualGap)}</p>
            </div>
            <p className="text-xs font-semibold text-[#26303A] uppercase tracking-wide">
              Get Your Free Recovery Plan
            </p>
            <input
              type="email"
              required
              placeholder="Work email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            />
            <input
              type="text"
              required
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Agency name"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
            />
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent"
              />
              <select
                value={lineOfCare}
                onChange={(e) => setLineOfCare(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B7A84] focus:border-transparent bg-white"
              >
                {linesOfCare.map((l) => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>
            {submitStatus === "error" && (
              <p className="text-red-500 text-xs">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full bg-[#FF5B04] text-white font-bold py-3.5 rounded-lg hover:bg-orange-600 transition-colors text-sm tracking-wide disabled:opacity-60"
            >
              {submitStatus === "submitting" ? "Sending..." : "Get My Free Recovery Plan →"}
            </button>
            {/* Trust signals */}
            <div className="flex items-start gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 text-[#0B7A84] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                No spam, ever.
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 text-[#0B7A84] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Reply within 1 business day.
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 text-[#0B7A84] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                No commitment.
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
