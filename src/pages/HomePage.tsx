import { Link } from 'react-router-dom'
import { states, getTotalSchoolCount } from '../data/schools'
import { services } from '../data/services'
import { blogPosts } from '../data/blogPosts'

export default function HomePage() {
  const totalSchools = getTotalSchoolCount()
  const featuredSchools = [
    'USC', 'UCLA', 'NYU', 'UT Austin', 'University of Michigan',
    'Penn State', 'Arizona State', 'Florida State', 'Ohio State', 'UC Berkeley'
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Campus Marketing That Actually Works</h1>
          <p className="hero-subtitle">
            Connect with college students through authentic peer-to-peer marketing campaigns
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Start a Campaign</Link>
            <Link to="/services" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-badge">
          <div className="badge-text">Active on {totalSchools}+ Campuses Nationwide</div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container">
          <p>Trusted by leading brands to reach college audiences</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>How We Help Brands Win on Campus</h2>
          <div className="services-grid">
            {services.map(service => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">{totalSchools}+</div>
              <div className="stat-label">College Campuses</div>
            </div>
            <div className="stat">
              <div className="stat-number">10</div>
              <div className="stat-label">Marketing Services</div>
            </div>
            <div className="stat">
              <div className="stat-number">{states.length}</div>
              <div className="stat-label">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      <section id="campuses" className="campuses">
        <div className="container">
          <h2>Where We Work</h2>
          <p className="section-subtitle">Active programs at top universities across {states.length} states</p>
          <div className="campus-grid">
            {featuredSchools.map(school => (
              <div key={school} className="campus-tag">{school}</div>
            ))}
            <Link to="/schools" className="campus-tag campus-tag-link">
              + {totalSchools - featuredSchools.length} More
            </Link>
          </div>
          <div className="section-cta">
            <Link to="/schools" className="btn btn-outline">Browse All Schools</Link>
          </div>
        </div>
      </section>

      <section className="blog-preview">
        <div className="container">
          <h2>Latest from the Blog</h2>
          <p className="section-subtitle">Insights and strategies for campus marketing success</p>
          <div className="blog-preview-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-preview-card" key={post.slug}>
                <div className="blog-preview-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-preview-link">Read More &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="blog-preview-cta">
            <Link to="/blog" className="btn btn-outline">View All Posts</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Reach College Students?</h2>
          <p>Let's build a campus marketing program that delivers results</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}
