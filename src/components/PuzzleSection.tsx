"use client";
import Image from "next/image";
import Link from "next/link";

interface PuzzleCardData {
  id: number;
  position: "left" | "center" | "right";
  image: string;
  title: string;
  description: string;
  statTitle?: string;
  statDescription?: string;
  buttonText: string;
  buttonHref: string;
  buttonColor: string;
  cardBgColor: string;
  statBgColor?: string;
  reverse?: boolean;
}

interface PuzzleCardProps {
  data: PuzzleCardData;
}

const puzzleCardsData: PuzzleCardData[] = [
  {
    id: 1,
    position: "left",
    image: "/images/smile-girl.png",
    title: "Left Behind Daily",
    description:
      "Children are excluded simply for lacking shoes, books, or support.",
    statTitle: "10M+ Futures Waiting",
    statDescription:
      "Millions of Nigerian children are growing up without access to education.",
    buttonText: "Break the Cycle",
    buttonHref: "/break-cycle",
    buttonColor: "bg-[#9CBEFF]",
    cardBgColor: "bg-[#F9FBFF]",
    statBgColor: "bg-[#E6EFFF]",
  },

  {
    id: 2,
    position: "right",
    image: "/images/smile-boy.png",
    title: "Building the Movement",
    description:
      "We're partnering with schools and communities to restore the right to learn.",
    statTitle: "You Can Help",
    statDescription:
      "Every voice, volunteer, and donation moves us closer to 1 million children in school.",
    buttonText: "Lend a Hand",
    buttonHref: "/lend-hand",
    buttonColor: "bg-[#9CBEFF]",
    cardBgColor: "bg-[#F9FBFF]",
    statBgColor: "bg-[#E6EFFF]",
    reverse: true,
  },
];

const PuzzleCard: React.FC<PuzzleCardProps> = ({ data }) => {
  const {
    image,
    title,
    description,
    statTitle,
    statDescription,
    buttonText,
    buttonHref,
    buttonColor,
    cardBgColor,
    statBgColor,
    reverse,
  } = data;

  return (
    <div
      className={`flex items-center gap-6 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={image}
        alt={title}
        width={152}
        height={240}
        className="drop-shadow-lg rounded-[30px]"
      />

      <div
        className={`${cardBgColor} rounded-[30px] max-w-[240px] text-center pt-6 flex flex-col gap-6`}
      >
        <div className="max-w-[185px] mx-auto">
          <h3 className="font-bold font-display">{title}</h3>
          {description && (
            <p className="text-gray-700 font-sans text-[13px]">{description}</p>
          )}
        </div>

        {statTitle && statDescription && statBgColor && (
          <div
            className={`pt-6 px-2 pb-3 ${statBgColor} rounded-[30px] flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-bold font-display">{statTitle}</h3>
              <p className="text-gray-700 font-sans text-[13px]">
                {statDescription}
              </p>
            </div>

            <Link
              href={buttonHref}
              className={`${buttonColor} rounded-full p-4 flex justify-between items-center font-display text-black font-medium px-6 py-3`}
            >
              {buttonText}
              <Image
                src="/icon/display-arrow.svg"
                alt="arrow"
                width={32}
                height={32}
              />
            </Link>
          </div>
        )}

        {!statTitle && (
          <div className="pb-6">
            <Link
              href={buttonHref}
              className={`${buttonColor} rounded-full p-4 flex justify-between items-center font-display text-black font-medium px-6 py-3`}
            >
              {buttonText}
              <Image
                src="/icon/display-arrow.svg"
                alt="arrow"
                width={32}
                height={32}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

interface PuzzleSectionProps {
  cards?: PuzzleCardData[];
  puzzleImage?: string;
  className?: string;
}

export default function PuzzleSection({
  cards = puzzleCardsData,
  puzzleImage = "/patterns/puzzle.png",
  className = "",
}: PuzzleSectionProps) {
  const leftCard = cards[0];
  const rightCard = cards[1];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout - Puzzle in center with cards around */}
        <div className="hidden lg:flex relative justify-between items-center min-h-[500px]">
          {/* Left Card */}
          {leftCard && (
            <div className="flex-shrink-0">
              <PuzzleCard data={leftCard} />
            </div>
          )}

          {/* Central Puzzle Image */}
          <div className="flex justify-center flex-shrink-0 mx-8">
            <div className="relative">
              <Image
                src={puzzleImage}
                alt="Our comprehensive approach puzzle"
                width={400}
                height={400}
                className="drop-shadow-lg"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Right Card */}
          {rightCard && (
            <div className="flex-shrink-0">
              <PuzzleCard data={rightCard} />
            </div>
          )}
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          {/* Puzzle Image */}
          <div className="flex justify-center">
            <Image
              src={puzzleImage}
              alt="Our comprehensive approach puzzle"
              width={300}
              height={300}
              className="drop-shadow-lg"
            />
          </div>

          {/* Left Behind Daily Section */}
          {leftCard && (
            <div
              className={`${leftCard.cardBgColor} rounded-[20px] p-6 text-center space-y-6`}
            >
              <div>
                <h3 className="text-xl font-bold font-display mb-3">
                  {leftCard.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leftCard.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold font-display text-gray-900">
                    {leftCard.statTitle}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leftCard.statDescription}
                  </p>
                </div>

                <Link
                  href={leftCard.buttonHref}
                  className={`${leftCard.buttonColor} rounded-full px-6 py-3 inline-flex items-center gap-3 font-display text-black font-medium`}
                >
                  {leftCard.buttonText}
                  <Image
                    src="/icon/display-arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          )}

          {/* Building the Movement Section */}
          {rightCard && (
            <div
              className={`${rightCard.cardBgColor} rounded-[20px] p-6 text-center space-y-6`}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold font-display text-gray-900">
                    1,200 Kids Reached
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Children now enrolled, equipped, and thriving in school.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-display text-gray-900">
                    {rightCard.statTitle}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {rightCard.statDescription}
                  </p>
                </div>

                <Link
                  href={rightCard.buttonHref}
                  className={`${rightCard.buttonColor} rounded-full px-6 py-3 inline-flex items-center gap-3 font-display text-black font-medium`}
                >
                  {rightCard.buttonText}
                  <Image
                    src="/icon/display-arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          )}

          {/* Bottom Images */}
          <div className="flex gap-4 justify-center">
            <div className="flex-1 max-w-[160px]">
              <Image
                src="/images/smile-girl.png"
                alt="Happy girl with books"
                width={160}
                height={200}
                className="w-full h-[200px] object-cover rounded-[20px]"
              />
            </div>
            <div className="flex-1 max-w-[160px]">
              <Image
                src="/images/smile-boy.png"
                alt="Happy boy with backpack"
                width={160}
                height={200}
                className="w-full h-[200px] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
