import Image from "next/image";

export default function () {
  return (
    <section id="about" className="w-full h-auto bg-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-start items-start mx-auto z-10">
          <span className="text-lg text-primary font-medium py-1">
            Welcome to Cloud Rudra Media
          </span>
          <p className="text-3xl font-bold">Powering Your Digital Future</p>
          <p className="text-sm font-normal pb-4 text-justify text-gray-700">
            At Cloud Rudra Media, we're more than just an IT service provider;
            we're your trusted partner in digital transformation. With a strong
            foundation built on quality and commitment, we've been empowering
            businesses since 2001.
          </p>

          <p className="text-3xl font-bold">Our Mission</p>
          <p className="text-sm font-normal pb-4 text-justify text-gray-700">
            To deliver innovative and effective IT solutions that drive business
            growth and success. We strive to understand your unique needs and
            tailor our services to meet your specific goals.
          </p>

          <p className="text-3xl font-bold">
            Unified Platforms for Enhanced Security and Synergy Across Business
            Areas
          </p>
          <p className="text-sm font-normal pb-4 text-justify text-gray-700">
            Explore platforms that enhance security and foster synergy across
            business areas. These solutions are designed to bridge gaps between
            departments, ensuring that critical data is protected while enabling
            seamless collaboration. By connecting workflows and integrating
            secure access, these platforms drive both productivity and a unified
            approach to achieving business goals.
          </p>
        </div>

        <Image
          src={"/images/services-2.png"}
          width={1400}
          height={1000}
          quality={100}
          alt="about image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
