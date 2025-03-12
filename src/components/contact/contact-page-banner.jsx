import Image from "next/image";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="relative w-full h-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col container my-auto py-4 px-4 md:px-12 lg:px-16 text-start">
          <div className="border-l-8 border-primary pl-4 space-y-5">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              Pave Your Way to Digital Success.
            </h1>
            <p className="text-lg text-primary font-medium">
              With our knowledge, we can help your business grow. Get project
              estimates for informed company operations and high-quality digital
              deliverables. We would love to hear from you.
            </p>
            <div className="bg-primary text-white text-sm px-5 py-2 rounded-sm inline-block">
              <Link href={"#contact"}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full col-span-1 lg:col-span-2 order-first lg:order-last">
          <div className="w-full h-full relative">
            <Image
              src="/images/contact-us-banner.png"
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
