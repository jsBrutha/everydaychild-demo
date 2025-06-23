import Link from "next/link";

export default function HowToHelpSection() {
  const helpOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      title: "Donate",
      description:
        "Your financial contribution directly supports educational programs and provides essential resources for children in need.",
      cta: "Make a Donation",
      link: "/donate",
      color: "bg-blue-600",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
        </svg>
      ),
      title: "Partner with Us",
      description:
        "Join our network of partners and sponsors to amplify our impact and reach more children in underserved communities.",
      cta: "Become a Partner",
      link: "/partner",
      color: "bg-yellow-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Volunteer",
      description:
        "Share your time and skills to make a direct impact. From tutoring to administrative support, every contribution counts.",
      cta: "Join Our Team",
      link: "/volunteer",
      color: "bg-green-600",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Wavy yellow ribbon background */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1200 400"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C300,150 600,250 900,180 C1000,160 1100,220 1200,200 L1200,400 L0,400 Z"
            fill="#FDE047"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {`There are many ways to get involved and make a meaningful difference
            in a child's life. Choose the option that works best for you.`}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div
                className={`${option.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}
              >
                {option.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {option.description}
              </p>

              <Link
                href={option.link}
                className={`${option.color} text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center`}
              >
                {option.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
