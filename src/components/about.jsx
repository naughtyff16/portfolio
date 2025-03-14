import Image from "next/image";
import Link from "next/link";
import CheckIcon from "./icons/check-icon";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const isAboutPage = router.pathname === "/about-us";

  return (
    <section
      id="about"
      className="w-full h-auto bg-[#F6F3F3] relative dark:bg-darkBg dark:text-darkText
      border-t-2 border-transparent dark:border-t-primary 
      dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-center lg:justify-start items-center lg:items-start mx-auto relative z-20">
          <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-bounce hover:animate-none">
            About Me
          </div>

          <p className="text-xl font-bold text-justify">
            Hi, I'm Karthikeyan – A Passionate Software & Web Developer
          </p>
          <p className="text-sm font-normal pb-4 text-justify leading-relaxed">
            Welcome to my portfolio!{" "}
            <span className="font-bold text-primary">I'm Karthikeyan,</span> a{" "}
            <span className="font-bold">
              Software Developer at Cloudrudra Media Private Limited
            </span>{" "}
            with a strong passion for creating powerful and scalable web
            applications. My journey in development started during my college
            days at <span className="font-bold">Chennai,</span> where I pursued
            my{" "}
            <span className="font-bold">
              Undergraduate Degree in Computer Science Engineering.
            </span>{" "}
            Since then, I have been constantly evolving and improving my skills
            in{" "}
            <span className="font-bold">
              frontend development, backend development, machine learning, and
              API development.
            </span>
          </p>

          <p className="flex justify-center items-center">
            {isAboutPage ? (
              <Link
                href={"/contact-us"}
                className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_10px_#00bfff]"
              >
                Contact Me
              </Link>
            ) : (
              <Link
                href={"/about-us"}
                className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_10px_#00bfff]"
              >
                Learn More
              </Link>
            )}
          </p>
        </div>
        <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
          <Image
            src={"/images/my-about-img.jpeg"}
            width={1400}
            height={1000}
            quality={100}
            alt="about image"
            className="w-full h-full object-cover object-[center_40%]"
          />
        </div>
      </div>
    </section>
  );
}
