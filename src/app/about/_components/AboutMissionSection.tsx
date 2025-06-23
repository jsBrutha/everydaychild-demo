"use client";
import Image from "next/image";

interface ValueItem {
  icon: string;
  title: string;
}

interface MissionData {
  icon: string;
  title: string;
  content: string[];
}

const valuesData: ValueItem[] = [
  {
    icon: "/icon/about/explore.svg",
    title: "Empowered",
  },
  {
    icon: "/icon/about/supportive.svg",
    title: "Supportive",
  },
  {
    icon: "/icon/about/inclusive.svg",
    title: "Inclusive",
  },
  {
    icon: "/icon/about/connected.svg",
    title: "Connected",
  },
];

const missionData: MissionData = {
  icon: "/icon/mission.svg",
  title: "Our Mission",
  content: [
    "We exist to remove the barriers keeping children out of school - whether it's poverty, distance, or lack of basic resources.",
    "By working with schools, communities, and supporters, we're building a movement to help 1 million children return to school - and stay there.",
  ],
};

const visionData: MissionData = {
  icon: "/icon/vision.svg",
  title: "Our Vision",
  content: [
    "We imagine a Nigeria where every child has the chance to learn, thrive, and shape their future - no matter where they come from.",
    "We believe education is a right, not a privilege.",
  ],
};

const ValueCard = ({ value }: { value: ValueItem }) => {
  return (
    <div className="flex flex-col items-center text-center text-white space-y-3">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image
          src={value.icon}
          alt={`${value.title} icon`}
          width={48}
          height={48}
          className="text-white filter brightness-0 invert"
        />
      </div>
      <span className="text-base font-medium font-display">{value.title}</span>
    </div>
  );
};

const MissionVisionCard = ({
  data,
  className = "",
}: {
  data: MissionData;
  className?: string;
}) => {
  return (
    <div className={`space-y-6 max-w-[400px] ${className}`}>
      {/* Icon */}
      <div className="flex justify-center lg:justify-start">
        <div className="w-16 h-16 rounded-full">
          <Image
            src={data.icon}
            alt={`${data.title} icon`}
            width={56}
            height={56}
            className="text-primary-blue"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl lg:text-[28px] font-semibold font-display text-black">
        {data.title}
      </h2>

      {/* Content */}
      <div className="space-y-4">
        {data.content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

interface AboutMissionSectionProps {
  className?: string;
}

export default function AboutMissionSection({
  className = "",
}: AboutMissionSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Values Header Section */}
        <div className="bg-primary-blue rounded-[24px] p-8 lg:p-12 mb-16">
          {/* Mobile Layout - Stacked */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-2 gap-8">
              {valuesData.map((value, index) => (
                <ValueCard key={index} value={value} />
              ))}
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:flex justify-between items-center max-w-4xl mx-auto">
            {valuesData.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="bg-[#F9FBFF] rounded-[30px] p-8 lg:p-16">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* Mission Column */}
              <MissionVisionCard data={missionData} />

              {/* Decorative Element */}
              <div className="hidden lg:block w-1 h-[180px] bg-[#E6EFFF] rounded-full"></div>

              {/* Vision Column */}
              <MissionVisionCard data={visionData} />
            </div>

            {/* Bottom Statement */}
            <div className="text-center lg:text-left">
              <p className="text-gray-700 text-base leading-relaxed">
                Because when one child gets the chance to learn, everything
                begins to change - for them, for their families, and for the
                future of Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
