import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextIcon from "./icons/next-icon";

const Banner = [
  // {
  //   title: "Innovative Web Development with Next.js & React",
  //   description:
  //     "I specialize in creating high-performance, scalable web applications using Next.js, React, and the latest web technologies.",
  //   buttonText: "Hire Me",
  //   buttonURL: "/",
  //   image: "/images/web-dev-img.png",
  // },
  {
    title: "Crafting Engaging Product & Web Development with Next.js & React",
    description:
      "As a Software Developer, I have worked on products like Gaming & OTT Platform and Real Estate Websites etc.., ensuring responsive design, efficient time management, and clean, maintainable code.",
    buttonText: "Hire Me",
    buttonURL: "/",
    image: "/images/web-dev-img.png",
  },

  {
    title: "Data Analytics & Visualization with Python & Power BI",
    description:
      "I specialize in data analysis using Jupyter Notebook, Python libraries like Pandas & NumPy, and creating insightful reports with Power BI.",
    buttonText: "Explore My Work",
    buttonURL: "/",
    image: "/images/data-analyst-img.png",
  },

  {
    title: "From Gaming to Code: My Journey in Free Fire & E-Sports",
    description:
      "With 700K+ subscribers on YouTube as Naughty FF, I blend gaming and content creation with software development expertise.",
    buttonText: "Check My E-Sports Journey",
    buttonURL: "/",
    image: "/images/my-img1.jpg",
  },
];

export default function HeroBanner() {
  const prevArrow = (onClickHandler, hasPrev, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={"absolute top-1/3 rotate-180 p-1 z-10 left-0"}
      >
        <NextIcon className="w-8 h-8 text-primary hover:text-black" />
      </button>
    );
  };
  const nextArrow = (onClickHandler, hasNext, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={"absolute top-1/3 p-1 z-10 right-0"}
      >
        <NextIcon className="w-8 h-8 text-primary hover:text-black" />
      </button>
    );
  };

  return (
    <section className="relative w-full h-auto dark:bg-darkBg dark:text-darkText">
      <Carousel
        className="max-w-full mx-auto"
        infiniteLoop={true}
        stopOnHover={false}
        renderArrowNext={nextArrow}
        renderArrowPrev={prevArrow}
        showArrows={false}
        autoPlay={true}
        interval={5000}
        emulateTouch
        swipeable={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={10}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {Banner.map((item, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col container my-auto py-4 px-4 md:px-12 lg:px-16 text-start">
              <div className="border-l-8 border-primary pl-4 space-y-5">
                <h1 className="text-xl md:text-2xl xl:text-5xl font-bold">
                  {item.title}
                </h1>
                <p className="text-base text-primary font-medium">
                  {item.description}
                </p>
                <div className="flex">
                  <Link
                    href={item.buttonURL}
                    className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_10px_#00bfff]"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[250px] md:h-[70vh] lg:h-[70vh] xl:h-[80vh] col-span-1 lg:col-span-2 order-first lg:order-last">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent z-10"></div> */}
              <Image
                src={item.image}
                width={1400}
                height={900}
                quality={100}
                alt="Banner"
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
