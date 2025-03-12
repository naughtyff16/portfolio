export default function () {
  return (
    <section className="w-full h-auto bg-primary relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/two-column-bg.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="container relative z-10 mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-start grid lg:grid-cols-2 items-center gap-5">
          <p className="text-5xl text-white font-bold leading-tight">
            Are you looking for cutting-edge IT solutions for your business?
          </p>

          <div className="space-y-5 text-white mt-2">
            <div className="bg-white text-primary text-sm px-5 py-3 rounded-md inline-block">
              Utilize our entire suite of cost-effective solutions.
            </div>
            <p className="mt-4 text-base">
              Let's Get Started: Why Cloud Rudra Media?
            </p>
            <p className="">
              We are one of the most dependable and experienced full-cycle IT
              providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
