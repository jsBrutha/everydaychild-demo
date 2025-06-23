import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PuzzleSection from "@/components/PuzzleSection";
import MissionSection from "@/components/MissionSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProgramHighlightSection from "@/components/ProgramHighlightSection";
import HowYouCanHelpSection from "@/components/HowYouCanHelpSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <HeroSection />
      <PuzzleSection />
      <MissionSection />
      <WhatWeDoSection />
      <ProgramHighlightSection />
      <HowYouCanHelpSection />
      <CTASection />
      <Footer />
    </div>
  );
}
