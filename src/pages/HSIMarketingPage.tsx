import { Link } from 'react-router-dom'
import { getAllSchools, formatEnrollment, type School, type StateData } from '../data/schools'
import { services } from '../data/services'

// Known Hispanic-Serving Institutions from our schools list
// HSIs are institutions where Hispanic students make up 25%+ of enrollment
const hsiSchoolNames = [
  'The University of Texas at El Paso',
  'The University of Texas at San Antonio',
  'The University of Texas Rio Grande Valley',
  'Texas State University',
  'University of Houston',
  'University of Houston-Downtown',
  'Texas A&M University-Corpus Christi',
  'Texas A&M International University',
  'University of New Mexico',
  'New Mexico State University',
  'California State University-Los Angeles',
  'California State University-Fullerton',
  'California State University-Long Beach',
  'California State University-Northridge',
  'California State University-Dominguez Hills',
  'California State University-San Bernardino',
  'San Jose State University',
  'Florida International University',
  'University of Central Florida',
  'University of Arizona',
  'Arizona State University',
  'Northern Arizona University',
  'University of Nevada-Las Vegas',
  'City University of New York',
  'University of Illinois Chicago',
  'Montclair State University',
  'Rutgers University-Newark',
]

const allSchools = getAllSchools()
const hsiSchools: { school: School; state: StateData }[] = allSchools.filter(({ school }) =>
  hsiSchoolNames.some(name => school.name.includes(name) || name.includes(school.name))
)

// Also include schools in heavily Hispanic regions (TX, NM, AZ, Southern CA) that are community colleges
const additionalHSIs = allSchools.filter(({ school, state }) =>
  !hsiSchools.some(h => h.school.slug === school.slug) &&
  ['texas', 'new-mexico', 'arizona'].includes(state.slug) &&
  school.type === 'Public Community College'
).slice(0, 15)

const allHSIs = [...hsiSchools, ...additionalHSIs].sort((a, b) => b.school.enrollment - a.school.enrollment)

const relevantServices = services.filter(s =>
  ['campus-events', 'student-brand-ambassadors', 'social-media-campaigns', 'sampling-programs', 'orientation-week-activations'].includes(s.slug)
)

export default function HSIMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / HSI Marketing
          </nav>
          <h1>Hispanic-Serving Institution Marketing</h1>
          <p className="page-hero-subtitle">
            Bilingual campus marketing campaigns and culturally relevant brand activations for Hispanic-Serving Institutions across the country.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Why HSI Marketing Matters</h2>
            <p>
              Hispanic-Serving Institutions enroll more than two-thirds of all Hispanic college students in America. With over 550 federally designated HSIs nationwide, these campuses represent an enormous and growing market. Reaching Latinx students effectively requires bilingual messaging, cultural relevance, and an understanding of the unique campus dynamics at HSIs.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">{allHSIs.length}+</span>
                <span className="specialty-stat-label">HSIs We Serve</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">559</span>
                <span className="specialty-stat-label">HSIs Nationwide</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">4.7M</span>
                <span className="specialty-stat-label">Students at HSIs</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Our HSI Marketing Approach</h2>
            <div className="specialty-features">
              <div className="specialty-feature">
                <h3>Bilingual Campaigns</h3>
                <p>We create marketing materials and activations in both English and Spanish, ensuring your message reaches every student. Our bilingual ambassadors communicate naturally in both languages.</p>
              </div>
              <div className="specialty-feature">
                <h3>Cultural Event Integration</h3>
                <p>From Hispanic Heritage Month celebrations to Dia de los Muertos events, Cinco de Mayo activations, and Latin music festivals, we position your brand at the cultural moments that matter most.</p>
              </div>
              <div className="specialty-feature">
                <h3>Latinx Student Engagement</h3>
                <p>We partner with Latinx student organizations, multicultural centers, and affinity groups to create genuine connections. Our ambassadors are recruited from within these communities.</p>
              </div>
              <div className="specialty-feature">
                <h3>First-Generation Focus</h3>
                <p>Many HSI students are first-generation college attendees. We design campaigns that speak to their unique journey and connect your brand to their aspirations and achievements.</p>
              </div>
              <div className="specialty-feature">
                <h3>Family-Inclusive Marketing</h3>
                <p>Family plays a central role in many Latinx students' college experience. Our programs include family weekend activations, parent communications, and community-oriented events.</p>
              </div>
              <div className="specialty-feature">
                <h3>Regional Expertise</h3>
                <p>From the Texas-Mexico border to Southern California, South Florida to the Northeast, we understand the regional nuances of HSI campuses and tailor campaigns accordingly.</p>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Services for HSI Campuses</h2>
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
            <h2>Hispanic-Serving Institutions We Serve</h2>
            <p className="section-subtitle">We run campus marketing programs at HSIs across the Southwest, Southeast, and beyond.</p>
            <div className="schools-list">
              {allHSIs.map(({ school, state }) => (
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
          <h2>Ready to Reach HSI Students?</h2>
          <p>Let's build a bilingual, culturally relevant campus marketing program for Hispanic-Serving Institutions.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your HSI Campaign</Link>
        </div>
      </section>
    </>
  )
}
