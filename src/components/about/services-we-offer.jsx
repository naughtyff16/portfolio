import Image from "next/image";
import ServicesIcon1 from "../icons/services-icon-1";
import ServicesIcon2 from "../icons/services-icon-2";
import ServicesIcon3 from "../icons/services-icon-3";
import Link from "next/link";

const services = [
  { title: "Managed Services", icon: <ServicesIcon1 /> },
  { title: "Cloud Services", icon: <ServicesIcon2 /> },
  { title: "Software development", icon: <ServicesIcon3 /> },
];

export default function () {
  return (
    <section className="h-auto relative w-full mx-auto py-12 px-4 md:px-12 lg:px-16 bg-[#F6F3F3]">
      <div className="container flex flex-col">
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 pb-4 lg:pb-0">
          <p className="text-lg text-primary font-medium py-1">Services</p>
          <p className="text-3xl font-bold">Services We Offer</p>
          <div className="text-sm font-normal text-gray-700 text-start lg:text-center w-full lg:w-4/5">
            <p className="leading-relaxed">
              Cloud Rudra Media is your top choice for full-cycle software
              development and IT services. We effortlessly match your project
              objectives and react to changing business needs. Our journey with
              you begins with IT strategy consulting, in which we delve deeply
              into your needs and goals, creating thorough technological
              roadmaps that lay the groundwork for success.
            </p>
            <p className="mt-4 leading-relaxed">
              Our experience includes the entire process of developing scalable
              solutions. We are more than just service providers; we are your
              ongoing partners. Whether you're starting a new business or want
              to improve your existing systems, Cloud Rudra Media has the
              vision, strategy, and technical expertise to help you succeed.
              Choose us for a collaborative journey of innovation and
              excellence.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14 xl:gap-20 justify-center lg:mx-auto px-6 lg:px-12 w-full h-full pt-10 lg:pt-0 relative z-10 lg:top-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[180px] xl:h-[200px] bg-white rounded-lg shadow-md border border-primary hover:bg-primary hover:text-white hover:shadow-lg"
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

        <div className="bg-white p-8 rounded-lg shadow-md mt-10 relative lg:-top-10">
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
        </div>
      </div>
    </section>
  );
}
