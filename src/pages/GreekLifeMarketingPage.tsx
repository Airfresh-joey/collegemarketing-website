import { Link } from 'react-router-dom'
import { services } from '../data/services'

const relevantServices = services.filter(s =>
  ['greek-life-marketing', 'campus-events', 'student-brand-ambassadors', 'sampling-programs', 'social-media-campaigns'].includes(s.slug)
)

const activationTypes = [
  {
    title: 'Chapter Sponsorships',
    description: 'Sponsor fraternity and sorority chapters for an entire semester. Your brand becomes the go-to for chapter events, social functions, and philanthropy activities — building deep loyalty with the most influential students on campus.',
  },
  {
    title: 'Rush Week & Recruitment',
    description: 'Rush week is the highest-energy, highest-visibility period for Greek organizations. We produce branded activations at rush events, sponsor recruitment parties, and distribute product samples to the hundreds of students going through recruitment.',
  },
  {
    title: 'Philanthropy Event Partnerships',
    description: 'Every Greek chapter hosts philanthropy events that draw massive campus attendance. We help brands sponsor these feel-good events, associating your product with charitable causes that students care about.',
  },
  {
    title: 'Mixer & Social Event Sponsorships',
    description: 'Greek socials and mixers are the premier social events on campus. We integrate your brand into these events through product placement, branded supplies, photo ops, and experiential activations.',
  },
  {
    title: 'Greek House Sampling',
    description: 'Fraternity and sorority houses are communal living spaces where products get shared, discussed, and adopted organically. We run targeted sampling programs that get your product into Greek houses where it becomes part of daily life.',
  },
  {
    title: 'Greek Influencer Programs',
    description: 'Greek leaders are campus tastemakers with large social followings. Our Greek influencer ambassador programs pair your brand with chapter presidents, social chairs, and Greek council officers who set trends on campus.',
  },
]

export default function GreekLifeMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / Greek Life Marketing
          </nav>
          <h1>Greek Life Marketing</h1>
          <p className="page-hero-subtitle">
            Fraternity and sorority partnerships that tap into the most connected, influential student networks on campus. Rush week, philanthropy events, chapter activations, and more.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Why Greek Life Is Your Biggest Campus Marketing Opportunity</h2>
            <p>
              Greek-affiliated students are the most socially connected, brand-conscious, and influential consumers on any college campus. They organize the biggest events, set campus trends, and have spending power that significantly exceeds the average college student. With over 750,000 students in fraternities and sororities nationwide, Greek life represents a concentrated, high-value audience that drives word-of-mouth at scale.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">750k+</span>
                <span className="specialty-stat-label">Greek-Affiliated Students</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">9,000+</span>
                <span className="specialty-stat-label">Chapters Nationwide</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">3x</span>
                <span className="specialty-stat-label">Higher Brand Recall</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Greek Life Activation Types</h2>
            <div className="specialty-features">
              {activationTypes.map((activation, i) => (
                <div key={i} className="specialty-feature">
                  <h3>{activation.title}</h3>
                  <p>{activation.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specialty-section">
            <h2>The Greek Calendar: Your Year-Round Playbook</h2>
            <div className="greek-calendar">
              <div className="calendar-item">
                <h3>August - September</h3>
                <p><strong>Fall Rush / Recruitment</strong> — The highest-energy period. Hundreds of students attend recruitment events daily. Your brand gets maximum visibility.</p>
              </div>
              <div className="calendar-item">
                <h3>October - November</h3>
                <p><strong>Homecoming & Philanthropy Season</strong> — Greek chapters lead homecoming activities and host major philanthropic events with campus-wide attendance.</p>
              </div>
              <div className="calendar-item">
                <h3>January - February</h3>
                <p><strong>Spring Rush & Formal Season</strong> — Spring recruitment brings new members while formal season means high-end events perfect for premium brand activations.</p>
              </div>
              <div className="calendar-item">
                <h3>March - April</h3>
                <p><strong>Greek Week & Spring Events</strong> — Greek Week competitions, spring philanthropy events, and end-of-year celebrations create nonstop activation opportunities.</p>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Services for Greek Life Marketing</h2>
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
          <h2>Ready to Activate Greek Life?</h2>
          <p>Let's build fraternity and sorority partnerships that turn campus tastemakers into your biggest brand advocates.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Greek Life Campaign</Link>
        </div>
      </section>
    </>
  )
}
