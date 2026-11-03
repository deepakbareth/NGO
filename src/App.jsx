import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrgentAppeal from './components/UrgentAppeal';
import Causes from './components/Causes';
import ImpactCalculator from './components/ImpactCalculator';
import TrustAndImpact from './components/TrustAndImpact';
import Stories from './components/Stories';
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* 1. Sleek Glassy Navbar */}
      <Navbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      <main className="flex-1 space-y-4 sm:space-y-8">
        {/* 2. Hero: Modern, Glassy, Punchy */}
        <Hero
          onOpenDonate={() => handleOpenDonate({ amount: 2500 })}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 3. Urgent Ground Appeal */}
        <UrgentAppeal
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 4. Top 3 Targeted Causes */}
        <Causes
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 5. Interactive Impact Calculator */}
        <ImpactCalculator
          onOpenDonate={(data) => handleOpenDonate(data)}
        />

        {/* 6. Consolidated Trust & Audited Proof */}
        <TrustAndImpact />

        {/* 7. Voices of Hope (Stories) */}
        <Stories
          onOpenDonate={(data) => handleOpenDonate(data)}
        />
      </main>

      {/* 8. Streamlined High-Trust Footer */}
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
