"use client";
import Image from "next/image";

interface MissionData {
  icon: string;
  title: string;
  content: string[];
}

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
      <div className="flexjustify-center lg:justify-start">
        <div className="w-16 h-16 rounded-full ">
          <Image
            src={data.icon}
            alt={`${data.title} icon`}
            width={56}
            height={56}
            className="text-white"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl lg:text-[20px] font-medium  font-display text-gray-900">
        {data.title}
      </h2>

      {/* Content */}
      <div className="space-y-4">
        {data.content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

interface MissionSectionProps {
  className?: string;
}

export default function MissionSection({
  className = "",
}: MissionSectionProps) {
  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-[128px] ${className} max-w-[1280px] rounded-[30px] mx-auto bg-[#F9FBFF]  `}
    >
      {/* Desktop Layout - Two Columns */}
      <div className=" flex flex-col gap-10 ">
        <div className=" flex  flex-col lg:flex-row  items-center justify-between gap-10 ">
          {/* Mission Column */}
          <MissionVisionCard data={missionData} />

          {/* Decorative Element */}
          <div className=" hidden lg:block w-1 h-[180px] bg-[#E6EFFF] rounded-full "></div>

          {/* Vision Column */}
          <MissionVisionCard data={visionData} />
        </div>

        {/* Bottom Statement */}
        <div className="">
          <p className=" text-gray-700  ">
            Because when one child gets the chance to learn, everything begins
            to change - for them, for their families, and for the future of
            Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
