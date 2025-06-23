"use client";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  story: string[];
  background: string;
}

const founderData: TeamMember = {
  name: "Anuoluwa Dele",
  title: "Founder",
  image: "/images/about/teams/anu.png", // You'll need to add this image
  story: [
    "I started EveryChild because I believe no child should be denied an education simply because of where they were born. Growing up in Nigeria, I saw brilliant children drop out of school due to poverty, distance, or lack of support. That reality stayed with me.",
    "EveryChild is my response - a movement to give children a second chance at learning, growing, and dreaming. We may be starting small, but we're building something big: a future where every child has access to the tools they need to thrive.",
  ],
  background:
    "My academic background (BSc in Economics, a Postgraduate Diploma in Education, and a Master's in International Affairs and Strategic Studies) has prepared me to take on this mission with both strategy and heart. While my career began in banking, it was my nine years working directly in grassroots education that solidified my passion and commitment to solving Nigeria's education crisis. I'm fully dedicated to ensuring that every child has access to quality learning, regardless of their circumstances.",
};

export default function AboutTeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="bg-secondary-yellow rounded-[40px] p-12 lg:p-16  bg-[#DDB725] ">
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-wider text-black mb-2">
                OUR STORY STARTS HERE
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold font-display text-black leading-tight">
                Meet the Vision Behind
                <br />
                EveryChild
              </h2>
            </div>

            <div className="flex items-start gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-[320px] h-[400px]  roverflow-hidden">
                  {/* Puzzle piece cutout effect - for now using a simple rounded rectangle */}
                  <Image
                    src={founderData.image}
                    alt={founderData.name}
                    height={327}
                    width={325}
                    quality={100}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Story */}
                <div className="space-y-4">
                  {founderData.story.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-black leading-relaxed text-base"
                    >
                      &quot;{paragraph}&quot;
                    </p>
                  ))}
                </div>

                {/* Background */}
                <p className="text-black leading-relaxed text-base">
                  {founderData.background}
                </p>

                {/* Name and Title */}
                <div className="pt-6">
                  <h3 className="text-2xl font-semibold font-display text-black">
                    {founderData.name}
                  </h3>
                  <p className="text-black font-medium">{founderData.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="bg-secondary-yellow rounded-[24px] p-6 border-4 border-primary-blue">
            {/* Section Header */}
            <div className="mb-6">
              <p className="text-sm font-medium uppercase tracking-wider text-black mb-2">
                OUR TEAM
              </p>
              <h2 className="text-2xl font-semibold font-display text-black leading-tight mb-2">
                Meet the Team Behind Access
              </h2>
              <p className="text-black text-sm leading-relaxed">
                Hear from experts, community leaders, and partners from around
                the world about our impact.
              </p>
            </div>

            {/* Photo */}
            <div className="mb-6">
              <div className="relative w-full h-[280px] bg-black rounded-[16px] overflow-hidden">
                <Image
                  src={founderData.image}
                  alt={founderData.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold font-display text-black">
                {founderData.name}
              </h3>
              <p className="text-black font-medium text-sm">
                {founderData.title}
              </p>
            </div>

            {/* Story */}
            <div className="space-y-3">
              {founderData.story.map((paragraph, index) => (
                <p key={index} className="text-black leading-relaxed text-sm">
                  &quot;{paragraph}&quot;
                </p>
              ))}
            </div>

            {/* Background */}
            <p className="text-black leading-relaxed text-sm mt-3">
              {founderData.background}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
