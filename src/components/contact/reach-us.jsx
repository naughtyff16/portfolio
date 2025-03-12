import ContactCallIcon from "../icons/contact-call-icon";
import LocationIcon from "../icons/location-icon";
import MailIcon from "../icons/mail-icon";

export default function () {
  return (
    <section className="w-full h-auto bg-[#F6F3F3] relative mx-auto py-12 px-4 md:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-14 items-center justify-center">
        <div className="bg-white rounded-md border border-primary w-[300px] h-[200px] p-5">
          <div className="flex flex-col items-center lg:items-start space-y-5">
            <div>
              <LocationIcon />
            </div>
            <h3 className="text-xs text-primary font-medium">Visit us Daily</h3>
            <p>
              A 117, Kanara Business Center, Laxmi Nagar, Ghatkopar East, Mumbai
              - 400075.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md border border-primary p-5  w-[300px] h-[200px]">
          <div className="flex flex-col items-center lg:items-start space-y-5">
            <div>
              <ContactCallIcon />
            </div>
            <h3 className="text-xs text-primary font-medium">Contact Us</h3>

            <p>+91 90296 90500</p>
          </div>
        </div>
        <div className="bg-white rounded-md border border-primary p-5 w-[300px] h-[200px]">
          <div className="flex flex-col items-center lg:items-start space-y-5">
            <div className="text-primary">
              <MailIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xs text-primary font-medium">Email Us</h3>
            <p>Info@Cloud Rudra Media.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
