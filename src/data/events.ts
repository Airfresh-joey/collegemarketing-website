export interface EventPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  intro: string
  timing: string
  strategies: { title: string; description: string }[]
  stats: { number: string; label: string }[]
  bestServices: string[]
  tips: string[]
}

export const events: EventPage[] = [
  {
    slug: 'orientation-week-marketing',
    title: 'Orientation Week Marketing',
    metaTitle: 'Orientation Week Marketing | Campus Activations & College Brand Strategy',
    metaDescription:
      'Reach every incoming freshman during orientation week with targeted campus activations, welcome kits, and student brand ambassador programs. The #1 week to build brand loyalty on campus.',
    heroSubtitle: 'The most important week for new student marketing',
    intro:
      'Orientation week is the single most valuable window in the college marketing calendar. Incoming freshmen are actively searching for new brands, products, and services to adopt as they build their independent identities for the first time. With thousands of impressionable students concentrated on campus and eager to engage, your brand has an unmatched opportunity to make a lasting first impression. Companies that activate during orientation consistently see higher brand recall, stronger purchase intent, and deeper loyalty than any other campus marketing moment.',
    timing: 'August - September',
    strategies: [
      {
        title: 'Welcome Kit Sponsorships',
        description:
          'Partner with campus housing and orientation programs to include branded items in official welcome kits distributed to every incoming student. This guarantees 100% reach among the freshman class and positions your brand alongside trusted university resources.',
      },
      {
        title: 'Resource Fair Domination',
        description:
          'Secure premium booth placement at orientation resource fairs where students actively browse for new products and services. Interactive demos, giveaways, and sign-up incentives convert curious freshmen into loyal customers on the spot.',
      },
      {
        title: 'Ambassador-Led Campus Tours',
        description:
          'Deploy trained student brand ambassadors to integrate your brand into unofficial campus tours and social gatherings. Peer-to-peer recommendations during orientation carry exceptional credibility with new students navigating an unfamiliar environment.',
      },
      {
        title: 'Social Media Takeover Campaigns',
        description:
          'Launch hashtag campaigns and social media challenges timed to orientation week when freshmen are most active online sharing their new college experience. User-generated content from orientation drives organic reach well beyond campus boundaries.',
      },
    ],
    stats: [
      { number: '92%', label: 'of freshmen attend orientation events' },
      { number: '3.5x', label: 'higher brand recall vs. mid-semester' },
      { number: '68%', label: 'try new brands during orientation' },
    ],
    bestServices: [
      'orientation-week-activations',
      'student-brand-ambassadors',
      'sampling-programs',
      'tabling-programs',
    ],
    tips: [
      'Book campus space and permits at least 3 months in advance as orientation venues fill up fast.',
      'Coordinate with the university orientation office to align your activation with their official schedule.',
      'Focus on utility: items freshmen actually need (chargers, lanyards, water bottles) outperform pure swag.',
      'Capture email and social handles during activations to build a first-party student database from day one.',
      'Deploy bilingual ambassadors at diverse campuses to ensure inclusive engagement with all incoming students.',
    ],
  },
  {
    slug: 'homecoming-marketing',
    title: 'Homecoming Marketing',
    metaTitle: 'Homecoming Marketing | Alumni & Student Campus Activations',
    metaDescription:
      'Maximize brand exposure during homecoming weekend with activations that reach both current students and returning alumni. Tailgate marketing, game day events, and campus-wide promotions.',
    heroSubtitle: 'Alumni + students = maximum campus reach',
    intro:
      'Homecoming is one of the few campus events that brings together current students, alumni, faculty, and families in a single high-energy weekend. This unique audience crossover means your brand can reach multiple demographics simultaneously, from 18-year-old freshmen to 40-year-old alumni with significant purchasing power. The festive atmosphere, packed tailgates, and campus-wide celebrations create a receptive environment where consumers are relaxed, social, and open to brand engagement. Homecoming marketing campaigns regularly deliver the highest single-weekend ROI of any campus activation.',
    timing: 'September - November',
    strategies: [
      {
        title: 'Tailgate Zone Sponsorships',
        description:
          'Sponsor or create branded tailgate zones with games, music, and product sampling. Tailgates draw massive crowds hours before kickoff and offer extended dwell time that builds deep brand familiarity and positive associations.',
      },
      {
        title: 'Parade Float & Spirit Activations',
        description:
          'Integrate your brand into the homecoming parade and spirit competitions with sponsored floats, cheer stations, or school color giveaways. These high-visibility placements generate thousands of organic impressions from spectators lining the route.',
      },
      {
        title: 'Alumni-Student Bridge Campaigns',
        description:
          'Create experiences that connect alumni and current students around your brand, such as networking lounges or mentorship meetups. These activations generate exceptional goodwill and associate your brand with meaningful campus traditions.',
      },
      {
        title: 'Game Day Digital Integrations',
        description:
          'Run geo-targeted mobile ads, in-stadium screen placements, and app-based promotions that reach the entire homecoming crowd. Digital touchpoints complement on-the-ground activations and drive measurable online conversions.',
      },
    ],
    stats: [
      { number: '2x', label: 'the audience of a regular game day' },
      { number: '$420M', label: 'spent by fans on homecoming weekends annually' },
      { number: '85%', label: 'of alumni return for at least one homecoming' },
    ],
    bestServices: [
      'game-day-marketing',
      'campus-events',
      'street-teams',
      'sampling-programs',
    ],
    tips: [
      'Leverage school colors and mascots in your branding to feel authentic rather than intrusive.',
      'Plan alumni-specific offers (premium products, professional services) alongside student-focused promotions.',
      'Set up activations along the main walking routes between parking, tailgates, and the stadium.',
      'Capture content during homecoming for year-round social media use since the energy is unmatched.',
      'Partner with Greek organizations who often lead homecoming activities for built-in audience access.',
    ],
  },
  {
    slug: 'spring-break-marketing',
    title: 'Spring Break Marketing',
    metaTitle: 'Spring Break Marketing | College Travel & Lifestyle Brand Campaigns',
    metaDescription:
      'Reach college students during spring break with targeted marketing campaigns for travel, beverage, lifestyle, and entertainment brands. On-campus and destination activations.',
    heroSubtitle: "Travel, lifestyle, and party brands' biggest campus moment",
    intro:
      'Spring break is the defining cultural moment of the college experience, and brands that show up authentically during this period earn outsized loyalty from Gen Z consumers. Whether you activate on campus in the weeks leading up to break or at popular destinations, you are reaching students in peak social-sharing mode. Every spring break photo, story, and TikTok becomes a potential brand impression seen by hundreds of peers. For travel, beverage, fashion, suncare, and entertainment brands, spring break marketing delivers the highest social amplification rate of any college marketing moment.',
    timing: 'February - March',
    strategies: [
      {
        title: 'Pre-Break Campus Blitz',
        description:
          'Launch a two-week campus campaign before spring break with sampling, branded photo ops, and travel essentials giveaways. Students are buzzing with anticipation and highly receptive to brands that fuel their excitement.',
      },
      {
        title: 'Destination Brand Activations',
        description:
          'Set up branded experiences at top spring break destinations like South Padre, Panama City Beach, and Cancun. Beach lounges, pool parties, and pop-up shops immerse students in your brand during their most shareable moments.',
      },
      {
        title: 'Influencer & Ambassador Content Blitz',
        description:
          'Equip student brand ambassadors and micro-influencers with branded content kits to create and share spring break content. Authentic peer content outperforms traditional advertising by 4x during high-social-activity periods.',
      },
      {
        title: 'Spring Break Survival Kit Drops',
        description:
          'Distribute curated spring break kits containing your products alongside complementary items like sunscreen, reusable cups, and phone accessories. Bundled kits feel like gifts rather than ads and drive significant trial.',
      },
    ],
    stats: [
      { number: '89%', label: 'of students post spring break content on social media' },
      { number: '$4.8B', label: 'spent by college students on spring break travel' },
      { number: '74%', label: 'remember brands they interacted with during break' },
    ],
    bestServices: [
      'sampling-programs',
      'student-brand-ambassadors',
      'social-media-campaigns',
      'guerrilla-marketing',
    ],
    tips: [
      'Start campaigns 2-3 weeks before break when excitement peaks and students are still on campus.',
      'Prioritize Instagram, TikTok, and Snapchat content creation with branded hashtags and filters.',
      'Offer travel-relevant products and experiences that students will actually use during their trip.',
      'Create shareable moments with photo-worthy installations and branded backdrops.',
      'Track social mentions and UGC in real time so you can amplify the best-performing organic content.',
    ],
  },
  {
    slug: 'finals-week-marketing',
    title: 'Finals Week Marketing',
    metaTitle: 'Finals Week Marketing | Stress-Relief Campus Activations & Student Outreach',
    metaDescription:
      'Build genuine brand love during finals week with stress-relief activations, free food programs, study fuel sampling, and student wellness campaigns on college campuses.',
    heroSubtitle: 'Stress-relief activations that build brand love',
    intro:
      'Finals week is the highest-stress period of the academic calendar, and brands that provide genuine relief earn lasting gratitude and loyalty from students. When students are exhausted, anxious, and spending 12+ hours in the library, a well-timed snack delivery, study break activation, or wellness experience cuts through the noise unlike any other marketing moment. The emotional context of finals week creates powerful brand associations: students remember who helped them survive. This is a prime opportunity for food, beverage, wellness, and tech brands to build authentic connections.',
    timing: 'December & May',
    strategies: [
      {
        title: 'Library & Study Space Activations',
        description:
          'Set up branded study fuel stations in libraries and student centers with free snacks, coffee, energy drinks, and supplies. Students spending marathon study sessions are deeply grateful for sustenance and associate that positive emotion with your brand.',
      },
      {
        title: 'Stress-Relief Pop-Up Experiences',
        description:
          'Create pop-up wellness experiences featuring therapy dogs, massage chairs, meditation sessions, or art therapy. These high-demand activations generate massive lines, extensive social sharing, and powerful emotional brand connections.',
      },
      {
        title: 'Late-Night Fuel Deliveries',
        description:
          'Partner with campus organizations to deliver branded care packages to residence halls and study spaces during late-night study sessions. Door-to-door or floor-by-floor delivery ensures reach and creates surprise-and-delight moments.',
      },
      {
        title: 'Digital Study Tool Sponsorships',
        description:
          'Sponsor or provide free access to study tools, productivity apps, or streaming playlists during finals. Digital activations scale easily across multiple campuses and provide measurable engagement and download metrics.',
      },
    ],
    stats: [
      { number: '97%', label: 'of students report high stress during finals' },
      { number: '4.2x', label: 'higher brand favorability for finals week activators' },
      { number: '12hrs', label: 'average daily study time during finals week' },
    ],
    bestServices: [
      'sampling-programs',
      'campus-events',
      'dorm-storm-campaigns',
      'student-brand-ambassadors',
    ],
    tips: [
      'Keep activations low-key and supportive rather than loud or disruptive during study periods.',
      'Offer genuinely useful items: caffeine, snacks, earplugs, blue-light glasses, and charging cables.',
      'Time library activations for late afternoon and evening when foot traffic and stress levels peak.',
      'Use messaging that acknowledges the difficulty of finals rather than being overly cheerful.',
      'Run the same activation both semesters (December and May) to build a recognized campus tradition.',
    ],
  },
  {
    slug: 'welcome-week-marketing',
    title: 'Welcome Week Marketing',
    metaTitle: 'Welcome Week Marketing | First-Week Campus Activations for College Students',
    metaDescription:
      'Make a powerful first impression during welcome week with campus activations, product sampling, and student engagement campaigns that create lifelong brand connections with college freshmen.',
    heroSubtitle: 'First impressions that create lifelong brand connections',
    intro:
      'Welcome week, the first full week of classes, is when the entire student body is present, energized, and actively establishing their routines for the semester. Unlike orientation which targets freshmen, welcome week reaches all class years and is packed with university-sponsored activities, club fairs, and social events. Students are open to discovering new products, signing up for services, and forming habits they will maintain all semester long. Brands that activate during welcome week benefit from the highest campus foot traffic of the entire academic year.',
    timing: 'August - September',
    strategies: [
      {
        title: 'Club Fair & Activity Fair Sponsorships',
        description:
          'Sponsor or exhibit at the university activities fair where hundreds of student organizations recruit new members. Your brand benefits from the built-in foot traffic of students actively browsing booths and collecting free items.',
      },
      {
        title: 'First-Week Habit Campaigns',
        description:
          'Launch campaigns designed to embed your product or service into students\' weekly routines from day one. Free trial periods, subscription sign-ups, and "first week free" offers capitalize on the habit-forming nature of the semester start.',
      },
      {
        title: 'Campus-Wide Scavenger Hunts',
        description:
          'Organize branded scavenger hunts that send students exploring campus while engaging with your brand at multiple touchpoints. Gamified activations drive extended engagement time and create memorable, shareable experiences.',
      },
      {
        title: 'Welcome Concert & Event Sponsorships',
        description:
          'Sponsor the major welcome week concerts, movie nights, and social events that draw thousands of students. Stage branding, VIP experiences, and product integration put your brand at the center of the biggest social moments.',
      },
    ],
    stats: [
      { number: '95%', label: 'of students attend at least one welcome week event' },
      { number: '5x', label: 'more sign-ups compared to mid-semester campaigns' },
      { number: '78%', label: 'of semester-long habits form during the first week' },
    ],
    bestServices: [
      'campus-events',
      'tabling-programs',
      'sampling-programs',
      'social-media-campaigns',
    ],
    tips: [
      'Differentiate from orientation by targeting returning students, not just freshmen, with your messaging.',
      'Set up near dining halls and student unions during lunch hours for maximum traffic exposure.',
      'Offer semester-long incentives (subscriptions, loyalty cards) that extend engagement beyond the first week.',
      'Coordinate with student government and campus programming boards for co-branded activations.',
      'Collect data on class year and major to segment your follow-up marketing throughout the semester.',
    ],
  },
  {
    slug: 'graduation-season-marketing',
    title: 'Graduation Season Marketing',
    metaTitle: 'Graduation Season Marketing | Reach Graduating Seniors Entering the Workforce',
    metaDescription:
      'Target graduating college seniors with marketing campaigns for financial services, career platforms, automotive, and lifestyle brands. Capture the transition from student to professional.',
    heroSubtitle: 'Capture graduating seniors entering the workforce',
    intro:
      'Graduation season represents a unique marketing inflection point: the moment when college students transition into full-time professionals with real purchasing power. Graduating seniors are actively making major life decisions about banking, insurance, apartments, cars, professional wardrobes, and technology for the first time. Brands that reach students during this critical transition benefit from low competition and high intent, as graduates are actively searching for products and services to support their new lifestyles. The emotional weight of graduation also creates powerful brand association opportunities tied to achievement and new beginnings.',
    timing: 'April - June',
    strategies: [
      {
        title: 'Senior Send-Off Events',
        description:
          'Host or sponsor exclusive senior events like graduation galas, class dinners, and celebration parties. These intimate, milestone events foster deep emotional connections between your brand and the graduating class.',
      },
      {
        title: 'Graduation Gift & Bundle Programs',
        description:
          'Create curated "adulting starter kits" or graduation gift bundles featuring your products alongside complementary items. Position your brand as an essential part of the transition from college to the real world.',
      },
      {
        title: 'Career Launch Partnerships',
        description:
          'Partner with career services offices to offer graduating seniors professional resources, discounts on business essentials, or free trials of productivity tools. This positions your brand as a career ally during their most anxious job-search period.',
      },
      {
        title: 'Commencement Weekend Activations',
        description:
          'Activate near graduation ceremony venues where graduates and their families gather. Photo stations, branded celebration supplies, and family-friendly experiences reach both the graduate and the parents funding their next chapter.',
      },
    ],
    stats: [
      { number: '4M+', label: 'college students graduate annually in the US' },
      { number: '$55K', label: 'average starting salary for new graduates' },
      { number: '73%', label: 'of seniors switch primary bank within 6 months of graduating' },
    ],
    bestServices: [
      'campus-events',
      'student-brand-ambassadors',
      'sampling-programs',
      'digital-screen-advertising',
    ],
    tips: [
      'Focus messaging on empowerment and the exciting future ahead rather than nostalgia alone.',
      'Target financial services, career platforms, moving companies, and professional apparel as ideal verticals.',
      'Reach parents and family members at commencement events since they often fund post-grad purchases.',
      'Offer exclusive alumni discounts that extend brand engagement well beyond graduation day.',
      'Leverage LinkedIn and professional networks alongside Instagram for this older student demographic.',
    ],
  },
  {
    slug: 'back-to-school-marketing',
    title: 'Back to School Marketing',
    metaTitle: 'Back to School College Marketing | $80B+ Campus Spending Surge',
    metaDescription:
      'Capitalize on the massive back-to-school spending surge with college campus marketing campaigns. Reach students during peak purchasing season with targeted activations and sampling.',
    heroSubtitle: 'The $80B+ back-to-school spending surge',
    intro:
      'The back-to-school season is the second-largest spending period in the United States, trailing only the winter holidays, and college students represent a massive share of that spend. Students and their families invest heavily in electronics, dorm essentials, clothing, food, personal care, and subscriptions during the July through September window. Unlike K-12 back-to-school marketing, the college segment offers direct access to the consumer who is making independent purchasing decisions. Brands that establish presence during this spending surge gain a full academic year of loyalty from students who stick with the products they buy at the start of each school year.',
    timing: 'July - September',
    strategies: [
      {
        title: 'Move-In Day Activations',
        description:
          'Station your brand at residence hall move-in zones where students and parents are actively unpacking and setting up dorm rooms. Product sampling, free services, and helpful giveaways during this chaotic day earn enormous goodwill and immediate product adoption.',
      },
      {
        title: 'Dorm Essentials Partnerships',
        description:
          'Partner with campus bookstores, housing offices, and e-commerce platforms to position your product as a "dorm essential" on official shopping lists and recommendation guides. Inclusion on these lists drives significant purchase volume.',
      },
      {
        title: 'Campus Retail Pop-Up Shops',
        description:
          'Launch temporary branded retail experiences in high-traffic campus locations during the first two weeks of the semester. Pop-up shops create buzz, urgency, and a premium shopping experience that drives trial and immediate sales.',
      },
      {
        title: 'Digital Back-to-School Campaigns',
        description:
          'Run targeted digital campaigns on student-heavy platforms with back-to-school promotions, student discounts, and campus-specific offers. Geo-targeted ads around campuses during move-in capture students at peak purchase intent.',
      },
    ],
    stats: [
      { number: '$83.6B', label: 'total back-to-school and college spending' },
      { number: '$1,200', label: 'average per-student back-to-school spend' },
      { number: '60%', label: 'of purchases happen in the final 2 weeks before classes' },
    ],
    bestServices: [
      'move-in-day-programs',
      'sampling-programs',
      'dorm-storm-campaigns',
      'poster-and-bulletin-board-campaigns',
    ],
    tips: [
      'Start digital campaigns in July when students begin online shopping for dorm and school supplies.',
      'Focus on value messaging: student discounts, bundles, and BOGO offers resonate strongly during this period.',
      'Target both students and parents since parents fund a significant portion of back-to-school purchases.',
      'Prioritize move-in day and the first week of classes as the highest-converting in-person touchpoints.',
      'Create campus-specific promotions that reference the school by name for localized relevance.',
    ],
  },
  {
    slug: 'tailgate-and-game-day-marketing',
    title: 'Tailgate & Game Day Marketing',
    metaTitle: 'Tailgate & Game Day Marketing | College Sports Brand Activations',
    metaDescription:
      'Dominate game day with tailgate marketing activations, stadium sponsorships, and fan engagement campaigns. Reach passionate college sports fans at peak energy moments on campus.',
    heroSubtitle: 'Peak campus energy and maximum brand exposure',
    intro:
      'College game days generate the most intense concentration of energy, excitement, and social engagement on any campus. Tailgates start hours before kickoff and extend well after the final whistle, creating a massive window for brand interaction. Students, alumni, and fans are in a celebratory mindset, spending freely on food, beverages, apparel, and experiences. With 50,000+ fans at major programs and millions watching on TV, game day marketing delivers unmatched reach and emotional intensity that translates directly into brand awareness and affinity.',
    timing: 'August - March (Football & Basketball)',
    strategies: [
      {
        title: 'Branded Tailgate Experiences',
        description:
          'Create a dedicated branded tailgate zone with games, music, product sampling, and photo opportunities. Premium tailgate setups become destination experiences that fans seek out each game day, building recurring brand engagement across the season.',
      },
      {
        title: 'In-Stadium Fan Activations',
        description:
          'Run in-stadium promotions including jumbotron features, halftime contests, seat-drop sampling, and concourse activations. In-stadium touchpoints reach every attendee and generate massive organic social content from fans sharing their experience.',
      },
      {
        title: 'Game Day Street Team Blitzes',
        description:
          'Deploy energetic street teams on the main routes between campus, parking lots, and the stadium to distribute samples, coupons, and branded items. These high-energy interactions match the excitement of game day and feel natural in the environment.',
      },
      {
        title: 'Second-Screen Digital Campaigns',
        description:
          'Launch mobile-first campaigns targeting fans in and around the stadium during games. Geo-fenced ads, app-based contests, and social media challenges reach the 80%+ of fans who use their phones during the game.',
      },
    ],
    stats: [
      { number: '170M+', label: 'attend college sporting events each year' },
      { number: '$150', label: 'average fan spend per game day' },
      { number: '91%', label: 'of students say game day is their top social event' },
    ],
    bestServices: [
      'game-day-marketing',
      'street-teams',
      'sampling-programs',
      'campus-events',
    ],
    tips: [
      'Secure premium locations near stadium entrances and main tailgate lots months in advance.',
      'Align your branding with team colors and school spirit to feel like a natural part of game day.',
      'Staff activations with high-energy brand ambassadors who match the intensity of the fan environment.',
      'Run season-long game day programs rather than one-off activations to build cumulative brand recall.',
      'Adapt your strategy for football (outdoor tailgates) vs. basketball (arena concourse) environments.',
    ],
  },
]

export function getEventBySlug(slug: string): EventPage | undefined {
  return events.find(e => e.slug === slug)
}
