import Link from "next/link";

interface TierData {
  name: string;
  amount: string;
  description: string;
  borderColor: string;
}

const tiers: TierData[] = [
  {
    name: "SUPPORTER",
    amount: "₦50,000+",
    description:
      "Your donation helps provide basic educational materials for children in need.",
    borderColor: "border-[#DD4725]",
  },
  {
    name: "BRONZE",
    amount: "₦500,000+",
    description:
      "Support a classroom with resources, books, and learning materials.",
    borderColor: "border-[#DDB525]",
  },
  {
    name: "SILVER",
    amount: "₦750,000+",
    description:
      "Help fund teacher training and curriculum development for better education.",
    borderColor: "border-[#BBDD25]",
  },
  {
    name: "GOLD",
    amount: "₦1,000,000+",
    description:
      "Support comprehensive school programs and infrastructure improvements.",
    borderColor: "border-[#25B2DD]",
  },
  {
    name: "PLATINUM",
    amount: "₦5,000,000+",
    description:
      "Make a transformative impact by helping establish sustainable educational initiatives.",
    borderColor: "border-[#445696]",
  },
];

export default function PartnershipTiersSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-wide text-gray-600 mb-4">
            PARTNERSHIP TIERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-gray-900">
            Partner Today, Change a<br />
            Future
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="space-y-6 lg:space-y-0">
          {/* First 3 tiers */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-6">
            {tiers.slice(0, 3).map((tier) => (
              <div
                key={tier.name}
                className={`bg-gray-50 rounded-3xl p-8 border-2 ${tier.borderColor} text-center shadow-[0px_3px_10px_0px_#44569640] lg:w-[300px]`}
              >
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {tier.name}
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {tier.amount}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed lg:min-h-[3rem]">
                  {tier.description}
                </p>
                <Link
                  href="/partnership/organisation-and-individuals"
                  className="bg-primary-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
                >
                  Donate Now
                </Link>
              </div>
            ))}
          </div>

          {/* Last 2 tiers */}
          <div className="space-y-6 lg:space-y-0 lg:flex lg:justify-center lg:gap-6">
            {tiers.slice(3, 5).map((tier) => (
              <div
                key={tier.name}
                className={`bg-gray-50 rounded-3xl p-8 border-2 ${tier.borderColor} text-center lg:w-[300px] shadow-[0px_3px_10px_0px_#44569640]`}
              >
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {tier.name}
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {tier.amount}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed lg:min-h-[3rem]">
                  {tier.description}
                </p>
                <Link
                  href="/partnership/organisation-and-individuals"
                  className="bg-primary-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
                >
                  Donate Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
