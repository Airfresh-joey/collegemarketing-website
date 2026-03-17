import { Link } from 'react-router-dom'

interface CaseStudy {
  slug: string
  title: string
  client: string
  region: string
  service: string
  serviceSlug: string
  imageQuery: string
  challenge: string
  solution: string
  results: string[]
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'move-in-day-sampling-big-ten',
    title: 'Move-In Day Sampling Blitz at a Big Ten University',
    client: 'Leading Energy Drink Brand',
    region: 'Big Ten Conference',
    service: 'Move-In Day Programs',
    serviceSlug: 'move-in-day-programs',
    imageQuery: 'college move in day dorm students',
    challenge:
      'The brand needed to reach 8,000+ incoming freshmen during a chaotic 3-day move-in window. Previous sampling efforts at this campus had low engagement because students were overwhelmed and parents were the primary decision-makers during move-in.',
    solution:
      'We deployed a 25-person street team with branded hydration stations positioned at every residence hall entrance. Ambassadors handed out chilled drinks with welcome cards containing a QR code for a semester-long discount. We also partnered with the university housing office to include product samples in official welcome bags distributed at check-in.',
    results: [
      '12,400 samples distributed across 3 days',
      '68% QR code scan rate (vs. 12% industry average)',
      '34% redemption rate on semester discount within 30 days',
      '2.1M social media impressions from student posts',
      '4.8x ROI on campaign spend',
    ],
  },
  {
    slug: 'greek-life-ambassador-program',
    title: 'Greek Life Brand Ambassador Program',
    client: 'National Snack Food Company',
    region: 'SEC Conference',
    service: 'Greek Life Marketing',
    serviceSlug: 'greek-life-marketing',
    imageQuery: 'college fraternity sorority greek life campus',
    challenge:
      'The brand wanted to build long-term awareness among influential campus social groups but struggled to break into tightly-knit Greek organizations. Previous direct marketing efforts felt inauthentic and were rejected by chapter leadership.',
    solution:
      'We recruited 16 brand ambassadors across 8 fraternity and sorority chapters at 4 SEC schools. Each ambassador hosted monthly chapter tastings, integrated the product into philanthropy events, and created authentic social content. We provided each chapter with branded party supplies and sponsored two mixer events per semester.',
    results: [
      '16 active ambassadors across 8 Greek chapters',
      '48 chapter events featuring the product over one semester',
      '156% increase in brand awareness among Greek-affiliated students',
      '890+ pieces of organic UGC content created',
      '22% sales lift at nearby retail locations during campaign period',
    ],
  },
  {
    slug: 'game-day-activation-sec',
    title: 'Game Day Tailgate Activation at an SEC Powerhouse',
    client: 'Premium Wireless Headphone Brand',
    region: 'SEC Conference',
    service: 'Game Day Marketing',
    serviceSlug: 'game-day-marketing',
    imageQuery: 'college football tailgate gameday fans',
    challenge:
      'The brand wanted to reach the 18-24 demographic in a high-energy environment but had no presence in the college sports space. Competing audio brands had already locked up official university sponsorships, limiting traditional partnership opportunities.',
    solution:
      'We created a "Sound Zone" activation in the main tailgate area for 6 home games. The setup included a DJ booth, product demo stations where fans could test headphones with game-day playlists, and a photo booth with branded props. Student ambassadors roamed the tailgate area offering on-the-spot product trials with an exclusive game-day discount code.',
    results: [
      '4,200+ product demos across 6 game days',
      '1,800 discount codes distributed with 28% conversion rate',
      '3.6M social impressions from branded photo booth content',
      'Named "Best Tailgate Activation" by campus newspaper',
      '310% increase in brand consideration among attendees (post-survey)',
    ],
  },
  {
    slug: 'campus-street-team-app-launch',
    title: 'Campus Street Team for Fintech App Launch',
    client: 'Emerging Student Finance App',
    region: 'PAC-12 Conference',
    service: 'Street Teams',
    serviceSlug: 'street-teams',
    imageQuery: 'college campus students walking quad',
    challenge:
      'A student-focused fintech app needed to acquire 10,000 new users across 5 West Coast campuses in 6 weeks. Digital-only acquisition costs had risen to $14 per install, making the growth targets economically unsustainable without a ground game.',
    solution:
      'We deployed 10-person street teams on each of the 5 target campuses, focusing on library entrances, dining halls, and student union buildings during peak hours. Teams offered a free coffee voucher for app downloads and used tablet demos to walk students through the signup process. We also placed branded signage at 200+ high-visibility campus locations.',
    results: [
      '14,200 app installs in 6 weeks (142% of goal)',
      'Cost per install reduced to $3.80 (73% lower than digital-only)',
      '62% Day-30 retention rate (vs. 18% from digital acquisition)',
      '8,400 coffee vouchers redeemed at partnered campus cafes',
      'Expanded to 12 additional campuses based on pilot results',
    ],
  },
  {
    slug: 'spring-break-sampling-program',
    title: 'Spring Break Sunscreen Sampling Program',
    client: 'Major Skincare Brand',
    region: 'Multi-Region (Southeast & Southwest)',
    service: 'Sampling Programs',
    serviceSlug: 'sampling-programs',
    imageQuery: 'college spring break beach students sunscreen',
    challenge:
      'The brand wanted to reposition its sunscreen line as a must-have for college students, a demographic that historically under-indexes on sun protection product usage. They needed a high-impact sampling moment tied to when sunscreen is top-of-mind.',
    solution:
      'We executed a 2-week sampling campaign across 8 spring break hotspot campuses in Florida, Texas, Arizona, and Southern California. Teams set up branded sun stations near campus pools, rec centers, and outdoor hangout spots the week before spring break. Each sample kit included travel-size sunscreen, a branded koozie, and a Spotify playlist card. We partnered with campus recreation departments for co-branded messaging.',
    results: [
      '28,000 sample kits distributed across 8 campuses',
      '41% of recipients followed the brand on Instagram (tracked via unique QR)',
      '72% of surveyed students said they packed the sample for their trip',
      '19% purchase conversion within 60 days at nearby retail',
      'Campaign content generated 1.4M organic TikTok views',
    ],
  },
  {
    slug: 'orientation-week-product-launch',
    title: 'Orientation Week New Product Launch',
    client: 'Leading Protein Bar Brand',
    region: 'Big 12 Conference',
    service: 'Orientation Week Activations',
    serviceSlug: 'orientation-week-activations',
    imageQuery: 'college orientation week freshmen welcome',
    challenge:
      'The brand was launching a new flavor and needed to generate maximum trial and buzz among incoming freshmen. With over 60 vendors competing for attention at the campus activities fair, they needed a standout activation that would cut through the noise.',
    solution:
      'We designed a "Fuel Your Future" activation booth that combined product sampling with a fun campus survival quiz game. Students who completed the quiz received a free sample pack and a branded reusable water bottle. We also placed branded banners along the freshman campus tour route, staffed welcome tents at every dorm cluster, and ran a social media contest where students could win a semester supply by posting their orientation experience.',
    results: [
      '6,800 sample packs distributed during orientation week',
      '2,100 social media contest entries in 5 days',
      'Voted #1 booth at the campus activities fair by student government',
      '88% positive taste rating on new flavor (survey data)',
      '45% repeat purchase rate at campus convenience stores within first month',
    ],
  },
]

export { caseStudies }

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p className="page-hero-subtitle">
            Real results from real campus marketing campaigns. See how we help brands win with college students.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <div key={study.slug} className="case-study-card">
                <div
                  className="case-study-image"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${encodeURIComponent(study.imageQuery)}/800/400)`,
                  }}
                >
                  <div className="case-study-overlay">
                    <span className="case-study-tag">{study.service}</span>
                  </div>
                </div>
                <div className="case-study-content">
                  <div className="case-study-meta">
                    <span className="case-study-client">{study.client}</span>
                    <span className="case-study-region">{study.region}</span>
                  </div>
                  <h3>{study.title}</h3>

                  <div className="case-study-section">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="case-study-section">
                    <h4>Solution</h4>
                    <p>{study.solution}</p>
                  </div>

                  <div className="case-study-section">
                    <h4>Results</h4>
                    <ul className="case-study-results">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/services/${study.serviceSlug}`} className="btn btn-outline case-study-btn">
                    Learn About {study.service}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>Ready to Be Our Next Success Story?</h2>
          <p>Let's build a campus marketing campaign that delivers real, measurable results.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Campaign</Link>
        </div>
      </section>
    </>
  )
}
