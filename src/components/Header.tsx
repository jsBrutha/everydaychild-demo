"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsPartnershipOpen(false); // Reset partnership dropdown when closing menu
  };

  const togglePartnership = () => {
    setIsPartnershipOpen(!isPartnershipOpen);
  };

  return (
    <>
      <header className="w-full bg-white pt-10 font-clashGrotesk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                <Image
                  src="/icon/logo/logo.svg"
                  alt="Every Child International"
                  width={160}
                  height={52}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 bg-[#EEEEF1] rounded-full px-4 font-medium">
              {/* Home */}
              <Link
                href="/"
                className={`p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 rounded-full ${
                  pathname === "/"
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : ""
                }`}
              >
                Home
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 rounded-full ${
                  pathname === "/about"
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : ""
                }`}
              >
                About Us
              </Link>

              {/* Partnership Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 rounded-full focus:outline-none ${
                    pathname.startsWith("/partnership")
                      ? "bg-black text-white hover:bg-black hover:text-white"
                      : ""
                  }`}
                  type="button"
                >
                  Partnership
                  <Image
                    width={16}
                    height={16}
                    src="/icon/nav-drop.svg"
                    alt="dropdown"
                    className="ml-2 transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 mt-2 w-72 bg-[#E6EEFA] rounded-2xl shadow-lg z-50 p-6 transition-all duration-200">
                  <Link
                    href="/partnership/organisation-and-individuals"
                    className="block w-full px-4 py-3 mb-4 text-center font-medium text-gray-900 bg-transparent hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                  >
                    For Organizations and Individual
                  </Link>
                  <Link
                    href="/partnership/schools"
                    className="block w-full px-4 py-3 text-center font-medium text-gray-900 bg-transparent hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                  >
                    For School
                  </Link>
                </div>
              </div>

              {/* Gallery */}
              <Link
                href="/gallery"
                className={`p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 rounded-full ${
                  pathname === "/gallery"
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : ""
                }`}
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`p-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 rounded-full ${
                  pathname === "/contact"
                    ? "bg-black text-white hover:bg-black hover:text-white"
                    : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Donate Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/partnership/organisation-and-individuals"
                className="bg-[#2772D7] border border-[#9CBEFF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900 p-2"
                aria-label="Toggle mobile menu"
              >
                <Image
                  src={
                    isMobileMenuOpen ? "/icon/close.svg" : "/icon/hamburger.svg"
                  }
                  alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#F9FBFF] font-clashGrotesk">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-gray-900 p-2"
                aria-label="Close mobile menu"
              >
                <Image
                  src="/icon/close.svg"
                  alt="Close menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 px-4 py-6 space-y-4">
              {/* Home */}
              <Link
                href="/"
                className="block text-lg font-medium text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className="block text-lg font-medium text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Partnership with Mobile Dropdown */}
              <div>
                <button
                  onClick={togglePartnership}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-2"
                >
                  Partnership
                  <Image
                    width={16}
                    height={16}
                    src="/icon/nav-drop.svg"
                    alt="dropdown"
                    className={`transform transition-transform ${
                      isPartnershipOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isPartnershipOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/partnership/organisation-and-individuals"
                      className="block w-full px-4 py-3 text-center font-medium text-gray-900 bg-transparent hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      For Organizations and Individual
                    </Link>
                    <Link
                      href="/partnership/schools"
                      className="block w-full px-4 py-3 text-center font-medium text-gray-900 bg-transparent hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      For School
                    </Link>
                  </div>
                )}
              </div>

              {/* Gallery */}
              <Link
                href="/gallery"
                className="block text-lg font-medium text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="block text-lg font-medium text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Donate Button */}
            <div className="p-4 border-t">
              <Link
                href="/partnership/organisation-and-individuals"
                className="block w-full bg-[#2772D7] border border-[#9CBEFF] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
