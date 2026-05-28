const groups = [
  { label: "Languages", items: ["PHP", "Python", "JavaScript", "HTML5", "CSS"] },
  {
    label: "Frameworks & Data",
    items: ["React", "Tailwind CSS", "Bootstrap", "Flutter", "MySQL", "Firebase"],
  },
  {
    label: "Ops · QA · Tools",
    items: [
      "TrueNAS",
      "Cloudflare",
      "Google Analytics (GA4)",
      "Looker Studio",
      "Figma",
      "Zoho Projects",
      "Trello",
      "Notion",
      "WordPress",
      "Wix",
    ],
  },
];

export function Expertise() {
  return (
    <section id="skills" className="bg-foreground text-background py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6 tracking-tight">
            Expertise
          </h2>
          <p className="text-background/60 leading-relaxed max-w-sm">
            Working across QA, web development, and IT infrastructure — with a steady focus
            on quality management and measurable outcomes.
          </p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-10">
          {groups.map((g) => (
            <div key={g.label}>
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-background/40 mb-4">
                {g.label}
              </h5>
              <ul className="space-y-2 text-sm">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
