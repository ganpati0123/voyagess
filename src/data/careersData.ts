export interface JobPosition {
  id: string;
  title: string;
  department: 'Operations' | 'Infrastructure' | 'DevRel' | 'Production' | 'Community';
  type: 'Full-Time' | 'Contract / Event-Based' | 'Paid Fellowship' | 'Project-Based';
  location: string;
  experienceLevel: 'Entry / Student Lead' | 'Mid-Level' | 'Senior Specialist' | 'Lead Architect';
  compensation: string;
  badge?: string;
  tags: string[];
  shortDesc: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export const CAREERS_POSITIONS: JobPosition[] = [
  {
    id: 'lead-hackathon-ops',
    title: 'Lead Hackathon Operations Architect',
    department: 'Operations',
    type: 'Full-Time',
    location: 'Hybrid (Major Tech Campuses / Remote)',
    experienceLevel: 'Lead Architect',
    compensation: '₹14,00,000 - ₹22,00,000 / year + Event Bonuses & Travel Stipends',
    badge: 'High Priority',
    tags: ['Hackathon Ops', 'MLH Run-sheets', 'Judging Logistics', 'Incident Commander'],
    shortDesc: 'Own the master 36-hour physical execution, crew run-sheets, judging logistics, and faculty coordination for 500-1,500 builder campus hackathons.',
    overview: 'As the Lead Hackathon Operations Architect at VOYAGE, you will be the single point of command during high-stakes 24H and 48H hackathons. You will coordinate with college administration, manage the volunteer brigade of 50+ coordinators, calibrate faculty and industry mentors, and ensure the event adheres to MLH season benchmarks without a single hitch.',
    responsibilities: [
      'Lead the 24/7 on-ground War Room during live hackathons across India and international partner universities.',
      'Construct and execute minute-by-minute operational run-sheets covering registrations, keynotes, hacking bays, meals, mentor rounds, and final judging.',
      'Liaise directly with college deans, faculty advisors, and student organizing committees to ensure frictionless institutional approvals.',
      'Manage judging calibrations across 100+ submitted prototypes in under 120 minutes with zero scoring discrepancies.',
      'Supervise post-event project archiving, trophy handoffs, and digital certificate cryptographic verification.',
    ],
    requirements: [
      'Demonstrated experience leading or directing at least 2 major technical hackathons (500+ builders).',
      'Intimate familiarity with Major League Hacking (MLH) rubrics, Devpost, GitHub submission pipelines, and Discord/Slack triage.',
      'Calm, authoritative crisis management skills under intense, sleep-deprived conditions.',
      'Willingness to travel for marquee weekend events on premier college campuses.',
    ],
    perks: [
      'Executive-tier day-rate retainers and quarterly performance bonuses.',
      'Full flight, luxury accommodation, and gourmet per-diem coverage for all tour destinations.',
      'Direct network access to Tier-1 sponsor leaders (Google Cloud, GitHub, AWS, Solana).',
      'Custom VOYAGE Flight Crew hardware kit (custom field radio, ruggedized Pelican case, team jacket).',
    ],
  },
  {
    id: 'network-infra-engineer',
    title: 'Dual-WAN Network Infrastructure Engineer',
    department: 'Infrastructure',
    type: 'Contract / Event-Based',
    location: 'On-Site (Event Tour)',
    experienceLevel: 'Senior Specialist',
    compensation: '₹25,000 - ₹45,000 / Event Weekend + Travel & Equipment Budget',
    badge: 'Critical SLA',
    tags: ['Ubiquiti UniFi', 'Dual-WAN Failover', 'VLAN Segmentation', '1Gbps+ Symmetrical'],
    shortDesc: 'Deliver VOYAGE’s marquee "Zero Wi-Fi Drops" guarantee. Architect and deploy high-density temporary wireless networks for 1,000+ simultaneous dev laptops.',
    overview: 'Wi-Fi failure kills hackathons. At VOYAGE, we treat venue connectivity as mission-critical life support. You will deploy and monitor enterprise access point matrices, cellular failover systems, and traffic-shaping gateways so 1,000+ developers push code, stream models, and build APIs without a millisecond of lag.',
    responsibilities: [
      'Deploy and tune enterprise Wi-Fi 6E/7 access point arrays (Ubiquiti U6 Enterprise / Cisco Meraki) across auditoriums and hacking bays.',
      'Configure dual-WAN bonding and instantaneous failover (Dedicated Leased Line + Cellular/Starlink fallback).',
      'Implement smart bandwidth throttling to prevent torrenting or streaming abuse while prioritizing GitHub, npm, PyPI, and Docker registry pulls.',
      'Perform continuous RF spectrum analysis and 24/7 packet-loss monitoring during active hacking hours.',
      'Conduct pre-event venue network audits and deliver signed network SLA compliance reports.',
    ],
    requirements: [
      '3+ years of experience with enterprise network engineering, routing protocols, and RF spectrum management.',
      'Certifications or equivalent hands-on experience with Ubiquiti UniFi, MikroTik, or Cisco Meraki.',
      'Proven track record deploying temporary pop-up wireless networks for conferences, LAN parties, or hackathons with 500+ concurrent clients.',
      'Deep understanding of captive portals, DNS filtering, and DHCP pool management.',
    ],
    perks: [
      'Industry-leading contract weekend day rates.',
      'Access to top-spec enterprise network test benches and portable mobile server racks.',
      'Full per-diem and private transit for all event installations.',
      'Option to transition into full-time VP of Technical Infrastructure.',
    ],
  },
  {
    id: 'devrel-sponsor-manager',
    title: 'Developer Relations & Sponsor Success Manager',
    department: 'DevRel',
    type: 'Full-Time',
    location: 'Hybrid / Remote with Travel',
    experienceLevel: 'Mid-Level',
    compensation: '₹12,00,000 - ₹18,00,000 / year + Sponsor Commissions',
    tags: ['Sponsor ROI', 'API Adoption', 'Dev Tools', 'Technical Workshops'],
    shortDesc: 'Bridge top global tech brands with thousands of hungry campus builders. Turn sponsor booths into high-octane technical workshops and API hack tracks.',
    overview: 'Sponsors hate boring booths where people just grab stickers and leave. VOYAGE designs technical engagement engines. You will work with Developer Advocates from top tech companies to craft high-value hack tracks, bounties, and technical workshops that result in hundreds of real projects built using their SDKs.',
    responsibilities: [
      'Partner with developer marketing leads at Fortune 500 tech firms, AI labs, and Web3 foundations to define custom hackathon prize tracks.',
      'Curate hands-on pre-hack workshops and API integration office hours for builders.',
      'Track developer API calls, SDK downloads, and project submissions to compile comprehensive sponsor ROI debrief packets.',
      'Host sponsor keynote stages, panel discussions, and tech lightning talks during main events.',
      'Maintain an active talent pipeline between top-scoring hackathon winners and sponsor recruiters.',
    ],
    requirements: [
      '2+ years of experience in Developer Relations, Technical Community Management, or Corporate Tech Sponsorships.',
      'Ability to speak fluently about modern tech stacks: LLM APIs, Cloud deployments, Web3 protocols, and frontend frameworks.',
      'Superb interpersonal presentation skills and empathy for student developers.',
      'Strong organizational skills to manage 10-20 corporate partners simultaneously.',
    ],
    perks: [
      'Direct networking with global heads of Developer Relations and venture capital scouts.',
      'Commission bonuses tied directly to sponsor satisfaction and renewal rates.',
      'Flexible remote work environment outside of active event dates.',
      'Generous learning & development budget for major tech summits (GitHub Universe, AWS re:Invent).',
    ],
  },
  {
    id: 'live-keynote-stage-director',
    title: 'Director of Live Keynotes & Stagecraft',
    department: 'Production',
    type: 'Project-Based',
    location: 'On-Site (Tier-1 Summits)',
    experienceLevel: 'Senior Specialist',
    compensation: '₹35,000 - ₹60,000 / Production Weekend + Travel',
    tags: ['OBS / vMix', 'LED Wall Rigs', 'Multi-Cam 4K', 'Keynote Timing'],
    shortDesc: 'Turn traditional auditorium presentations into keynote spectacles. Direct multi-camera 4K livestreams, dynamic LED stage walls, and closing ceremony AV.',
    overview: 'VOYAGE believes tech events must feel as electrifying as a global product keynote. You will direct live multi-camera production, high-lumen laser cues, spatial audio rigs, and Twitch/YouTube broadcasts that make every participant feel like they are presenting on a world stage.',
    responsibilities: [
      'Direct opening and closing ceremonies with frame-perfect cue execution across video, lighting, and audio.',
      'Manage multi-camera PTZ setups, wireless lavalier RF frequencies, and YouTube/Twitch broadcast feeds.',
      'Supervise LED video wall configurations, dynamic motion graphics, and live countdown timers.',
      'Coordinate with keynote VIP speakers and manage demo backup feeds to eliminate live presentation disasters.',
    ],
    requirements: [
      'Demonstrated portfolio directing live technical conferences, concerts, or high-tier esports broadcasts.',
      'Mastery of vMix, OBS Studio, Blackmagic ATEM switchers, and Dante audio networks.',
      'Deep appreciation for minimal, dark, cybernetic stage aesthetics.',
    ],
    perks: [
      'Top-of-market production honorarium.',
      'State-of-the-art camera and switching gear provided.',
      'Signature VOYAGE Crew credentials and VIP backstage hospitality.',
    ],
  },
  {
    id: 'campus-ambassador-fellow',
    title: 'Campus Chapter Ambassador & Scout (GRID Fellowship)',
    department: 'Community',
    type: 'Paid Fellowship',
    location: 'Major Tech Universities',
    experienceLevel: 'Entry / Student Lead',
    compensation: '₹15,000 - ₹35,000 / Semester Grant + Full Travel Passes & Swag',
    badge: 'Students Welcome',
    tags: ['GRID Synergy', 'Campus Leadership', 'Hacker Scout', 'Hackathon Tour'],
    shortDesc: 'Be the official voice of VOYAGE and the GRID Network on your campus. Connect university leadership, student clubs, and elite hackers to premier events.',
    overview: 'Our Campus Chapter Ambassadors are the heart of VOYAGE’s grassroots gravity. You will be our designated representative on your university campus, organizing watch-parties, scouting 10x builder talent, and helping host VOYAGE-powered hackathons with faculty backing.',
    responsibilities: [
      'Act as the official student liaison between VOYAGE, faculty leadership, and campus technical societies.',
      'Lead campus pre-hack meetups, GitHub workshop watch-parties, and team formation mixers.',
      'Distribute exclusive VOYAGE developer kits and fast-track invitations to top campus builders.',
      'Serve as student track coordinator during on-campus VOYAGE events.',
    ],
    requirements: [
      'Currently enrolled in an undergraduate or graduate computer science, engineering, or design program.',
      'Active leadership role in a campus coding club, GDG on Campus, ACM chapter, or IEEE branch.',
      'Passionate about hackathons, open source, and empowering peers to build.',
    ],
    perks: [
      'Semester leadership stipend grant.',
      'All-access VIP pass and travel covered for all VOYAGE national hackathons.',
      'Exclusive 1-on-1 mentorship with VOYAGE senior engineers and sponsor founders.',
      'Priority fast-track consideration for full-time roles upon graduation.',
    ],
  },
];

export const VOYAGE_CULTURE_PERKS = [
  {
    title: 'Extreme Ownership',
    desc: 'Zero micromanagement. When you own a hackathon track or an infrastructure bay, the entire execution is yours to command.',
  },
  {
    title: 'High-Impact Travel',
    desc: 'Travel to premier institutions, hacker houses, and technology hubs across the continent with full per-diem and executive stays.',
  },
  {
    title: 'Pro-Grade Gear',
    desc: 'Equipped with custom VOYAGE field kits, Pelican luggage, Ubiquiti enterprise rigs, and noise-canceling field headsets.',
  },
  {
    title: 'Unrivaled Tech Gravity',
    desc: 'Work directly alongside MLH commissioners, Google, GitHub, and top YC/Venture-backed dev tool executives.',
  },
];
