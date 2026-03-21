import { useParams, Link } from 'react-router-dom'
import { getCityBySlug, getSchoolsInCity } from '../data/cities'
import { services } from '../data/services'
import { useEffect } from 'react'

export default function CityMarketingPage() {
  const { citySlug } = useParams<{ citySlug: string }>()
  const city = citySlug ? getCityBySlug(citySlug) : undefined

  useEffect(() => {
    if (city) {
      document.title = city.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', city.metaDescription)
    }
  }, [city])

  if (!city) {
    return (
      <section className="page-content">
        <div className="container">
          <h1>City Not Found</h1>
          <p>The city you're looking for doesn't exist. <Link to="/schools">Browse all schools</Link>.</p>
        </div>
      </section>
    )
  }

  const localSchools = getSchoolsInCity(city.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/schools">Schools</Link> / {city.city}
          </nav>
          <h1>College Marketing in {city.city}</h1>
          <p className="page-hero-subtitle">{city.heroSubtitle}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Campus Marketing in {city.city}</h2>
            <p>{city.intro}</p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">{city.studentPopulation}</span>
                <span className="specialty-stat-label">College Students</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">{city.schoolCount}+</span>
                <span className="specialty-stat-label">Colleges & Universities</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">10</span>
                <span className="specialty-stat-label">Services We Offer</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Top Schools We Serve in {city.city}</h2>
            <div className="specialty-features">
              {city.topSchools.map((school, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{school}</h3>
                  <p>Full-service campus marketing programs including student ambassadors, sampling, events, and social media campaigns.</p>
                </div>
              ))}
            </div>
          </div>

          {localSchools.length > 0 && (
            <div className="specialty-section">
              <h2>Browse {city.city} Schools</h2>
              <div className="services-grid">
                {localSchools.map(school => (
                  <Link key={school.slug} to={`/schools/${school.stateSlug}/${school.slug}`} className="service-card">
                    <h3>{school.name}</h3>
                    <p>View campus marketing programs available at {school.name}.</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="specialty-section">
            <h2>{city.city} Campus Marketing Neighborhoods</h2>
            <p className="section-subtitle">We activate in every college neighborhood across {city.city}.</p>
            <div className="conference-list">
              {city.neighborhoods.map(n => (
                <div key={n} className="conference-card">
                  <h3>{n}</h3>
                  <p>Campus marketing activations in {n}, {city.city}.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Our {city.city} Campus Marketing Services</h2>
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

          <div className="specialty-section">
            <h2>Why {city.city}?</h2>
            <p><strong>{city.keyFact}.</strong> This makes {city.city} one of the most important college markets in the country for brands looking to connect with Gen Z students. Our local team knows the campuses, the culture, and the best ways to reach students in every corner of the metro area.</p>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Launch in {city.city}?</h2>
          <p>Let's build a campus marketing program that reaches {city.city}'s {city.studentPopulation} college students.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started in {city.city}</Link>
        </div>
      </section>
    </>
  )
}
