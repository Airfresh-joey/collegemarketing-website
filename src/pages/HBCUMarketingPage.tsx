import { Link } from 'react-router-dom'
import { getHBCUs, formatEnrollment } from '../data/schools'
import { services } from '../data/services'

const hbcus = getHBCUs()

const relevantServices = services.filter(s =>
  ['campus-events', 'student-brand-ambassadors', 'social-media-campaigns', 'greek-life-marketing', 'game-day-marketing'].includes(s.slug)
)

export default function HBCUMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / HBCU Marketing
          </nav>
          <h1>HBCU Marketing</h1>
          <p className="page-hero-subtitle">
            Culturally authentic campus marketing programs for Historically Black Colleges and Universities. Heritage events, homecoming activations, and brand partnerships that resonate.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Why HBCU Marketing Matters</h2>
            <p>
              HBCUs represent some of the most vibrant, tight-knit campus communities in America. With deep traditions, legendary homecomings, and highly engaged student bodies, HBCUs offer brands an unmatched opportunity to build authentic connections with influential young consumers. But success on these campuses requires cultural fluency and genuine respect for the heritage and traditions that define them.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">{hbcus.length}</span>
                <span className="specialty-stat-label">HBCUs We Serve</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">{(hbcus.reduce((sum, h) => sum + h.school.enrollment, 0) / 1000).toFixed(0)}k+</span>
                <span className="specialty-stat-label">Students Reached</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">107</span>
                <span className="specialty-stat-label">HBCUs Nationwide</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Our HBCU Marketing Approach</h2>
            <div className="specialty-features">
              <div className="specialty-feature">
                <h3>Cultural Authenticity</h3>
                <p>Every campaign is built with cultural awareness at its core. We work with HBCU students, alumni, and campus leaders to ensure your brand message resonates authentically with the community.</p>
              </div>
              <div className="specialty-feature">
                <h3>Homecoming Activations</h3>
                <p>HBCU homecomings are legendary cultural events drawing tens of thousands. We produce brand activations that become part of the celebration — from tailgate zones to step show sponsorships and concert partnerships.</p>
              </div>
              <div className="specialty-feature">
                <h3>Heritage Event Marketing</h3>
                <p>From Founders' Day to Greek probate shows, HBCUs have a rich calendar of traditions. We integrate your brand into these moments with respect and creativity.</p>
              </div>
              <div className="specialty-feature">
                <h3>HBCU Greek Organizations</h3>
                <p>The Divine Nine fraternities and sororities are among the most influential organizations in the country. We facilitate authentic partnerships that honor these organizations' legacy while delivering brand value.</p>
              </div>
              <div className="specialty-feature">
                <h3>Student Ambassador Networks</h3>
                <p>We recruit and train ambassadors who are already leaders on their HBCU campuses — student government officers, Greek leaders, athletes, and social media influencers who carry real influence.</p>
              </div>
              <div className="specialty-feature">
                <h3>Band & Athletics Integration</h3>
                <p>HBCU marching bands and athletic programs have passionate, loyal followings. We create sponsorship activations around battle of the bands, football classics, and basketball tournaments.</p>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Services for HBCU Campuses</h2>
            <div className="services-grid">
              {relevantServices.map(service => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>HBCUs We Serve</h2>
            <p className="section-subtitle">We have boots on the ground at these Historically Black Colleges and Universities.</p>
            <div className="schools-list">
              {hbcus.map(({ school, state }) => (
                <Link
                  key={school.slug}
                  to={`/schools/${state.slug}/${school.slug}`}
                  className="school-card"
                >
                  <div>
                    <h3>{school.name}</h3>
                    <span className="school-city">{school.city}, {state.abbreviation}</span>
                    <div className="school-card-meta">
                      <span className="school-card-type">{school.type}</span>
                      <span className="school-card-enrollment">{formatEnrollment(school.enrollment)} students</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Reach HBCU Students?</h2>
          <p>Let's build a culturally authentic campus marketing program that resonates with HBCU communities.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your HBCU Campaign</Link>
        </div>
      </section>
    </>
  )
}
