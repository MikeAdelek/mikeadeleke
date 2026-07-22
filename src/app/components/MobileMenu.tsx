"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function MobileMenu({ navItems }: { navItems: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex md:hidden items-center justify-center px-6 py-5 bg-transparent border-l border-[#1e1e1e] text-[#e2ddd6]"
      >
        {isOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#1e1e1e] md:hidden absolute top-full left-0 right-0 bg-[#0e0e0e]"
          >
            {navItems.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-8 py-4 text-[10px] tracking-[4px] uppercase text-neutral-500 border-b border-[#1e1e1e] hover:text-[#e2ddd6]"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
