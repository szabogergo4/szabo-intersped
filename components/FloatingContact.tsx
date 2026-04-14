"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Mail } from "lucide-react";

const PHONE = "+36203307360";
const EMAIL = "szabointerspedkft@gmail.com";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action buttons */}
      <AnimatePresence>
        {open && (
          <>
            {/* Email */}
            <motion.a
              key="email"
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex items-center gap-3 bg-white text-navy px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all group"
              title="Email"
            >
              <span className="text-sm font-semibold hidden sm:block text-gray-700">
                {EMAIL}
              </span>
              <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-white" />
              </div>
            </motion.a>

            {/* Phone call */}
            <motion.a
              key="phone"
              href={`tel:${PHONE}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 bg-white text-navy px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all"
              title="Hívjon minket"
            >
              <span className="text-sm font-semibold hidden sm:block text-gray-700">
                +36 20 330 7360
              </span>
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-white" />
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent shadow-xl shadow-accent/40 hover:bg-accent-dark flex items-center justify-center transition-colors duration-200"
        aria-label={open ? "Bezárás" : "Kapcsolat"}
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <MessageCircle size={22} className="text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
