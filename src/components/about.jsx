import Image from "next/image";
import Link from "next/link";
import CheckIcon from "./icons/check-icon";

export default function () {
  return (
    <section id="about" className="w-full h-auto bg-[#F6F3F3] relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-start items-start mx-auto relative z-20">
          <span className="text-lg text-primary font-medium py-1">
            Welcome to Cloud Rudra Media
          </span>
          <p className="text-3xl font-bold text-justify">
            We Provide More in All Aspects of Your Business IT Service
          </p>
          <p className="text-sm font-normal pb-4 text-justify text-gray-700 leading-relaxed">
            At Cloud Rudra Media, we use cutting-edge technical solutions to
            help big companies and startups build digital products and improve
            business performance. Our complete IT services include software
            development, IT infrastructure, cloud solutions, and professional
            consulting, which drive seamless transformation and operational
            excellence from concept to execution.
          </p>
          <div className="flex flex-col space-y-4 mb-6">
            <p className="flex items-center gap-2 text-sm">
              <CheckIcon />
              Dedicated technology
            </p>
            <p className="flex items-center gap-2 text-sm">
              <CheckIcon />
              Cross-industry expertise
            </p>
            <p className="flex items-center gap-2 text-sm">
              <CheckIcon />
              Tailored IT solutions
            </p>
            <p className="flex items-center gap-2 text-sm">
              <CheckIcon />
              Round-the-clock support
            </p>
          </div>
          <p className="items-center">
            <Link
              href={"/about-us"}
              className="bg-primary px-5 py-2 text-white rounded-sm text-sm"
            >
              Learn More
            </Link>
          </p>
        </div>
        <div className="relative w-full">
          <Image
            src={"/images/about-images.png"}
            width={1400}
            height={1000}
            quality={100}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:block absolute -bottom-24 left-0">
          <Image
            src={"/images/about-bg.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className=" lg:w-[200px] xl:w-[300px] h-auto object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
