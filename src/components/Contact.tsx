"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const shootTypes = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Post-Wedding Shoot",
  "Adventure Shoot",
  "Real Estate",
  "Cinematic Film",
  "Portrait Session",
  "Corporate / Events",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Booking Inquiry — ${formData.shootType}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nShoot Type: ${formData.shootType}\nPreferred Date: ${formData.date}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@storiesbyabhinav.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-[var(--color-background)]"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Let's Create Together"
          title="Get in Touch"
          description="Ready to tell your story? Fill out the form below and let's start planning something extraordinary."
        />

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto text-center md:text-left">
          <AnimatedSection className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="John & Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Shoot Type *
                  </label>
                  <select
                    name="shootType"
                    required
                    value={formData.shootType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[var(--color-surface)]">
                      Select a service
                    </option>
                    {shootTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-[var(--color-surface)]"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Tell Us Your Story
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-white/20"
                  placeholder="Share details about your event, vision, or any special requirements..."
                />
              </div>

              <div className="flex justify-center md:justify-start">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
                >
                  Send Inquiry
                </motion.button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="space-y-10">
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-4">
                  Reach Us Directly
                </h3>
                <div className="space-y-4 text-white/50">
                  <a
                    href="mailto:hello@storiesbyabhinav.com"
                    className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@storiesbyabhinav.com
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 98765 43210
                  </a>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      Based in India
                      <br />
                      Available Worldwide
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-4">
                  Follow Our Journey
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: "Instagram",
                      icon: (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      ),
                    },
                    {
                      name: "YouTube",
                      icon: (
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      ),
                    },
                    {
                      name: "Facebook",
                      icon: (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                      ),
                    },
                    {
                      name: "Pinterest",
                      icon: (
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] group transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 text-white/50 group-hover:text-black transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02]">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white mb-2">
                  International Clients
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  We travel worldwide for destination shoots. Whether you&apos;re
                  in New York, Dubai, London, or Bali — we bring the same
                  premium experience to you.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
