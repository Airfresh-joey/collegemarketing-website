import { useParams, Link } from 'react-router-dom'
import { getIndustryBySlug } from '../data/industries'
import { services } from '../data/services'
import { useEffect } from 'react'

export default function IndustryPage() {
  const { industrySlug } = useParams<{ industrySlug: string }>()
  const industry = industrySlug ? getIndustryBySlug(industrySlug) : undefined

  useEffect(() => {
    if (industry) {
      document.title = industry.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', industry.metaDescription)
    }
  }, [industry])

  if (!industry) {
    return (
      <section className="page-content">
        <div className="container">
          <h1>Industry Not Found</h1>
          <p>The industry page you're looking for doesn't exist. <Link to="/services">Browse our services</Link>.</p>
        </div>
      </section>
    )
  }

  const relatedServiceData = services.filter(s => industry.relatedServices.includes(s.slug))

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / Industries / {industry.title}
          </nav>
          <h1>{industry.title}</h1>
          <p className="page-hero-subtitle">{industry.heroSubtitle}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>The Opportunity</h2>
            <p>{industry.intro}</p>
            <div className="specialty-stats">
              {industry.stats.map((stat, i) => (
                <div key={i} className="specialty-stat">
                  <span className="specialty-stat-number">{stat.number}</span>
                  <span className="specialty-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Key Challenges</h2>
            <div className="specialty-features">
              {industry.challenges.map((challenge, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Proven Campus Strategies</h2>
            <div className="specialty-features">
              {industry.strategies.map((strategy, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{strategy.title}</h3>
                  <p>{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Brands We Serve</h2>
            <p className="section-subtitle">We run campus marketing programs for leading brands in these categories:</p>
            <div className="conference-list">
              {industry.exampleBrands.map(brand => (
                <div key={brand} className="conference-card">
                  <h3>{brand}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Related Services</h2>
            <div className="services-grid">
              {relatedServiceData.map(service => (
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
          <h2>Ready to Launch Your Campus Program?</h2>
          <p>Let's build a college marketing program tailored to your industry and goals.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get a Custom Proposal</Link>
        </div>
      </section>
    </>
  )
}
