import Image from "next/image";
import RightArrows from "./icons/right-arrows";
import Link from "next/link";

const Details = [
  {
    id: 1,
    title: "For business agencies",
    description:
      "Empowering agencies with flexible, scalable IT solutions that enhance client management, streamline operations, and drive results with precision.",
    buttonURL: "/services",
    icon: <RightArrows />,
  },
  {
    id: 2,
    title: "For Startups",
    description:
      "Providing startups with cost-effective, high-impact technology tailored to fuel growth, innovation, and strong market entry.",
    buttonURL: "/services",
    icon: <RightArrows />,
  },
  {
    id: 3,
    title: "For Large Enterprises",
    description:
      "Supporting large enterprises with robust, customized IT frameworks that integrate seamlessly across departments to ensure security, efficiency, and lasting value.",
    buttonURL: "/services",
    icon: <RightArrows />,
  },
];

export default function () {
  return (
    <section
      id="solutions"
      className="h-auto w-full bg-white text-black relative dark:bg-darkBg dark:text-darkText
      border-t-2 border-transparent dark:border-t-primary 
      dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 flex flex-col">
        <div className="flex flex-col gap-4 justify-center items-start lg:items-center pb-8">
          <p className="text-lg text-primary font-medium py-1">Who we are</p>
          <p className="text-3xl font-bold">Industries in which we operate</p>
          <p className="text-sm font-normal">
            Operating across segments with tailored solutions for your needs.
          </p>
        </div>
        <div className="container grid lg:grid-cols-2 items-center">
          <div className="relative w-full">
            <Image
              src={"/images/who-we-are.png"}
              width={1400}
              height={1000}
              alt="who we are image"
              className="w-full lg:w-3/4 h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8 py-4">
            {Details.map((detail, index) => (
              <div
                key={index}
                className="w-full flex justify-between gap-4 border-b border-b-[#646464] pb-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between hover:text-primary group">
                    <p className="text-2xl font-bold ">{detail.title}</p>
                    <Link href={detail.buttonURL}>
                      <div className="px-1 py-1 rounded-full bg-transparent group-hover:bg-primary group-hover:text-white">
                        <div className="w-6 h-6">{detail.icon}</div>
                      </div>
                    </Link>
                  </div>

                  <p className="text-sm text-justify">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
