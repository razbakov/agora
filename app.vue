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
        <h2 class="hero-title">Governance for the Age of AI</h2>
        <p class="hero-subtitle">
          What if democracy had an API? A research project exploring how
          personal AI agents, liquid democracy, and resource management could
          work together to create governance that actually represents people.
        </p>
        <div class="hero-actions">
          <a
            href="https://razbakov.com/blog/2026-04-07-what-if-democracy-had-an-api"
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
        <h2 class="section-title">The Problem</h2>
        <div class="grid-two">
          <div class="card">
            <h3>Broken Delegation</h3>
            <p>
              We delegate important life decisions &mdash; healthcare, education,
              finance, politics &mdash; to strangers we have never met:
              politicians elected through mass media campaigns, opaque
              algorithms, and distant institutions.
            </p>
          </div>
          <div class="card">
            <h3>Isolated AI</h3>
            <p>
              AI assistants are emerging as personal tools but operate in
              isolation, without governance frameworks or the ability to
              represent their user's values in collective decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="layers" class="section section-alt">
      <div class="container">
        <h2 class="section-title">Three-Layer Governance Model</h2>
        <p class="section-description">
          Agora proposes a system where technology handles logistics, democracy
          handles values, and individuals retain sovereignty.
        </p>
        <div class="grid-three">
          <div class="layer-card">
            <div class="layer-number">1</div>
            <h3>Resource Management AI</h3>
            <p>
              Algorithms optimize logistics &mdash; supply chains, energy grids,
              infrastructure &mdash; based on constraints the community defines.
              AI handles <em>how</em>, never <em>what</em>.
            </p>
          </div>
          <div class="layer-card">
            <div class="layer-number">2</div>
            <h3>Liquid Democracy</h3>
            <p>
              Citizens vote directly or delegate to trusted people in their
              network &mdash; a friend who is a doctor for health policy, an
              engineer for tech decisions. Delegation is always revocable.
            </p>
          </div>
          <div class="layer-card">
            <div class="layer-number">3</div>
            <h3>Personal Sovereignty</h3>
            <p>
              Every individual retains ultimate control. Your personal AI team is
              calibrated to your values through coaching and self-assessment. You
              can override any delegate or agent at any time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Values</h2>
        <div class="values-grid">
          <div class="value-item">
            <strong>Open Knowledge</strong>
            <span>
              Code is MIT, research is CC BY 4.0, protocols are open standards.
              No black boxes.
            </span>
          </div>
          <div class="value-item">
            <strong>Trust Through Proximity</strong>
            <span>
              Governance legitimacy comes from real relationships, not abstract
              representation.
            </span>
          </div>
          <div class="value-item">
            <strong>Value Alignment First</strong>
            <span>
              AI agents must be grounded in the user's actual values before they
              act on anyone's behalf.
            </span>
          </div>
          <div class="value-item">
            <strong>Empiricism</strong>
            <span>
              Test all assumptions through experiments and continuous revision.
              No dogma.
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">Current Phase</h2>
        <div class="phase-card">
          <div class="phase-label">Phase 1</div>
          <h3>Prove the personal governance layer works</h3>
          <p>
            The Agora framework already exists as a personal productivity tool
            with AI agents, coaching, OKRs, and GTD. The current focus is
            adoption &mdash; validating that users actually delegate decisions to
            their agents and that those agents stay aligned with values over
            time.
          </p>
          <a
            href="https://ikigai.razbakov.com"
            class="btn btn-primary"
            style="margin-top: 1.5rem"
          >
            See the Ikigai Team Project
          </a>
        </div>
      </div>
    </section>

    <section id="involved" class="section">
      <div class="container">
        <h2 class="section-title">Get Involved</h2>
        <p class="section-description">
          Agora is an open research project. Whether you are a developer,
          governance researcher, political scientist, or just someone who thinks
          democracy deserves better tooling &mdash; there is room for you.
        </p>
        <div class="grid-three">
          <a
            href="https://github.com/razbakov/agora"
            class="link-card"
            target="_blank"
            rel="noopener"
          >
            <h3>GitHub</h3>
            <p>Browse the code, open issues, submit PRs. Everything is public.</p>
          </a>
          <a
            href="https://razbakov.com/blog/2026-04-07-what-if-democracy-had-an-api"
            class="link-card"
            target="_blank"
            rel="noopener"
          >
            <h3>Blog Post</h3>
            <p>
              Read the full essay on why democracy needs an API and how Agora
              approaches it.
            </p>
          </a>
          <a
            href="mailto:razbakov.aleksey@gmail.com"
            class="link-card"
          >
            <h3>Contact</h3>
            <p>
              Reach out directly. Especially interested in hearing from
              governance researchers and practitioners.
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
