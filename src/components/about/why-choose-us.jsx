const Details = [
  { title: "Client Retention", percentage: 95 },
  { title: "On-time Delivery", percentage: 100 },
  { title: "Customer Satisfaction", percentage: 100 },
];

export default function () {
  return (
    <section className="w-full h-auto bg-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-start flex flex-wrap lg:flex-row items-center w-full gap-8 xl:gap-14">
          <div className="text-primary flex flex-col space-y-3 lg:w-2/5">
            <p className="text-lg font-medium text-primary">
              Cloud Rudra Media
            </p>
            <p className="text-4xl text-black font-bold leading-tight">
              Why Choose Us?
            </p>
          </div>

          <div className="flex items-center gap-10 md:gap-20 lg:gap-10 xl:gap-20">
            {Details.map((detail, index) => (
              <div className="flex-col">
                <p className="text-primary text-3xl lg:text-4xl mb-3">
                  {detail.percentage}%
                </p>
                <p className="text-black font-medium leading-tight">
                  {detail.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
