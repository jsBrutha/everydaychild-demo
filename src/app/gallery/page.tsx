import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryHeroSection from "./_components/GalleryHeroSection";
import PhotoGridSection from "./_components/PhotoGridSection";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GalleryHeroSection />
        <PhotoGridSection />
      </main>
      <Footer />
    </div>
  );
}
