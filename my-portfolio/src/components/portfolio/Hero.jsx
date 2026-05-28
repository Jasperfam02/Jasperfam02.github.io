export function Hero() {
  return (
    <section id="top" className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-end">
        <div>
          <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
            QA Engineer<br />
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Based in Malaysia
          </p>
          <p className="text-lg max-w-md leading-relaxed text-foreground/80">
            QA Engineer with hands-on experience in web development, IT infrastructure, and ISO 9001:2015 quality management systems. 
          </p>
        </div>
        <dl className="flex flex-col gap-4">
          {[
            ["01 / Role", "QA Engineer & Web Developer"],
            ["02 / Status", "Open to opportunities"],
            ["03 / Focus", "Web · Infra · QMS"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between items-baseline border-b border-border pb-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
              <dd className="font-medium text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
