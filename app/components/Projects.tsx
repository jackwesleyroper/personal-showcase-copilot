const projects = [
  {
    index: "01",
    title: "Forma Design System",
    description:
      "A comprehensive, accessible component library built for scale. Type-safe, themeable, and crafted for teams that care about consistency across every touchpoint.",
    tags: ["React", "TypeScript", "Storybook", "CSS-in-JS"],
    link: "#",
    status: "Live",
  },
  {
    index: "02",
    title: "Pulse Analytics",
    description:
      "Real-time product analytics dashboard with a focus on clarity. Transforms complex data streams into actionable insights through thoughtful data visualisation.",
    tags: ["Next.js", "D3.js", "Prisma", "PostgreSQL"],
    link: "#",
    status: "Live",
  },
  {
    index: "03",
    title: "Relay API Gateway",
    description:
      "High-performance API gateway with intelligent routing, rate limiting, and observability built in. Handles millions of requests daily with sub-millisecond overhead.",
    tags: ["Node.js", "TypeScript", "Redis", "Docker"],
    link: "#",
    status: "Open Source",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-32 px-6 border-t border-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[#555555] uppercase tracking-widest mb-4">
              <span className="inline-block w-4 h-px bg-[#555555]" />
              Selected work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Projects
            </h2>
          </div>
          <span className="text-sm text-[#444444] font-mono hidden md:block">
            {projects.length} projects
          </span>
        </div>

        {/* Project cards */}
        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project.index}
              href={project.link}
              className="group block rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a2a2a] hover:bg-[#111111] transition-all duration-300 p-8 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.02), transparent 40%)",
                }}
              />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Index */}
                <span className="text-xs font-mono text-[#333333] w-8 shrink-0 pt-1">
                  {project.index}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#555555]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a] group-hover:bg-green-500/70 transition-colors duration-300" />
                        {project.status}
                      </span>
                      <svg
                        className="w-4 h-4 text-[#333333] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="text-sm text-[#666666] leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-[#555555] border border-[#1f1f1f] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
