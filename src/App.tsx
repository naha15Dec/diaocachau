import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Positions } from './components/Positions';
import { Benefits } from './components/Benefits';
import { WorkEnvironment } from './components/WorkEnvironment';
import { RecruitmentProcess } from './components/RecruitmentProcess';
import { ApplicationForm } from './components/ApplicationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { PrivacyModal } from './components/PrivacyModal';
import type { JobPosition } from './types';

export function App() {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition>('Chuyên viên kinh doanh');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const scrollToApply = (position?: JobPosition) => {
    if (position) {
      setSelectedPosition(position);
    }
    const elem = document.getElementById('apply');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPositions = () => {
    const elem = document.getElementById('positions');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-app">
      {/* Header */}
      <Header onApplyClick={() => scrollToApply()} />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onApplyClick={() => scrollToApply()}
          onExploreClick={scrollToPositions}
        />

        {/* Positions Section */}
        <Positions onSelectPosition={(pos) => scrollToApply(pos)} />

        {/* Benefits Section */}
        <Benefits />

        {/* Work Environment Section */}
        <WorkEnvironment />

        {/* Recruitment Process Section */}
        <RecruitmentProcess />

        {/* Application Form Section */}
        <ApplicationForm
          selectedPosition={selectedPosition}
          onPositionChange={setSelectedPosition}
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Quick Floating Contacts (Hotline & Zalo) */}
      <FloatingContact />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
