export type ServiceTier = 'launch' | 'workshop' | 'hackathon' | 'corporate';

export interface ServicePackage {
  id: ServiceTier;
  name: string;
  tagline: string;
  priceRange: string;
  basePriceINR: number;
  timeline: string;
  targetAudience: string;
  scopeSummary: string;
  deliverables: string[];
  excludedItems: string[];
  recommendedFor: string;
  badge?: string;
}

export interface AddonService {
  id: string;
  name: string;
  description: string;
  priceINR: number;
  category: 'technical' | 'production' | 'marketing' | 'post-event';
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: 'University Campus' | 'Tech Startup' | 'Developer Community' | 'Corporate Innovation';
  format: 'Physical 24H Hackathon' | 'Hybrid Workshop Series' | 'Developer Conference';
  date: string;
  venue: string;
  participants: number;
  submissionsCount?: number;
  conversionRate: string;
  summary: string;
  challenge: string;
  voyageRole: string;
  outcomes: string[];
  clientQuote?: {
    text: string;
    author: string;
    title: string;
  };
}

export interface OperatingPhase {
  phaseNumber: number;
  name: string;
  timeline: string;
  coreActions: string[];
  requiredArtifact: string;
  ownership: string;
}

export interface EventRole {
  role: string;
  focus: string;
  responsibilities: string[];
}

export interface ProposalRequest {
  id: string;
  organisationName: string;
  contactName: string;
  email: string;
  phone: string;
  eventType: string;
  expectedAttendees: number;
  preferredDate: string;
  budgetRange: string;
  selectedPackage: ServiceTier;
  selectedAddons: string[];
  internalTasksCovered: string;
  specialRequirements: string;
  createdAt: string;
}
