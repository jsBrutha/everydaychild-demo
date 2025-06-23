import { WhatWeDoCard } from "@/components/WhatWeDoSection";

interface ContactMethod {
  id: number;
  bgImage: string;
  icon: string;
  title: string;
  description: string;
  link?: string;
  target?: string;
  rel?: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    bgImage: "bg-secondary-yellow",
    icon: "/icon/contact/whatsapp.svg",
    title: "WhatsApp",
    description: "0817 635 6394",
    link: "https://wa.me/2348176356394",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    bgImage: "bg-secondary-yellow",
    icon: "/icon/contact/phone.svg",
    title: "Phone",
    description: "0901 346 1900",
    link: "tel:+2349013461900",
  },
  {
    id: 3,
    bgImage: "bg-secondary-yellow",
    icon: "/icon/contact/email.svg",
    title: "Email",
    description: "Everychildint@gmail.com",
    link: "mailto:Everychildint@gmail.com",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-wide text-gray-600 mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-gray-900 mb-6">
            We&apos;re Available to Help
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Reach us during working hours:</p>
            <p className="font-medium">
              Mon–Fri: 9AM–5PM • Sat: 10AM–2PM (By appointment)
            </p>
          </div>
        </div>

        {/* Contact Methods using WhatWeDoCard with blue icons */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={method.target}
              rel={method.rel}
              className="block group hover:scale-105 transition-transform duration-300"
            >
              <div className="group-hover:bg-yellow-300 transition-colors duration-300 rounded-[20px]">
                <WhatWeDoCard data={method} showBlueIcon={true} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
