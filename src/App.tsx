import React, { useState } from 'react';
import { Header } from './components/Header';
import { LogoIntro } from './components/LogoIntro';
import { HeroSection } from './components/HeroSection';
import { MLHAccreditationSection } from './components/MLHAccreditationSection';
import { HowItWorks } from './components/HowItWorks';
import { ServicesSection } from './components/ServicesSection';
import { BrandArchitectureSection } from './components/BrandArchitectureSection';
import { CompetitiveAdvantageSection } from './components/CompetitiveAdvantageSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CareersSection } from './components/CareersSection';
import { ProposalBuilderModal } from './components/ProposalBuilderModal';
import { RFPModal } from './components/RFPModal';
import { GridCommunityModal } from './components/GridCommunityModal';
import { CareersModal } from './components/CareersModal';
import { SitemapModal } from './components/SitemapModal';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { Footer } from './components/Footer';
import { ServiceTier, ProposalRequest } from './types';
import { CheckCircle2, X } from 'lucide-react';

export function App() {
  const [showLogoIntro, setShowLogoIntro] = useState<boolean>(true);
  const [isRFPOpen, setIsRFPOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [selectedCareerRoleId, setSelectedCareerRoleId] = useState<string | undefined>(undefined);
  const [isSitemapModalOpen, setIsSitemapModalOpen] = useState(false);
  const [isDocViewerOpen, setIsDocViewerOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string>('msa');

  const [selectedServiceForSOW, setSelectedServiceForSOW] = useState<ServiceTier>('hackathon');
  const [sowConfigData, setSowConfigData] = useState<{
    attendees?: number;
    duration?: string;
    addons?: string[];
    estimatedTotal?: number;
  } | undefined>(undefined);
  const [recentRFP, setRecentRFP] = useState<ProposalRequest | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForSOW = (pkgId: ServiceTier) => {
    setSelectedServiceForSOW(pkgId);
    setIsCalculatorOpen(true);
  };

  const handleOpenRFPWithPackage = (pkgId: ServiceTier) => {
    setSelectedServiceForSOW(pkgId);
    setIsRFPOpen(true);
  };

  const handleProceedFromSOWToRFP = (config: {
    packageId: ServiceTier;
    attendees: number;
    duration: string;
    addons: string[];
    estimatedTotal: number;
  }) => {
    setSelectedServiceForSOW(config.packageId);
    setSowConfigData(config);
    setIsCalculatorOpen(false);
    setIsRFPOpen(true);
  };

  const handleOpenCareers = (roleId?: string) => {
    setSelectedCareerRoleId(roleId);
    setIsCareersModalOpen(true);
  };

  const handleOpenDocument = (docId: string) => {
    setSelectedDocId(docId);
    setIsDocViewerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-white selection:text-black flex flex-col font-sans relative overflow-x-hidden">
      {/* Interactive V-Logo Specular Flow Replay Modal */}
      <LogoIntro
        isOpen={showLogoIntro}
        onComplete={() => setShowLogoIntro(false)}
      />

      {/* Discreet Sticky Notice when an RFP is logged */}
      {recentRFP && (
        <aside 
          aria-label="Proposal Confirmation"
          className="bg-zinc-950/95 border-b border-white/20 text-white text-xs font-mono py-2.5 px-4 sticky top-0 z-50 flex items-center justify-between backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 max-w-4xl mx-auto truncate">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">
              Discovery Brief <strong>{recentRFP.id}</strong> logged for <strong>{recentRFP.organisationName}</strong>. Discovery call scheduled within 24h.
            </span>
          </div>
          <button
            onClick={() => setRecentRFP(null)}
            className="text-zinc-400 hover:text-white p-1 cursor-pointer"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Navigation Header adhering to 3-Zone Top Bar Contract */}
      <Header
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCareers={handleOpenCareers}
        onOpenSitemap={() => setIsSitemapModalOpen(true)}
        onOpenDocument={handleOpenDocument}
        onReplayIntro={() => setShowLogoIntro(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections with Generous Whitespace */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenRFP={() => setIsRFPOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onReplayIntro={() => setShowLogoIntro(true)}
          onNavigate={scrollToSection}
        />

        {/* The Crown Jewel USP: Official MLH Tag Sanctioning */}
        <MLHAccreditationSection
          onOpenRFP={() => setIsRFPOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* The Turnkey Operating Model */}
        <HowItWorks
          onOpenRFP={() => setIsRFPOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Modular Packages & Scope */}
        <ServicesSection
          onSelectPackageForSOW={handleSelectPackageForSOW}
          onOpenRFPWithPackage={handleOpenRFPWithPackage}
        />

        {/* Brand Synergy: VOYAGE (The Agency) + GRID (2K+ Community) */}
        <BrandArchitectureSection />

        {/* Strategic Distinction Matrix */}
        <CompetitiveAdvantageSection />

        {/* Verified Field Proof & Audited Case Studies */}
        <CaseStudiesSection />

        {/* Dedicated Careers & Flight Crew Section */}
        <CareersSection
          onOpenCareers={handleOpenCareers}
          onOpenRFP={() => setIsRFPOpen(true)}
        />
      </main>

      {/* Comprehensive Corporate Editorial Footer & Sitemap */}
      <Footer
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCommunity={() => setIsCommunityModalOpen(true)}
        onOpenCareers={handleOpenCareers}
        onOpenSitemap={() => setIsSitemapModalOpen(true)}
        onOpenDocument={handleOpenDocument}
        onNavigate={scrollToSection}
      />

      {/* Interactive SOW Budget Estimator Modal */}
      <ProposalBuilderModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialPackage={selectedServiceForSOW}
        onProceedToRFP={handleProceedFromSOWToRFP}
      />

      {/* Instant Discovery RFP Walkthrough Modal */}
      <RFPModal
        isOpen={isRFPOpen}
        onClose={() => setIsRFPOpen(false)}
        preselectedPackage={selectedServiceForSOW}
        initialData={sowConfigData}
        onSubmitSuccess={(data) => {
          setRecentRFP(data);
        }}
      />

      {/* GRID Community Synergy Modal */}
      <GridCommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />

      {/* Full-Featured Pro Careers & Job Application Modal */}
      <CareersModal
        isOpen={isCareersModalOpen}
        onClose={() => setIsCareersModalOpen(false)}
        preselectedRoleId={selectedCareerRoleId}
      />

      {/* Complete Corporate Sitemap Directory Modal */}
      <SitemapModal
        isOpen={isSitemapModalOpen}
        onClose={() => setIsSitemapModalOpen(false)}
        onNavigateToSection={scrollToSection}
        onOpenDocument={handleOpenDocument}
        onOpenCareers={handleOpenCareers}
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCommunity={() => setIsCommunityModalOpen(true)}
      />

      {/* Real Editorial Legal, SLA & Corporate Document Reader Modal */}
      <DocumentViewerModal
        isOpen={isDocViewerOpen}
        onClose={() => setIsDocViewerOpen(false)}
        initialDocId={selectedDocId}
        onOpenRFP={() => setIsRFPOpen(true)}
      />
    </div>
  );
}

export default App;
