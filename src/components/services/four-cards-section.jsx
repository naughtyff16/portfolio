import InnovationIcon from "../icons/innovation-icon";
import UserCheckIcon from "../icons/user-check-icon";
import PartnershipIcon from "../icons/partnership-icon";
import DigitalOceanIcon from "../icons/digital-ocean-icon";
import React from "react";
import Image from "next/image";

const Details = [
  {
    id: 1,
    title: "Innovation at the Core",
    description: [
      {
        contents1: "Pioneering cutting-edge solutions",
        contents2: "Embracing emerging technologies",
        contents3: "Driving digital transformation",
      },
    ],
    icon: <InnovationIcon />,
  },
  {
    id: 2,
    title: "Simplifying Complexity",
    description: [
      {
        contents1: "Unraveling intricate challenges",
        contents2: "Unraveling intricate challenges Streamlining processes",
        contents3: "Delivering user-friendly solutions",
      },
    ],
    icon: <UserCheckIcon />,
  },
  {
    id: 3,
    title: "Partnering for Success",
    description: [
      {
        contents1: "Pioneering cutting-edge solutions",
        contents2: "Embracing emerging technologies",
        contents3: "Driving digital transformation",
      },
    ],
    icon: <PartnershipIcon />,
  },
  {
    id: 4,
    title: "Innovation at the Core",
    description: [
      {
        contents1: "Pioneering cutting-edge solutions",
        contents2: "Embracing emerging technologies",
        contents3: "Driving digital transformation",
      },
    ],
    icon: <DigitalOceanIcon />,
  },
];

export default function () {
  return (
    <section
      id="solutions"
      className="h-auto w-full bg-[#F6F3F3] relative mx-auto py-12 px-4 md:px-12 lg:px-16"
    >
      <div className="container flex flex-col">
        <div className="flex flex-col gap-4 justify-center items-start lg:items-center z-10 pb-8">
          <p className="text-lg text-primary font-medium py-1">
            Welcome to Cloud Rudra Media
          </p>
          <p className="text-3xl font-bold">
            Power Your Business with Technology
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-auto gap-14 xl:gap-20 z-10 items-center justify-center">
          {Details.map((details, index) => (
            <div
              key={index}
              className="bg-white hover:border-l-4 hover:border-l-primary w-[300px] h-full  p-5"
            >
              <div className="flex flex-col items-center lg:items-start space-y-5">
                <div>{details.icon}</div>
                <h3 className=" italic text-lg text-black font-medium">
                  {details.title}
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-secondary text-sm">
                  {details.description.map((desc, idx) => (
                    <React.Fragment key={idx}>
                      <li>{desc.contents1}</li>
                      <li>{desc.contents2}</li>
                      <li>{desc.contents3}</li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute top-0 -left-5">
          <Image
            src={"/images/services-bg-5.png"}
            width={1400}
            height={900}
            quality={100}
            alt="corner image"
            className="lg:w-full xl:w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute bottom-0 -left-5">
          <Image
            src={"/images/services-bg-5.png"}
            width={1400}
            height={900}
            quality={100}
            alt="corner image"
            className="lg:w-full xl:w-full rotate-180 h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
