import React, { useState } from 'react';
import TopTrustBar from './components/TopTrustBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrgentAppeal from './components/UrgentAppeal';
import Causes from './components/Causes';
import ImpactCalculator from './components/ImpactCalculator';
import ImpactStats from './components/ImpactStats';
import Stories from './components/Stories';
import Transparency from './components/Transparency';
import PartnersTestimonials from './components/PartnersTestimonials';
import FaqSection from './components/FaqSection';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [donationModalState, setDonationModalState] = useState({
    isOpen: false,
    initialData: {}
  });

  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenDonate = (initialData = {}) => {
    setDonationModalState({
      isOpen: true,
      initialData
    });
  };

  const handleCloseDonate = () => {
    setDonationModalState({
      isOpen: false,
      initialData: {}
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-200 selection:text-emerald-950 font-sans">
      
      {/* 1. Top Trust & Compliance Bar */}
      <TopTrustBar onOpenDonate={() => handleOpenDonate()} />

      {/* 2. Main Navigation Header */}
      <Navbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section: The Dignity Catalyst */}
        <Hero
          onOpenDonate={() => handleOpenDonate({ amount: 2500 })}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 4. Urgent Appeal Spotlight: Winter Warmth Drive */}
        <UrgentAppeal
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 5. Core Causes & Programs (Grid with Filter Tabs) */}
        <Causes
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 6. Interactive Impact Calculator (Tangible Rupee Conversion) */}
        <ImpactCalculator
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 7. Proof of Work & 14-Year Milestones */}
        <ImpactStats />

        {/* 8. Dignified Human Stories of Transformation */}
        <Stories
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 9. Financial Transparency, Audits & Trustees */}
        <Transparency />

        {/* 10. CSR Partners & Community Testimonials */}
        <PartnersTestimonials />

        {/* 11. Conscientious Donor FAQ (80G, FCRA, Visits) */}
        <FaqSection
          onOpenDonate={() => handleOpenDonate()}
        />

        {/* 12. Get Involved: Volunteer & Corporate CSR */}
        <GetInvolved
          onOpenVolunteer={() => setVolunteerModalOpen(true)}
          onOpenDonate={(data) => handleOpenDonate(data)}
        />
      </main>

      {/* 13. High-Trust Legal Footer & Direct Bank Rails */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={donationModalState.isOpen}
        onClose={handleCloseDonate}
        initialData={donationModalState.initialData}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenDonate={() => handleOpenDonate()}
      />

    </div>
  );
}
