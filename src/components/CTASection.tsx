import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Image
              src="/icon/home-cta.svg"
              alt="donate"
              width={80}
              height={80}
            />
          </div>
        </div>

        <h2 className="text-[20px] md:text-[39px] font-semibold font-display text-black mb-6">
          Join Us In Making a Difference
        </h2>

        <p className=" text-base lg:text-xl font-medium text-black mb-8 max-w-3xl mx-auto leading-relaxed">
          Together, we can help thousands of children in Nigeria return to
          school and build a brighter future. Whether you choose to donate or
          partner with us, your support fuels real, lasting change.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center font-display ">
          <Link
            href="/partnership/organisation-and-individuals"
            className="bg-primary-blue border border-[#9CBEFF] shadow-lg text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className=" shadow-lg bg-[#EEEEF1] text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors font-medium inline-flex items-center justify-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
