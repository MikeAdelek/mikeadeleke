import { NAV } from "@/data/projects";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e] border-b border-[#1e1e1e]">
      <div className="flex items-stretch justify-between">
        {/* Logo */}
        <div className="px-8 py-5 border-r border-[#1e1e1e] flex items-center shrink-0">
          <a
            href="#"
            className="font-serif text-[17px] tracking-[5px] text-[#e2ddd6] font-semibold"
          >
            Mike.
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-stretch flex-1">
          {NAV.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[10px] tracking-[4px] uppercase px-7 py-5 border-r border-[#1e1e1e] flex items-center text-neutral-500 hover:bg-[#161616] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center shrink-0 px-8 py-5 border-l border-[#1e1e1e]"
        >
          <span className="text-[#C9A86C] text-[10px] tracking-[4px] uppercase font-medium">
            SAY HELLO
          </span>
        </a>

        {/* MobileMenu */}
        <MobileMenu navItems={NAV} />
      </div>
    </nav>
  );
}
