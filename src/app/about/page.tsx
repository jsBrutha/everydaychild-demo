import Header from "@/components/Header";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutMissionSection from "./_components/AboutMissionSection";
import AboutCoreValuesSection from "./_components/AboutCoreValuesSection";
import AboutTeamSection from "./_components/AboutTeamSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutCoreValuesSection />
      <AboutTeamSection />
      <CTASection />

      <Footer />
    </div>
  );
}
