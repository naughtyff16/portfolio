import ContactForm from "./contact-form";

export default function () {
  return (
    <section id="contact" className="h-auto w-full bg-white relative">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 flex flex-col">
        <div className="flex flex-col justify-center items-start lg:items-center gap-4 pb-6 lg:pb-14">
          <p className="text-lg text-primary font-medium py-1">
            ______ GET FREE QUOTE
          </p>
          <p className="text-3xl font-bold">
            Ensure Your Project's Success with Cloud Rudra Media.
          </p>
          <p className="text-sm font-normal text-secondary">
            Get your hands on our exceptional Full Life Cycle IT services, which
            include end-to-end support and expert coaching.
          </p>
        </div>
        <div className="flex justify-center items-start lg:items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
