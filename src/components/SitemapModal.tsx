import React, { useState } from 'react';
import { 
  X, Search, Compass, ChevronRight, FileText, 
  ExternalLink, Sparkles, ShieldCheck, Zap, Cpu, Users, Award 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { COMPLETE_SITEMAP, SitemapCategory, SitemapItem } from '../data/sitemapData';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenDocument: (docId: string) => void;
  onOpenCareers: (roleId?: string) => void;
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onOpenCommunity: () => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
  onOpenDocument,
  onOpenCareers,
  onOpenRFP,
  onOpenCalculator,
  onOpenCommunity,
}) => {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-4 h-4 text-white" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-white" />;
      case 'Users': return <Users className="w-4 h-4 text-white" />;
      case 'Award': return <Award className="w-4 h-4 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-white" />;
      default: return <Compass className="w-4 h-4 text-white" />;
    }
  };

  const handleItemClick = (item: SitemapItem) => {
    onClose();
    if (item.type === 'section') {
      onNavigateToSection(item.target);
    } else if (item.type === 'document') {
      onOpenDocument(item.target);
    } else if (item.type === 'modal') {
      if (item.target === 'calculator') onOpenCalculator();
      else if (item.target === 'rfp') onOpenRFP();
      else if (item.target === 'community') onOpenCommunity();
      else if (item.target.startsWith('careers-role:')) {
        const roleId = item.target.replace('careers-role:', '');
        onOpenCareers(roleId);
      } else if (item.target === 'careers') {
        onOpenCareers();
      }
    }
  };

  const filteredCategories = COMPLETE_SITEMAP.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-zinc-950 border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-zinc-200 glow-card-featured"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center space-x-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <VoyageLogo size="xs" animated={false} />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block truncate">
                Architecture & Corporate Directory
              </span>
              <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate">
                Comprehensive VOYAGE Sitemap
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-zinc-950/90 shrink-0">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, operating systems, contracts, SLAs, careers..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black border border-white/20 text-white font-sans text-xs focus:outline-none focus:border-white transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Directory Content List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 bg-black/40">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-mono text-xs">
              No directory items matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredCategories.map((cat, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/15">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                        {cat.category}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-sans">{cat.description}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    {cat.items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      onClick={() => handleItemClick(item)}
                      className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/30 hover:bg-zinc-900/60 transition-all cursor-pointer group flex flex-col justify-between glow-card"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[9px] font-mono uppercase text-zinc-400 tracking-wider">
                            {item.type}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20 font-bold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs font-display font-bold text-white uppercase group-hover:text-glow transition">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-zinc-400 font-sans mt-1 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400 group-hover:text-white">
                        <span>Navigate</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
