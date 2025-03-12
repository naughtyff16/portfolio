import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "../icons/star-icon";
import ClientNextIcon from "../icons/client-next-icon";

const feedBack = [
  {
    id: 1,
    text: "Morbi nec accumsan diam Maecenas gravida massa acmetus lacus eleifend, at rutrum tellus condimentum arcu et vitae magna maximu,at congue.",
    name: "Pelican Steve",
    username: "@Pelican",
    rating: "5",
  },
  {
    id: 2,
    text: "Morbi nec accumsan diam Maecenas gravida massa acmetus lacus eleifend, at rutrum tellus condimentum arcu et vitae magna maximu,at congue.",
    name: "Pelican Steve",
    username: "@Pelican",
    rating: "5",
  },
  {
    id: 3,
    text: "Morbi nec accumsan diam Maecenas gravida massa acmetus lacus eleifend, at rutrum tellus condimentum arcu et vitae magna maximu,at congue.",
    name: "Pelican Steve",
    username: "@Pelican",
    rating: "5",
  },
  {
    id: 4,
    text: "Morbi nec accumsan diam Maecenas gravida massa acmetus lacus eleifend, at rutrum tellus condimentum arcu et vitae magna maximu,at congue.",
    name: "Pelican Steve",
    username: "@Pelican",
    rating: "4",
  },
];

export default function () {
  const PrevButton = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute -bottom-14 left-7 transform -translate-y-1/2"
    >
      <ClientNextIcon className="w-9 h-9 text-[#646464] hover:text-primary" />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute -bottom-14 left-16 transform -translate-y-1/2"
    >
      <ClientNextIcon className="w-9 h-9 rotate-180 text-[#646464] hover:text-primary" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="h-auto w-full bg-white mx-auto py-12 xl:py-0 px-4 md:px-12 xl:px-0">
      <div className="container xl:gap-4 flex lg:flex-row lg:items-center flex-col">
        <div className="hidden lg:block">
          <Image
            src={"/images/client-feedback-1.png"}
            width={1400}
            height={1000}
            quality={100}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative lg:w-3/4 space-y-10">
          <div className="flex flex-col gap-4 justify-center items-start lg:items-center">
            <p className="text-lg text-primary font-medium py-1">
              Welcome to Cloud Rudra Media
            </p>
            <p className="text-3xl font-bold">
              Here’s what our amazing clients
            </p>
          </div>
          <Slider {...settings}>
            {feedBack.map((details, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row w-full p-3 items-center justify-center"
              >
                <div className="bg-white rounded-md border w-full h-full p-5">
                  <div className="flex flex-col items-center lg:items-start space-y-5">
                    <div className="flex">
                      {Array.from({ length: details.rating }).map((index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>

                    <p className="text-sm text-secondary">{details.text}</p>
                    <div className="text-sm font-medium">
                      <h3 className="text-primary">{details.name}</h3>
                      <h4 className="text-secondary">{details.username}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
