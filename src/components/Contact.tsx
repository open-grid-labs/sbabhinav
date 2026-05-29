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

// Formspree endpoint — delivers contact form submissions to abhinavmec47@gmail.com.
// The form ID is public (it ships in the client bundle either way), so it lives
// here directly. To change it, create a form at https://formspree.io and swap the ID.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeddaor";

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  shootType: "",
  date: "",
  location: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New booking inquiry — ${
            formData.shootType || "General"
          } from ${formData.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
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
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-white/20"
                    placeholder="hello@example.com"
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

              <div className="flex flex-col items-center md:items-start gap-4">
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status === "sending" ? {} : { scale: 1.02 }}
                  whileTap={status === "sending" ? {} : { scale: 0.98 }}
                  className="w-full sm:w-auto px-12 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send Inquiry"}
                </motion.button>

                {status === "sent" && (
                  <p className="text-[var(--color-accent)] text-sm">
                    Thank you! Your inquiry has been sent — we&apos;ll be in
                    touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please email us directly at{" "}
                    <a
                      href="mailto:abhinavmec47@gmail.com"
                      className="underline hover:text-red-300"
                    >
                      abhinavmec47@gmail.com
                    </a>
                    .
                  </p>
                )}
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
                    href="mailto:abhinavmec47@gmail.com"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] shrink-0"
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
                    abhinavmec47@gmail.com
                  </a>
                  <a
                    href="tel:+918261814200"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--color-accent)] transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] shrink-0"
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
                    +91 82618 14200
                  </a>
                  <div className="flex items-start justify-center md:justify-start gap-3">
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
                      Sundarnagar, Himachal Pradesh, India
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
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href="https://www.instagram.com/s.b.abhinav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram — @s.b.abhinav"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] group transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-white/50 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-6 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white mb-2">
                  Find Us on WedMeGood
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Award-winning and trusted by couples across the country. View
                  our verified profile, real reviews, and packages — or send an
                  enquiry directly through WedMeGood.
                </p>
                <a
                  href="https://www.wedmegood.com/profile/the-ruby-studio--25965298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm tracking-widest uppercase hover:gap-3 transition-all duration-300"
                >
                  View Profile
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
