export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Label */}
        <div className="opacity-0-init animate-fade-in delay-100 mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#555555] uppercase tracking-widest">
            <span className="inline-block w-4 h-px bg-[#555555]" />
            Portfolio 2025
          </span>
        </div>

        {/* Name */}
        <h1 className="opacity-0-init animate-fade-in-up delay-200 text-[clamp(3rem,10vw,7.5rem)] font-bold tracking-tighter leading-[0.9] text-white mb-6">
          Jack
          <br />
          <span className="text-[#444444]">Roper</span>
        </h1>

        {/* Tagline */}
        <p className="opacity-0-init animate-fade-in-up delay-300 text-[clamp(1rem,2.5vw,1.4rem)] text-[#666666] max-w-lg leading-relaxed mb-10 font-light">
          Developer &amp; designer crafting refined digital experiences with
          precision and intent.
        </p>

        {/* CTA */}
        <div className="opacity-0-init animate-fade-in-up delay-400 flex items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-[#e0e0e0] transition-colors duration-200"
          >
            View work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1f1f1f] text-[#888888] text-sm font-medium rounded-full hover:border-[#333333] hover:text-white transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="opacity-0-init animate-fade-in delay-600 absolute bottom-[-80px] left-0 flex items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#333333]" />
          <span className="text-xs text-[#444444] font-mono">scroll</span>
        </div>
      </div>
    </section>
  );
}
