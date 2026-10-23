# VOYAGE — Corporate Brand & Turnkey Event Platform

Elevate the VOYAGE web platform into an elite, international corporate technical event production brand. Remove all internal PDF draft jargon and conversational text, replacing them with crisp editorial English, generous whitespace, smooth depth motion, and the pure code-generated 3D sculptural emblem.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and will govern the build:
> - **Primary Headline**: "High-Performance Technical Events for Colleges and Startups"
> - **Audience Focus**: University Hackathons, Campus Technical Fests & Enterprise Innovation Sprints
> - **Visual Direction**: Smooth corporate editorial with generous whitespace, deep obsidian (`#030303`), razor-sharp white typography, and subtle ambient light depth
> - **Content Hygiene**: 100% removal of internal draft notes, SOP numbers, and conversational text. All public copy will be concise, authoritative, and professional.

---

## 1. Overview & Core Concept

- **What It Does**: VOYAGE is a full-service technical event production firm. It provides turnkey delivery for 24H/48H campus hackathons, developer bootcamps, and corporate innovation sprints.
- **The Turnkey Model**: Organizers provide the mandate and budget; VOYAGE delivers the complete operational stack:
  1. **Venue & Production**: Staging, electrical infrastructure, high-wattage power, and AV.
  2. **Technical Pipeline**: Dual-band zero-downtime Wi-Fi failover, automated GitHub code tracking, and multi-criteria judging portals.
  3. **MLH-Standard Ecosystem**: International judging rubrics, verified problem tracks, and partner sponsor deliverables.
  4. **Human Execution**: Dedicated on-ground volunteer brigade, timekeeping MCs, and safety protocols.
  5. **Developer Reach**: Immediate distribution to 2,000+ vetted engineers via the GRID developer network.
- **Target Audience**: University department heads, faculty coordinators, student tech societies, startup DevRel teams, and enterprise innovation directors.

---

## 2. User Experience & Visual Design

- **Visual Identity & Theme**:
  - *Palette*: Deep Void Obsidian (`#030303` / `#09090b`), surgical stark white (`#ffffff`), titanium steel accents (`#71717a` / `#27272a`).
  - *Whitespace & Spatial Math*: Generous vertical spacing (`py-32`), uncluttered container margins, and zero text walls.
  - *Typography*: High-fashion display sans (`Syne`) paired with technical precision font (`JetBrains Mono`) and refined geometric sans (`Plus Jakarta Sans`).
  - *Logo*: The pure mathematical code-generated 3D origami blade emblem (`VoyageLogo.tsx`) with living edge light reflection.
- **Key User Flows**:
  1. **Hero Proposition**: Immediate clarity on turnkey capabilities with interactive "Turnkey vs Traditional" model comparison.
  2. **Three Core Delivery Pillars**: Venue & Staging · MLH Standards & Portal · On-Ground Volunteer Brigade.
  3. **Modular Service Packages**: Campus Hackathon, Developer Workshop, Digital Infrastructure, Enterprise Innovation.
  4. **Interactive SOW Estimator**: Clean slider calculating transparent management fees and 50/30/20 cash flow milestones with printable SOW generator.
  5. **Discovery RFP Intake**: Concise corporate inquiry form issuing immediate consultation tokens.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Removal of Internal Blueprint Artifacts**
  - *Chosen Approach*: Strip out all mechanical PDF draft annotations ("SOP 8.3", "Section 10.1", "Rebrand Safeguards", "Draft v1.0").
  - *Why*: The website must read like an elite public-facing enterprise agency, not an internal strategy memo.
- **Decision 2: 100% International Corporate English**
  - *Chosen Approach*: Replace raw conversational chat explanations with polished executive copy.
  - *Why*: Builds institutional trust with university deans, college trustees, and corporate sponsors.
- **Decision 3: Code-Generated 3D Vector Emblem**
  - *Chosen Approach*: Mathematical SVG with dual faceted blades and continuous specular pulse, replacing all raster image dependencies.
  - *Why*: Instant loading, crisp rendering at all DPIs, and dynamic lighting animation without asset latency.

---

## 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────┐
│                      src/App.tsx                       │
├────────────────────────────────────────────────────────┤
│ ├── LogoIntro.tsx          (Animated Laser Flow Intro) │
│ ├── Header.tsx             (Minimal Nav & Logo Emblem) │
│ ├── HeroSection.tsx        (Core Value Prop & Metrics) │
│ ├── TurnkeyModel.tsx       (The 3 Pillars of Delivery) │
│ ├── ServicesSection.tsx    (Packages & Pricing SOW)    │
│ ├── EcosystemSection.tsx   (VOYAGE + GRID + MLH)       │
│ ├── ProofSection.tsx       (Quantified Field Metrics)  │
│ ├── Footer.tsx             (Corporate Mirror & Links)  │
│ ├── SOWEstimatorModal.tsx  (Budget & SOW Generator)    │
│ └── RFPModal.tsx           (Discovery Brief Intake)    │
└────────────────────────────────────────────────────────┘
```

### Component & State Mapping

- **`VoyageLogo.tsx`**: Pure SVG rendering left white faceted wing and right titanium wing with continuous edge animation.
- **`HeroSection.tsx`**: Single-line punchy headlines with interactive model switcher and direct RFP triggers.
- **`TurnkeyModel.tsx`**: Clean 3-column asymmetric layout illustrating how VOYAGE handles venue, MLH, and volunteers.
- **`ServicesSection.tsx`**: Refined 4-card matrix with fixed price brackets (`₹5,000` to `₹1,00,000+`) and explicit deliverables.
- **`SOWEstimatorModal.tsx`**: Real-time financial allocator calculating labour, tools, and contingency with exportable SOW sheet.
