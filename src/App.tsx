import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LogoIntro } from './components/LogoIntro';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { ServicesSection } from './components/ServicesSection';
import { BrandArchitectureSection } from './components/BrandArchitectureSection';
import { CompetitiveAdvantageSection } from './components/CompetitiveAdvantageSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProposalBuilderModal } from './components/ProposalBuilderModal';
import { RFPModal } from './components/RFPModal';
import { GridCommunityModal } from './components/GridCommunityModal';
import { Footer } from './components/Footer';
import { ServiceTier, ProposalRequest } from './types';
import { CheckCircle2, X } from 'lucide-react';

export function App() {
  const [showLogoIntro, setShowLogoIntro] = useState<boolean>(true);
  const [isRFPOpen, setIsRFPOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col font-sans">
      {/* V-Logo Light Flow Preloader Intro */}
      <LogoIntro
        isOpen={showLogoIntro}
        onComplete={() => setShowLogoIntro(false)}
      />

      {/* Top Banner Notice if Proposal Dispatched */}
      {recentRFP && (
        <div className="bg-zinc-900 border-b border-white/20 text-white text-xs font-mono py-2.5 px-4 sticky top-0 z-50 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center space-x-2 max-w-4xl mx-auto truncate">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">
              Proposal Request <strong>{recentRFP.id}</strong> logged for <strong>{recentRFP.organisationName}</strong>. Discovery brief queued.
            </span>
          </div>
          <button
            onClick={() => setRecentRFP(null)}
            className="text-zinc-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onReplayIntro={() => setShowLogoIntro(true)}
        onNavigate={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onReplayIntro={() => setShowLogoIntro(true)}
        onNavigate={scrollToSection}
      />

      {/* The Turnkey Event Model */}
      <HowItWorks
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Services & Packages Section */}
      <ServicesSection
        onSelectPackageForSOW={handleSelectPackageForSOW}
        onOpenRFPWithPackage={handleOpenRFPWithPackage}
      />

      {/* Two Pillars: VOYAGE (The Company) + GRID (2,000+ Community) */}
      <BrandArchitectureSection />

      {/* Strategic Distinction & Competitive Matrix */}
      <CompetitiveAdvantageSection />

      {/* Verified Field Proof & Case Studies */}
      <CaseStudiesSection />

      {/* Footer */}
      <Footer
        onOpenRFP={() => setIsRFPOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCommunity={() => setIsCommunityModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Interactive SOW Proposal & Budget Estimator Modal */}
      <ProposalBuilderModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialPackage={selectedServiceForSOW}
        onProceedToRFP={handleProceedFromSOWToRFP}
      />

      {/* Discovery RFP Request Modal */}
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
    </div>
  );
}

export default App;
