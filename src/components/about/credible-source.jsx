import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <section className="h-auto relative w-full bg-[#454545] mx-auto py-12 px-4 md:px-12 lg:px-16">
      <div className="container flex flex-col">
        <div className="flex flex-col justify-center items-start text-white lg:items-center gap-4 pb-4 lg:pb-8">
          <p className="text-3xl lg:text-5xl font-bold text-white py-1">
            Credible Sources and Services
          </p>
          <p className="text-xs font-medium mt-4 lg:mt-6">
            A team that helps businesses reach their full potential.
          </p>
          <div className="mt-2">
            <Link
              href={"/contact-us"}
              className="bg-white text-primary text-sm px-5 lg:px-10 py-3 rounded-md inline-block"
            >
              Let’s Get Started
            </Link>
          </div>

          <p className="text-sm font-normal text-white text-start lg:text-center mt-4 w-full lg:w-1/2">
            Our team develops focused development strategies that are aligned
            with your company's goals, infuses creativity into creative
            solutions, and analyzes data to fine-tune each strategy for your
            firm along the way.
          </p>
        </div>
        <div className="hidden lg:block absolute -top-16 left-0 xl:top-0">
          <Image
            src={"/images/credible-bg-1.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
        <div className="hidden lg:block absolute -bottom-10 right-0 xl:bottom-0 xl:right-0">
          <Image
            src={"/images/credible-bg-1.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="w-full max-w-[400px] rotate-180 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
