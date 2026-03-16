import { Link } from 'react-router-dom'
import { getCommunityColleges, formatEnrollment } from '../data/schools'
import { services } from '../data/services'

const communityColleges = getCommunityColleges().sort((a, b) => b.school.enrollment - a.school.enrollment)
const totalEnrollment = communityColleges.reduce((sum, cc) => sum + cc.school.enrollment, 0)

const relevantServices = services.filter(s =>
  ['sampling-programs', 'street-teams', 'social-media-campaigns', 'guerrilla-marketing', 'campus-events'].includes(s.slug)
)

export default function CommunityCollegeMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / Community College Marketing
          </nav>
          <h1>Community College Marketing</h1>
          <p className="page-hero-subtitle">
            Reach the 6.8 million students who attend community colleges with targeted, commuter-friendly campus marketing programs designed for a different kind of student.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Why Community College Marketing Is Different</h2>
            <p>
              Community college students aren't traditional 18-year-olds living in dorms. They're older, career-focused, often working, and commuting to campus. This means the standard playbook doesn't work here. You need to reach students in tight windows — between classes, in parking lots, at career fairs, and through digital channels. Community colleges also serve the most diverse student populations in higher education, making them essential for brands targeting real America.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">{communityColleges.length}</span>
                <span className="specialty-stat-label">Community Colleges We Serve</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">{(totalEnrollment / 1000).toFixed(0)}k+</span>
                <span className="specialty-stat-label">Students Reached</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">1,000+</span>
                <span className="specialty-stat-label">Community Colleges Nationwide</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Our Community College Approach</h2>
            <div className="specialty-features">
              <div className="specialty-feature">
                <h3>Commuter-Focused Tactics</h3>
                <p>Community college students spend less time on campus, so every touchpoint counts. We intercept students at parking lots, bus stops, bookstores, and cafeterias during peak hours with high-impact sampling and flyering.</p>
              </div>
              <div className="specialty-feature">
                <h3>Career & Workforce Programs</h3>
                <p>Many community college students are career-focused. We partner with career services offices, workforce development programs, and job fairs to position your brand alongside professional goals.</p>
              </div>
              <div className="specialty-feature">
                <h3>Diverse Demographics</h3>
                <p>Community colleges are the most diverse institutions in higher education. Our campaigns are designed to speak to students of all ages, backgrounds, and life stages — from 18-year-olds to 40-year-old career changers.</p>
              </div>
              <div className="specialty-feature">
                <h3>High-Traffic Zone Marketing</h3>
                <p>Without dorms and Greek houses, campus common areas are everything. We identify and activate in the highest-traffic zones: student centers, libraries, testing centers, and financial aid offices.</p>
              </div>
              <div className="specialty-feature">
                <h3>Digital-First Integration</h3>
                <p>Commuter students live on their phones. We combine on-the-ground activations with digital campaigns targeting students within the campus geofence for maximum reach and frequency.</p>
              </div>
              <div className="specialty-feature">
                <h3>Multi-Campus Systems</h3>
                <p>Many community college systems have multiple campuses in a metro area. We coordinate campaigns across entire systems for maximum coverage and consistent brand presence.</p>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Services for Community Colleges</h2>
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
            <h2>Community Colleges We Serve</h2>
            <p className="section-subtitle">We run targeted marketing programs at {communityColleges.length} community colleges across the country.</p>
            <div className="schools-list">
              {communityColleges.slice(0, 50).map(({ school, state }) => (
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
            {communityColleges.length > 50 && (
              <p style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280' }}>
                And {communityColleges.length - 50} more community colleges.{' '}
                <Link to="/schools" style={{ color: '#1e40af' }}>Browse all schools</Link>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Reach Community College Students?</h2>
          <p>Let's build a campus marketing program designed for commuter campuses and career-focused students.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Campaign</Link>
        </div>
      </section>
    </>
  )
}
