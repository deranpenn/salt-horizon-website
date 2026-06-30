/**
 * Header — Salt & Horizon Luxury
 * Elegant serif typography, gold accents, navy background.
 * Logo uses the brand's S&H monogram.
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const logoUrl = "/manus-storage/sh-logo-final_e2324247.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img
              src={logoUrl}
              alt="Salt & Horizon"
              className="h-14 w-auto transition-opacity duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-display text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-white"
              }`}>
                Salt & Horizon
              </span>
              <span className={`font-body text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-gold" : "text-gold/80"
              }`}>
                Signature Homes
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-body text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 group ${
                  scrolled ? "text-charcoal hover:text-navy" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-gold" : "bg-gold/60"
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className={`font-body text-sm font-medium uppercase tracking-[0.15em] px-6 py-2.5 rounded transition-all duration-300 active:scale-[0.97] ${
                scrolled
                  ? "bg-navy text-white hover:bg-navy-light"
                  : "bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30"
              }`}
            >
              Inquire
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md border-t border-gold/20`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm font-medium uppercase tracking-[0.15em] text-charcoal hover:text-navy py-3 text-left border-b border-gold/20 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-3 bg-navy text-white font-body text-sm font-medium uppercase tracking-[0.15em] px-5 py-3 rounded text-center transition-all active:scale-[0.97]"
          >
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
}
