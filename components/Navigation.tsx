"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LANGS: { code: Language; label: string }[] = [
  { code: "hu", label: "HU" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export default function Navigation() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
          aria-label="Szabó Intersped – Kezdőlap"
        >
          <div className="w-10 h-10 relative flex-shrink-0 bg-white rounded-lg overflow-hidden p-1">
            <Image
              src="/logo.jpg"
              alt="Szabó Intersped logo"
              fill
              className="object-contain p-0.5"
              sizes="40px"
            />
          </div>
          <span className="text-white font-bold text-lg leading-tight">
            Szabó <span className="text-accent">Intersped</span>
          </span>
        </button>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop right side: language selector + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* 3-language pill selector */}
          <div className="flex items-center gap-0.5 bg-white/8 border border-white/15 rounded-lg p-0.5">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 tracking-widest ${
                  lang === code
                    ? "bg-accent text-white shadow-sm"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav("#quote")}
            className="px-5 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
          >
            {t.quote.submit}
          </button>
        </div>

        {/* Mobile: lang selector + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-0.5 bg-white/8 border border-white/15 rounded-md p-0.5">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2 py-0.5 text-xs font-bold rounded transition-all duration-200 tracking-widest ${
                  lang === code
                    ? "bg-accent text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Menü"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-light border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#quote")}
                className="mt-2 w-full px-4 py-3 bg-accent text-white text-sm font-semibold rounded-lg"
              >
                {t.quote.submit}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
