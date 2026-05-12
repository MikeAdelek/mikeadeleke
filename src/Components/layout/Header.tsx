"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navVariants } from "@/Components/animation";
import { NAV } from "@/data/projects";

interface HeaderProps {
  activeSection: string;
  onNav: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#0e0e0e",
          borderBottom: "1px solid #1e1e1e",
        }}
      >
        {/* ── Desktop row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            style={{
              padding: "1.25rem 2rem",
              borderRight: "1px solid #1e1e1e",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "17px",
                letterSpacing: "5px",
                color: "#e2ddd6",
                fontWeight: 600,
              }}
            >
              MIKE.
            </span>
          </div>

          {/* Links */}
          <div
            className="nav-links"
            style={{ display: "flex", alignItems: "stretch", flex: 1 }}
          >
            {NAV.map((label) => {
              const id = label.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNav(id);
                  }}
                  style={{
                    color: isActive ? "#e8d5b0" : "#555",
                    fontSize: "10px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    padding: "1.25rem 1.75rem",
                    borderRight: "1px solid #1e1e1e",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "color 0.3s, background 0.3s",
                    background: isActive ? "#161616" : "transparent",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#e8d5b0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      isActive ? "#e2ddd6" : "#555")
                  }
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Say Hello */}
          <a
            href="#contact"
            className="say-hello"
            style={{
              padding: "1.25rem 2rem",
              borderLeft: "1px solid #1e1e1e",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#C9A86C",
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              SAY HELLO
            </span>
          </a>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.25rem 1.5rem",
              background: "none",
              border: "none",
              borderLeft: "1px solid #1e1e1e",
              color: "#e2ddd6",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden", borderTop: "1px solid #1e1e1e" }}
            >
              {NAV.map((label) => {
                const id = label.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <a
                    key={label}
                    href={`#${id}`}
                    onClick={() => {
                      onNav(id);
                      setMenuOpen(false);
                    }}
                    style={{
                      display: "block",
                      padding: "1rem 2rem",
                      color: isActive ? "#e2ddd6" : "#777",
                      fontSize: "10px",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderBottom: "1px solid #1e1e1e",
                      background: isActive ? "#161616" : "transparent",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </a>
                );
              })}
              <div
                style={{
                  padding: "1rem 2rem",
                  color: "#C9A86C",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                <a href="#contact">SAY HELLO</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .say-hello { display: none !important; }
          .menu-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
