import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHeroSection from "./_components/ContactHeroSection";
import ContactInfoSection from "./_components/ContactInfoSection";
import GeneralContactFormSection from "./_components/GeneralContactFormSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <GeneralContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
