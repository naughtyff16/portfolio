import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <section className="w-full h-auto bg-secondary text-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-start grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="flex flex-col items-start gap-5 relative z-10">
            <p className="text-4xl lg:text-5xl text-white font-bold leading-tight">
              Your Partner in Digital Transformation
            </p>
            <p className="my-4 text-base">
              We are a leading digital solutions provider, empowering businesses
              with cutting-edge technology. From strategy to implementation, we
              deliver innovative solutions that drive growth and success.
            </p>

            <div className="bg-white text-primary text-sm px-5 py-2 rounded-sm inline-block">
              <Link href={"/about-us"}>Learn More</Link>
            </div>
          </div>

          <div className="flex flex-col lg:items-center relative z-10">
            <div className="space-y-5">
              <h1 className="text-lg font-bold">Key Features:</h1>
              <div className="pl-5 space-y-5 border-l-2 border-l-white">
                <div>
                  <h1 className="italic text-lg font-bold">
                    End-to-End IT Solutions:
                  </h1>
                  <h4>We cover every aspect of your IT needs.</h4>
                </div>
                <div>
                  <h1 className="italic text-lg font-bold">
                    Cutting-Edge Technology:
                  </h1>
                  <h4>We stay ahead of the curve with the latest trends.</h4>
                </div>
                <div>
                  <h1 className="italic text-lg font-bold">
                    Client-Centric Approach:
                  </h1>
                  <h4>Your success is our priority.</h4>
                </div>
                <div>
                  <h1 className="italic text-lg font-bold">
                    Proven Track Record:
                  </h1>
                  <h4>We have a history of delivering exceptional results.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 right-0">
          <Image
            src={"/images/services-bg-7.png"}
            width={1400}
            height={900}
            quality={100}
            alt="corner image"
            className="w-[300px] h-auto object-cover"
          />
        </div>
        <div className="hidden lg:block absolute top-0 left-0">
          <Image
            src={"/images/services-bg-7.png"}
            width={1400}
            height={900}
            quality={100}
            alt="corner image"
            className=" w-[300px] rotate-180 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
