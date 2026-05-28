import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const skills = [
    { icon: '🧪', title: 'QA Engineering', desc: 'Test cases, regression testing, ISO 9001 processes & defect tracking.' },
    { icon: '🌐', title: 'Frontend (React)', desc: 'UI development using React, JSX, Tailwind & modern CSS systems.' },
    { icon: '📊', title: 'Google Analytics 4', desc: 'Event tracking, funnels, conversions & user behavior analysis.' },
    { icon: '📈', title: 'Looker Studio', desc: 'Dashboard creation for KPI monitoring & business reporting.' },
  ]

  const projects = [
    {
      emoji: '🧪',
      color: 'green',
      tag: 'QA System',
      title: 'Regression Testing Framework',
      desc: 'Designed structured test cases and improved defect tracking workflow across teams.'
    },
    {
      emoji: '🌐',
      color: 'blue',
      tag: 'Web Project',
      title: 'Company Website Revamp',
      desc: 'Improved frontend UI using HTML, CSS, JS, Tailwind and PHP integration.'
    },
    {
      emoji: '📊',
      color: 'amber',
      tag: 'Analytics',
      title: 'User Behavior Dashboard',
      desc: 'Built GA4 + Looker Studio dashboards to track engagement and conversions.'
    },
  ]

  return (
    <>
      {/* NAV */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">kai.chen.dev</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:your-email@gmail.com" className="nav-cta">Hire me</a>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-badge">
          <span className="dot" />
          Available for QA / Analytics / Frontend roles
        </div>

        <h1>
          QA Engineer &amp; <br />
          <em>Analytics-Driven</em> Builder
        </h1>

        <p className="hero-sub">
          I build reliable systems, test quality at scale, and turn data from
          Google Analytics &amp; Looker Studio into actionable business insights.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/cv.pdf" className="btn-secondary" download>Download CV</a>
        </div>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-num">QA</span>
            <span className="stat-label">Engineering Focus</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">GA4</span>
            <span className="stat-label">Tracking Setup</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">BI</span>
            <span className="stat-label">Dashboarding</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <span className="section-label">Skill Stack</span>
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <p className="section-sub">
          QA engineering + frontend + analytics pipeline from tracking to insight delivery.
        </p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <span className="section-label">Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Real-world systems, dashboards, and QA improvements I've delivered.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className={`project-thumb thumb-${p.color}`}>{p.emoji}</div>
              <div className="project-info">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS */}
      <section id="analytics" className="analytics-section">
        <span className="section-label">Data</span>
        <h2 className="section-title">Analytics Showcase</h2>
      
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <span className="section-label" style={{ color: 'var(--accent)' }}>Contact</span>
        <h2 className="section-title" style={{ color: 'white' }}>Let's build something solid</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Open for QA engineering, frontend, and analytics roles.
        </p>
        <a href="mailto:your-email@gmail.com" className="contact-btn">
          📩 Contact Me
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 kai.chen.dev — Built with React</span>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your-email@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}

export default App