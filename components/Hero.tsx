"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
          alt="Logistics truck on highway"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                Debrecen, Magyarország
              </span>
            </div>

            {/* Headline – split on first comma: plain part + accent part */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              {t.hero.headline.split(",")[0]},{" "}
              <span className="text-accent">
                {t.hero.headline.split(",").slice(1).join(",").trim()}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
            >
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
            >
              <button
                onClick={() => handleScroll("#quote")}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-2xl shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 text-base"
              >
                {t.hero.ctaPrimary}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-base"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-navy-light/60 backdrop-blur-md px-6 py-5 text-center hover:bg-accent/10 transition-colors duration-300"
              >
                <div className="text-3xl font-extrabold text-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
