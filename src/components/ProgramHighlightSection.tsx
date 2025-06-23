"use client";
import Image from "next/image";
import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";

interface ProgramHighlightData {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const programHighlights: ProgramHighlightData[] = [
  {
    id: 1,
    icon: "/icon/program-highlight/enrollment.svg",
    title: "School Enrollment",
    description:
      "Covering school fees, uniforms, and essential supplies to get children back in school with dignity and hope.",
  },
  {
    id: 2,
    icon: "/icon/program-highlight/support.svg",
    title: "Attendance Support",
    description:
      "Helping children stay in school through regular follow-ups, family engagement, and community-based encouragement.",
  },
  {
    id: 3,
    icon: "/icon/program-highlight/material.svg",
    title: "Learning Materials",
    description:
      "Providing books, backpacks, and learning tools every child needs to succeed confidently in the classroom.",
  },
];

const ProgramHighlightCard = ({ data }: { data: ProgramHighlightData }) => {
  const { icon, title, description } = data;

  return (
    <div className="flex flex-col items-center text-center space-y-4 relative z-10">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={56}
            height={56}
            className="text-secondary-yellow"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-medium font-display text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed max-w-sm">{description}</p>
    </div>
  );
};

interface ProgramHighlightSectionProps {
  className?: string;
}

export default function ProgramHighlightSection({
  className = "",
}: ProgramHighlightSectionProps) {
  return (
    <NotebookBackgroundWrapper
      bgMobile="bg-[url('/patterns/page-mobile.png')]"
      bgDesktop="bg-[url('/patterns/page.png')]"
      curveMobile="/images/cycle-breaking-education-mobile.svg"
      curveDesktop="/images/cycle-breaking-education.svg"
      className={className}
    >
      {/* Section Title */}
      <div className="text-center mb-16 pt-16 lg:pt-[280px]    ">
        <h2 className="text-[20px] lg:text-[25px] font-semibold font-display text-gray-900">
          Program Highlight: Back 2 School
        </h2>
      </div>
      {/* Desktop Layout - Three Cards in Row */}
      <div className=" flex flex-col lg:flex-row gap-12 lg:gap-16 pb-[132px] max-w-[997px] mx-auto ">
        {programHighlights.map((highlight) => (
          <ProgramHighlightCard key={highlight.id} data={highlight} />
        ))}
      </div>
    </NotebookBackgroundWrapper>
  );
}
