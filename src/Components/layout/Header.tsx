"use client";
import React from "react";
import Link from "next/link";
import {
  MdOutlineClose,
  MdOutlineDownload,
  MdOutlineMenu
} from "react-icons/md";
import { Container } from "../ui/Container";

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: NavItem[] = [
    { label: "projects", href: "/projects" },
    // { label: "blog", href: "/" },
    { label: "contact", href: "/contact" }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Michael Olomola Frontend Developer.pdf";
    link.download = "Michael Olomola Frontend Developer.pdf";
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-400">
            MA
          </Link>
          <div className="hidden md:flex gap-8">
            {navItems.map((nav) => (
              <Link
                href={nav.href}
                key={nav.label}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdOutlineClose className="w-6 h-6" />
            ) : (
              <MdOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 z-40 md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                className="text-left px-4 py-2 rounded text-white transition-colors hover:bg-slate-700"
              >
                {nav.label}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors px-4 py-2"
            >
              <MdOutlineDownload className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
