import { Link } from 'react-router-dom'
import { services } from '../data/services'

const relevantServices = services.filter(s =>
  ['student-brand-ambassadors', 'social-media-campaigns', 'game-day-marketing', 'campus-events', 'sampling-programs'].includes(s.slug)
)

const nilBenefits = [
  {
    title: 'Authentic Student-Athlete Partnerships',
    description: 'College athletes are the most recognizable, trusted voices on campus. NIL deals let you partner directly with athletes who genuinely use and love your product — creating content that feels real because it is.',
  },
  {
    title: 'Hyperlocal Brand Impact',
    description: 'A starting quarterback or star point guard is a local celebrity with massive influence in their college town. NIL partnerships give your brand a powerful local spokesperson that drives foot traffic and awareness where it matters most.',
  },
  {
    title: 'Social Media Reach at Scale',
    description: 'Top college athletes have hundreds of thousands of social media followers — many with higher engagement rates than professional athletes. NIL content campaigns deliver massive impressions at a fraction of traditional influencer costs.',
  },
  {
    title: 'Game Day Integration',
    description: 'Combine NIL athlete partnerships with game day activations for maximum impact. Athletes can make appearances at your tailgate activation, sign autographs at your booth, or promote your brand during the week leading up to the big game.',
  },
  {
    title: 'Multi-Sport, Multi-Campus Campaigns',
    description: 'Don\'t limit yourself to football. Basketball players, swimmers, gymnasts, softball stars, and track athletes all have passionate followings. We help you build a roster of athlete partners across sports and schools.',
  },
  {
    title: 'Compliance & Coordination',
    description: 'NIL rules vary by state and conference. We handle the complexity so you don\'t have to — from contract structuring to compliance review, ensuring every partnership follows current regulations.',
  },
]

const conferences = [
  { name: 'SEC', schools: 'Alabama, LSU, Georgia, Texas, Florida, Tennessee, Auburn, Ole Miss, Arkansas, South Carolina' },
  { name: 'Big Ten', schools: 'Ohio State, Michigan, Penn State, USC, Oregon, Wisconsin, Iowa, Minnesota, Purdue, Illinois' },
  { name: 'Big 12', schools: 'Kansas, Oklahoma State, BYU, TCU, Texas Tech, Baylor, West Virginia, Cincinnati, UCF, Houston' },
  { name: 'ACC', schools: 'Clemson, Florida State, Miami, NC State, Duke, Virginia, Louisville, Pitt, Syracuse, Wake Forest' },
  { name: 'PAC-12', schools: 'Washington State, Oregon State, Cal, Stanford, Colorado, Arizona, Arizona State, Utah' },
]

export default function NILMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / NIL Marketing
          </nav>
          <h1>NIL Marketing for Brands</h1>
          <p className="page-hero-subtitle">
            Partner with college athletes through Name, Image, and Likeness deals. The most powerful way to reach college students through the voices they already trust.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>The NIL Opportunity</h2>
            <p>
              Since the NCAA's NIL policy change, college athletes can now earn money from their name, image, and likeness. This has created an entirely new marketing channel that sits at the intersection of influencer marketing, sports sponsorships, and campus marketing. College athletes are trusted, followed, and admired by their peers — making them the ultimate campus brand ambassadors. We help brands navigate the NIL landscape, identify the right athlete partners, and execute campaigns that drive real results.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">500k+</span>
                <span className="specialty-stat-label">NCAA Athletes Eligible</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">$1.3B</span>
                <span className="specialty-stat-label">NIL Market Size</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">50</span>
                <span className="specialty-stat-label">States with NIL Laws</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>How We Help Brands Win with NIL</h2>
            <div className="specialty-features">
              {nilBenefits.map((benefit, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>NIL Campaigns by Conference</h2>
            <p className="section-subtitle">We activate NIL partnerships at schools across every major conference.</p>
            <div className="conference-list">
              {conferences.map(conf => (
                <div key={conf.name} className="conference-card">
                  <h3>{conf.name}</h3>
                  <p>{conf.schools}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>Related Services</h2>
            <div className="services-grid">
              {relevantServices.map(service => (
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
          <h2>Ready to Launch an NIL Campaign?</h2>
          <p>Let's connect your brand with the college athletes who will move the needle on your campus.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your NIL Campaign</Link>
        </div>
      </section>
    </>
  )
}
