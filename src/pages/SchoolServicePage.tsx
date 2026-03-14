import { useParams, Link } from 'react-router-dom'
import { getSchoolBySlug, formatEnrollment } from '../data/schools'
import { getServiceBySlug, services } from '../data/services'

export default function SchoolServicePage() {
  const { stateSlug, schoolSlug, serviceSlug } = useParams<{
    stateSlug: string
    schoolSlug: string
    serviceSlug: string
  }>()

  const schoolResult = stateSlug && schoolSlug ? getSchoolBySlug(stateSlug, schoolSlug) : undefined
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined

  if (!schoolResult || !service) {
    return (
      <section className="page-content">
        <div className="container" style={{ textAlign: 'center', padding: '100px 2rem' }}>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/schools" className="btn btn-primary">Browse All Schools</Link>
        </div>
      </section>
    )
  }

  const { state, school } = schoolResult
  const otherServices = services.filter(s => s.slug !== service.slug)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &raquo;{' '}
            <Link to="/schools">Schools</Link> &raquo;{' '}
            <Link to={`/schools/${state.slug}`}>{state.name}</Link> &raquo;{' '}
            <Link to={`/schools/${state.slug}/${school.slug}`}>{school.name}</Link> &raquo;{' '}
            <span>{service.title}</span>
          </nav>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{service.icon}</div>
          <h1>{service.title} at {school.name}</h1>
          <p className="page-hero-subtitle">
            {service.shortDescription} &mdash; targeting {formatEnrollment(school.enrollment)}+ students in {school.city}, {state.abbreviation}
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="school-detail">
            <div className="school-info">
              <h2>{service.title} for {school.name}</h2>
              <p>
                {school.name} in {school.city}, {state.abbreviation} has {school.enrollment.toLocaleString()} students,
                making it a prime campus for {service.title.toLowerCase()}. Our local team understands the unique
                campus culture and student demographics at {school.name}, ensuring every campaign
                is tailored for maximum impact.
              </p>

              <h2 className="school-section-title" style={{ marginTop: '2rem' }}>What's Included</h2>
              <div className="features-grid">
                {service.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <span className="feature-check">&#10003;</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="school-section-title" style={{ marginTop: '3rem' }}>Why {school.name} for {service.title}?</h2>
              <p>
                As a {school.type.toLowerCase()} with {school.enrollment.toLocaleString()} students,
                {school.name} offers exceptional reach and engagement potential. The {school.city} campus
                has vibrant student life, high foot traffic areas, and engaged student organizations
                that amplify every marketing touchpoint. Our {service.title.toLowerCase()} programs
                at {school.name} consistently deliver strong ROI for brands targeting the college demographic.
              </p>

              <h2 className="school-section-title" style={{ marginTop: '3rem' }}>Other Services at {school.name}</h2>
              <div className="services-grid">
                {otherServices.slice(0, 4).map(s => (
                  <Link
                    key={s.slug}
                    to={`/schools/${state.slug}/${school.slug}/${s.slug}`}
                    className="service-card"
                  >
                    <div className="service-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.shortDescription.substring(0, 80)}...</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="school-sidebar">
              <div className="sidebar-card">
                <h3>Campus Details</h3>
                <ul className="campus-details-list">
                  <li><strong>School:</strong> <Link to={`/schools/${state.slug}/${school.slug}`}>{school.name}</Link></li>
                  <li><strong>Location:</strong> {school.city}, {state.abbreviation}</li>
                  <li><strong>Type:</strong> {school.type}</li>
                  <li><strong>Enrollment:</strong> {school.enrollment.toLocaleString()}</li>
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>{service.cta}</h3>
                <p>Launch {service.title.toLowerCase()} at {school.name} today</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>{service.cta} at {school.name}</h2>
          <p>Reach {formatEnrollment(school.enrollment)}+ students with targeted {service.title.toLowerCase()}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}
