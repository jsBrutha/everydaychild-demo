"use client";
import Image from "next/image";
import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";
import Link from "next/link";

const helpOptions = [
  {
    icon: "/icon/help/donate.svg",
    title: "Donate",
    description:
      "Your financial contribution helps provide school supplies, uniforms, and essentials that get children back in school",
    button: {
      text: "Donate Now",
      href: "/partnership/organisation-and-individuals",
    },
  },
  {
    icon: "/icon/help/partner.svg",
    title: "Partner With Us",
    description:
      "Whether you're an individual, school, organization or business, you can help us expand our reach and impact by supporting education initiatives in your community.",
    button: {
      text: "Become a Partner",
      href: "/partnership/schools",
    },
  },
];

type HelpCardProps = {
  icon: string;
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
};

function HelpCard({ icon, title, description, button }: HelpCardProps) {
  return (
    <div className="bg-white rounded-[28px] shadow-md px-6 py-8 flex flex-col items-center text-center max-w-[300px] w-full mx-auto">
      <div className="mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="font-medium   text-[20px] mb-2 font-display text-gray-900">
        {title}
      </h3>
      <p className="text-gray-700 mb-6 leading-[1.4] text-base ">
        {description}
      </p>
      <Link
        href={button.href}
        className="bg-primary-blue border border-[#9CBEFF] shadow-[0px_3px_10px_0px_#44569640]
 text-white font-semibold rounded-full px-7 py-3 text-[15px]  hover:bg-[#2772D7]/90 transition"
      >
        {button.text}
      </Link>
    </div>
  );
}

export default function HowYouCanHelpSection({ className = "" }) {
  return (
    <div className=" flex flex-col gap-[100px] mt-[100px] ">
      <h2 className="text-3xl lg:text-5xl font-black font-display text-gray-900 mb-4 text-center">
        1 Million Children. One Mission.
      </h2>

      <NotebookBackgroundWrapper
        bgMobile="bg-[url('/patterns/page-mobile.svg')]"
        bgDesktop="bg-[url('/patterns/page.svg')]"
        curveMobile="/images/cycle-breaking-education-yellow-mobile.svg"
        curveDesktop="/images/cycle-breaking-education-yellow.svg"
        className={className}
      >
        <div className="pt-[200px] ">
          <div className="text-center  my-10">
            <h3 className="text-xl lg:text-2xl font-semibold font-display text-gray-900">
              How You Can Help
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center pb-20">
            {helpOptions.map((opt) => (
              <HelpCard key={opt.title} {...opt} />
            ))}
          </div>
        </div>
      </NotebookBackgroundWrapper>
    </div>
  );
}
