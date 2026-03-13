import { useParams, Link } from 'react-router-dom'
import { getSchoolBySlug } from '../data/schools'

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

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> &raquo; <Link to="/schools">Schools</Link> &raquo;{' '}
            <Link to={`/schools/${state.slug}`}>{state.name}</Link> &raquo; <span>{school.name}</span>
          </nav>
          <h1>Campus Marketing at {school.name}</h1>
          <p className="page-hero-subtitle">
            Student brand ambassadors, social media campaigns, and experiential marketing at {school.name} in {school.city}, {state.abbreviation}
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="school-detail">
            <div className="school-info">
              <h2>Marketing Services at {school.name}</h2>
              <p>
                College Marketing Co partners with student ambassadors at {school.name} to deliver
                authentic campus marketing campaigns. Our {school.city}-based team understands the
                unique culture and student community at {school.name}.
              </p>

              <div className="services-grid" style={{ marginTop: '2rem' }}>
                <Link to="/services/student-brand-ambassadors" className="service-card">
                  <div className="service-icon">👥</div>
                  <h3>Student Brand Ambassadors</h3>
                  <p>Recruit passionate {school.name} students to authentically represent your brand on campus</p>
                </Link>
                <Link to="/services/social-media-campaigns" className="service-card">
                  <div className="service-icon">📱</div>
                  <h3>Social Media Campaigns</h3>
                  <p>Student-led content creation targeting the {school.name} community</p>
                </Link>
                <Link to="/services/campus-events" className="service-card">
                  <div className="service-icon">🎉</div>
                  <h3>Campus Events</h3>
                  <p>Experiential activations and pop-ups at {school.name}</p>
                </Link>
                <Link to="/services/sampling-programs" className="service-card">
                  <div className="service-icon">🎯</div>
                  <h3>Sampling Programs</h3>
                  <p>Strategic product distribution across the {school.name} campus</p>
                </Link>
              </div>
            </div>

            <div className="school-sidebar">
              <div className="sidebar-card">
                <h3>Campus Details</h3>
                <ul className="campus-details-list">
                  <li><strong>Location:</strong> {school.city}, {state.abbreviation}</li>
                  <li><strong>Type:</strong> {school.type === 'public' ? 'Public University' : 'Private University'}</li>
                  <li><strong>State:</strong> <Link to={`/schools/${state.slug}`}>{state.name}</Link></li>
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>Start a Campaign</h3>
                <p>Ready to reach students at {school.name}?</p>
                <a href="mailto:hello@collegemarketing.co" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Contact Us
                </a>
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
