<template>
  <div class="page">
    <header class="header">
      <div class="container">
        <h1 class="logo">Agora</h1>
        <nav class="nav">
          <a href="#vision">Vision</a>
          <a href="#layers">The Model</a>
          <a href="#involved">Get Involved</a>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="container">
        <h2 class="hero-title">What if you could delegate your vote to people you actually trust?</h2>
        <p class="hero-subtitle">
          Your doctor for healthcare. Your engineer for infrastructure.
          Your teacher for education. And AI that keeps it all aligned
          with what you actually care about.
        </p>
        <div class="hero-actions">
          <a
            href="https://razbakov.com/blog/2026-04-07-democracy-is-broken"
            class="btn btn-primary"
          >
            Read the Manifesto
          </a>
          <a href="#involved" class="btn btn-secondary">Get Involved</a>
        </div>
      </div>
    </section>

    <section id="vision" class="section">
      <div class="container">
        <h2 class="section-title">Why this matters</h2>
        <div class="grid-two">
          <div class="card">
            <h3>We vote for strangers</h3>
            <p>
              Every election asks you to choose between people you have never
              met. Yet you know a doctor, an engineer, a teacher &mdash; people
              whose judgment you trust because you have seen it in action.
              Why can't you delegate to them?
            </p>
          </div>
          <div class="card">
            <h3>Nobody has time for 200 decisions a year</h3>
            <p>
              Even with better systems, participation is the bottleneck.
              What if a personal AI that knows your values could handle
              the routine decisions &mdash; and flag you when something
              important needs your attention?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="layers" class="section section-alt">
      <div class="container">
        <h2 class="section-title">How it works</h2>
        <p class="section-description">
          Three layers, each handled by the system that does it best.
        </p>
        <div class="grid-three">
          <div class="layer-card">
            <div class="layer-number">1</div>
            <h3>Machines handle logistics</h3>
            <p>
              How much water does this region need? Where should energy go?
              These are measurable questions. Let sensors and algorithms
              manage the <em>how</em> &mdash; humans decide the <em>what</em>.
            </p>
          </div>
          <div class="layer-card">
            <div class="layer-number">2</div>
            <h3>People you trust set direction</h3>
            <p>
              Vote directly on any issue, or delegate to someone in your
              network who knows better. Your doctor for health policy. Your
              engineer for infrastructure. Take your vote back anytime.
            </p>
          </div>
          <div class="layer-card">
            <div class="layer-number">3</div>
            <h3>You stay in control</h3>
            <p>
              Your personal AI team learns your values through conversation,
              not configuration. It participates on your behalf when you are
              busy &mdash; and you can override everything, always.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Built in the open</h2>
        <p class="section-description">
          If the code is closed, you cannot trust it with governance. Period.
        </p>
        <div class="values-grid">
          <div class="value-item">
            <strong>Open source</strong>
            <span>
              All code is MIT licensed. All research is CC BY 4.0.
              No black boxes, no proprietary protocols.
            </span>
          </div>
          <div class="value-item">
            <strong>Trust starts local</strong>
            <span>
              Governance legitimacy comes from real relationships &mdash;
              people you actually know, not abstract representation.
            </span>
          </div>
          <div class="value-item">
            <strong>Values before features</strong>
            <span>
              Your AI agents start with a coaching session about what matters
              to you &mdash; not a settings page.
            </span>
          </div>
          <div class="value-item">
            <strong>Prove it or drop it</strong>
            <span>
              Every phase tests a hypothesis. If people don't actually
              delegate to their agents, the later phases don't make sense.
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">Where we are now</h2>
        <div class="phase-card">
          <div class="phase-label">Phase 1</div>
          <h3>Can a personal AI team actually represent your values?</h3>
          <p>
            Before connecting people into networks, we need to prove the
            foundation works. Ikigai Team is a personal AI system with six
            agents calibrated to your values through coaching. It manages your
            day, tracks your goals, and makes decisions the way you would.
            That is the governance prototype.
          </p>
          <a
            href="https://ikigai.razbakov.com"
            class="btn btn-primary"
            style="margin-top: 1.5rem"
          >
            See Ikigai Team
          </a>
        </div>
      </div>
    </section>

    <section id="involved" class="section">
      <div class="container">
        <h2 class="section-title">Get involved</h2>
        <p class="section-description">
          Whether you study governance, write code, or just think democracy
          deserves an upgrade &mdash; there is room for you.
        </p>
        <div class="grid-three">
          <a
            href="https://github.com/razbakov/agora-org"
            class="link-card"
            target="_blank"
            rel="noopener"
          >
            <h3>GitHub</h3>
            <p>All governance research, models, and documentation. Open issues, open PRs.</p>
          </a>
          <a
            href="https://razbakov.com/blog/2026-04-07-democracy-is-broken"
            class="link-card"
            target="_blank"
            rel="noopener"
          >
            <h3>Read the essay</h3>
            <p>
              The full story: how liquid democracy, AI agents, and resource
              management connect into one system.
            </p>
          </a>
          <a
            href="mailto:razbakov.aleksey@gmail.com"
            class="link-card"
          >
            <h3>Say hello</h3>
            <p>
              Especially interested in hearing from governance researchers,
              political scientists, and anyone building in this space.
            </p>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>
          Agora is an open-source research project by
          <a href="https://razbakov.com" target="_blank" rel="noopener"
            >Alex Razbakov</a
          >.
        </p>
        <p class="footer-license">
          Code: MIT License &middot; Research &amp; Docs: CC BY 4.0
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --color-bg: #0a0a0f;
  --color-bg-alt: #12121a;
  --color-surface: #1a1a25;
  --color-border: #2a2a3a;
  --color-text: #e0e0e8;
  --color-text-muted: #8888a0;
  --color-accent: #6c8cff;
  --color-accent-hover: #8aa4ff;
  --max-width: 960px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--color-accent-hover);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.05em;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
}

.nav a:hover {
  color: var(--color-text);
}

/* Hero */
.hero {
  padding: 6rem 0 4rem;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  max-width: 640px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  color: #fff;
}

.btn-secondary {
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Sections */
.section {
  padding: 5rem 0;
}

.section-alt {
  background: var(--color-bg-alt);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.section-description {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  max-width: 640px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

/* Grid layouts */
.grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.grid-three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Cards */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
}

.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.card p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

/* Layer cards */
.layer-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
}

.layer-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.layer-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.layer-card p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.value-item strong {
  font-size: 1rem;
}

.value-item span {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* Phase card */
.phase-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.5rem;
  margin-top: 2rem;
  max-width: 640px;
}

.phase-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

.phase-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.phase-card p {
  color: var(--color-text-muted);
}

/* Link cards */
.link-card {
  display: block;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: border-color 0.2s;
}

.link-card:hover {
  border-color: var(--color-accent);
}

.link-card h3 {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.link-card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* Footer */
.footer {
  border-top: 1px solid var(--color-border);
  padding: 3rem 0;
  text-align: center;
}

.footer p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.footer-license {
  margin-top: 0.5rem;
  font-size: 0.8rem !important;
  color: var(--color-text-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .grid-two,
  .grid-three,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    gap: 1rem;
  }

  .section {
    padding: 3rem 0;
  }
}
</style>
