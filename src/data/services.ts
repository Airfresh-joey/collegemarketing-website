export interface ServiceDetail {
  slug: string
  title: string
  icon: string
  description: string
  shortDescription: string
  features: string[]
  cta: string
}

export const services: ServiceDetail[] = [
  {
    slug: 'student-brand-ambassadors',
    title: 'Student Brand Ambassadors',
    icon: '👥',
    shortDescription: 'Recruit and manage passionate student advocates who authentically represent your brand on campus',
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
    slug: 'campus-events',
    title: 'Campus Events',
    icon: '🎉',
    shortDescription: 'Experiential activations, pop-ups, and event staffing that create memorable brand experiences',
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
    shortDescription: 'Strategic product distribution and demos that drive trial and word-of-mouth',
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
  {
    slug: 'social-media-campaigns',
    title: 'Social Media Campaigns',
    icon: '📱',
    shortDescription: 'Student-led content creation and social amplification that resonates with college audiences',
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
    slug: 'street-teams',
    title: 'Street Teams',
    icon: '📋',
    shortDescription: 'High-visibility flyering, postering, and on-the-ground brand presence across campus',
    description: 'High-visibility flyering, postering, and on-the-ground brand presence across campus. Our street teams blanket high-traffic areas with your message, creating unavoidable brand awareness that drives action.',
    features: [
      'Strategic flyering at high-traffic campus locations',
      'Poster campaigns across dorms, dining halls, and student centers',
      'Branded handouts and promotional materials distribution',
      'Door-to-door dorm outreach campaigns',
      'Classroom and lecture hall pre-show announcements',
      'GPS-tracked routes with photo verification',
    ],
    cta: 'Deploy a Street Team',
  },
  {
    slug: 'move-in-day-programs',
    title: 'Move-In Day Programs',
    icon: '📦',
    shortDescription: 'Welcome week activations that make a powerful first impression on incoming students',
    description: 'Welcome week activations that make a powerful first impression on incoming students. Move-in day is the single highest-engagement moment of the college year — we help you own it.',
    features: [
      'Move-in day welcome kits and swag bags',
      'Branded hydration stations and snack stops',
      'Parent and family engagement activations',
      'Dorm room essentials sampling programs',
      'Welcome tent and booth activations',
      'First-week campus takeover campaigns',
    ],
    cta: 'Own Move-In Day',
  },
  {
    slug: 'game-day-marketing',
    title: 'Game Day Marketing',
    icon: '🏟️',
    shortDescription: 'Tailgate activations and stadium marketing that reach fans at peak excitement',
    description: 'Tailgate activations and stadium marketing that reach fans at peak excitement. Game day is when school spirit is at its highest — we position your brand at the center of the action.',
    features: [
      'Tailgate zone brand activations and sampling',
      'Stadium concourse pop-ups and displays',
      'Pre-game and halftime fan engagement',
      'Branded giveaways and spirit gear',
      'Sports bar and watch party sponsorships',
      'Season-long game day marketing programs',
    ],
    cta: 'Win on Game Day',
  },
  {
    slug: 'greek-life-marketing',
    title: 'Greek Life Marketing',
    icon: '🏛️',
    shortDescription: 'Fraternity and sorority partnerships that tap into the most influential campus networks',
    description: 'Fraternity and sorority partnerships that tap into the most influential campus networks. Greek organizations are campus tastemakers — we help you build authentic partnerships that drive massive word-of-mouth.',
    features: [
      'Fraternity and sorority chapter sponsorships',
      'Greek philanthropy event partnerships',
      'Rush week and recruitment activations',
      'Greek house sampling and product placement',
      'Social event and mixer sponsorships',
      'Greek influencer ambassador programs',
    ],
    cta: 'Partner with Greek Life',
  },
  {
    slug: 'orientation-week-activations',
    title: 'Orientation Week Activations',
    icon: '🎓',
    shortDescription: 'Freshman-targeted programs that build brand loyalty from day one on campus',
    description: 'Freshman-targeted programs that build brand loyalty from day one on campus. Orientation week is when students are most open to discovering new brands — we make sure yours is front and center.',
    features: [
      'Welcome fair booth activations and demos',
      'Campus tour intercept marketing',
      'New student orientation swag distribution',
      'Freshman mixer and social event sponsorships',
      'Resource fair and club expo activations',
      'First-week digital campaign targeting new students',
    ],
    cta: 'Target New Students',
  },
  {
    slug: 'guerrilla-marketing',
    title: 'Guerrilla Marketing',
    icon: '🎨',
    shortDescription: 'Creative unconventional tactics that generate buzz and go viral on campus',
    description: 'Creative unconventional tactics that generate buzz and go viral on campus. When traditional marketing blends into the background, guerrilla tactics cut through the noise and get students talking.',
    features: [
      'Chalk art and sidewalk branding campaigns',
      'Flash mob and surprise performance activations',
      'Projection and light display marketing',
      'Viral stunt and social media bait campaigns',
      'Sticker and decal placement programs',
      'Interactive installations and campus art',
    ],
    cta: 'Go Guerrilla',
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find(s => s.slug === slug)
}
