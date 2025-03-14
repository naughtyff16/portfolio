import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Details = [
  { title: "Project Completion Rate", percentage: 98 },
  { title: "Code Efficiency & Optimization", percentage: 96 },
  { title: "Client Satisfaction", percentage: 100 },
];

export default function StandOutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="w-full h-auto bg-white relative dark:bg-darkBg dark:text-darkText
      border-t-2 border-transparent dark:border-t-primary 
      dark:shadow-[0px_-5px_10px_#00bfff]"
    >
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-start flex flex-wrap lg:flex-row items-center w-full gap-8 xl:gap-14">
          {/* Title */}
          <div className="text-primary flex flex-col space-y-3 lg:w-2/5">
            <p className="text-4xl font-bold leading-tight">
              What Makes Me Stand Out?
            </p>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-10 md:gap-20 lg:gap-10 xl:gap-20">
            {Details.map((item, index) => (
              <div key={index} className="flex flex-col text-center group">
                <p className="text-primary text-3xl lg:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {inView ? <CountUp end={item.percentage} duration={5} /> : 0}%
                </p>
                <p className="font-medium leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
