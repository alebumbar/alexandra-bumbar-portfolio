const Arrow = () => <span aria-hidden="true">↗</span>;

const skills = [
  ["Interface", "React, Vue, TypeScript, responsive design"],
  ["Full stack", "Node.js, GraphQL, APIs, data workflows"],
  ["Quality", "Automated testing, role-based test coverage, code review"],
  ["Cloud & workflow", "AWS, Git, AI-assisted engineering"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="monogram" href="#top" aria-label="Alexandra Bumbar, home">
          AB
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:ostasalexandra@gmail.com">
          Get in touch <Arrow />
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">London · Remote / Hybrid · Open to permanent roles</p>
          <h1>
            I build digital products with an <em>eye for detail.</em>
          </h1>
          <p className="hero-intro">
            I’m Alexandra, a frontend and full-stack engineer creating thoughtful,
            reliable experiences with React, Vue, TypeScript and Node.js.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View selected work</a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/alebumbar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Alexandra's approach: engineering meets craft">
          <span className="art-index">01 — 26</span>
          <div className="art-orbit" />
          <div className="art-block" />
          <p className="art-title">Engineering<br />× Craft</p>
          <p className="art-caption">Precision in the details.<br />Purpose in the whole.</p>
          <span className="art-mark">A/B</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Profile highlights">
        <div className="shell signal-grid">
          <div><strong>2+ years</strong><span>Product engineering</span></div>
          <div><strong>Frontend → Full stack</strong><span>Fast-growing scope</span></div>
          <div><strong>AWS + Apollo</strong><span>Certified foundations</span></div>
          <div><strong>London</strong><span>Remote or hybrid</span></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected engineering work</p>
          <h2>Useful changes,<br /><em>carefully made.</em></h2>
          <p>
            Recent work for an anonymised US-based advertising technology platform,
            helping teams understand and manage digital media performance.
          </p>
        </div>

        <div className="work-list">
          <article className="work-card">
            <div className="work-number">01</div>
            <div className="work-content">
              <p className="work-type">Full-stack product feature</p>
              <h3>Reversible product visibility</h3>
              <p>
                Built a hide and unhide workflow that lets users remove products from
                the main platform view without permanently deleting their data.
              </p>
              <div className="work-outcome">
                <span>Why it matters</span>
                <p>Safer product management, preserved history and a reversible user journey.</p>
              </div>
            </div>
            <div className="work-visual visual-visibility" aria-hidden="true">
              <div className="mini-window">
                <div className="mini-bar" />
                <div className="product-row"><i /><span>Active product</span><b>Visible</b></div>
                <div className="product-row muted"><i /><span>Hidden product</span><b>Hidden</b></div>
                <div className="product-row"><i /><span>Active product</span><b>Visible</b></div>
              </div>
            </div>
          </article>

          <article className="work-card work-card-dark">
            <div className="work-number">02</div>
            <div className="work-content">
              <p className="work-type">Test infrastructure</p>
              <h3>Role-aware automation framework</h3>
              <p>
                Created a framework that configures test users by role, allowing
                automated scenarios to validate features across multiple user types.
              </p>
              <div className="work-outcome">
                <span>Why it matters</span>
                <p>More representative test coverage, repeatable setup and greater confidence.</p>
              </div>
            </div>
            <div className="work-visual visual-testing" aria-hidden="true">
              <div className="role-stack">
                <div><span>ADMIN</span><b>✓</b></div>
                <div><span>MANAGER</span><b>✓</b></div>
                <div><span>VIEWER</span><b>✓</b></div>
              </div>
              <p>3 roles · 1 adaptable setup</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell experience-grid">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Experience & education</p>
            <h2>Growing through<br /><em>real ownership.</em></h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-meta">
                <span>Jan 2024 — Present</span>
                <span>London · Remote</span>
              </div>
              <h3>Software Engineer</h3>
              <p className="company">CloudGeometry</p>
              <p>
                Joined as a frontend engineer and transitioned into full-stack delivery
                within months. Owns substantial feature stories across interface and
                server-side work for a data-rich B2B platform, collaborating with
                experienced engineers and using AI-assisted workflows to deliver with care.
              </p>
            </article>

            <article className="timeline-item compact-item">
              <div className="timeline-meta"><span>Following university</span></div>
              <h3>Volunteer Frontend Contributor</h3>
              <p>
                Built early hands-on experience by contributing frontend work to a
                community association before moving into professional engineering.
              </p>
            </article>

            <article className="timeline-item compact-item">
              <div className="timeline-meta"><span>Graduated Jul 2021</span></div>
              <h3>BSc Information Technology</h3>
              <p className="company">Middlesex University London</p>
            </article>

            <div className="credential-row" aria-label="Professional certifications">
              <div><span>AWS</span><strong>Certified Cloud Practitioner</strong></div>
              <div><span>Apollo</span><strong>GraphQL Developer</strong></div>
              <div><span>freeCodeCamp</span><strong>Responsive Web Design</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell skills-section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>A considered<br /><em>toolkit.</em></h2>
        </div>
        <div className="skills-list">
          {skills.map(([label, value], index) => (
            <div className="skill-row" key={label}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-quote">
            <span className="quote-mark">“</span>
            <p>Good work should feel as intentional as a well-made garment.</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Beyond the screen</p>
            <h2>Detail is a way<br /><em>of seeing.</em></h2>
            <p>
              Fashion design sharpened my instinct for proportion, consistency and the
              small choices that make a whole experience feel right. I bring that same
              sensibility to software—balancing how something works with how it feels.
            </p>
            <p>
              Away from code, I design customisable outfits, cook for the people I love,
              hike with my family and play tennis with my husband.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <p className="eyebrow">Let’s work together</p>
          <h2>Looking for a thoughtful engineer?</h2>
          <p>
            I’m open to permanent mid-level frontend and full-stack roles,
            remote or hybrid in London.
          </p>
          <a className="contact-email" href="mailto:ostasalexandra@gmail.com">
            ostasalexandra@gmail.com <Arrow />
          </a>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 Alexandra Bumbar</span>
        <span>Designed with precision · Built with care</span>
        <a href="https://www.linkedin.com/in/alebumbar" target="_blank" rel="noreferrer">
          LinkedIn <Arrow />
        </a>
      </footer>
    </main>
  );
}
