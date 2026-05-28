const roles = [
  {
    period: "2023 — 2026",
    title: "QA Engineer",
    org: "ASEM Technology Sdn. Bhd.",
    description:
      "Led QA across web, infrastructure, and ISO 9001:2015 quality management. Redesigned the company website, deployed a TrueNAS file server, and supported successful recertification audits with minimal findings.",
    active: true,
  },
  {
    period: "2023",
    title: "Consultant, Solutions Development",
    org: "Fusionex Group",
    description:
      "Developed PrestaShop-based e-commerce sites and custom modules. Debugged for performance and built APIs for seamless mobile app integration.",
  },
  {
    period: "2022",
    title: "Programmer",
    org: "OPERION Ecommerce & Software Sdn Bhd",
    description:
      "Built landing pages, e-commerce sites, and informative websites. Maintained back-end systems and fixed bugs across PHP, MySQL, and JavaScript stacks.",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="px-6 py-24 max-w-7xl mx-auto border-t border-border">
      <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-16 text-center">
        Professional Path
      </h2>
      <ol className="max-w-3xl mx-auto relative">
        {roles.map((r, i) => (
          <li
            key={r.period + r.org}
            className={
              "relative border-l border-border ml-4 pl-8 " +
              (i === roles.length - 1 ? "pb-0" : "pb-12")
            }
          >
            <span
              className={
                "absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full " +
                (r.active ? "bg-foreground" : "bg-foreground/30")
              }
            />
            <span className="font-mono text-xs text-muted-foreground mb-2 block">{r.period}</span>
            <h4 className="text-xl font-bold font-display">{r.title}</h4>
            <p className="text-sm text-accent font-medium mt-1">{r.org}</p>
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-2xl">{r.description}</p>
          </li>
        ))}
      </ol>

      <div className="max-w-3xl mx-auto mt-20 grid sm:grid-cols-2 gap-1">
        <div className="p-8 bg-muted">
          <h5 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Education
          </h5>
          <p className="font-display text-lg font-bold leading-tight">
            Quest International University
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Bachelor's degree · Information Technology
          </p>
        </div>
        <div className="p-8 bg-muted">
          <h5 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Languages
          </h5>
          <p className="font-display text-lg font-bold leading-tight">
            English · Mandarin · Malay · Cantonese
          </p>
          <p className="text-sm text-muted-foreground mt-1">All proficient</p>
        </div>
      </div>
    </section>
  );
}
