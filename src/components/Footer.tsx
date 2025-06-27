import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="block mb-4">
              <Image
                src="/icon/logo/logo-white.svg"
                alt="EVERYCHILD INTERNATIONAL"
                width={140}
                height={45}
                className="lg:w-[160px] lg:h-[52px]"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed max-w-md">
              Creating brighter futures by helping children in Nigeria return to
              school and unlock their full potential through education.
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership/organisation-and-individuals"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Organisation and Individuals
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership/schools"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gallery"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/icon/contact/phone.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
                <a
                  href="tel:+2349013461900"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  0901 346 1900
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/icon/contact/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                <a
                  href="https://wa.me/+2348176356394"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  0817 635 6394 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/icon/contact/email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
                <a
                  href="mailto:everychildint@gmail.com"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  everychildint@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-white text-sm leading-relaxed max-w-4xl">
            EveryChild is currently in the process of completing our official
            registration as a non-profit under Nigerian law. While we are{" "}
            <strong>not yet accepting donations</strong>, we welcome your
            interest and invite you to follow our journey.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-8 border-t border-white/20 space-y-4 lg:space-y-0">
          <p className="text-white text-sm">
            © 2025 EveryChild International. All rights reserved.
          </p>
          <Link
            href="/partnership/organisation-and-individuals"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2 w-full lg:w-auto justify-center"
          >
            <span>Donate Now</span>
            <Image
              src="/icon/display-arrow.svg"
              alt="Arrow"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
