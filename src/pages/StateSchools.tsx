import { useParams, Link } from 'react-router-dom'
import { getStateBySlug, formatEnrollment } from '../data/schools'

export default function StateSchools() {
  const { stateSlug } = useParams<{ stateSlug: string }>()
  const state = stateSlug ? getStateBySlug(stateSlug) : undefined

  if (!state) {
    return (
      <section className="page-content">
        <div className="container" style={{ textAlign: 'center', padding: '100px 2rem' }}>
          <h1>State Not Found</h1>
          <p>The state you're looking for doesn't exist.</p>
          <Link to="/schools" className="btn btn-primary">Browse All States</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &raquo; <Link to="/schools">Schools</Link> &raquo; <span>{state.name}</span>
          </nav>
          <h1>College Marketing in {state.name}</h1>
          <p className="page-hero-subtitle">
            Campus marketing programs at {state.schools.length} colleges and universities in {state.name}
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="schools-list">
            {state.schools.map(school => (
              <Link
                key={school.slug}
                to={`/schools/${state.slug}/${school.slug}`}
                className="school-card school-card-with-image"
              >
                <img
                  src={`https://picsum.photos/seed/${encodeURIComponent(school.name + '-' + school.city)}/400/300`}
                  alt={`${school.name} campus`}
                  className="school-card-image"
                  loading="lazy"
                />
                <div className="school-card-body">
                  <div>
                    <h3>{school.name}</h3>
                    <span className="school-city">{school.city}, {state.abbreviation}</span>
                  </div>
                  <div className="school-card-meta">
                    <span className="school-card-type">{school.type}</span>
                    <span className="school-card-enrollment">{formatEnrollment(school.enrollment)} students</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Start a Campaign in {state.name}</h2>
          <p>Reach college students across {state.name}'s top campuses</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}
