export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 border-t border-[#111111]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — label */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
            <span className="inline-block w-4 h-px bg-[#555555]" />
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
            Building things
            <br />
            <span className="text-[#444444]">that matter.</span>
          </h2>
        </div>

        {/* Right — bio */}
        <div className="space-y-5 pt-2 md:pt-12">
          <p className="text-[#888888] leading-relaxed text-base">
            Hi, I&apos;m Jack — a developer and designer with a passion for
            building clean, purposeful software. I care deeply about the
            intersection of engineering and design, where good ideas meet
            precise execution.
          </p>
          <p className="text-[#888888] leading-relaxed text-base">
            I specialise in modern web technologies and love working on products
            that solve real problems with elegance. When I&apos;m not coding,
            you&apos;ll find me exploring design systems, reading about emerging
            tech, or contributing to open-source projects.
          </p>
          <p className="text-[#888888] leading-relaxed text-base">
            Currently available for freelance and full-time opportunities.
          </p>

          {/* Skills */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Figma",
              "AWS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-mono text-[#666666] border border-[#1f1f1f] rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
