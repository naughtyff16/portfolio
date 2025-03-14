import Image from "next/image";
import Link from "next/link";
import CheckIcon from "../icons/check-icon";

export default function () {
  return (
    <section
      className="w-full h-auto bg-white relative dark:bg-darkBg dark:text-darkText border-t-2 border-transparent dark:border-t-primary 
                 dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-start items-start mx-auto z-10">
          <span className="text-lg text-primary font-medium py-1 animate-bounce hover:animate-none">
            Why Work With Me?
          </span>

          <div className="flex flex-col space-y-4 md:space-y-6 my-6">
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="text-lg font-medium">
                Passionate about solving real-world problems using{" "}
                <span className="font-bold">technology & coding.</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="text-lg font-medium">
                Experience in{" "}
                <span className="font-bold">
                  both frontend and backend development
                </span>{" "}
                using the latest technologies.
              </div>
            </div>
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="text-lg font-medium">
                Strong analytical skills from my{" "}
                <span className="font-bold">data analysis background.</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="text-lg font-medium">
                A <span className="font-bold">creative mind</span> that thrives
                in both{" "}
                <span className="font-bold">
                  development and content creation.
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="pr-2">
                <CheckIcon />
              </div>
              <div className="text-lg font-medium">
                Always eager to learn, grow, and take on new challenges.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 font-normal">
            I’m always open to new opportunities, exciting collaborations, and
            meaningful connections. If you're looking for a developer with a mix
            of creativity, problem-solving skills, and technical expertise,
            <p className="flex items-center">
              <Link
                href={"/contact-us"}
                className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_10px_#00bfff]"
              >
                let’s connect! 🚀
              </Link>
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
