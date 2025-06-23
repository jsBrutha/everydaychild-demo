import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipHeroSection from "../_components/PartnershipHeroSection";
import PartnershipTiersSection from "../_components/PartnershipTiersSection";
import BankDetailsSection from "../_components/BankDetailsSection";
import DonationHelpSection from "../_components/DonationHelpSection";

export default function OrganisationAndIndividualsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PartnershipHeroSection />
        <PartnershipTiersSection />
        <BankDetailsSection />
        <DonationHelpSection />
      </main>
      <Footer />
    </div>
  );
}
