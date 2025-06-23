"use client";
import Image from "next/image";

interface WhatWeDoCardData {
  id: number;
  bgImage: string;
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const whatWeDoData: WhatWeDoCardData[] = [
  {
    id: 1,
    bgImage: "bg-[url('/icon/what-we-do/partner.png')]",
    icon: "/icon/what-we-do/partner.svg",
    title: "Partnering with Schools",
    description:
      "We work with local schools ready to welcome more children into safe, supportive classrooms.",
    highlighted: true,
  },
  {
    id: 2,
    bgImage: "bg-[url('/icon/what-we-do/gaps.png')]",
    icon: "/icon/what-we-do/gaps.svg",
    title: "Mapping the Gaps",
    description:
      "We identify children excluded from school due to poverty, distance, or lack of essentials.",
  },
  {
    id: 3,
    bgImage: "bg-[url('/icon/what-we-do/build.png')]",
    icon: "/icon/what-we-do/build.svg",
    title: "Building Infrastructure",
    description:
      "From processes to partnerships, we're laying the groundwork for long-term, scalable support.",
  },
  {
    id: 4,
    bgImage: "bg-[url('/icon/what-we-do/driven.png')]",
    icon: "/icon/what-we-do/driven.svg",
    title: "Driven by Purpose",
    description:
      "We're guided by a simple belief: every child deserves the chance to learn and thrive.",
  },
];

export const WhatWeDoCard = ({
  data,
  showBlueIcon = false,
}: {
  data: WhatWeDoCardData;
  showBlueIcon?: boolean;
}) => {
  const { icon, title, description, bgImage } = data;

  return (
    <div
      className={`
        ${bgImage} bg-[#FFF0B5] bg-repeat rounded-[20px] p-6 text-center space-y-4 h-full relative overflow-hidden
      `}
    >
      {/* Overlay to fade background image */}
      <div className="absolute inset-0 bg-white/40 rounded-[20px]"></div>

      {/* Icon */}
      <div className="flex justify-center relative z-10">
        {showBlueIcon ? (
          <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={32}
              height={32}
              className="w-8 h-8 brightness-0 invert"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        ) : (
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={40}
              height={40}
              className="text-primary-blue"
            />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold font-display text-gray-900 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};

interface WhatWeDoSectionProps {
  className?: string;
}

export default function WhatWeDoSection({
  className = "",
}: WhatWeDoSectionProps) {
  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${className} mb-[50px] `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" mb-12 max-w-[516px] ">
          <p className="font-medium text-gray-600 uppercase tracking-wider mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-3xl lg:text-[39px] font-semibold font-display text-gray-950 max-w-3xl mx-auto leading-[1.2]  ">
            A Growing Movement for Education Equity
          </h2>
        </div>

        {/* Desktop Layout - 4 Cards in Row */}
        <div className=" flex flex-col lg:flex-row gap-10 ">
          {whatWeDoData.map((card) => (
            <WhatWeDoCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
