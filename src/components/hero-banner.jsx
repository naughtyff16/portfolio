import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextIcon from "./icons/next-icon";

const Banner = [
  {
    title: "Optimize IT to drive greater company value.",
    description:
      "Achieve complete visibility, control, security, and reliability across every system, application, process, and workflow!",
    buttonText: "Talk to an expert",
    buttonURL: "/services",
    image: "/images/two-laptops.png",
  },
  {
    title: "Transform your business with our IT consulting services.",
    description:
      "Cloud Rudra Media offers expert IT consulting services that utilize cutting-edge technology to help you succeed.",
    buttonText: "Explore the Full IT Life Cycle",
    buttonURL: "/services",
    image: "/images/two-laptops.png",
  },
  {
    title: "Cloud transformation drives growth and innovation.",
    description:
      "Maximize your business potential with secure and scalable IT cloud consulting solutions.",
    buttonText: "Transform using Cloud",
    buttonURL: "/services",
    image: "/images/two-laptops.png",
  },
  {
    title: "Outsource IT for cost-effective and simplified operations",
    description:
      "Cloud Rudra Media offers IT outsourcing for maximum agility and scalability.",
    buttonText: "Consider IT Outsourcing.",
    buttonURL: "/services",
    image: "/images/two-laptops.png",
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
    <section className="relative w-full h-auto">
      <Carousel
        className="max-w-full mx-auto"
        infiniteLoop={true}
        stopOnHover={false}
        // renderArrowNext={nextArrow}
        // renderArrowPrev={prevArrow}
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
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
                  {item.title}
                </h1>
                <p className="text-lg text-primary font-medium">
                  {item.description}
                </p>
                <div className="bg-primary text-white text-sm px-5 py-2 rounded-sm inline-block">
                  <Link href={item.buttonURL}>{item.buttonText}</Link>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full col-span-1 lg:col-span-2 order-first lg:order-last">
              <div className="w-full h-full relative">
                <Image
                  src={item.image}
                  width={1400}
                  height={900}
                  quality={100}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="hidden lg:block -z-10 absolute -bottom-16 left-4 xl:-bottom-14 xl:left-28 ">
        <Image
          src={"/images/hero-banner-bg.png"}
          width={500}
          height={300}
          quality={100}
          alt="corner image"
          className=" lg:w-[350px] xl:w-[400px] h-auto object-cover"
        />
      </div>
    </section>
  );
}
