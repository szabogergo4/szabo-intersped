"use client";

import { motion } from "framer-motion";
import { Globe, AlertTriangle, MapPin, Warehouse, Shield } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const icons = [Globe, AlertTriangle, MapPin, Warehouse, Shield];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">
            {t.services.sectionLabel}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-default ${
                  // Make the 5th card span wider on larger screens when there are 5 items
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon
                    size={26}
                    className="text-navy/50 group-hover:text-accent transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
