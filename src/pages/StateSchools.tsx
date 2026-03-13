import { useParams, Link } from 'react-router-dom'
import { getStateBySlug } from '../data/schools'

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

  const publicSchools = state.schools.filter(s => s.type === 'public')
  const privateSchools = state.schools.filter(s => s.type === 'private')

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
          {publicSchools.length > 0 && (
            <>
              <h2 className="school-section-title">Public Universities</h2>
              <div className="schools-list">
                {publicSchools.map(school => (
                  <Link
                    key={school.slug}
                    to={`/schools/${state.slug}/${school.slug}`}
                    className="school-card"
                  >
                    <h3>{school.name}</h3>
                    <span className="school-city">{school.city}, {state.abbreviation}</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          {privateSchools.length > 0 && (
            <>
              <h2 className="school-section-title">Private Universities</h2>
              <div className="schools-list">
                {privateSchools.map(school => (
                  <Link
                    key={school.slug}
                    to={`/schools/${state.slug}/${school.slug}`}
                    className="school-card"
                  >
                    <h3>{school.name}</h3>
                    <span className="school-city">{school.city}, {state.abbreviation}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Start a Campaign in {state.name}</h2>
          <p>Reach college students across {state.name}'s top campuses</p>
          <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>
    </>
  )
}
