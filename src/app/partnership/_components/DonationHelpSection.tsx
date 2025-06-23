export default function DonationHelpSection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Question Mark Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-blue rounded-full flex items-center justify-center">
            <span className="text-white text-2xl lg:text-3xl font-bold">?</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display text-gray-900 mb-6">
          Need Help With Your Donation?
        </h2>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          If you need assistance with your donation or have questions about our
          partnership programs
        </p>

        {/* Contact Button */}
        <button className="bg-primary-blue text-white px-8 py-4 lg:px-12 lg:py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </section>
  );
}
