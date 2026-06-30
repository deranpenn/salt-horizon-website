/**
 * HeroSection — Salt & Horizon Luxury
 * Full-bleed sunset hero with centered logo and elegant typography.
 * Gold accents, serif fonts, sophisticated overlay.
 */

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663673420327/JqY9uRvYhrHcHGEnDvnSfU/hero-sunset-luxury-Ds2fUe5DocD6dbnbtYweGJ.webp";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.querySelectorAll(".hero-animate").forEach((el, i) => {
          setTimeout(() => {
            (el as HTMLElement).style.opacity = "1";
            (el as HTMLElement).style.transform = "translateY(0)";
          }, i * 150);
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProperties = () => {
    document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          animation: "kenBurns 25s ease-in-out infinite alternate",
        }}
      />

      {/* Sophisticated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />

      {/* Content — centered, elegant */}
      <div ref={contentRef} className="relative z-10 container text-center flex flex-col items-center justify-center">
        {/* Logo Image */}
        <div
          className="hero-animate mb-8"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <img
            src="/manus-storage/sh-logo-final_e2324247.png"
            alt="Salt & Horizon"
            className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Brand name */}
        <h1
          className="hero-animate font-display text-3xl md:text-5xl font-semibold text-white leading-tight mb-4"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Salt & Horizon
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate font-body text-lg md:text-xl text-white/80 mb-2 tracking-widest uppercase"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Signature Homes
        </p>

        {/* Divider line */}
        <div
          className="hero-animate w-16 h-0.5 bg-gold/60 mx-auto mb-6"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        />

        {/* Subtitle */}
        <p
          className="hero-animate font-body text-base md:text-lg text-white/75 max-w-2xl leading-relaxed mb-12"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Luxury coastal homes where timeless elegance meets the horizon. Discover your sanctuary on the shores of North Carolina.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-animate flex flex-wrap justify-center gap-6"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1), transform 0.8s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <button
            onClick={scrollToProperties}
            className="font-body font-semibold text-sm uppercase tracking-[0.15em] px-8 py-3.5 rounded transition-all duration-300 hover:shadow-xl active:scale-[0.97]"
            style={{ backgroundColor: "oklch(0.72 0.095 65)", color: "oklch(0.18 0.070 240)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.85 0.070 65)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.72 0.095 65)")}
          >
            Explore Properties
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white/60 text-white font-body font-medium text-sm uppercase tracking-[0.15em] px-8 py-3 rounded transition-all duration-300 hover:bg-white/10 hover:border-white active:scale-[0.97]"
          >
            Schedule a Tour
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
