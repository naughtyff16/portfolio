import Image from "next/image";
import { useState } from "react";
import FaqArrowIcon from "../icons/faq-arrow-icon";

const faqs = [
  {
    id: 1,
    question: "Tailored Support for Your Business Needs",
    answer:
      "At Cloud Rudra Media Company, we provide a dedicated team focused on meeting your unique IT requirements.",
  },
  {
    id: 2,
    question: "Diagnosis",
    answer:
      "At Cloud Rudra Media Company, we provide a dedicated team focused on meeting your unique IT requirements.",
  },
  {
    id: 3,
    question: "Audit and Documentation",
    answer:
      "At Cloud Rudra Media Company, we provide a dedicated team focused on meeting your unique IT requirements.",
  },
  {
    id: 4,
    question: "Investment Plan",
    answer:
      "At Cloud Rudra Media Company, we provide a dedicated team focused on meeting your unique IT requirements.",
  },
  {
    id: 5,
    question: "Support",
    answer:
      "At Cloud Rudra Media Company, we provide a dedicated team focused on meeting your unique IT requirements.",
  },
];

export default function () {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpansion = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="about" className="w-full h-auto bg-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 col-span-1 justify-start items-start mx-auto w-full order-1 lg:order-2">
          <p className="text-lg text-primary font-medium py-1">
            Welcome to Cloud Rudra Media
          </p>
          <p className="text-3xl font-bold">
            How Does cloud Rudra media Company's IT Technical Support Work?
          </p>
          <p className="text-sm font-normal pb-4 leading-relaxed text-justify text-gray-700">
            At Cloud Rudra Media, we're more than just an IT service provider;
            we're your trusted partner in digital transformation. With a strong
            foundation built on quality and commitment, we've been empowering
            businesses since 2001.
          </p>

          <div className="container mx-auto px-4 py-4 flex w-full">
            <div className="w-full">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-secondary text-white mb-4 hover:bg-primary rounded-xl"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpansion(faq.id)}
                  >
                    <p className=" text-lg p-3 text-left grow">
                      {faq.question}
                    </p>
                    <span
                      className={` p-3 flex-shrink-0 transition-transform duration-500 ${
                        expandedItem === faq.id ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <FaqArrowIcon />
                    </span>
                  </div>
                  {expandedItem === faq.id && (
                    <p className="text-secondary rounded-b-xl border border-primary bg-white w-full text-sm p-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1 z-10">
          <Image
            src={"/images/services-3.png"}
            width={1920}
            height={1080}
            quality={100}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:block absolute top-0 right-0">
          <Image
            src={"/images/services-bg-3.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-[200px] xl:w-[250px] h-auto object-cover"
          />
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src={"/images/services-bg-3.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-[200px] xl:w-[250px] rotate-180 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
