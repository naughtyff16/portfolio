import Image from "next/image";
import Link from "next/link";
import CheckIcon from "../icons/check-icon";

export default function () {
  return (
    <section className="w-full h-auto bg-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-start items-start mx-auto z-10">
          <span className="text-lg text-primary font-medium py-1">
            Welcome to Cloud Rudra Media
          </span>
          <p className="text-3xl font-bold">Why choose Cloud Rudra Media?</p>

          <div className="flex flex-col space-y-4 md:space-y-6 my-6">
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="">
                <span className="text-lg font-medium">
                  Expertise and Experience:{"  "}
                </span>
                <span className="text-balance text-secondary">
                  Our team of skilled professionals has years of experience in
                  delivering top-notch IT solutions.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="">
                <span className="text-lg font-medium">
                  Customer-Centric Approach:{"  "}
                </span>
                <span className="text-balance text-secondary">
                  We prioritize your needs and work closely with you to achieve
                  your goals.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="">
                <span className="text-lg font-medium">
                  Innovative Solutions:{"  "}
                </span>
                <span className="text-balance text-secondary">
                  We embrace emerging technologies to provide cutting-edge
                  solutions.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="">
                <span className="text-lg font-medium">
                  Quality Assurance:{"  "}
                </span>
                <span className="text-balance text-secondary">
                  We adhere to rigorous quality standards to ensure the highest
                  level of service.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="">
                <span className="text-lg font-medium">
                  Scalability and Flexibility:{"  "}
                </span>
                <span className="text-balance text-secondary">
                  Our solutions can adapt to your evolving business needs.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold text-secondary">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-secondary font-normal">
              Contact us today to discuss your IT needs and explore how Cloud
              Rudra Media can help you achieve your goals. Let's partner to
              build a brighter digital future.
            </p>
          </div>
        </div>

        <Image
          src={"/images/services-4.png"}
          width={1400}
          height={1000}
          quality={100}
          alt="about image"
          className="w-full h-full z-10 object-cover"
        />
        <div className="hidden lg:block absolute bottom-1/3 xl:bottom-0 right-0">
          <Image
            src={"/images/services-bg-4.png"}
            width={1400}
            height={900}
            quality={100}
            alt="corner image"
            className=" lg:w-[200px] xl:w-[250px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
