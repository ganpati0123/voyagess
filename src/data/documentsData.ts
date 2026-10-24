export interface CorporateDocument {
  id: string;
  category: 'legal' | 'technical' | 'governance' | 'brand';
  title: string;
  subtitle: string;
  version: string;
  lastUpdated: string;
  classification: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const CORPORATE_DOCUMENTS: Record<string, CorporateDocument> = {
  msa: {
    id: 'msa',
    category: 'legal',
    title: 'Master Services Agreement (MSA)',
    subtitle: 'Standard Commercial Production & Technical Operations Terms',
    version: 'v4.2-2026',
    lastUpdated: 'January 15, 2026',
    classification: 'Commercial Contract Standard',
    summary: 'The binding Master Services Agreement governing all hackathon production, developer summit management, and technical logistics delivered by VOYAGE for university hosts and enterprise partners.',
    sections: [
      {
        heading: '1. Engagement Scope & The Turnkey Model',
        content: [
          '1.1 VOYAGE agrees to provide full-lifecycle event engineering services as detailed in the corresponding Statement of Work (SOW), including but not limited to venue physical staging, electrical load balancing, access control, registration portals, volunteer coordination, and Major League Hacking (MLH) season sanctioning workflows.',
          '1.2 Client commits to granting timely venue access at least eighteen (18) hours prior to the scheduled opening ceremony, along with requisite institutional administrative clearances.',
        ],
      },
      {
        heading: '2. Payment Architecture & Milestone Schedule',
        content: [
          '2.1 Standard billing operates on a 50 / 30 / 20 structured milestone delivery model:',
          '   • 50% Advance Commitment Deposit payable upon contract execution to reserve the production flight crew and initiate the MLH accreditation process.',
          '   • 30% Pre-Event Operational Tranche payable fourteen (14) calendar days prior to event commencement to fund vendor staging and equipment logistics.',
          '   • 20% Post-Event Closeout Retainer payable upon delivery of verified project repositories, cryptographic certificates, and audited outcome dossiers.',
          '2.2 All prices are exclusive of statutory taxes (GST at prevailing rates) unless explicitly denoted.',
        ],
      },
      {
        heading: '3. Official MLH Sanctioning Guarantee',
        content: [
          '3.1 Under the Turnkey Hackathon Package, VOYAGE contractually undertakes the filing, administrative liaison, and technical compliance verifications required for official Major League Hacking member event status.',
          '3.2 In the unprecedented event that an institutional partner fails to achieve sanctioning due to procedural default by VOYAGE, the accreditation management fee component is 100% refundable.',
        ],
      },
      {
        heading: '4. Intellectual Property & Code Ownership',
        content: [
          '4.1 All code, prototypes, and intellectual property developed by hackathon participants remain 100% the sole property of the respective builders and teams.',
          '4.2 Neither the Client, VOYAGE, nor corporate sponsors retain proprietary ownership rights over participant submissions, preserving the ethical integrity of open-source hackathons.',
        ],
      },
      {
        heading: '5. Limitation of Liability & Force Majeure',
        content: [
          '5.1 VOYAGE maintains comprehensive public liability insurance coverage for all temporary staging installations, electrical distribution rigs, and crew operations.',
          '5.2 Neither party shall be held liable for delays arising from natural disasters, municipal utility grid failures outside the redundant failover threshold, or government-imposed safety closures.',
        ],
      },
    ],
  },
  'network-sla': {
    id: 'network-sla',
    category: 'technical',
    title: 'Zero-Downtime Network SLA & Wi-Fi Guarantee',
    subtitle: 'Field Infrastructure Reliability & Throughput Standard',
    version: 'v3.8-2026',
    lastUpdated: 'February 10, 2026',
    classification: 'Technical Operational Specification',
    summary: 'The contractual Service Level Agreement guaranteeing high-density, uninterrupted wireless connectivity for all VOYAGE-managed hackathon bays and developer workspaces.',
    sections: [
      {
        heading: '1. Marquee 99.9% Uptime Commitment',
        content: [
          '1.1 VOYAGE warrants that wireless local area network (WLAN) connectivity across designated hacking halls will maintain an operational uptime of not less than 99.9% for the duration of the official hacking window.',
          '1.2 Permissible planned maintenance windows must be announced forty-eight (48) hours in advance and executed solely during designated participant sleep intervals.',
        ],
      },
      {
        heading: '2. Dual-WAN Redundancy & Instant Failover',
        content: [
          '2.1 Every VOYAGE hackathon installation requires at least two (2) physically independent upstream internet uplinks: a primary dedicated high-speed fiber line (minimum 1 Gbps symmetrical) and an isolated backup connection (enterprise 5G cellular aggregate or low-Earth orbit satellite array).',
          '2.2 Active automated failover protocol ensures that in the event of primary carrier disruption, traffic is rerouted within three (3) seconds without terminating active SSH sessions, Git pushes, or API calls.',
        ],
      },
      {
        heading: '3. High-Density Client Capacity',
        content: [
          '3.1 Wireless deployment utilizes enterprise Wi-Fi 6E/7 dual-band access points mapped at a strict ratio of not more than sixty (60) active client devices per radio channel.',
          '3.2 Intelligent dynamic RF beamforming and band-steering ensure seamless connectivity across high-density auditorium bleachers and dense round-table team bays.',
        ],
      },
      {
        heading: '4. Traffic Prioritization & Dev Quality-of-Service (QoS)',
        content: [
          '4.1 Layer-7 deep packet inspection is deployed on edge security gateways to prioritize development-critical protocols: Git clones, container registry pulls (Docker Hub, GHCR), package managers (npm, pip, Maven, Cargo), and AI model API endpoints.',
          '4.2 Bulk video streaming (4K YouTube, Twitch non-broadcast) and peer-to-peer file transfers are dynamically rate-limited to safeguard core developer throughput.',
        ],
      },
    ],
  },
  'code-of-conduct': {
    id: 'code-of-conduct',
    category: 'governance',
    title: 'Participant Code of Conduct & Anti-Harassment Standard',
    subtitle: 'Safety, Inclusivity, and Fair Competition Benchmarks',
    version: 'v2.6-2026',
    lastUpdated: 'March 01, 2026',
    classification: 'Community Governance Policy',
    summary: 'The universal code of conduct enforced across all VOYAGE hackathons, conferences, and digital spaces, adhering strictly to Major League Hacking guidelines.',
    sections: [
      {
        heading: '1. Core Community Pledge',
        content: [
          '1.1 VOYAGE is dedicated to providing a safe, welcoming, and harassment-free event environment for everyone, regardless of gender identity, sexual orientation, disability, physical appearance, race, ethnicity, religion, or coding experience level.',
          '1.2 We do not tolerate harassment of participants, mentors, sponsors, judges, or venue personnel in any form, physical or digital.',
        ],
      },
      {
        heading: '2. Academic Honesty & Fresh Code Standard',
        content: [
          '2.1 All project prototypes submitted for judging must be conceptualized and written during the designated hacking duration of the event.',
          '2.2 Pre-existing proprietary software or templates must be explicitly disclosed during project submission on Devpost. Open-source libraries and public APIs are enthusiastically encouraged provided proper attribution is maintained.',
          '2.3 Plagiarism, duplicate repository submissions across multiple simultaneous hackathons, or automated bot commits result in immediate team disqualification.',
        ],
      },
      {
        heading: '3. 24/7 Incident Escalation & Response Protocol',
        content: [
          '3.1 Every event features an on-ground Incident Response Lead stationed at the 24/7 VOYAGE Command Desk.',
          '3.2 In-person and anonymous reporting channels are active throughout the event duration. All reports receive an immediate on-site investigation and impartial review within thirty (30) minutes.',
          '3.3 Penalties for violations include formal warnings, immediate expulsion without refund or certification, and reporting to institutional authorities where applicable.',
        ],
      },
    ],
  },
  'privacy-policy': {
    id: 'privacy-policy',
    category: 'governance',
    title: 'Privacy Policy & Data Protection Standard',
    subtitle: 'Data Handling for Participants, Institutions & Corporate Sponsors',
    version: 'v3.1-2026',
    lastUpdated: 'January 20, 2026',
    classification: 'Data Privacy Standard',
    summary: 'How VOYAGE collects, processes, and protects personal information across registration portals, mobile apps, and sponsor recruitment pipelines.',
    sections: [
      {
        heading: '1. Information We Collect',
        content: [
          '1.1 During event registration and RFP submission, we collect essential operational data: full name, institutional email address, GitHub handle, university affiliation, dietary requirements, and portfolio links.',
          '1.2 On-site RFID or QR check-in systems record event arrival timestamps solely for fire safety headcounts and credential verification.',
        ],
      },
      {
        heading: '2. Sponsor Recruiting Data Opt-In',
        content: [
          '2.1 We never sell participant contact information. Builder resumes, GitHub profiles, and project links are shared with official event sponsors solely with explicit, affirmative participant opt-in during registration or resume drop.',
          '2.2 Participants may revoke sponsor recruitment sharing permissions at any time via a single email to privacy@voyagehacks.in.',
        ],
      },
      {
        heading: '3. Data Security & Storage Standard',
        content: [
          '3.1 All registration databases and submission records are encrypted at rest using AES-256 and transmitted exclusively via TLS 1.3.',
          '3.2 Post-event data retention is strictly limited: raw identification records are securely purged ninety (90) days following final prize distribution and certificate issuance.',
        ],
      },
    ],
  },
  'press-kit': {
    id: 'press-kit',
    category: 'brand',
    title: 'Media Kit & Brand Architecture Guidelines',
    subtitle: 'Official Wordmark, Emblem Vector Specs, and Editorial Voice',
    version: 'v2.0-2026',
    lastUpdated: 'February 15, 2026',
    classification: 'Brand Identity Specification',
    summary: 'Official brand guidelines, typography rules, SVG logo assets, and editorial voice guidelines for journalists, sponsors, and campus partners.',
    sections: [
      {
        heading: '1. Brand Nomenclature & Style',
        content: [
          '1.1 The brand name is written in all-caps: "VOYAGE". Do not spell as "Voyage Hacks" or "The Voyage Group" in formal publications.',
          '1.2 Our core motto is: "We believe in delivering smooth." It captures our ruthless focus on seamless execution, zero administrative friction, and high-performance technical engineering.',
        ],
      },
      {
        heading: '2. The Geometric V Emblem',
        content: [
          '2.1 The official VOYAGE emblem is an architectural 3D chevron-facet vector forming a sharp, luminous "V". It represents navigation, velocity, and technical precision.',
          '2.2 The emblem must always be rendered with minimum clear space equivalent to 50% of the emblem width, against a deep onyx or obsidian background (#000000 or #030303).',
        ],
      },
      {
        heading: '3. Typographic Hierarchy',
        content: [
          '3.1 Primary Display Font: Syne (Weight 700 / 800) for high-impact headlines and numbers.',
          '3.2 Body & Editorial Font: Plus Jakarta Sans for crystal-clear readability across dense documentation.',
          '3.3 Technical & Code Font: JetBrains Mono for metrics, tags, badges, and operational timestamps.',
        ],
      },
    ],
  },
  'about-company': {
    id: 'about-company',
    category: 'brand',
    title: 'About VOYAGE — The Flight Crew Story',
    subtitle: 'Engineered by Builders. Delivering White-Glove Technical Events.',
    version: 'v1.4-2026',
    lastUpdated: 'January 10, 2026',
    classification: 'Corporate Overview',
    summary: 'The genesis of VOYAGE: why we stopped tolerating broken campus hackathons, dropped Wi-Fi, and stressed student committees, and built the premier turnkey technical event production house.',
    sections: [
      {
        heading: '1. The Problem We Set Out to Solve',
        content: [
          'Every year, thousands of passionate engineering students spend months organizing campus hackathons, only to see them derailed by the same avoidable disasters: campus Wi-Fi collapsing under 500 laptops, sponsors pulling out due to messy communication, faculty hesitating over administrative red tape, and volunteer committees burning out midway through the night.',
          'Traditional event vendors understand flowers and wedding stages, but they know nothing about GitHub, dual-WAN failover, or developer culture. Meanwhile, passive online submission platforms give you a URL, but no one on the ground to fix a blown circuit breaker at 3 AM.',
        ],
      },
      {
        heading: '2. The VOYAGE Standard',
        content: [
          'VOYAGE was founded to bridge this divide. We are seasoned hackathon winners, network engineers, and developer advocates who treat technical events as precision aerospace operations.',
          'We bring official MLH season sanctioning, enterprise network hardware, bespoke judging portals, and a disciplined volunteer brigade to your campus. You supply the venue and student passion—we handle every line of logistics from first permit to final trophy.',
        ],
      },
      {
        heading: '3. Synergy with the GRID Community',
        content: [
          'Beyond our commercial production house, we foster GRID—an organic ecosystem of 2,000+ active student builders, designers, and open-source contributors across 40+ premier colleges.',
          'This dual-pillar model gives VOYAGE an unbeatable advantage: instant organic developer reach combined with enterprise-grade physical execution.',
        ],
      },
    ],
  },
};
