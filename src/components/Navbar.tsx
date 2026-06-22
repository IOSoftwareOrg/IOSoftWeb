"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Logiciels", href: "#logiciels" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-[#1e3a5f]" : "text-white"
            }`}
          >
            IO <span className="text-[#c9a84c]">Software</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#c9a84c] ${
                  scrolled ? "text-[#0f172a]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-semibold bg-[#c9a84c] text-white px-4 py-2 rounded-md hover:bg-[#b8943d] transition-colors"
            >
              Prendre contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#0f172a] font-medium hover:text-[#c9a84c]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block text-center bg-[#1e3a5f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#2d5a8e]"
                onClick={() => setMenuOpen(false)}
              >
                Prendre contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
