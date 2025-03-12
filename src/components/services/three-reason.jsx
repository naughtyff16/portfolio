import FileTickIcon from "../icons/file-tick-icon";
import PercentageIcon from "../icons/percentage-icon";
import StarBadgeIcon from "../icons/star-badge-icon";

export default function () {
  return (
    <section className="w-full h-auto bg-primary relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/why-crm-bg.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="relative flex flex-col lg:grid italic lg:grid-cols-3 w-full gap-6 lg:gap-10 items-center justify-center z-10">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="flex items-center justify-center bg-white rounded-full w-16 h-16">
              <PercentageIcon />
            </div>
            <h1 className="text-3xl text-white font-bold">
              100% cost-effective solutions
            </h1>
            <p className="text-sm text-white font-medium">
              We tailor our services to optimize your budget without
              compromising on quality.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="flex items-center justify-center bg-white rounded-full w-16 h-16">
              <StarBadgeIcon />
            </div>
            <h1 className="text-3xl text-white font-bold">
              20+ years of industry expertise
            </h1>
            <p className="text-sm text-white font-medium">
              Our team of seasoned professionals brings decades of experience to
              every project.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="flex items-center justify-center bg-white rounded-full w-16 h-16">
              <FileTickIcon />
            </div>
            <h1 className="text-3xl text-white font-bold">
              Proven Track Record
            </h1>
            <p className="text-sm text-white font-medium">
              We've successfully delivered hundreds of projects, exceeding
              client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
