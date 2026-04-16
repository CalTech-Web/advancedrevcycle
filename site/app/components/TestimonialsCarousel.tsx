"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  role: string;
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const busyRef = useRef(false);
  const currentRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (busyRef.current || idx === currentRef.current) return;
    busyRef.current = true;
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      currentRef.current = idx;
      setVisible(true);
      busyRef.current = false;
    }, 350);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      goTo((currentRef.current + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quote content */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
        className="relative text-center max-w-3xl mx-auto min-h-[180px] flex flex-col items-center justify-center py-6"
      >
        {/* Decorative large quote mark */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 text-[#B8EE40]/15 text-[9rem] leading-none font-serif select-none pointer-events-none"
        >
          &ldquo;
        </span>
        <p className="relative text-white text-xl sm:text-2xl font-medium leading-relaxed italic mb-6 z-10">
          &ldquo;{testimonials[current].quote}&rdquo;
        </p>
        <div className="relative flex items-center gap-3 z-10">
          <div className="w-8 h-px bg-[#B8EE40]" />
          <p className="text-[#B8EE40] text-xs font-semibold uppercase tracking-widest">
            {testimonials[current].role}
          </p>
          <div className="w-8 h-px bg-[#B8EE40]" />
        </div>
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={() => goTo((currentRef.current - 1 + testimonials.length) % testimonials.length)}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#B8EE40] w-6" : "bg-white/30 w-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo((currentRef.current + 1) % testimonials.length)}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
