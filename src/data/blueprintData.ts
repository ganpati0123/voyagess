import { ServicePackage, AddonService, CaseStudy, OperatingPhase, EventRole } from '../types';

export const VOYAGE_META = {
  name: 'VOYAGE',
  legalDomain: 'voyagehacks.in',
  tagline: 'High-Performance Technical Events for Colleges and Startups',
  subline: 'Turnkey technical event management, MLH-grade workflows, and on-ground execution.',
  communityPartner: 'GRID Developer Community (2,000+ Builders)',
};

export const PACKAGES: ServicePackage[] = [
  {
    id: 'launch',
    name: 'Launch / Digital Setup',
    tagline: 'High-conversion event digital infrastructure & registration pipelines',
    priceRange: '₹5,000 – ₹15,000',
    basePriceINR: 10000,
    timeline: '3–7 Days Delivery',
    targetAudience: 'Student clubs, society fests, or small technical groups needing professional digital presence.',
    scopeSummary: 'Custom event landing page or form, registration tracking automation, campaign rollout plan, creative asset coordination, and analytics reporting.',
    deliverables: [
      'High-performance event landing page or custom registration portal',
      'Automated email confirmation & calendar invite workflow',
      'Omnichannel promotional campaign calendar & distribution matrix',
      'Creative visual direction, social assets, and banner kit',
      'Real-time registration dashboard & post-launch conversion report',
    ],
    excludedItems: [
      'On-ground event venue management',
      'Paid advertising budget / media spend',
      'On-site audio-visual equipment & hardware',
      'Catering & physical merchandise',
    ],
    recommendedFor: 'Pre-event digital launch & registration acceleration',
  },
  {
    id: 'workshop',
    name: 'Workshop / Meetup',
    tagline: 'Precision technical workshops, developer meetups & hands-on bootcamps',
    priceRange: '₹15,000 – ₹40,000',
    basePriceINR: 28000,
    timeline: '1–3 Weeks Execution',
    targetAudience: 'Colleges, departments, AI/ML study circles, and tech startups hosting focused developer sessions.',
    scopeSummary: 'Comprehensive end-to-end planning, attendee funnel management, speaker and technical mentor coordination, community promotion, and live event-day orchestration.',
    deliverables: [
      'Technical curriculum & speaker briefing coordination',
      'Curated attendee screening & RSVP management pipeline',
      'Community distribution across 2,000+ developer networks',
      'Dedicated on-site / virtual stage manager & timekeeping lead',
      'Interactive Q&A and hands-on coding session coordination',
      'Post-workshop attendance reconciliation & feedback survey',
    ],
    excludedItems: [
      'Speaker honorariums / travel reimbursements',
      'Venue booking fees & physical security',
      'Food & beverage catering contracts',
    ],
    recommendedFor: 'Developer meetups, AI/ML bootcamps & tech chapters',
  },
  {
    id: 'hackathon',
    name: 'Campus Hackathon',
    tagline: 'Flagship 24H–48H multi-track hackathons engineered to absolute perfection',
    priceRange: '₹40,000 – ₹1,00,000+',
    basePriceINR: 65000,
    timeline: '3–6 Weeks Intensive Pipeline',
    targetAudience: 'University fests, engineering colleges, institutional hackathon committees, and state innovation councils.',
    scopeSummary: 'Full-spectrum execution: hackathon theme concept, judging criteria rubric, portal setup, participant communications, mentor/judge pipeline, submission infrastructure, and 24-hour on-ground physical operations.',
    deliverables: [
      'End-to-end hackathon blueprint, rulebook & problem statement tracks',
      'Project submission, code repository tracking & automated screening',
      'Multi-round judging portal setup, scoring rubrics & live leaderboard',
      'Mentor shift scheduling & 24/7 participant escalation helpline',
      'Complete run of show, minute-by-minute timetable & stage production',
      'On-ground technical team for Wi-Fi stress-testing, power backups & AV',
      'Full post-event transparency audit, project repositories & outcomes dossier',
    ],
    excludedItems: [
      'Cash prize pool funding & awards',
      'Hardware kits (Arduinos, sensors) unless client-requisitioned',
      'Participant overnight lodging and mass catering',
    ],
    recommendedFor: 'Colleges & student fests running premier hackathons',
    badge: 'Flagship Architecture',
  },
  {
    id: 'corporate',
    name: 'Corporate / Custom Event',
    tagline: 'Enterprise innovation challenges, hiring hackathons & tech conferences',
    priceRange: 'Custom Quote',
    basePriceINR: 120000,
    timeline: 'Custom Tailored Roadmap',
    targetAudience: 'Tech enterprises, high-growth startups, HR talent teams, and developer relations (DevRel) departments.',
    scopeSummary: 'Discovery-led bespoke proposal, customized innovation tracks, vendor negotiation, high-level developer branding, executive reporting, and targeted talent pipeline curation.',
    deliverables: [
      'Bespoke innovation challenge design aligned with corporate APIs or hiring needs',
      'Targeted candidate screening & verified skill assessment workflows',
      'Full production crew (executive stage, professional lighting, sound, live stream)',
      'Partner & sponsor deliverable contract execution and tracking',
      'VIP guest, keynote speaker, and CXO hospitality protocol',
      'Executive post-event ROI report with hiring candidate profiles & IP documentation',
    ],
    excludedItems: [
      'Third-party cloud compute credits',
      'Luxury hotel venue rentals',
    ],
    recommendedFor: 'Enterprises, hiring challenges & industry tech summits',
  },
];

export const ADDONS: AddonService[] = [
  {
    id: 'addon-portal',
    name: 'Judging & Live Leaderboard Portal',
    description: 'Custom submission engine with automated GitHub repo verification, multi-criteria rubric scoring, and live projector leaderboard.',
    priceINR: 12000,
    category: 'technical',
  },
  {
    id: 'addon-media',
    name: '4K Cinema Video & Photo Case Study',
    description: 'Dedicated videographer, high-energy event recap trailer, high-res photo gallery, and polished B2B case study document.',
    priceINR: 18000,
    category: 'production',
  },
  {
    id: 'addon-sponsors',
    name: 'Sponsor Deck & Deliverable Tracking',
    description: 'Bespoke corporate sponsorship pitch deck, tier mapping, sponsor booth logistics, and post-event deliverable proof binder.',
    priceINR: 15000,
    category: 'marketing',
  },
  {
    id: 'addon-certs',
    name: 'Automated Cryptographic Certificates',
    description: 'Unique verifiable QR-code digital certificates dispatched automatically to all qualified attendees and winners.',
    priceINR: 4000,
    category: 'post-event',
  },
  {
    id: 'addon-analytics',
    name: 'Executive Outcomes & Survey Report',
    description: 'Deep participant feedback survey, NPS score breakdown, conversion metrics, and recommendations for the subsequent edition.',
    priceINR: 6000,
    category: 'post-event',
  },
];

export const OPERATING_PHASES: OperatingPhase[] = [
  {
    phaseNumber: 1,
    name: 'Discovery & Feasibility',
    timeline: 'Week 1',
    coreActions: [
      'Define core event objective, format (physical/hybrid), and measurable success criteria',
      'Confirm target audience, attendee volume capacity, and budget bounds',
      'Identify internal vs outsourced task division and single client decision-maker',
    ],
    requiredArtifact: 'Discovery Brief & Constraint Matrix',
    ownership: 'Event Lead',
  },
  {
    phaseNumber: 2,
    name: 'Proposal & Scope Framing',
    timeline: 'Week 1–2',
    coreActions: [
      'Draft itemized deliverables, milestone deadlines, and explicit scope exclusions',
      'Establish fixed management fee and pass-through third-party expense budget',
      'Define payment schedule (50% Advance / 30% Milestone / 20% Closeout)',
    ],
    requiredArtifact: 'Proposal / Statement of Work (SOW)',
    ownership: 'Founder / Business Lead',
  },
  {
    phaseNumber: 3,
    name: 'Contract & Advance Gate',
    timeline: 'Week 2',
    coreActions: [
      'Execute written agreement with mutual cancellation, postponement & IP terms',
      'Collect mandatory 50% advance before committing resources or vendors',
      'Establish client escalation hierarchy and communication cadence',
    ],
    requiredArtifact: 'Signed Agreement & Advance Invoice',
    ownership: 'Finance & Legal Owner',
  },
  {
    phaseNumber: 4,
    name: 'Run of Show & Operational Planning',
    timeline: 'Week 2–3',
    coreActions: [
      'Construct minute-by-minute run of show with named owners per segment',
      'Map venue layouts: registration foyer, hacking bays, presentation stage, rest zones',
      'Coordinate speaker/judge confirmations, technical requirements, and briefings',
    ],
    requiredArtifact: 'Run of Show & Responsibility Matrix',
    ownership: 'Operations Lead & Programme Lead',
  },
  {
    phaseNumber: 5,
    name: 'Promotion & Attendee Pipeline',
    timeline: 'Week 3–4',
    coreActions: [
      'Deploy custom high-conversion landing page and automated registration flow',
      'Activate targeted community outreach across GRID (2,000+ builders) & college networks',
      'Send timed reminder sequences, preparation toolkits, and attendee FAQs',
    ],
    requiredArtifact: 'Campaign Calendar & Live Registration Tracker',
    ownership: 'Marketing / Participant Lead',
  },
  {
    phaseNumber: 6,
    name: 'Technical Readiness & Stress-Testing',
    timeline: '48h Prior',
    coreActions: [
      'Perform dual-band Wi-Fi throughput test and configure physical ethernet drops',
      'Dry-run judging platform, submission portals, and scoring rubrics',
      'Establish backup power inverter failover and audio/visual contingency protocols',
    ],
    requiredArtifact: 'Pre-Event Technical Checklist & Backup Plan',
    ownership: 'Technical Lead',
  },
  {
    phaseNumber: 7,
    name: 'Live Event Execution & Protocol',
    timeline: 'Event Day',
    coreActions: [
      'Manage frictionless QR check-in, badges, and welcome logistics',
      'Strict adherence to stage timetable, countdown timers, and speaker pacing',
      'Manage real-time issue escalation log, mentor dispatch, and safety protocols',
    ],
    requiredArtifact: 'Live Run Sheet & Real-Time Incident Log',
    ownership: 'All Named Roles (Led by Event Lead)',
  },
  {
    phaseNumber: 8,
    name: 'Closeout & Reconciliation',
    timeline: 'Within 72h',
    coreActions: [
      'Reconcile actual vs approved expenditure with original receipts',
      'Compile final verified attendance, project submissions, and winner audits',
      'Deliver sponsor deliverables proof package and acquire formal client sign-off',
    ],
    requiredArtifact: 'Post-Event Executive Report & Expense Sheet',
    ownership: 'Finance Owner & Event Lead',
  },
  {
    phaseNumber: 9,
    name: 'Follow-up & Asset Archival',
    timeline: 'Within 7 Days',
    coreActions: [
      'Dispatch automated cryptographic attendee & winner certificates',
      'Publish approved post-event case study and recap media package',
      'Conduct client debrief meeting and initiate next edition / recurring booking',
    ],
    requiredArtifact: 'Closeout Package & Approved Case Study',
    ownership: 'Founder & Marketing Lead',
  },
];

export const EVENT_ROLES: EventRole[] = [
  {
    role: 'Event Lead',
    focus: 'Client Communication & Governance',
    responsibilities: [
      'Primary liaison for client faculty, coordinators, and stakeholders',
      'Ultimate authority on scope adjustments, budget overrides, and critical incident decisions',
      'Supervises adherence to the master timeline and brand promise',
    ],
  },
  {
    role: 'Operations Lead',
    focus: 'Venue, Logistics & Physical Flow',
    responsibilities: [
      'Physical layout setup, registration desks, food delivery checkpoints, security flow',
      'Management of vendors, signage installation, and hardware inventory',
      'Oversees crowd navigation and venue health/safety compliance',
    ],
  },
  {
    role: 'Programme Lead',
    focus: 'Curriculum, Speakers & Pacing',
    responsibilities: [
      'Stage hosting, master of ceremonies (MC) synchronization, and keynote introductions',
      'Speaker hospitality, judge onboarding, and scoring deliberation facilitation',
      'Enforces strict session timekeeping and intermission transitions',
    ],
  },
  {
    role: 'Technical Lead',
    focus: 'Infrastructure, Code & Submissions',
    responsibilities: [
      'Network connectivity (Wi-Fi, bandwidth allocation, router stress checks)',
      'Submission portal administration, GitHub repo access verification, and anti-plagiarism checks',
      'Audio-Visual (AV) projection, audio mixing, and live streaming systems',
    ],
  },
  {
    role: 'Marketing Lead',
    focus: 'Audience, Community & Documentation',
    responsibilities: [
      'Pre-event ticket conversions, Discord/WhatsApp announcements, and attendee queries',
      'Directing photography/videography crew to capture key moments and testimonials',
      'Real-time social media dispatches and attendee interview clips',
    ],
  },
  {
    role: 'Finance Owner',
    focus: 'Reconciliation & Cash Controls',
    responsibilities: [
      'Strict oversight of approved cash expenditures and emergency contingency funds',
      'Collection and digitization of every GST receipt and vendor invoice',
      'Post-event financial reconciliation and final balance collection',
    ],
  },
];

export const COMPETITIVE_MATRIX = [
  {
    entity: 'Hackathon Platforms',
    strength: 'Submission forms and participant discovery listings',
    limitation: 'Zero physical presence, no on-ground stage crew or venue management',
    voyageAdvantage: 'Hands-on physical and hybrid execution from setup to stagecraft, paired with proprietary workflows.',
  },
  {
    entity: 'Traditional Event Agencies',
    strength: 'Tent setups, generic staging, and catering logistics',
    limitation: 'Zero understanding of developer culture, git repos, coding environments, or technical judging rubrics',
    voyageAdvantage: 'Technology-native engineers who understand API tracks, hardware constraints, and dev communities.',
  },
  {
    entity: 'Digital Marketing Agencies',
    strength: 'Social media graphics and online ad campaigns',
    limitation: 'Disconnected from registration workflows, physical operations, or participant experience',
    voyageAdvantage: 'Seamless coordination connecting promotional campaigns directly into check-ins and event-day delivery.',
  },
  {
    entity: 'Internal Student Committees',
    strength: 'Campus enthusiasm and local volunteer network',
    limitation: 'High turnover, lack of repeatable SOPs, stress from vendor negotiation and sponsorship dropouts',
    voyageAdvantage: 'Brings enterprise-grade structure, repeatable checklists, and professional accountability so students can focus on building.',
  },
];

export const VERIFIED_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-hacksphere',
    title: 'HackSphere 2026: 24-Hour Campus Hackathon',
    clientType: 'University Campus',
    format: 'Physical 24H Hackathon',
    date: 'September 2026',
    venue: 'Tech Auditorium, North Campus',
    participants: 420,
    submissionsCount: 78,
    conversionRate: '94% On-Ground Turnout',
    summary: 'A high-stakes 24-hour hackathon bringing together engineering students across 18 universities with corporate challenge tracks in AI and Fintech.',
    challenge: 'The college committee previously suffered from Wi-Fi collapse during midnight coding rounds, delayed judging deliberated past 4 AM, and severe participant drop-off.',
    voyageRole: 'End-to-end event production, dedicated dual-band Wi-Fi network setup with failover, automated judging rubric on custom portal, and 24-hour on-ground timekeeping.',
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
