import { Link } from 'react-router-dom'
import { services } from '../data/services'

const relevantServices = services.filter(s =>
  ['game-day-marketing', 'campus-events', 'student-brand-ambassadors', 'sampling-programs', 'social-media-campaigns'].includes(s.slug)
)

const conferences = [
  {
    name: 'SEC',
    tagline: 'It Just Means More',
    description: 'The SEC is college football\'s biggest stage. From the Iron Bowl to the Egg Bowl, SEC game days draw 100,000+ fans who are fiercely loyal to their schools. We produce tailgate activations, stadium marketing, and game day experiences at every SEC venue.',
    schools: ['Alabama', 'Georgia', 'LSU', 'Texas', 'Florida', 'Tennessee', 'Auburn', 'Ole Miss', 'Texas A&M', 'South Carolina', 'Arkansas', 'Missouri', 'Mississippi State', 'Kentucky', 'Vanderbilt', 'Oklahoma'],
  },
  {
    name: 'Big Ten',
    tagline: 'Tradition & Scale',
    description: 'The Big Ten features the largest stadiums in the country and some of the most passionate fan bases. From the Big House in Ann Arbor to the Horseshoe in Columbus, Big Ten game days are massive marketing opportunities.',
    schools: ['Ohio State', 'Michigan', 'Penn State', 'USC', 'Oregon', 'Wisconsin', 'Iowa', 'Minnesota', 'Nebraska', 'Michigan State', 'Illinois', 'Purdue', 'Northwestern', 'Rutgers', 'Maryland', 'Indiana', 'UCLA', 'Washington'],
  },
  {
    name: 'Big 12',
    tagline: 'Rising Competition',
    description: 'The expanded Big 12 brings together passionate programs across the heartland and beyond. From Kansas basketball to BYU football, the Big 12 offers diverse sports marketing opportunities at campuses with devoted fan bases.',
    schools: ['Kansas', 'Oklahoma State', 'BYU', 'TCU', 'Texas Tech', 'Baylor', 'West Virginia', 'Cincinnati', 'UCF', 'Houston', 'Iowa State', 'Kansas State', 'Colorado', 'Arizona', 'Arizona State', 'Utah'],
  },
  {
    name: 'ACC',
    tagline: 'Basketball Country & Beyond',
    description: 'The ACC is synonymous with elite college basketball — Duke, UNC, and the greatest rivalry in sports. But ACC football, lacrosse, and soccer also draw massive audiences. We activate across every ACC sport and venue.',
    schools: ['Clemson', 'Florida State', 'Miami', 'NC State', 'Duke', 'North Carolina', 'Virginia', 'Louisville', 'Pitt', 'Syracuse', 'Wake Forest', 'Virginia Tech', 'Georgia Tech', 'Boston College', 'Notre Dame', 'SMU', 'Cal', 'Stanford'],
  },
  {
    name: 'PAC-12',
    tagline: 'West Coast Innovation',
    description: 'The rebuilding PAC-12 maintains passionate programs on the West Coast. From the Rose Bowl to the Coliseum, these campuses offer premium sports marketing environments in major media markets.',
    schools: ['Washington State', 'Oregon State'],
  },
]

const activationTypes = [
  {
    title: 'Tailgate Zone Activations',
    description: 'Set up branded experiences in the heart of tailgate territory. Product sampling, games, giveaways, photo ops, and interactive displays that draw thousands of fans before kickoff.',
  },
  {
    title: 'Stadium Concourse Marketing',
    description: 'Reach fans inside the venue with concourse pop-ups, sampling stations, and branded experiences during the game. Captive audience, peak excitement, maximum brand recall.',
  },
  {
    title: 'Game Day Street Teams',
    description: 'Deploy branded street teams across campus and the surrounding entertainment district on game day. Flyering, sampling, and guerrilla tactics that blanket the area with your message.',
  },
  {
    title: 'Watch Party Sponsorships',
    description: 'Not every fan makes it to the stadium. We sponsor and activate at campus sports bars, student union watch parties, and dorm viewing events for away games and marquee matchups.',
  },
  {
    title: 'Season-Long Programs',
    description: 'Build brand presence across an entire season — not just one game. Our season-long packages include every home game activation, digital campaigns during away weeks, and bowl game or tournament activations.',
  },
  {
    title: 'Multi-Sport Activations',
    description: 'Football isn\'t the only game in town. Basketball, baseball, soccer, volleyball, and more — we activate at sporting events year-round, reaching different audiences with each sport.',
  },
]

export default function CollegeSportsMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / College Sports Marketing
          </nav>
          <h1>College Sports Marketing</h1>
          <p className="page-hero-subtitle">
            Tailgate activations, game day marketing, and stadium experiences that reach fans at their most passionate. We activate at every major conference and venue in college sports.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="specialty-intro">
            <h2>Why College Sports Marketing Wins</h2>
            <p>
              College sports fans are among the most passionate, loyal consumers in America. Unlike pro sports, college athletics create a tribal identity that lasts a lifetime. Game day is the single highest-engagement moment on any campus — tens of thousands of fans converge for hours of tailgating, cheering, and celebrating. Brands that show up on game day become part of the experience, earning the kind of emotional association that no digital ad can deliver.
            </p>
            <div className="specialty-stats">
              <div className="specialty-stat">
                <span className="specialty-stat-number">49M</span>
                <span className="specialty-stat-label">College Football Attendance</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">$18B</span>
                <span className="specialty-stat-label">College Sports Revenue</span>
              </div>
              <div className="specialty-stat">
                <span className="specialty-stat-number">1,100+</span>
                <span className="specialty-stat-label">NCAA Member Schools</span>
              </div>
            </div>
          </div>

          <div className="specialty-section">
            <h2>Game Day Activation Types</h2>
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
            <h2>Marketing by Conference</h2>
            <p className="section-subtitle">We activate at schools across every major athletic conference.</p>
            <div className="conference-list">
              {conferences.map(conf => (
                <div key={conf.name} className="conference-card conference-card-detailed">
                  <div className="conference-header">
                    <h3>{conf.name}</h3>
                    <span className="conference-tagline">{conf.tagline}</span>
                  </div>
                  <p>{conf.description}</p>
                  <div className="conference-schools">
                    {conf.schools.map(school => (
                      <span key={school} className="conference-school-tag">{school}</span>
                    ))}
                  </div>
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
          <h2>Ready to Win on Game Day?</h2>
          <p>Let's build a college sports marketing program that puts your brand at the center of the action.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Game Day Campaign</Link>
        </div>
      </section>
    </>
  )
}
