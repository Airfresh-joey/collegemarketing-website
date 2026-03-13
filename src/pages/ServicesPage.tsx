import { Link, useParams } from 'react-router-dom'

interface ServiceDetail {
  slug: string
  title: string
  icon: string
  description: string
  features: string[]
  cta: string
}

const services: ServiceDetail[] = [
  {
    slug: 'student-brand-ambassadors',
    title: 'Student Brand Ambassadors',
    icon: '👥',
    description: 'Recruit and manage passionate student advocates who authentically represent your brand on campus. Our ambassador programs leverage peer-to-peer influence to build genuine brand awareness and loyalty among college students.',
    features: [
      'Recruit top student talent at target campuses',
      'Train ambassadors on brand messaging and values',
      'Manage campaigns with real-time reporting',
      'Drive social media engagement and word-of-mouth',
      'Create authentic content from student perspectives',
      'Track ROI with detailed analytics dashboards',
    ],
    cta: 'Build Your Ambassador Team',
  },
  {
    slug: 'social-media-campaigns',
    title: 'Social Media Campaigns',
    icon: '📱',
    description: 'Student-led content creation and social amplification that resonates with college audiences. Our campaigns are designed by students, for students, ensuring authentic engagement across all major platforms.',
    features: [
      'Platform-specific content strategies (TikTok, Instagram, Snapchat)',
      'Student influencer partnerships and UGC campaigns',
      'Viral challenge and trend activation',
      'Campus-specific hashtag campaigns',
      'Performance tracking and optimization',
      'Real-time social listening and engagement',
    ],
    cta: 'Launch a Social Campaign',
  },
  {
    slug: 'campus-events',
    title: 'Campus Events',
    icon: '🎉',
    description: 'Experiential activations, pop-ups, and event staffing that create memorable brand experiences. From orientation week to homecoming, we produce events that students actually want to attend.',
    features: [
      'Custom event planning and production',
      'Pop-up experiences and brand activations',
      'Event staffing with trained student ambassadors',
      'Orientation week and welcome programs',
      'Homecoming and game day activations',
      'Spring break and finals week programming',
    ],
    cta: 'Plan Your Campus Event',
  },
  {
    slug: 'sampling-programs',
    title: 'Sampling Programs',
    icon: '🎯',
    description: 'Strategic product distribution and demos that drive trial and word-of-mouth. Our sampling programs are targeted to reach the right students at the right moments on campus.',
    features: [
      'High-traffic campus location identification',
      'Targeted distribution by demographic and interest',
      'Product demonstration and education',
      'Digital coupon and follow-up integration',
      'Feedback collection and consumer insights',
      'Multi-campus coordinated sampling tours',
    ],
    cta: 'Start Sampling on Campus',
  },
]

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
                  <p>{s.description.substring(0, 100)}...</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="container">
            <h2>{service.cta}</h2>
            <p>Let's build a campus marketing program that delivers results</p>
            <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">Get Started</a>
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
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Reach College Students?</h2>
          <p>Let's build a campus marketing program that delivers results</p>
          <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>
    </>
  )
}
