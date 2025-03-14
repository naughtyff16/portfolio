import Image from "next/image";
import Link from "next/link";
import CloseIcon from "../icons/close-icon";
import Popup from "reactjs-popup";
import { useState } from "react";

const Details = [
  {
    title: "Client satisfaction is always our top goal.",
    description:
      "We recognize that each project is unique, therefore we personalize our IT consulting services to meet your individual needs. Our experienced team works closely with you to ensure that every solution we give is fully aligned with your objectives and aspirations.",
    URL: "/",
  },
  {
    title: "User experience is important to all we do.",
    description:
      "In today's digital world, how people engage with information technology can determine success or failure. Cloud Rudra Media stresses building high-quality software that improves user experiences, making information technology more accessible, intuitive, and entertaining.When you work with Cloud Rudra Media, you are choosing a devoted team of digital innovators who are committed to making your ideas a reality. We are more than just consultants; we are digital craftspeople, change architects, and success champions. Discover the future with Cloud Rudra Media.",
    URL: "/",
  },
  {
    title: "Empowering Communities for Long-Term Impact",
    description:
      "At Cloud Rudra Media, we are motivated by a strong desire to serve communities and leave a lasting good influence. Our quest is about more than just commercial success; it is also about making a positive difference in the world around us. Through strategic alliances and projects, we actively interact with large corporations, using their resources, knowledge, and reach to strengthen our combined potential to influence change. These relationships allow us to embark on ambitious product development projects that have the potential to transform industries and enhance people's lives.However, it is important to consider people, society, and the environment in addition to the bottom line. Cloud Rudra Media believes that businesses have a responsibility to be good stewards of the communities where they operate. That is why, at every stage, we seek to match our actions with our beliefs, building sustainability, social responsibility, and ethical practices into our business model. Our purpose is to help communities make long-term, meaningful changes. Cloud Rudra Media aggressively seeks chances to assist important causes, promoting programs in education, health, environmental protection, and social welfare. Join us on our journey as we continue to serve, collaborate, and create to make the future brighter for everyone. Together, we can have a long-lasting impact on future generations.",
    URL: "/",
  },
];

export default function () {
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleDetailOpen = (detail) => {
    setSelectedDetail(detail);
  };
  const handleDetailClose = () => {
    setSelectedDetail(null);
  };

  return (
    <section
      className="w-full h-auto bg-white relative mx-auto py-12 px-4 md:px-12 lg:px-16 dark:bg-darkBg dark:text-darkText
      border-t-2 border-transparent dark:border-t-primary 
      dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="mx-auto grid lg:grid-cols-2 gap-10">
        <div className="relative z-10">
          <div className="space-y-5">
            <div className="text-primary text-lg font-semibold animate-bounce hover:animate-none">
              Passion for Content Creation
            </div>
            <h1 className="text-4xl font-bold leading-tight">Naughty FF</h1>
            <p className="text-lg py-2">
              Apart from coding, I'm also an{" "}
              <span className="font-bold">
                E-Sports player and a passionate content creator.
              </span>{" "}
              I run a{" "}
              <span className="font-bold">
                YouTube channel named "Naughty FF",
              </span>{" "}
              where I create engaging content around{" "}
              <span className="font-bold">FreeFire E-Sports.</span> My
              dedication to gaming and content creation has helped me earn the{" "}
              <span className="font-bold">Silver Play Button</span> from YouTube
              for surpassing{" "}
              <span className="font-bold">100,000 subscribers.</span> This
              journey has taught me{" "}
              <span className="font-bold">
                content creation, video editing, audience engagement, and
                digital marketing skills
              </span>{" "}
              that complement my work as a developer.
            </p>
          </div>
          {/* <div className="mt-10 space-y-12 w-full mx-auto">
            {Details.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-6 border border-gray-200 rounded-lg p-6 items-center shadow-sm"
              >
                <div className="flex items-center justify-center bg-primary text-white rounded-full w-14 h-14 text-3xl font-bold">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {detail.description.length > 250
                      ? `${detail.description.substring(0, 250)}...`
                      : detail.description}
                  </p>
                  <button
                    onClick={() => handleDetailOpen(detail)}
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <Image
              src="/images/play-btn-img.jpg"
              width={1400}
              height={1000}
              alt="Digital Innovation"
              className="rounded-lg w-full h-full object-cover object-[center_10%]"
            />
            <div className="absolute top-0 left-0 h-full w-1/2 bg-primary flex flex-col items-center justify-center text-white font-bold opacity-90 rounded-lg">
              <span className="text-3xl md:text-7xl">700K+</span>
              <span className="text-xl md:text-2xl text-center">
                YouTube Subscribers
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {selectedDetail && (
        <Popup
          open={true}
          closeOnDocumentClick={false}
          onClose={handleDetailClose}
          overlayStyle={{ background: "rgba(0,0,0,0.4)" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 w-full h-full md:w-[500px] lg:w-[600px] mx-auto">
            <button
              onClick={handleDetailClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full hover:bg-red-700"
            >
              <CloseIcon />
            </button>
            <div className="max-h-[400px] overflow-y-auto p-2">
              <h3 className="text-lg font-bold mb-4 text-primary">
                {selectedDetail.title}
              </h3>
              <p className="text-black text-justify leading-relaxed">
                {selectedDetail.description}
              </p>
            </div>
          </div>
        </Popup>
      )} */}
    </section>
  );
}
