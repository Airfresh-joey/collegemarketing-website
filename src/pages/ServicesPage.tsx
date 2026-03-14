import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicesPage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()

  if (serviceSlug) {
    const service = services.find(s => s.slug === serviceSlug)
    if (!service) {
      return (
        <section className="page-content">
          <div className="container" style={{ textAlign: 'center', padding: '100px 2rem' }}>
            <h1>Service Not Found</h1>
            <p>The service you're looking for doesn't exist.</p>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </section>
      )
    }

    return (
      <>
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/services">Services</Link> &raquo; <span>{service.title}</span>
            </nav>
            <div className="service-icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h1>{service.title}</h1>
            <p className="page-hero-subtitle">{service.description}</p>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <h2 className="school-section-title">What's Included</h2>
            <div className="features-grid">
              {service.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-check">&#10003;</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <h2 className="school-section-title" style={{ marginTop: '3rem' }}>Other Services</h2>
            <div className="services-grid">
              {services.filter(s => s.slug !== service.slug).map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.shortDescription.substring(0, 100)}...</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="container">
            <h2>{service.cta}</h2>
            <p>Let's build a campus marketing program that delivers results</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Campus Marketing Services</h1>
          <p className="page-hero-subtitle">
            Full-service campus marketing solutions to connect your brand with college students
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Reach College Students?</h2>
          <p>Let's build a campus marketing program that delivers results</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}
