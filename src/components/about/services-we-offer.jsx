import Image from "next/image";
import ServicesIcon1 from "../icons/services-icon-1";
import ServicesIcon2 from "../icons/services-icon-2";
import ServicesIcon3 from "../icons/services-icon-3";
import Link from "next/link";

const services = [
  { title: "Software development", icon: <ServicesIcon3 /> },
  { title: "Web Development", icon: <ServicesIcon1 /> },
  { title: "Data Enthusist", icon: <ServicesIcon2 /> },
];

export default function () {
  return (
    <section
      className="h-auto relative w-full mx-auto py-12 px-4 md:px-12 lg:px-16 bg-[#F6F3F3] dark:bg-darkBg dark:text-darkText
      dark:border-t-2 dark:border-t-primary 
      dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="container flex flex-col">
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 pb-4 lg:pb-0">
          <div className="inline-block bg-primary text-white text-lg font-semibold px-4 py-2 rounded-full animate-bounce hover:animate-none">
            My Journey in Tech 🚀
          </div>
          <div className="text-sm font-normal text-start lg:text-center w-full lg:w-4/5">
            <p className="leading-relaxed text-justify">
              My passion for technology led me to explore different fields in{" "}
              <span className="font-bold">software development.</span> I started
              my journey as a{" "}
              <span className="font-bold">
                Data Analyst Intern at Grow Aasan Technologies,
              </span>{" "}
              where I worked extensively with{" "}
              <span className="font-bold">
                Excel, SQL, Python (Jupyter Notebook), Tableau, and FastAPI
              </span>{" "}
              on projects in the{" "}
              <span className="font-bold">
                Real Estate, Retail, Restaurant, Marketing, and Apparel
              </span>{" "}
              industries. This experience gave me a deep understanding of data
              and how businesses use insights for decision-making. Currently, I
              am working as a{" "}
              <span className="font-bold">
                Software Developer at Cloudrudra Media Private Limited.
              </span>{" "}
              Here, I focus on developing{" "}
              <span className="font-bold">
                modern, scalable, and responsive web applications using
                React.js, Next.js, and Tailwind CSS,
              </span>{" "}
              ensuring smooth user experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14 xl:gap-20 justify-center lg:mx-auto px-6 lg:px-12 w-full h-full pt-10 lg:pt-20 relative z-10 l">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[180px] xl:h-[200px] bg-white rounded-lg shadow-md border border-primary hover:bg-primary dark:hover:bg-transparent hover:text-white dark:bg-primary hover:shadow-lg dark:hover:shadow-[0_0_10px_#00bfff]"
            >
              <div className="flex flex-col items-center p-3">
                <div className="w-16 h-16 absolute -top-10 bg-white text-primary rounded-full flex items-center justify-center shadow-md border border-gray-200 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg pt-10 lg:pt-16 font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-white p-8 rounded-lg shadow-md mt-10 relative lg:-top-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:mt-32">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/services-1.png"
                width={600}
                height={400}
                alt="Cloud Services"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h4 className="text-2xl font-bold mb-4 text-black">
                Cloud & Security
              </h4>
              <p className="text-sm mb-4 text-gray-700">
                We specialize in Cloud and Security services, providing skilled
                Cloud Migration solutions and comprehensive IT Security measures
                to protect your precious data, strengthen your company’s digital
                resilience, and assure future-proof growth.
              </p>
              <Link
                href={"/services"}
                className="text-primary font-medium hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-0 -right-5 xl:-right-10">
            <Image
              src={"/images/services-bg-2.png"}
              width={1400}
              height={1000}
              quality={100}
              alt="corner image"
              className="lg:w-[220px] xl:w-[400px] h-auto object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
