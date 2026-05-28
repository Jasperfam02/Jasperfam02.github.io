const cells = [
  { stat: "9001", label: "ISO Compliance · Audit Support", invert: false },
  { stat: "TrueNAS", label: "Internal Infra Deployed", invert: true },
  { stat: "GA4 · SEO", label: "Analytics-Driven Redesign", invert: false },
  { stat: "Web Development", label: "Website Redesign", invert: true },
  { stat: "Leadership", label: "Lead in internal audit and project", invert: false },
  { stat: "Git/Github", label: "Control version and push project", invert: true },
];

export function Achievements() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto border-x border-t border-border">
      <div className="grid md:grid-cols-3 gap-1">
        {cells.map((c) => (
          <div
            key={c.stat}
            className={
              "p-8 " +
              (c.invert ? "bg-foreground text-background" : "bg-muted text-foreground")
            }
          >
            <h3 className="font-display text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              {c.stat}
            </h3>
            <p
              className={
                "text-xs font-mono uppercase tracking-widest " +
                (c.invert ? "text-background/60" : "text-muted-foreground")
              }
            >
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
