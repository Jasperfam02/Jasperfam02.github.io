import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">yourname.dev</div>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:you@email.com" className="nav-cta">Hire me</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-badge">
          <span className="dot" />
          Open to opportunities
        </div>
        <h1>Data Analyst &amp;<br /><em>Insights</em> Specialist</h1>
        <p className="hero-sub">
          I turn raw data into clear decisions — using Google Analytics,
          Looker Studio, and modern data tools to help teams understand
          what's really happening.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="/cv.pdf" className="btn-secondary" download>Download CV</a>
        </div>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">20+</span>
            <span className="stat-label">Dashboards built</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">GA4</span>
            <span className="stat-label">Certified</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <span className="section-label">What I do</span>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-sub">
          End-to-end analytics — from tracking setup to live dashboards
          stakeholders actually use.
        </p>
        <div className="skills-grid">
          {[
            { icon: '📊', title: 'Google Analytics 4', desc: 'Event tracking, audiences, conversion funnels & custom dimensions.' },
            { icon: '🔍', title: 'Looker Studio', desc: 'Interactive dashboards connected to GA4, BigQuery, and Sheets.' },
            { icon: '🐍', title: 'Python & SQL', desc: 'Data cleaning, analysis, and pipeline automation at scale.' },
            { icon: '☁️', title: 'BigQuery', desc: 'Querying large datasets and connecting them to reporting tools.' },
          ].map((s) => (
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
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Real dashboards and analyses I've built to drive business decisions.
        </p>
        <div className="projects-grid">
          {[
            { emoji: '📈', color: 'green', tag: 'Looker Studio', title: 'E-commerce Traffic Dashboard', desc: 'GA4-powered dashboard tracking sessions, conversions & revenue by channel.' },
            { emoji: '🎯', color: 'blue', tag: 'GA4 + BigQuery', title: 'Funnel Drop-off Analysis', desc: 'Identified a 40% cart abandonment spike and pinpointed the culprit page.' },
            { emoji: '🗺️', color: 'amber', tag: 'Data Studio', title: 'SEO Performance Report', desc: 'Weekly automated report pulling Search Console + GA4 into one view.' },
          ].map((p) => (
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

      {/* CONTACT */}
      <section id="contact">
        <span className="section-label" style={{ color: 'var(--accent)' }}>Get in touch</span>
        <h2 className="section-title" style={{ color: 'white' }}>Let's work together</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Looking for a data analyst who can ship insights fast? Let's talk.
        </p>
        <a href="mailto:you@email.com" className="contact-btn">📩 Send me a message</a>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 yourname.dev — Built with React &amp; hosted on GitHub Pages</span>
        <div className="footer-links">
          <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:you@email.com">Email</a>
        </div>
      </footer>
    </>
  )
}

export default App
