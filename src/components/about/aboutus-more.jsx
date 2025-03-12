import Image from "next/image";
import RadioIcon from "../icons/radio-icon";

const milestones = [
  {
    title: "Cloud Rudra Media Visualization",
    description:
      "We envisioned Cloud Rudra Media as a full-lifecycle IT company that provides scalable technology solutions based on business requirements.",
  },
  {
    title: "Company Registration",
    description:
      "We finally registered our IT company and are ready to empower clients with our services that make a significant difference.",
  },
  {
    title: "Establishing the Team",
    description:
      "We took on the hiring process, recruited talent, and built a team of 25+ specialists dedicated to our client's success.",
  },
  {
    title: "First Successful Project",
    description:
      "We completed our IT company's first successful project for our clients with the help of our dedicated crew.",
  },
  {
    title: "We are still thriving and expanding",
    description:
      "Cloud Rudra Media is now a rapidly expanding software development company that specializes in digital transformation around the world.",
  },
];

export default function () {
  return (
    <section className="w-full h-auto bg-gray-100 relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-start mb-10 grid lg:grid-cols-2 items-start">
          <div className="space-y-5">
            <p className="text-lg text-primary font-medium">
              IT Support for Business
            </p>
            <h1 className="text-3xl font-bold">
              We convert imagination into reality!
            </h1>
          </div>
          <p className="mt-4 text-gray-700 text-base text-justify">
            Cloud Rudra Media is your reliable partner in the fields of digital
            innovation and information technology, committed to providing
            exceptional flagship experiences. Our cutting-edge IT consulting
            solutions ensure smooth operations, while our high-quality software
            powers your digital transformation.
          </p>
        </div>

        <div className="w-full h-auto relative z-10">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="items-center grid lg:grid-cols-2 border-b border-b-[#646464] space-y-6 p-3 md:p-5"
            >
              <div className="flex items-center gap-3 md:gap-5 xl:gap-8">
                <div>
                  <RadioIcon />
                </div>

                <h3 className="text-lg text-start font-bold text-black">
                  {milestone.title}
                </h3>
              </div>

              <div className="flex items-center text-start">
                <p className=" text-gray-700 text-justify">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute bottom-5 right-0">
          <Image
            src={"/images/about-bg2.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-[200px] xl:w-[300px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
