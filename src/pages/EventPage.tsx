import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getEventBySlug } from '../data/events'
import { getServiceBySlug } from '../data/services'

export default function EventPage() {
  const { eventSlug } = useParams<{ eventSlug: string }>()
  const event = eventSlug ? getEventBySlug(eventSlug) : undefined

  useEffect(() => {
    if (event) {
      document.title = event.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', event.metaDescription)
    }
  }, [event])

  if (!event) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Event Not Found</h1>
        <p>The event marketing page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    )
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <span>{event.title}</span>
          </nav>
          <h1>{event.title}</h1>
          <p className="page-hero-subtitle">{event.heroSubtitle}</p>
          <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Best Timing: {event.timing}</p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>The Opportunity</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{event.intro}</p>
            <div className="specialty-stats">
              {event.stats.map((stat, i) => (
                <div key={i} className="specialty-stat">
                  <span className="specialty-stat-number">{stat.number}</span>
                  <span className="specialty-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategies */}
          <div className="specialty-section">
            <h2>Proven Strategies</h2>
            <div className="specialty-features">
              {event.strategies.map((strategy, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{strategy.title}</h3>
                  <p>{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="specialty-section">
            <h2>Pro Tips for Success</h2>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              {event.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem' }}>✓</span>
                  <p style={{ margin: 0 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Services */}
          <div className="specialty-section">
            <h2>Recommended Services</h2>
            <div className="services-grid">
              {event.bestServices.map(slug => {
                const service = getServiceBySlug(slug)
                if (!service) return null
                return (
                  <Link to={`/services/${service.slug}`} key={service.slug} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="container">
          <h2>Ready to Own {event.title.replace(' Marketing', '')}?</h2>
          <p>Let's plan your campus activation strategy.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}
