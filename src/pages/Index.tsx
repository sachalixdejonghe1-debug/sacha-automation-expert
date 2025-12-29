import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ParcoursSection from '@/components/ParcoursSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import CompetencesSection from '@/components/CompetencesSection';
import VisionSection from '@/components/VisionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sacha | Expert Marketing Digital & Automatisation</title>
        <meta
          name="description"
          content="Portfolio de Sacha, futur diplômé en Marketing Digital et expert en automatisation (n8n, Make). Découvrez mes projets et compétences pour booster votre marketing."
        />
        <meta
          name="keywords"
          content="marketing digital, automatisation, n8n, Make, Integromat, marketing automation, Belgique, Condorcet"
        />
        <link rel="canonical" href="https://sacha-portfolio.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ParcoursSection />
          <ExperiencesSection />
          <CompetencesSection />
          <VisionSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
