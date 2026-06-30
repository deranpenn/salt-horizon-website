/**
 * WhyChooseUs — Salt & Horizon Luxury
 * Elegant feature section with gold accents and serif typography.
 */

import { useEffect, useRef } from "react";
import { Waves, Home, Sparkles, Award, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Oceanfront Living",
    description: "Wake to pristine coastal views and direct beach access from your private sanctuary.",
  },
  {
    icon: Home,
    title: "Architectural Excellence",
    description: "Each home is a masterpiece of design, crafted with premium materials and timeless elegance.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finishes",
    description: "Curated interiors featuring high-end appliances, marble, hardwood, and bespoke details.",
  },
  {
    icon: Award,
    title: "Award-Winning Developer",
    description: "Decades of expertise in luxury coastal real estate development and customer satisfaction.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Exclusive North Carolina coastal communities with unparalleled natural beauty.",
  },
  {
    icon: Clock,
    title: "Timeless Investment",
    description: "A home that appreciates in value while providing a lifetime of memories.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              (el as HTMLElement).classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-3xl mx-auto text-center">
          <div className="fade-up mb-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="fade-up delay-100 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight mb-6">
            Where Luxury Meets Horizon
          </h2>
          <p className="fade-up delay-200 font-body text-lg text-charcoal/70 leading-relaxed">
            Salt & Horizon Signature Homes represent the pinnacle of coastal luxury living. Each property is a testament to refined taste, exceptional craftsmanship, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`fade-up delay-${Math.min((i + 1) * 100, 600)} group`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-gold group-hover:text-navy transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
