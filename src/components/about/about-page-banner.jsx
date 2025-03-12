import Image from "next/image";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col container my-auto py-4 px-4 md:px-12 lg:px-16 z-20 text-start">
          <div className="border-l-8 border-primary pl-4 space-y-5">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              Simplifying tasks using Lucrative Ideas and Innovations.
            </h1>
            <p className="text-lg text-primary font-medium">
              Consistently creating and innovating enduring corporate solutions
              that meet the needs of your firm.
            </p>
            <div className="bg-primary text-white text-sm px-5 py-2 rounded-sm inline-block">
              <Link href={"/services"}>Know About Cloud Rudra Media</Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full col-span-1 order-first lg:order-last">
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
      </div>
    </section>
  );
}
