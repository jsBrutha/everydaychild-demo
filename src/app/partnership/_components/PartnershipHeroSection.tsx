import Image from "next/image";

export default function PartnershipHeroSection() {
  return (
    <section className="bg-white px-4 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-base lg:text-sm font-medium tracking-wide font-display lg:font-sans text-gray-600 mb-4">
            SCHOOLS
          </p>
          <h1 className="text-3xl md:text-[49px] lg:text-5xl xl:text-6xl font-semibold  text-gray-900 mb-4 lg:mb-6 font-display">
            Become a Partner
          </h1>
          <p className="text-base lg:text-xl font-sans font-medium lg:font-normal max-w-[431px] lg:max-w-2xl text-gray-700 mx-auto">
            Join hands with us to make education accessible to every child in
            Nigeria.
          </p>
        </div>

        {/* Images - Responsive Layout */}
        <div className="space-y-6 lg:space-y-0 lg:flex lg:gap-6 lg:justify-center">
          <div className="relative w-full lg:flex-1 h-[214px] lg:h-[280px] rounded-2xl overflow-hidden border-4 border-primary-blue lg:border-0 lg:flex-shrink-0">
            <Image
              src="/images/partnership/hero-left.png"
              alt="Students in classroom"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full lg:basis-[628px] h-[214px] lg:h-[280px] rounded-2xl overflow-hidden lg:flex-shrink-0">
            <Image
              src="/images/partnership/hero-center.png"
              alt="Children at school window"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full lg:flex-1 h-[214px] lg:h-[280px] rounded-2xl overflow-hidden lg:flex-shrink-0">
            <Image
              src="/images/partnership/hero-right.png"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
