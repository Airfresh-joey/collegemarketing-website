import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            COLLEGE MARKETING CO
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#campuses">Campuses</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Campus Marketing That Actually Works</h1>
          <p className="hero-subtitle">
            Connect with college students through authentic peer-to-peer marketing campaigns
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Start a Campaign</a>
            <a href="#services" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-badge">
          <div className="badge-text">Active on 100+ Campuses Nationwide</div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container">
          <p>Trusted by leading brands to reach college audiences</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>How We Help Brands Win on Campus</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>Student Brand Ambassadors</h3>
              <p>Recruit and manage passionate student advocates who authentically represent your brand on campus</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Campaigns</h3>
              <p>Student-led content creation and social amplification that resonates with college audiences</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Campus Events</h3>
              <p>Experiential activations, pop-ups, and event staffing that create memorable brand experiences</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Sampling Programs</h3>
              <p>Strategic product distribution and demos that drive trial and word-of-mouth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">College Campuses</div>
            </div>
            <div className="stat">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Student Ambassadors</div>
            </div>
            <div className="stat">
              <div className="stat-number">50M+</div>
              <div className="stat-label">Students Reached</div>
            </div>
          </div>
        </div>
      </section>

      <section id="campuses" className="campuses">
        <div className="container">
          <h2>Where We Work</h2>
          <p className="section-subtitle">Active programs at top universities nationwide</p>
          <div className="campus-grid">
            <div className="campus-tag">USC</div>
            <div className="campus-tag">UCLA</div>
            <div className="campus-tag">NYU</div>
            <div className="campus-tag">UT Austin</div>
            <div className="campus-tag">University of Michigan</div>
            <div className="campus-tag">Penn State</div>
            <div className="campus-tag">Arizona State</div>
            <div className="campus-tag">Florida State</div>
            <div className="campus-tag">Ohio State</div>
            <div className="campus-tag">UC Berkeley</div>
            <div className="campus-tag">+ 90 More</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Reach College Students?</h2>
          <p>Let's build a campus marketing program that delivers results</p>
          <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🎓</span>
                COLLEGE MARKETING CO
              </div>
              <p>Authentic campus marketing programs</p>
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#campuses">Campuses</a>
              <a href="#contact">Contact</a>
              <a href="mailto:hello@collegemarketing.co">hello@collegemarketing.co</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 College Marketing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
