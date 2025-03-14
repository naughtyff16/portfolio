import Image from "next/image";
import RadioIcon from "../icons/radio-icon";

const milestones = [
  {
    title: "Frontend:",
    description:
      "Next.js, React.js, Redux, JavaScript, HTML, CSS, Tailwind CSS",
  },
  {
    title: "Backend:",
    description:
      "Django, Flask, FastAPI, Python, SQL, MongoDB, Strapi CMS",
  },
  {
    title: "Data Analysis:",
    description:
      "Python (Pandas, NumPy, MatPlotLib), TensorFlow, PowerBI, Jupyter NoteBook, MySQL, Excel",
  },
  {
    title: "First Successful Project",
    description:
      "We completed our IT company's first successful project for our clients with the help of our dedicated crew.",
  },
];

export default function () {
  return (
    <section className="w-full h-auto bg-gray-100 relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="flex mb-5 items-center justify-center">
          <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full animate-bounce hover:animate-none">
            My Skills & Expertise
          </div>
        </div>

        <div className="w-full h-auto relative z-10">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="items-center grid lg:grid-cols-2 border-b border-b-[#646464] space-y-6 p-3 md:p-5"
            >
              <div className="flex items-center gap-3 md:gap-5 xl:gap-8">
                <div>
                  <RadioIcon />
                </div>

                <h3 className="text-lg text-start font-bold text-black">
                  {milestone.title}
                </h3>
              </div>

              <div className="flex items-center text-start">
                <p className=" text-gray-700 text-justify">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute bottom-5 right-0">
          <Image
            src={"/images/about-bg2.png"}
            width={500}
            height={300}
            quality={100}
            alt="corner image"
            className="lg:w-[200px] xl:w-[300px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
