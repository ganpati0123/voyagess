import { ServicePackage, AddonService, CaseStudy, OperatingPhase, EventRole } from '../types';

export const VOYAGE_META = {
  name: 'VOYAGE',
  tagline: 'High-Precision Technical Event Production',
  quote: 'We believe in delivering smooth.',
  subquote: 'White-glove technical event management, official MLH season sanctioning, and on-ground operational mastery.',
  subline: 'Turnkey technical production for elite college hackathons, developer conferences, and innovation summits.',
  communityPartner: 'GRID Developer Network (2,000+ Active Builders)',
  contactEmail: 'partnerships@voyage.events',
};

export const MLH_ACCREDITATION = {
  badge: 'Official MLH Sanctioning Partner',
  headline: 'The Coveted MLH Tag. Guaranteed for Your Event.',
  subheading: 'Major League Hacking (MLH) member season status is the pinnacle of global hackathon prestige—awarded to fewer than 2% of collegiate events worldwide. VOYAGE manages end-to-end compliance and secures the official MLH accreditation tag directly for your event.',
  stats: [
    { label: 'Global Acceptance Rate', value: '< 2%', note: 'Exclusive official circuit' },
    { label: 'MLH Hardware Lab', value: 'Included', note: 'Oculus, IoT kits & test devices' },
    { label: 'Official Season Points', value: 'Live', note: 'Draws top-tier global builders' },
    { label: 'Tier-1 Tech Sponsors', value: 'Direct', note: 'GitHub, AWS, Google Cloud' },
  ],
  pillars: [
    {
      number: '01',
      title: 'Official MLH Season Circuit Inclusion',
      description: 'Your campus or startup hackathon is formally inducted into the official MLH global calendar, placing your event alongside the world’s most prestigious collegiate competitions.',
    },
    {
      number: '02',
      title: 'MLH Hardware Lab & Exclusive Swag',
      description: 'We coordinate direct freight delivery of the official MLH Hardware Lab—VR headsets, microcontrollers, embedded sensor arrays, and licensed partner merchandise.',
    },
    {
      number: '03',
      title: 'Global Tech Sponsor Gravitas',
      description: 'Official MLH accreditation unlocks premier enterprise sponsor activations, subsidized developer API credits, judge placement, and custom prize challenges.',
    },
    {
      number: '04',
      title: 'Zero Compliance Burden for You',
      description: 'VOYAGE handles the entire accreditation dossier, Code of Conduct enforcement, judge scoring rubrics, and post-event audit compliance on your behalf.',
    },
  ],
};

export const PACKAGES: ServicePackage[] = [
  {
    id: 'launch',
    name: 'Digital Arena & Launch',
    tagline: 'High-conversion registration infrastructure & developer outreach',
    priceRange: '₹10,000 – ₹20,000',
    basePriceINR: 15000,
    timeline: '3–5 Days Delivery',
    targetAudience: 'Student chapters, developer societies, and small tech groups launching their event digital presence.',
    scopeSummary: 'Custom event portal, registration pipelines, applicant screening workflows, creative branding kit, and automated communication calendar.',
    deliverables: [
      'Custom high-performance event registration portal',
      'Automated email confirmation and calendar integration workflows',
      'Multi-channel promotional rollout plan & social asset direction',
      'Real-time registration dashboard and applicant triage engine',
      'Post-launch conversion analytics and attendee prep dossier',
    ],
    excludedItems: [
      'On-ground venue operations and stagecraft',
      'Third-party paid media ad spend',
      'Hardware laboratory kits and AV equipment',
    ],
    recommendedFor: 'Event launch, ticket acceleration & attendee screening',
  },
  {
    id: 'hackathon',
    name: 'Flagship Campus Hackathon',
    tagline: 'Full-spectrum 24H–48H hackathon engineered to absolute perfection',
    priceRange: '₹50,000 – ₹1,20,000+',
    basePriceINR: 75000,
    timeline: '3–5 Weeks Intensive Pipeline',
    targetAudience: 'University tech fests, engineering colleges, state innovation councils, and premier campus committees.',
    scopeSummary: 'Complete white-glove turnkey execution: MLH accreditation, problem track design, custom submission engine, dual-band Wi-Fi failover, 24/7 on-ground leads, and post-event audits.',
    deliverables: [
      'Official Major League Hacking (MLH) member season accreditation tag guaranteed',
      'End-to-end hackathon blueprint, scoring rubrics & problem statement tracks',
      'Custom project submission & GitHub repository verification engine',
      'Dual-band enterprise Wi-Fi stress-testing with zero-drop backup failover',
      '24/7 on-ground event management, volunteer brigade & technical emergency lead',
      'Run of show, minute-by-minute stage timing, audio-visual orchestration',
      'Automated cryptographic attendee certificates & transparent project archival',
    ],
    excludedItems: [
      'Cash prize pool purse (funded directly by institution/sponsors)',
      'Participant overnight catering and lodging',
    ],
    recommendedFor: 'Colleges & student fests running premier hackathons',
    badge: 'Flagship Turnkey Production',
  },
  {
    id: 'corporate',
    name: 'Enterprise / Innovation Summit',
    tagline: 'Tailored corporate hackathons, hiring sprints & developer summits',
    priceRange: 'Custom Proposal',
    basePriceINR: 150000,
    timeline: 'Bespoke Roadmap',
    targetAudience: 'Technology enterprises, scaleups, DevRel teams, and corporate innovation hubs.',
    scopeSummary: 'Discovery-led bespoke production: enterprise challenge design, vetted candidate pipelines, executive staging, professional live-streaming, and IP assignment documentation.',
    deliverables: [
      'Bespoke challenge architecture aligned with corporate APIs or hiring criteria',
      'Candidate screening pipeline and verified skill assessment reports',
      'Full executive stage production, lighting, 4K multi-camera streaming',
      'Partner & sponsor booth logistics with deliverable verification binders',
      'VIP keynote speaker hospitality and executive judge deliberation protocol',
      'Post-event ROI dossier with top talent profiles and project repositories',
    ],
    excludedItems: [
      'Enterprise cloud compute credits',
      'Commercial hotel venue leases',
    ],
    recommendedFor: 'Enterprises, recruitment hackathons & tech conferences',
  },
];

export const ADDONS: AddonService[] = [
  {
    id: 'addon-portal',
    name: 'Judging & Live Leaderboard Engine',
    description: 'Custom submission portal with GitHub repo verification, multi-criteria rubric scoring, and live stage leaderboard display.',
    priceINR: 12000,
    category: 'technical',
  },
  {
    id: 'addon-media',
    name: '4K Cinema Recap & Photo Case Study',
    description: 'Dedicated videographer, high-energy recap trailer, high-res photo gallery, and executive case study document.',
    priceINR: 18000,
    category: 'production',
  },
  {
    id: 'addon-sponsors',
    name: 'Corporate Sponsor Deck & Booth Operations',
    description: 'Bespoke corporate sponsorship deck, tier mapping, sponsor booth logistics, and post-event deliverable proof binder.',
    priceINR: 15000,
    category: 'marketing',
  },
  {
    id: 'addon-certs',
    name: 'Automated Cryptographic Certificates',
    description: 'Tamper-proof verifiable digital certificates dispatched automatically to all qualified participants, winners, and mentors.',
    priceINR: 5000,
    category: 'post-event',
  },
];

export const OPERATING_PHASES: OperatingPhase[] = [
  {
    phaseNumber: 1,
    name: 'Scoping & MLH Sanctioning',
    timeline: 'Week 1',
    coreActions: [
      'Discovery session with faculty and student leads to define event format and capacity',
      'Submit formal application dossier to secure the official MLH season accreditation tag',
      'Establish fixed management deliverables, single decision-maker, and milestone calendar',
    ],
    requiredArtifact: 'Event Blueprint & MLH Sanctioning Dossier',
    ownership: 'Event Lead',
  },
  {
    phaseNumber: 2,
    name: 'Digital Arena & Developer Outreach',
    timeline: 'Week 2–3',
    coreActions: [
      'Deploy high-conversion custom event registration portal and applicant verification flows',
      'Activate targeted developer outreach across the GRID network (2,000+ builders)',
      'Distribute preparation toolkits, API documentation, and hackathon challenge guidelines',
    ],
    requiredArtifact: 'Registration Portal & Live Applicant Tracker',
    ownership: 'Programme & Marketing Lead',
  },
  {
    phaseNumber: 3,
    name: 'Hardware, Network & Stage Setup',
    timeline: 'Week 4 (48h Prior)',
    coreActions: [
      'Receive and test the official MLH Hardware Lab (VR headsets, test devices, sensor kits)',
      'Conduct dual-band Wi-Fi throughput stress testing with secondary 4G/5G WAN failover',
      'Stage dry runs, AV checks, microphone levels, and minute-by-minute run of show sign-off',
    ],
    requiredArtifact: 'Network Stress-Test Audit & Stage Protocol',
    ownership: 'Technical Lead & Operations Lead',
  },
  {
    phaseNumber: 4,
    name: 'Live Orchestration & Post-Event Audit',
    timeline: 'Event Day to +72h',
    coreActions: [
      '24-hour on-ground operational management: seamless QR check-in, mentor rounds, and timekeeping',
      'Automated code submission verification, anti-plagiarism checks, and judge scoring rubrics',
      'Dispatch cryptographic certificates and compile the verified executive outcome report',
    ],
    requiredArtifact: 'Incident Log & Final Audited Outcomes Dossier',
    ownership: 'All Leads (Led by Event Lead)',
  },
];

export const EVENT_ROLES: EventRole[] = [
  {
    role: 'Event Lead',
    focus: 'Client Governance & Master Timeline',
    responsibilities: [
      'Single point of contact for college management, faculty deans, and corporate sponsors',
      'Ensures strict adherence to master timeline, budget caps, and quality standards',
      'Directs the on-ground leads and acts as the ultimate escalation authority',
    ],
  },
  {
    role: 'Technical Lead',
    focus: 'Wi-Fi, Code Portals & Infrastructure',
    responsibilities: [
      'Guarantees zero network drops with dual-band routers and automated backup failover',
      'Administers the project submission portal, GitHub repo verification, and judging rubrics',
      'Coordinates audio-visual presentation feeds, stage screens, and live stream streams',
    ],
  },
  {
    role: 'Operations & Stage Manager',
    focus: 'Venue Logistics & Run of Show',
    responsibilities: [
      'Manages physical space allocations: hacking zones, mentor bays, stage, and resting areas',
      'Maintains minute-by-minute stage pacing, keynote speaker cues, and countdown clocks',
      'Supervises the volunteer brigade for frictionless check-in, badge delivery, and safety',
    ],
  },
];

export const COMPETITIVE_MATRIX = [
  {
    entity: 'VOYAGE (White-Glove)',
    strength: 'Turnkey physical & technical production + Official MLH Tag Guarantee',
    limitation: 'None — full-stack technical event engineering from ideation to stagecraft.',
    voyageAdvantage: 'Technology-native engineers, guaranteed MLH sanctioning, zero Wi-Fi drops, and 2,000+ builder reach.',
  },
  {
    entity: 'Hackathon Listing Websites',
    strength: 'Online registration listings and forms',
    limitation: 'Zero physical presence, no on-ground crew, no venue management or network engineering',
    voyageAdvantage: 'Complete on-ground presence with 24-hour technical leadership and stage management.',
  },
  {
    entity: 'Traditional Event Agencies',
    strength: 'Tents, generic staging, and catering',
    limitation: 'Zero understanding of developer culture, code repositories, APIs, or technical judging rubrics',
    voyageAdvantage: 'Engineers building for engineers: git verification, hardware labs, and developer workflows.',
  },
  {
    entity: 'Unassisted Student Committees',
    strength: 'High campus enthusiasm',
    limitation: 'High volunteer turnover, lack of standard operating procedures, Wi-Fi crashes, and sponsor dropouts',
    voyageAdvantage: 'Enterprise structure, battle-tested checklists, and stress-free execution for faculty & students.',
  },
];

export const VERIFIED_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-hacksphere',
    title: 'HackSphere 2026: 24-Hour Campus Hackathon',
    clientType: 'University Campus',
    format: 'Physical 24H Hackathon',
    date: 'September 2026',
    venue: 'Main University Auditorium',
    participants: 420,
    submissionsCount: 78,
    conversionRate: '94% On-Ground Turnout',
    summary: 'A high-stakes 24-hour hackathon bringing together engineering students across 18 universities with corporate challenge tracks in AI and Fintech.',
    challenge: 'The college committee previously suffered from Wi-Fi collapse during midnight coding rounds, delayed judging deliberated past 4 AM, and severe participant drop-off.',
    voyageRole: 'End-to-end event production, official MLH compliance, dedicated dual-band Wi-Fi network setup with failover, automated judging rubric on custom portal, and 24-hour on-ground timekeeping.',
    outcomes: [
      'Zero network downtime across 420 concurrent connected developers',
      '78 working prototypes submitted before final deadline (100% on-time submission rate)',
      'Judging completed and prizes awarded exactly 45 minutes after final presentation',
      '4 participating startups issued on-the-spot internship offers to finalist teams',
    ],
    clientQuote: {
      text: 'VOYAGE eliminated all the chaos that previously haunted our college tech fests. Their run of show was precise to the minute, and our faculty was completely stress-free.',
      author: 'Dr. R. K. Sharma',
      title: 'Faculty Coordinator, Department of Computer Science',
    },
  },
  {
    id: 'cs-ai-bootcamp',
    title: 'CodeVertex: Hands-on Generative AI & Systems Sprint',
    clientType: 'Tech Startup',
    format: 'Developer Conference',
    date: 'August 2026',
    venue: 'CyberHub Innovation Center',
    participants: 280,
    conversionRate: '98% Verified Completion',
    summary: 'An intensive two-day technical workshop and architecture sprint targeting senior software engineers and final-year developers.',
    challenge: 'Client needed high-calibre developer attendance, vetted participants with real coding experience, and seamless hands-on lab environments.',
    voyageRole: 'Audience distribution via GRID community, automated GitHub profile screening, cloud sandbox configuration, and live workshop facilitation.',
    outcomes: [
      'Over 600 applications received; filtered to 280 verified software developers',
      '100% of participants deployed an AI-assisted backend microservice in hands-on session',
      'Sponsoring cloud provider reported 88% product adoption retention post-event',
    ],
    clientQuote: {
      text: 'Finding real developers who actually build is tough. VOYAGE not only packed the venue with top talent but engineered the technical lab setup flawlessly.',
      author: 'A. Singhania',
      title: 'VP of Engineering, Vertex Systems',
    },
  },
];
