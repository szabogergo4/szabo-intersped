"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-accent text-sm font-bold uppercase tracking-widest">
              {t.about.sectionLabel}
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <div className="mt-6 space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {t.about.badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-accent/20 rounded-full shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-navy">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team photos column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative grid grid-cols-2 gap-4"
          >
            {/* Owner photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="/owner.png"
                  alt="Cégvezető"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold">Szabó Sándor</p>
                  <p className="text-white/60 text-xs">Ügyvezető</p>
                </div>
              </div>
            </motion.div>

            {/* Manager photo – offset downward for visual interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mt-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="/manager.jpg"
                  alt="Dr. Kocsis Mariann"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold">Dr. Kocsis Mariann</p>
                  <p className="text-white/60 text-xs">Kapcsolattartó</p>
                </div>
              </div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-5 py-3 border border-gray-100 whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-accent">10+</span>
                <div>
                  <div className="text-xs font-bold text-navy">Év tapasztalat</div>
                  <div className="text-xs text-gray-400">Years of experience</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative square */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
