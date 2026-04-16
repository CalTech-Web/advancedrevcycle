"use client";

import { useState, useRef } from "react";

interface FAQ {
  q: string;
  a: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen ? "border-[#0B7A84] bg-white" : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm leading-snug transition-colors duration-200 ${isOpen ? "text-[#0B7A84]" : "text-[#26303A]"}`}>
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#0B7A84] rotate-45" : "bg-[#F8F5F2]"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? "text-white" : "text-[#26303A]"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{
          maxHeight: isOpen ? (bodyRef.current ? bodyRef.current.scrollHeight + "px" : "500px") : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
