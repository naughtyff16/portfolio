import InnovationIcon from "../icons/innovation-icon";
import UserCheckIcon from "../icons/user-check-icon";
import PartnershipIcon from "../icons/partnership-icon";
import DigitalOceanIcon from "../icons/digital-ocean-icon";
import React from "react";
import Image from "next/image";
import ServicesIcon1 from "../icons/services-icon-1";
import ServicesIcon2 from "../icons/services-icon-2";
import ServicesIcon3 from "../icons/services-icon-3";

const Details = [
  {
    id: 1,
    title: "Frontend",
    description: [
      {
        contents1: "Next.js",
        contents2: "React.js",
        contents3: "Redux",
        contents4: "JavaScript",
        contents5: "HTML",
        contents6: "Tailwind CSS",
      },
    ],
    icon: <ServicesIcon1 />,
  },
  {
    id: 2,
    title: "Backend",
    description: [
      {
        contents1: "Django",
        contents2: "Flask",
        contents3: "FastAPI",
        contents4: "Python",
        contents5: "PostgreSQL",
        contents6: "MongoDB",
        contents7: "Strapi CMS",
      },
    ],
    icon: <ServicesIcon2 />,
    icon: <ServicesIcon3 />,
  },
  {
    id: 3,
    title: "Data Analysis",
    description: [
      {
        contents1: "Python (Pandas, NumPy, MatPlotLib)",
        contents2: "TensorFlow",
        contents3: "PowerBI",
        contents4: "Jupyter NoteBook",
        contents5: "MySQL",
        contents6: "Excel",
      },
    ],
    icon: <ServicesIcon2 />,
  },
  {
    id: 4,
    title: "Tools & Technologies",
    description: [
      {
        contents1: "API Development",
        contents2: "Git, Github",
        contents3: "Bitbucket",
        contents4: "Jira",
        contents5: "Trello",
        contents6: "Postman",
        contents7: "Figma",
      },
    ],
    icon: <InnovationIcon />,
  },
];

export default function () {
  return (
    <section
      id="solutions"
      className="h-auto w-full bg-[#F6F3F3] dark:bg-darkBg dark:text-darkText border-t-2 border-transparent dark:border-t-primary 
                 dark:shadow-[0px_-5px_10px_#00bfff] relative mx-auto py-12 px-4 md:px-12 lg:px-16"
    >
      <div className="container flex flex-col">
        <div className="flex flex-col gap-4 justify-center items-start lg:items-center z-10 pb-8">
          <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full animate-bounce hover:animate-none">
            My Skills & Expertise
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-auto gap-14 xl:gap-20 z-10 items-center justify-center">
          {Details.map((details, index) => (
            <div
              key={index}
              className="bg-white dark:bg-primary dark:hover:border-l-white hover:border-l-4 hover:border-l-primary w-[300px] h-full  p-5"
            >
              <div className="flex flex-col items-center lg:items-start space-y-5">
                <div className="text-primary dark:text-white">
                  {details.icon}
                </div>
                <h3 className=" italic text-lg font-medium">{details.title}</h3>
                <ul className="list-disc pl-5 space-y-5 text-sm">
                  {details.description.map((desc, idx) => (
                    <React.Fragment key={idx}>
                      {Object.values(desc).map((content, idx) => (
                        <li key={idx}>{content}</li>
                      ))}
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
