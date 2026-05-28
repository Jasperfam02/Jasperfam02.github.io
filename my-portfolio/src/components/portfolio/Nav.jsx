export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-display font-bold text-xl tracking-tighter uppercase">
          Kai Chen&nbsp;<span className="text-accent">.</span>&nbsp;Portfolio
        </a>
        <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
