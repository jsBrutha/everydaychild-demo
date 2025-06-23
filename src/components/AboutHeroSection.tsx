"use client";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col   gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 ">
            {/* About Us Label */}
            <div className="inline-block mb-4">
              <span className="text-base font-medium  uppercase tracking-wider font-display ">
                ABOUT US
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black  leading-tight font-display">
              Education for Every Child
            </h1>

            {/* Subtitle */}
            <p className="text-base font-medium text-gray-700 leading-relaxed max-w-[430px] ">
              Learn more about EveryChild International and our mission to help
              out-of-school children in Nigeria.
            </p>
          </div>

          {/* Images Section */}
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="relative h-[1174.35px] w-full">
              <Image
                src="/images/about/hero-mobile.png"
                alt="Girl holding colorful books"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative h-[384.35px] w-full">
              <Image
                src="/images/about/hero-desktop.png"
                alt="Girl holding colorful books"
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
