/**
 * Footer — Salt & Horizon Luxury
 * Elegant footer with brand info, links, and contact details.
 */

import { Mail, Phone, Linkedin, Instagram} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 md:py-20 border-t border-gold/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img
                src="/manus-storage/sh-logo-final_e2324247.png"
                alt="Salt & Horizon"
                className="h-16 w-auto mb-3"
              />
              <div className="font-body text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                Salt & Horizon
              </div>
              <div className="font-body text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">
                Signature Homes
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Luxury coastal living redefined. Timeless elegance meets the horizon.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@saltandhorizon.com"
                className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-gold transition-colors group"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>info@saltandhorizon.com</span>
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-gold transition-colors group"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>+1 (800) 555-1234</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-[0.15em] mb-5">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-navy transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/50 text-center md:text-left">
              © {new Date().getFullYear()} Salt & Horizon Signature Homes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-xs text-white/50 hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-xs text-white/50 hover:text-white/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
