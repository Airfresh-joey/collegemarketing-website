import { useParams, Link } from 'react-router-dom'
import { getSchoolBySlug, formatEnrollment } from '../data/schools'
import { services } from '../data/services'

export default function SchoolPage() {
  const { stateSlug, schoolSlug } = useParams<{ stateSlug: string; schoolSlug: string }>()
  const result = stateSlug && schoolSlug ? getSchoolBySlug(stateSlug, schoolSlug) : undefined

  if (!result) {
    return (
      <section className="page-content">
        <div className="container" style={{ textAlign: 'center', padding: '100px 2rem' }}>
          <h1>School Not Found</h1>
          <p>The school you're looking for doesn't exist.</p>
          <Link to="/schools" className="btn btn-primary">Browse All Schools</Link>
        </div>
      </section>
    )
  }

  const { state, school } = result
  const photoQuery = encodeURIComponent(`${school.name} ${school.city} university campus`)

  return (
    <>
      <section className="school-hero" style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(124, 58, 237, 0.9)), url(https://source.unsplash.com/1600x900/?${photoQuery})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &raquo; <Link to="/schools">Schools</Link> &raquo;{' '}
            <Link to={`/schools/${state.slug}`}>{state.name}</Link> &raquo; <span>{school.name}</span>
          </nav>
          <h1>Campus Marketing at {school.name}</h1>
          <p className="page-hero-subtitle">
            Reach {formatEnrollment(school.enrollment)}+ students with targeted campus marketing in {school.city}, {state.abbreviation}
          </p>
          <div className="school-hero-stats">
            <div className="school-hero-stat">
              <div className="school-hero-stat-number">{school.enrollment.toLocaleString()}</div>
              <div className="school-hero-stat-label">Students</div>
            </div>
            <div className="school-hero-stat">
              <div className="school-hero-stat-number">{school.type}</div>
              <div className="school-hero-stat-label">Institution Type</div>
            </div>
            <div className="school-hero-stat">
              <div className="school-hero-stat-number">{school.city}, {state.abbreviation}</div>
              <div className="school-hero-stat-label">Location</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="school-detail">
            <div className="school-info">
              <h2>Why {school.name}?</h2>
              <p>{school.description}</p>
              <p>
                Whether you're launching a new product, building brand awareness, or driving app downloads,
                College Marketing Co delivers authentic campus activations that resonate with {school.name} students.
              </p>

              <h2 className="school-section-title" style={{ marginTop: '3rem' }}>Our Services at {school.name}</h2>
              <div className="services-grid">
                {services.map(service => (
                  <Link
                    key={service.slug}
                    to={`/schools/${state.slug}/${school.slug}/${service.slug}`}
                    className="service-card"
                  >
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription.replace('on campus', `at ${school.name}`)}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="school-sidebar">
              <div className="sidebar-card">
                <h3>Campus Details</h3>
                <ul className="campus-details-list">
                  <li><strong>School:</strong> {school.name}</li>
                  <li><strong>Location:</strong> {school.city}, {state.abbreviation}</li>
                  <li><strong>Type:</strong> {school.type}</li>
                  <li><strong>Enrollment:</strong> {school.enrollment.toLocaleString()}</li>
                  <li><strong>State:</strong> <Link to={`/schools/${state.slug}`}>{state.name}</Link></li>
                  {school.website && (
                    <li><strong>Website:</strong> <a href={school.website} target="_blank" rel="noopener noreferrer">{school.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a></li>
                  )}
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>Start a Campaign</h3>
                <p>Ready to reach {formatEnrollment(school.enrollment)}+ students at {school.name}?</p>
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
          <h2>Explore More Campuses in {state.name}</h2>
          <p>We serve {state.schools.length} colleges and universities across {state.name}</p>
          <Link to={`/schools/${state.slug}`} className="btn btn-primary btn-lg">
            View All {state.name} Schools
          </Link>
        </div>
      </section>
    </>
  )
}
