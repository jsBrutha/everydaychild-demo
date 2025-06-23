import Image from "next/image";

export default function GalleryHeroSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image with Overlay Text */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/images/about/hero-desktop.png"
            alt="Children in classroom - Gallery hero"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white space-y-4 max-w-2xl px-4">
              <p className="text-sm font-medium tracking-wide uppercase">
                OUR GALLERY
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display">
                Impact in Every Frame
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed">
                See the impact of our work through these moments captured across
                Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
