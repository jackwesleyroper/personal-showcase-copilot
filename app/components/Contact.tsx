"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // EmailJS configuration
      // To enable real email delivery:
      // 1. Create a free account at https://www.emailjs.com
      // 2. Set up a service (e.g. Gmail) and note your Service ID
      // 3. Create an email template and note your Template ID
      // 4. Copy your Public Key from Account > API Keys
      // 5. Replace the placeholder values below with your real credentials
      const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
      const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
      const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

      const { send } = await import("@emailjs/browser");
      await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "jackwesleyroper@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormState("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 border-t border-[#111111]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
            <span className="inline-block w-4 h-px bg-[#555555]" />
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-[#444444]">something great.</span>
          </h2>
          <p className="text-[#666666] leading-relaxed text-base mb-8">
            Have a project in mind or just want to connect? Drop me a message
            and I&apos;ll get back to you within 24 hours.
          </p>

          <a
            href="mailto:jackwesleyroper@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5A1.5 1.5 0 013.5 3h9A1.5 1.5 0 0114 4.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M2 5l6 4 6-4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="group-hover:underline underline-offset-4">
              jackwesleyroper@gmail.com
            </span>
          </a>
        </div>

        {/* Right — form */}
        <div>
          {formState === "success" ? (
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[320px]">
              <div className="w-10 h-10 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Message sent!</p>
              <p className="text-sm text-[#666666]">
                Thanks for reaching out. I&apos;ll be in touch soon.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-2 text-xs text-[#555555] hover:text-white transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#555555] mb-2 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#333333] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#555555] mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#333333] transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-[#555555] mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#333333] transition-colors duration-200 resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-[#e0e0e0] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {formState === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
