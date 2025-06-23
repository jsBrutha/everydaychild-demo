import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8 font-satoshi ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[25px] md:text-[49px] font-semibold text-gray-900 mb-6 leading-[130%] font-display   flex flex-col items-center justify-center  ">
          <span className=" ">
            Every Child{" "}
            <span className=" bg-[#E6EFFF] rounded-full px-6 py-1    ">
              Deserves
            </span>{" "}
            the Chance
          </span>{" "}
          <span className="">to Learn and Thrive</span>
        </h1>

        <p className="  mb-8  mx-auto font-medium max-w-[413px] text-gray-700  font-satoshi ">
          Join our mission to remove the barriers keeping children out of school
          in Nigeria - so every child can return to the classroom and build
          their future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center font-display ">
          <Link
            href="/donate"
            className="bg-primary-blue border border-[#9CBEFF] shadow-lg text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center"
          >
            Donate Now
          </Link>
          <Link
            href="/learn-more"
            className=" shadow-lg bg-[#EEEEF1] text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors font-medium inline-flex items-center justify-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
