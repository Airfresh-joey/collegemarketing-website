import { Link } from 'react-router-dom'
import { states, getTotalSchoolCount } from '../data/schools'

export default function SchoolsIndex() {
  const totalSchools = getTotalSchoolCount()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>College Campuses We Serve</h1>
          <p className="page-hero-subtitle">
            Campus marketing programs at {totalSchools}+ colleges and universities across {states.length} states
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="states-grid">
            {states.map(state => (
              <Link key={state.slug} to={`/schools/${state.slug}`} className="state-card">
                <h3>{state.name}</h3>
                <span className="state-count">{state.schools.length} {state.schools.length === 1 ? 'school' : 'schools'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Don't See Your Campus?</h2>
          <p>We're expanding to new schools every month. Let us know where you need coverage.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
