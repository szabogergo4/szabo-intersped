"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

interface FormData {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  cargo: string;
  weight: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  from: "",
  to: "",
  cargo: "",
  weight: "",
  message: "",
};

const REQUIRED_FIELDS: (keyof FormData)[] = [
  "name",
  "email",
  "from",
  "to",
  "cargo",
];

export default function QuoteForm() {
  const { t } = useLang();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!form[field].trim()) newErrors[field] = true;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Build mailto link as a simple no-backend fallback
    const subject = encodeURIComponent(
      `Árajánlat kérés – ${form.name} – ${form.cargo}`
    );
    const body = encodeURIComponent(
      `Név: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\nIndulás: ${form.from}\nÉrkezés: ${form.to}\n\nÁru: ${form.cargo}\nSúly: ${form.weight} kg\n\nMegjegyzés:\n${form.message}`
    );
    window.location.href = `mailto:szabointerspedkft@gmail.com?subject=${subject}&body=${body}`;

    // Simulate brief delay then show success
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSubmitted(true);
  };

  const fields: {
    name: keyof FormData;
    label: string;
    type?: string;
    textarea?: boolean;
    half?: boolean;
  }[] = [
    { name: "name", label: t.quote.fields.name, half: true },
    { name: "email", label: t.quote.fields.email, type: "email", half: true },
    { name: "phone", label: t.quote.fields.phone, type: "tel", half: true },
    { name: "from", label: t.quote.fields.from, half: false },
    { name: "to", label: t.quote.fields.to, half: false },
    { name: "cargo", label: t.quote.fields.cargo, half: true },
    { name: "weight", label: t.quote.fields.weight, type: "number", half: true },
    { name: "message", label: t.quote.fields.message, textarea: true },
  ];

  return (
    <section id="quote" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest">
            {t.quote.sectionLabel}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.quote.title}
          </h2>
          <p className="mt-4 text-white/50 text-lg">{t.quote.subtitle}</p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.quote.success}
                </h3>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(INITIAL);
                  }}
                  className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Új kérés / New request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {fields.map((field) => {
                    const isRequired = REQUIRED_FIELDS.includes(field.name);
                    const hasError = errors[field.name];

                    const inputClasses = `w-full bg-white/8 border ${
                      hasError
                        ? "border-red-400/60 focus:border-red-400"
                        : "border-white/15 focus:border-accent/60"
                    } rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 ${
                      hasError ? "focus:ring-red-400/20" : "focus:ring-accent/20"
                    } transition-all`;

                    return (
                      <div
                        key={field.name}
                        className={
                          !field.half || field.textarea
                            ? "sm:col-span-2"
                            : ""
                        }
                      >
                        <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">
                          {field.label}
                          {isRequired && (
                            <span className="text-accent ml-1">*</span>
                          )}
                        </label>
                        {field.textarea ? (
                          <textarea
                            name={field.name}
                            value={form[field.name]}
                            onChange={handleChange}
                            rows={4}
                            className={`${inputClasses} resize-none`}
                            placeholder={field.label}
                          />
                        ) : (
                          <input
                            name={field.name}
                            type={field.type || "text"}
                            value={form[field.name]}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder={field.label}
                          />
                        )}
                        {hasError && (
                          <p className="mt-1 text-xs text-red-400">
                            {t.quote.required}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl shadow-xl shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t.quote.submit}
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-white/30 text-xs">
                  * {t.quote.required} —{" "}
                  {t.quote.fields.name}, {t.quote.fields.email},{" "}
                  {t.quote.fields.from}, {t.quote.fields.to},{" "}
                  {t.quote.fields.cargo}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
