import Image from "next/image";
import Link from "next/link";

export default function ServiceBanner() {
  return (
    <section className="relative w-full h-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col container my-auto py-4 px-4 md:px-12 lg:px-16 z-20 text-start">
          <div className="border-l-8 border-primary pl-4 space-y-5">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              Cultivate a culture of efficiency
            </h1>
            <p className="text-lg text-primary font-medium">
              Critical need for optimized IT management and support.
            </p>
            <div className="bg-primary text-white text-sm px-5 py-2 rounded-sm inline-block">
              <Link href={"/contact-us"}>Talk to an Expert</Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full col-span-1 lg:col-span-2 order-first lg:order-last">
          <div className="w-full h-full relative z-20">
            <Image
              src="/images/two-laptops.png"
              width={1400}
              height={900}
              quality={100}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* <div className="hidden lg:block absolute -bottom-12 left-0 xl:-bottom-12 xl:left-14 z-10">
          <Image
            src={"/images/hero-banner-bg.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className=" lg:w-[350px] xl:w-5/6 h-auto object-cover"
          />
        </div> */}
      </div>
    </section>
  );
}
