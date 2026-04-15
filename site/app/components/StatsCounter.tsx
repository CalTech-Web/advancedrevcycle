"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatConfig {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

function parseStat(value: string): StatConfig {
  // "$5B+" → prefix="$", target=5, suffix="B+"
  // "99%+" → prefix="", target=99, suffix="%+"
  // "50+"  → prefix="", target=50, suffix="+"
  // "20+"  → prefix="", target=20, suffix="+"
  const match = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0 };
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { prefix, target: num, suffix, decimals };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedStat({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const config = parseStat(stat.value);
  const [display, setDisplay] = useState("0");
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1800;

  useEffect(() => {
    if (!triggered) return;

    const animate = (ts: number) => {
      if (startTimeRef.current === null) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = eased * config.target;
      setDisplay(
        config.decimals > 0
          ? current.toFixed(config.decimals)
          : Math.floor(current).toString()
      );
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(
          config.decimals > 0
            ? config.target.toFixed(config.decimals)
            : config.target.toString()
        );
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, config.target, config.decimals]);

  return (
    <div>
      <p className="text-4xl font-bold text-white mb-1 tabular-nums">
        {config.prefix}{display}{config.suffix}
      </p>
      <p className="text-[#B8EE40] text-sm font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {stats.map((s, i) => (
        <AnimatedStat key={s.label} stat={s} triggered={triggered} />
      ))}
    </div>
  );
}
