import { Link } from 'react-router-dom'
import { states, getTotalSchoolCount } from '../data/schools'

export default function HomePage() {
  const totalSchools = getTotalSchoolCount()
  const featuredSchools = [
    'USC', 'UCLA', 'NYU', 'UT Austin', 'University of Michigan',
    'Penn State', 'Arizona State', 'Florida State', 'Ohio State', 'UC Berkeley'
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Campus Marketing That Actually Works</h1>
          <p className="hero-subtitle">
            Connect with college students through authentic peer-to-peer marketing campaigns
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Start a Campaign</a>
            <Link to="/services" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-badge">
          <div className="badge-text">Active on {totalSchools}+ Campuses Nationwide</div>
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
            <Link to="/services/student-brand-ambassadors" className="service-card">
              <div className="service-icon">👥</div>
              <h3>Student Brand Ambassadors</h3>
              <p>Recruit and manage passionate student advocates who authentically represent your brand on campus</p>
            </Link>
            <Link to="/services/social-media-campaigns" className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Campaigns</h3>
              <p>Student-led content creation and social amplification that resonates with college audiences</p>
            </Link>
            <Link to="/services/campus-events" className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Campus Events</h3>
              <p>Experiential activations, pop-ups, and event staffing that create memorable brand experiences</p>
            </Link>
            <Link to="/services/sampling-programs" className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Sampling Programs</h3>
              <p>Strategic product distribution and demos that drive trial and word-of-mouth</p>
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">{totalSchools}+</div>
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
          <p className="section-subtitle">Active programs at top universities across {states.length} states</p>
          <div className="campus-grid">
            {featuredSchools.map(school => (
              <div key={school} className="campus-tag">{school}</div>
            ))}
            <Link to="/schools" className="campus-tag campus-tag-link">
              + {totalSchools - featuredSchools.length} More
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/schools" className="btn btn-outline">Browse All Schools</Link>
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
    </>
  )
}
