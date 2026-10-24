export interface SitemapItem {
  title: string;
  desc: string;
  type: 'section' | 'document' | 'modal' | 'action';
  target: string; // section ID or document key or modal trigger
  badge?: string;
  isExternal?: boolean;
}

export interface SitemapCategory {
  category: string;
  iconName: string;
  description: string;
  items: SitemapItem[];
}

export const COMPLETE_SITEMAP: SitemapCategory[] = [
  {
    category: 'Commercial Production Services',
    iconName: 'Zap',
    description: 'Turnkey technical production packages and custom event engineering scopes.',
    items: [
      {
        title: 'Flagship Campus Hackathon (24H/48H)',
        desc: 'Comprehensive 36-hour physical production, MLH sanctioning, Wi-Fi failover, and judging logistics.',
        type: 'section',
        target: 'packages',
        badge: 'Crown Flagship',
      },
      {
        title: 'Developer Summit & Keynote Stagecraft',
        desc: 'High-production technical conferences with multi-track workshops and 4K livestream broadcasts.',
        type: 'section',
        target: 'packages',
      },
      {
        title: 'Hands-On Technical Workshops',
        desc: 'Curated deep-dive labs for AI/LLM models, systems engineering, and cloud platforms.',
        type: 'section',
        target: 'packages',
      },
      {
        title: 'Official MLH Season Sanctioning',
        desc: 'Securing the prestigious Major League Hacking accreditation granted to <2% of global collegiate events.',
        type: 'section',
        target: 'mlh-tag',
        badge: 'Guaranteed',
      },
      {
        title: 'Interactive SOW Budget Estimator',
        desc: 'Transparent milestone pricing calculator with real-time attendee and hardware add-on modeling.',
        type: 'modal',
        target: 'calculator',
        badge: 'Interactive',
      },
      {
        title: 'Instant Discovery RFP Brief',
        desc: 'Streamlined 3-step proposal request for university deans, student clubs, and tech foundations.',
        type: 'modal',
        target: 'rfp',
      },
    ],
  },
  {
    category: 'The VOYAGE Operating System',
    iconName: 'Cpu',
    description: 'End-to-end operational architecture and battle-tested execution protocols.',
    items: [
      {
        title: '6-Stage Event Execution Playbook',
        desc: 'From initial campus discovery and faculty sanctioning to 24/7 War Room and post-event audits.',
        type: 'section',
        target: 'turnkey',
      },
      {
        title: 'Zero-Downtime Network SLA & Wi-Fi Rig',
        desc: 'Enterprise dual-WAN failover, Ubiquiti high-density AP arrays, and dev traffic QoS.',
        type: 'document',
        target: 'network-sla',
        badge: '99.9% Uptime',
      },
      {
        title: 'Dedicated Volunteer Brigade Protocol',
        desc: 'Trained on-ground operational leads eliminating student committee burnout.',
        type: 'section',
        target: 'turnkey',
      },
      {
        title: 'Sponsor ROI & Telemetry Engine',
        desc: 'Real-time developer engagement metrics, API adoption tracking, and verified project outcomes.',
        type: 'section',
        target: 'matrix',
      },
      {
        title: 'Audited Field Proof & Case Studies',
        desc: 'Verified track records from CodeVoyage ‘25 (1,200 builders) and national hackathon tours.',
        type: 'section',
        target: 'proof',
      },
    ],
  },
  {
    category: 'Ecosystem & Community',
    iconName: 'Users',
    description: 'The dual-pillar synergy between VOYAGE Commercial and the GRID Developer Community.',
    items: [
      {
        title: 'VOYAGE Brand Architecture',
        desc: 'How our commercial production house fuels and operates alongside organic builder networks.',
        type: 'section',
        target: 'ecosystem',
      },
      {
        title: 'GRID Developer Network (2,000+ Builders)',
        desc: 'Verified student coders, designers, and hackathon veterans across 40+ premier tech universities.',
        type: 'modal',
        target: 'community',
        badge: '2K+ Active',
      },
      {
        title: 'Campus Chapter Fellowship',
        desc: 'Student leadership grants and ambassador scout positions on major engineering campuses.',
        type: 'modal',
        target: 'careers',
        badge: 'Stipend',
      },
      {
        title: 'Competitive Distinction Matrix',
        desc: 'Detailed breakdown comparing VOYAGE against student committees, software portals, and generic agencies.',
        type: 'section',
        target: 'matrix',
      },
    ],
  },
  {
    category: 'Careers & Flight Crew (We’re Hiring)',
    iconName: 'Award',
    description: 'Join the crew engineering high-performance technical events across the world.',
    items: [
      {
        title: 'Explore All Open Roles (5 Openings)',
        desc: 'Operations leads, network engineers, DevRel managers, stagecraft directors, and campus ambassadors.',
        type: 'modal',
        target: 'careers',
        badge: 'We’re Hiring',
      },
      {
        title: 'Lead Hackathon Operations Architect',
        desc: 'Full-time / High Retainer commanding live 36-hour hackathons and volunteer brigades.',
        type: 'modal',
        target: 'careers-role:lead-hackathon-ops',
      },
      {
        title: 'Dual-WAN Network Infrastructure Engineer',
        desc: 'Deploying zero-drop temporary enterprise wireless rigs for 1,000+ developers.',
        type: 'modal',
        target: 'careers-role:network-infra-engineer',
      },
      {
        title: 'Developer Relations & Sponsor Success',
        desc: 'Curating custom sponsor hack tracks, bounties, and technical workshops.',
        type: 'modal',
        target: 'careers-role:devrel-sponsor-manager',
      },
      {
        title: 'Director of Live Keynotes & Stagecraft',
        desc: 'Directing multi-camera 4K broadcasts, LED walls, and closing ceremony spectacles.',
        type: 'modal',
        target: 'careers-role:live-keynote-stage-director',
      },
      {
        title: 'Campus Chapter Ambassador Fellowship',
        desc: 'Student scout fellowship bringing VOYAGE hackathons to your campus.',
        type: 'modal',
        target: 'careers-role:campus-ambassador-fellow',
      },
    ],
  },
  {
    category: 'Trust, Governance & Legal Center',
    iconName: 'ShieldCheck',
    description: 'Corporate contracts, safety policies, data governance, and brand assets.',
    items: [
      {
        title: 'Master Services Agreement (MSA)',
        desc: 'Full commercial production contract, 50/30/20 payment terms, and intellectual property terms.',
        type: 'document',
        target: 'msa',
        badge: 'Contract Standard',
      },
      {
        title: 'Participant Code of Conduct',
        desc: 'Zero-tolerance anti-harassment policy, academic integrity rules, and 24/7 incident response matrix.',
        type: 'document',
        target: 'code-of-conduct',
        badge: 'MLH Aligned',
      },
      {
        title: 'Privacy Policy & Data Protection',
        desc: 'Participant personal data handling, sponsor recruitment opt-in, and AES-256 storage standards.',
        type: 'document',
        target: 'privacy-policy',
      },
      {
        title: 'About VOYAGE — Flight Crew Story',
        desc: 'Our founding vision, philosophy of delivering smooth, and commitment to student builders.',
        type: 'document',
        target: 'about-company',
      },
      {
        title: 'Media Kit & Brand Identity Guidelines',
        desc: 'Official wordmark vector files, typography specifications, and color values.',
        type: 'document',
        target: 'press-kit',
      },
    ],
  },
];
