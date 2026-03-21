import { useParams, Link } from 'react-router-dom'
import { getResourceBySlug } from '../data/resources'
import { services } from '../data/services'
import { useEffect } from 'react'

export default function ResourcePage() {
  const { resourceSlug } = useParams<{ resourceSlug: string }>()
  const resource = resourceSlug ? getResourceBySlug(resourceSlug) : undefined

  useEffect(() => {
    if (resource) {
      document.title = resource.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', resource.metaDescription)
    }
  }, [resource])

  if (!resource) {
    return (
      <section className="page-content">
        <div className="container">
          <h1>Resource Not Found</h1>
          <p>The resource you're looking for doesn't exist. <Link to="/">Return to homepage</Link>.</p>
        </div>
      </section>
    )
  }

  const relatedServiceData = services.filter(s => resource.relatedServices.includes(s.slug))

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / Resources / {resource.title}
          </nav>
          <h1>{resource.title}</h1>
          <p className="page-hero-subtitle">{resource.heroSubtitle}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="blog-post-content">
            {resource.sections.map((section, i) => (
              <div key={i}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}
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
          <h2>Ready to Get Started?</h2>
          <p>Let's build a college marketing program that delivers real results for your brand.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
        </div>
      </section>
    </>
  )
}
