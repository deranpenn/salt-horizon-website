/**
 * LeadCaptureForm — Salt & Horizon Luxury
 * Elegant inquiry form with navy background and gold accents.
 */

import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";

const propertyInterestOptions = [
  "Oceanfront Home",
  "Investment Property",
  "Vacation Retreat",
  "Primary Residence",
  "Not Sure Yet",
];

export default function LeadCaptureForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.interest) newErrors.interest = "Please select your interest";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Inquiry Received",
      description: "Our team will contact you within 24 hours with exclusive details.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "oklch(0.18 0.070 240)" }}>
      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-14 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="fade-up delay-100 font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Begin Your Journey
          </h2>
          <p className="fade-up delay-200 font-body text-lg text-white/70 leading-relaxed">
            Schedule a private showing, inquire about available properties, or learn more about Salt & Horizon Signature Homes. Our team is ready to help you find your coastal sanctuary.
          </p>
        </div>

        {/* Form container */}
        <div className="fade-up delay-300 max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-lg p-10 md:p-12 text-center shadow-2xl">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={56} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">Thank You</h3>
              <p className="font-body text-base text-charcoal/70 leading-relaxed mb-8">
                Your inquiry has been received. Our team will contact you shortly to discuss your interest in Salt & Horizon Signature Homes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-body text-sm font-medium text-navy underline underline-offset-2 hover:text-gold transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 md:p-10 shadow-2xl"
              noValidate
            >
              <h3 className="font-display text-2xl font-semibold text-navy mb-8">
                Inquire About Our Properties
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-2">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full font-body text-sm px-4 py-3 rounded-lg border bg-cream-dark focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? "border-red-400 focus:ring-red-300" : "border-gold/30 focus:ring-gold/40"
                    }`}
                  />
                  {errors.name && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-2">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full font-body text-sm px-4 py-3 rounded-lg border bg-cream-dark focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? "border-red-400 focus:ring-red-300" : "border-gold/30 focus:ring-gold/40"
                    }`}
                  />
                  {errors.email && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-2">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className={`w-full font-body text-sm px-4 py-3 rounded-lg border bg-cream-dark focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? "border-red-400 focus:ring-red-300" : "border-gold/30 focus:ring-gold/40"
                    }`}
                  />
                  {errors.phone && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Interest */}
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-2">
                    I'm Interested In <span className="text-gold">*</span>
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={`w-full font-body text-sm px-4 py-3 rounded-lg border bg-cream-dark focus:outline-none focus:ring-2 transition-all appearance-none ${
                      errors.interest ? "border-red-400 focus:ring-red-300" : "border-gold/30 focus:ring-gold/40"
                    }`}
                  >
                    <option value="" disabled>Select an option…</option>
                    {propertyInterestOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.interest && (
                    <p className="font-body text-xs text-red-500 mt-1">{errors.interest}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.15em] font-semibold text-charcoal block mb-2">
                    Message <span className="font-normal text-charcoal/50">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ideal home or any questions…"
                    rows={4}
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border border-gold/30 bg-cream-dark focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 text-white font-body font-semibold text-sm uppercase tracking-[0.15em] px-6 py-4 rounded-lg transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg mt-4"
                  style={{ backgroundColor: "oklch(0.72 0.095 65)" }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.85 0.070 65)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.72 0.095 65)"; }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-charcoal/50 text-center leading-relaxed">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
