"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const icons = [ShieldCheck, Eye, Phone];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">
            {t.whyUs.sectionLabel}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-white/5 hover:bg-white/8 border border-white/10 hover:border-accent/30 rounded-2xl p-8 transition-all duration-300"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon
                    size={26}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
