"use client";
import Image from "next/image";
import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

const coreValuesData: CoreValue[] = [
  {
    icon: "/icon/about/dignity.svg",
    title: "Dignity First",
    description: "Every child deserves to be seen, heard, and respected.",
  },
  {
    icon: "/icon/about/equity.svg",
    title: "Equity in Action",
    description:
      "We prioritize those most often left behind and do whatever it takes to reach them.",
  },
  {
    icon: "/icon/about/integrity.svg",
    title: "Integrity Always",
    description:
      "We stay honest, transparent, and accountable - to the families we serve and the supporters who believe in us.",
  },
];

const CoreValueCard = ({ value }: { value: CoreValue }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 text-center space-y-6 max-w-[350px] mx-auto">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
          <Image
            src={value.icon}
            alt={`${value.title} icon`}
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-semibold font-display text-black">
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-base">
        {value.description}
      </p>
    </div>
  );
};

export default function AboutCoreValuesSection() {
  return (
    <NotebookBackgroundWrapper
      bgMobile="bg-[url('/patterns/notebook-green-mobile.svg')]"
      bgDesktop="bg-[url('/patterns/notebook-green          .svg')]"
    >
      <div className="text-center space-y-12 lg:space-y-16 pt-12 pb-[57px] ">
        {/* Section Title */}
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-semibold font-display text-black">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {coreValuesData.map((value, index) => (
            <CoreValueCard key={index} value={value} />
          ))}
        </div>
      </div>
    </NotebookBackgroundWrapper>
  );
}
