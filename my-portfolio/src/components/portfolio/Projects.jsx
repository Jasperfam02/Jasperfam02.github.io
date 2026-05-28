import asemImg from "../../assets/project-asem.jpg";
import truenasImg from "../../assets/project-truenas.jpg";
import ecommerceImg from "../../assets/project-ecommerce.jpg";
import prestashopImg from "../../assets/project-iso9001.jpg";

const projects = [
  {
    title: "Company Website Redesign",
    description:
      "Responsive redesign and admin dashboard for asem.com.my. SEO best practices, with GA4 and Looker Studio wired in for data-driven decisions.",
    year: "2024 — 2026",
    image: asemImg,
    alt: "Editorial mockup of the ASEM corporate website redesign",
    href: "https://asem.com.my",
  },
  {
    title: "TrueNAS Internal Infrastructure",
    description:
      "Designed and deployed an internal file infrastructure on TrueNAS — Cloudflare DNS migration, Tailscale, Nextcloud, and SSL — replacing a brittle desktop file-share setup.",
    year: "2024 - 2026",
    image: truenasImg,
    alt: "Clean datacenter aisle with organized server racks",
  },
  {
    title: "ACHIEVED ISO 9001:2015 AUDIT Compliance",
    description:
      "Supported ISO 9001:2015 surveillance and recertification audits, resulting in only minorfindings through thorough preparation andstrong quality management practices.",
    year: "2024- 2025",
    image: prestashopImg,
    alt: "Close-up of source code on a developer screen",
  },
  {
    title: "E-commerce Presence Expansion",
    description:
      "Supported platform setup and integration for eBay and Shopee, extending online visibility and broadening customer reach for the company.",
    year: "2024",
    image: ecommerceImg,
    alt: "Minimalist arrangement of paper shopping bags representing e-commerce",
  },
];

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 max-w-7xl mx-auto border-t border-border">
      <header className="flex items-baseline justify-between mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
          Featured Work
        </h2>
        <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
          [Key Achievements and Extra Contribution]
        </span>
      </header>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((p) => {
          const Inner = (
            <>
              <div className="w-full aspect-[4/3] bg-muted outline outline-1 -outline-offset-1 outline-border mb-6 overflow-hidden group-hover:outline-accent/40 transition-all">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
                <span className="font-mono text-xs px-3 py-1 border border-border rounded-full whitespace-nowrap">
                  {p.year}
                </span>
              </div>
            </>
          );

          return p.href ? (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="group block">
              {Inner}
            </a>
          ) : (
            <article key={p.title} className="group">
              {Inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
