import Image from "next/image";

export default function ContactHeroSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-wide text-gray-600">
              CONTACT US
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-gray-900">
              Reach Out Today
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions or
              inquiries.
            </p>
          </div>

          {/* Right Side - Contact Visual */}
          <div className="relative">
            <div className="relative w-full h-[300px] lg:h-[400px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/images/contact/hero.png"
                alt="Contact Hero Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
