import { useParams, Link } from 'react-router-dom'
import { getStateGuideBySlug, getStateSchoolCount } from '../data/stateGuides'
import { services } from '../data/services'
import { useEffect } from 'react'

export default function StateGuidePage() {
  const { guideSlug } = useParams<{ guideSlug: string }>()
  const guide = guideSlug ? getStateGuideBySlug(guideSlug) : undefined

  useEffect(() => {
    if (guide) {
      document.title = guide.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', guide.metaDescription)
    }
  }, [guide])

  if (!guide) {
    return (
      <section className="page-content">
        <div className="container">
          <h1>Guide Not Found</h1>
          <p>The state guide you're looking for doesn't exist. <Link to="/schools">Browse all states</Link>.</p>
        </div>
      </section>
    )
  }

  const schoolCount = getStateSchoolCount(guide.stateSlug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/schools">Schools</Link> / {guide.state} Guide
          </nav>
          <h1>College Marketing in {guide.state}</h1>
          <p className="page-hero-subtitle">{guide.heroSubtitle}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>{guide.state} College Market Overview</h2>
            <p>{guide.overview}</p>
            <div className="specialty-stats">
              {guide.keyStats.map((stat, i) => (
                <div key={i} className="specialty-stat">
                  <span className="specialty-stat-number">{stat.number}</span>
                  <span className="specialty-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Flagship Schools</h2>
            <div className="services-grid">
              {guide.flagshipSchools.map(school => (
                <div key={school} className="service-card">
                  <h3>{school}</h3>
                  <p>Full-service campus marketing available at {school}.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Marketing Tips for {guide.state}</h2>
            <div className="specialty-features">
              {guide.marketingTips.map((tip, i) => (
                <div key={i} className="specialty-feature">
                  <h3>Tip {i + 1}</h3>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Top {guide.state} College Cities</h2>
            <div className="conference-list">
              {guide.topCities.map(city => (
                <div key={city} className="conference-card">
                  <h3>{city}</h3>
                  <p>Campus marketing activations across {city}, {guide.state}.</p>
                </div>
              ))}
            </div>
          </div>

          {schoolCount > 0 && (
            <div className="specialty-section">
              <h2>Browse {guide.state} Schools ({schoolCount})</h2>
              <p>View all {schoolCount} schools we serve in {guide.state}.</p>
              <Link to={`/schools/${guide.stateSlug}`} className="btn btn-primary">View All {guide.state} Schools</Link>
            </div>
          )}

          <div className="specialty-section">
            <h2>Services Available in {guide.state}</h2>
            <div className="services-grid">
              {services.slice(0, 6).map(service => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Launch in {guide.state}?</h2>
          <p>Let's build a campus marketing program across {guide.state}'s top colleges and universities.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started in {guide.state}</Link>
        </div>
      </section>
    </>
  )
}
