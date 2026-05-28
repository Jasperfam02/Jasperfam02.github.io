export function Contact() {
  return (
    <footer id="contact" className="px-6 py-24 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-12 uppercase leading-[0.9]">
         Interested in Collaborating? <br></br>
          <span className="text-accent italic font-light lowercase">Let’s Talks</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-sm uppercase tracking-widest">
          <a href="mailto:jasperfam02@gmail.com" className="hover:text-accent transition-colors">
            Email
          </a>
          <span className="text-foreground/20">/</span>
          <a href="https://github.com/Jasperfam02" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <span className="text-foreground/20">/</span>
          <a href="https://www.linkedin.com/in/fam-kai-chen-25864b202/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="mt-16 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Kai Chen — Happy to connect!
        </p>
      </div>
    </footer>
  );
}
