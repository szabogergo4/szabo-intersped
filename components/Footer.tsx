"use client";

import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-navy border-t border-white/8">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0 bg-white rounded-lg overflow-hidden p-1">
                <Image
                  src="/logo.jpg"
                  alt="Szabó Intersped logo"
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                />
              </div>
              <span className="text-white font-bold text-lg">
                Szabó <span className="text-accent">Intersped</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              {t.footer.tagline}
            </p>

            {/* Company legal info */}
            <div className="space-y-1.5 text-xs text-white/35">
              <p>{t.footer.taxNumber}</p>
              <p>{t.footer.euVat}</p>
              <p>{t.footer.companyReg}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navigáció
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {t.contact.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  {t.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="text-white/50 hover:text-accent text-sm transition-colors"
                >
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-accent flex-shrink-0" />
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-white/50 hover:text-accent text-sm transition-colors break-all"
                >
                  {t.contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/30 italic">
              {t.contact.contactPerson}
            </p>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            title="Szabó Intersped Kft. – Debrecen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.382!2d21.6316!3d47.5297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470e2d3b3b3b3b%3A0x0!2sFüredi+út+98%2C+Debrecen+4032!5e0!3m2!1shu!2shu!4v1700000000000"
            width="100%"
            height="220"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>{t.footer.copyright}</span>
          <a
            href={`mailto:${t.contact.email}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            {t.contact.email}
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
