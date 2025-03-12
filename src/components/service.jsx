import Image from "next/image";
import MobileIcon from "./icons/mobile-icon";

const services = [
  {
    id: 1,
    icon: <MobileIcon />,
    title: "Software Development",
    text: "We craft innovative software solutions that align with your business goals. Our team of skilled developers builds robust and scalable applications to streamline your operations and enhance the customer experience.",
  },
  {
    id: 2,
    icon: <MobileIcon />,
    title: "Mobile Development",
    text: "Transform your business with cutting-edge mobile apps. Our experts develop feature-rich iOS and Android apps that engage your audience, boost brand visibility, and drive revenue.",
  },
  {
    id: 3,
    icon: <MobileIcon />,
    title: "App Development",
    text: "We specialize in designing and developing intuitive and user-friendly apps. Our apps are optimized for performance and security, providing a seamless user experience across all devices.",
  },
  {
    id: 4,
    icon: <MobileIcon />,
    title: "Cloud Solutions",
    text: "We leverage the power of cloud technology to provide scalable, cost-effective, and secure solutions. Our cloud experts can help you migrate to the cloud, optimize your infrastructure, and ensure business continuity.",
  },
  {
    id: 5,
    icon: <MobileIcon />,
    title: "IT Infrastructure",
    text: "We design and implement robust IT infrastructure solutions to support your business operations. Our services include network design, server and storage solutions, and IT security.",
  },
  {
    id: 6,
    icon: <MobileIcon />,
    title: "Cyber Security",
    text: "We protect your business from cyber threats with advanced security solutions. Our cybersecurity experts provide comprehensive services, including threat detection, data protection, and incident response.",
  },
];

export default function Service() {
  return (
    <section className="h-auto w-full bg-white relative">
      <p className="hidden lg:block text-7xl xl:text-8xl font-bold opacity-5 absolute lg:bottom-24 xl:bottom-32">
        Amazing IT Solutions
      </p>
      <div className="container lg:flex mx-auto px-4 py-12 md:px-12 lg:px-16 lg:gap-10">
        <div className="flex flex-col justify-start items-start space-y-4 lg:space-y-6 mb-12 lg:w-[80%] ">
          <p className="text-lg font-medium text-primary py-1">Services</p>
          <p className="text-3xl font-bold">
            Elevate Your Business with Cloud Rudra Media's IT Solutions
          </p>
          <p className="text-sm font-normal w-full text-justify text-gray-700">
            Cloud Rudra Media empowers businesses with cutting-edge IT
            infrastructure and consulting services. Our tailored solutions drive
            digital transformation, optimize operations, and enhance security,
            giving you a competitive edge. Let us propel your business to new
            heights.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full lg:w-[90%] gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col w-[45%] space-y-4 z-10 group ${
                index % 2 === 1 ? `lg:mt-14 xl:mt-24` : ``
              }`}
            >
              <div className="text-black group-hover:text-primary space-y-4">
                <div className="w-10 h-10">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              <p className="text-sm font-normal md:text-justify text-gray-700">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src={"/images/services-bg.png"}
            width={1400}
            height={1000}
            quality={100}
            alt="corner image"
            className=" w-[400px] xl:w-[500px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
