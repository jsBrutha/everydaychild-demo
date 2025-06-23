import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipHeroSection from "../_components/PartnershipHeroSection";
import BankDetailsSection from "../_components/BankDetailsSection";
import DonationHelpSection from "../_components/DonationHelpSection";
import ContactFormSection from "../_components/ContactFormSection";

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PartnershipHeroSection />
        <ContactFormSection />
        <BankDetailsSection />
        <DonationHelpSection />
      </main>
      <Footer />
    </div>
  );
}
