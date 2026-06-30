/**
 * PropertyShowcase — Salt & Horizon Luxury
 * Elegant property grid with gold accents and sophisticated styling.
 */

import { useEffect, useRef, useState } from "react";
import { Bed, Bath, Maximize2, MapPin, ChevronRight } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { properties, type Property } from '@/data/properties';

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const { toast } = useToast();
  const [imgLoaded, setImgLoaded] = useState(false);
  const bedsLabel = property.beds === 'TBD' ? 'Beds TBD' : property.beds + ' Beds';
  const bathsLabel = property.baths === 'TBD' ? 'Baths TBD' : property.baths + ' Baths';
  const sqftLabel = property.sqft === 'TBD' ? 'Sq Ft TBD' : property.sqft + ' Sq Ft';

  const handleViewDetails = () => {
    toast({
      title: `${property.title}`,
      description: "Contact our team for exclusive property details and private showings.",
    });
  };

  return (
    <div
      className={`fade-up delay-${Math.min((index + 1) * 100, 500)} group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400 border border-gold/10 flex flex-col`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-cream-dark animate-pulse" />
        )}
        <img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Tag badge */}
        <span className="absolute top-4 left-4 font-body text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full bg-gold text-navy">
          {property.tag}
        </span>
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent px-5 py-4">
          <span className="font-display text-lg font-semibold text-white">{property.price}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={12} className="text-gold flex-shrink-0" />
          <span className="font-body text-xs uppercase tracking-[0.14em] text-charcoal/50">
            {property.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-navy mb-3 leading-snug">
          {property.title}
        </h3>

        {/* Key features */}
        <div className="flex items-center gap-4 pb-5 border-b border-gold/20 mb-5">
          <div className="flex items-center gap-1.5">
            <Bed size={14} className="text-gold" />
            <span className="font-body text-sm font-medium text-charcoal">{bedsLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={14} className="text-gold" />
            <span className="font-body text-sm font-medium text-charcoal">{bathsLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-gold" />
            <span className="font-body text-sm font-medium text-charcoal">{sqftLabel}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleViewDetails}
          className="group/btn flex items-center justify-between w-full font-body text-sm font-semibold text-navy hover:text-gold transition-colors duration-200"
        >
          <span className="uppercase tracking-[0.12em]">View Details</span>
          <ChevronRight
            size={16}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default function PropertyShowcase() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="py-24 md:py-32 bg-cream-dark overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <div className="fade-up mb-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Our Collection
            </span>
          </div>
          <h2 className="fade-up delay-100 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight mb-6 max-w-2xl">
            Signature Homes
          </h2>
          <p className="fade-up delay-200 font-body text-lg text-charcoal/60 max-w-2xl leading-relaxed">
            Follow our current and upcoming luxury coastal projects, beginning with the planned 54 Fairmont Drive rebuild in Ocean Isle Beach.
          </p>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-up delay-500 mt-14 text-center">
          <p className="font-body text-base text-charcoal/60 mb-6">
            Interested in learning more about our exclusive properties?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2.5 text-white font-body font-semibold text-sm uppercase tracking-[0.15em] px-8 py-4 rounded transition-all duration-300 active:scale-[0.97]"
            style={{ backgroundColor: "oklch(0.18 0.070 240)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.28 0.070 240)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.18 0.070 240)")}
          >
            Schedule a Private Showing
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
