import Link from "next/link";
import MailIcon from "./icons/mail-icon";
import PhoneIcon from "./icons/phone-icon";
import InstagramIcon from "./icons/instagram-icon";
import FacebookIcon from "./icons/facebook-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import TwitterIcon from "./icons/twitter-icon";

export default function Header() {
  return (
    <section
      id="header"
      className="h-auto md:h-[40px] w-full bg-primary text-white"
    >
      <div className="container flex justify-between items-center h-full px-2 md:px-6 lg:px-8 xl:px-12 mx-auto">
        <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-4 md:h-full items-center">
          <Link target="_blank" href={"mailto:info@cloudrudramedia.com"}>
            <div className="flex gap-1 hover:underline lg:gap-2 py-1">
              <MailIcon className="w-5 h-5" />
              <p className="text-sm">info@cloudrudramedia.com</p>
            </div>
          </Link>
          <div className="hidden md:block md:border border-r-0 opacity-60 md:h-full"></div>
          <div className="flex gap-1 text-sm hover:underline lg:gap-2 py-1">
            <PhoneIcon />
            <a href="tel:+91 90296 90500">+91 90296 90500</a>
          </div>
        </div>

        <div className="pointer-events-none flex gap-1 md:gap-2 lg:gap-3 md:h-full md:items-center -ml-3">
          <div className="md:h-full md:border border-r-0 opacity-60"></div>
          <Link target="_blank" href={"https://www.facebook.com/"}>
            <FacebookIcon />
          </Link>
          <div className="md:border border-r-0 md:h-full opacity-60"></div>
          <Link target="_blank" href={"https://www.instagram.com/"}>
            <InstagramIcon />
          </Link>
          <div className="md:border border-r-0 md:h-full opacity-60"></div>
          <Link target="_blank" href={"https://www.linkedin.com/"}>
            <LinkedinIcon />
          </Link>
          <div className="md:border border-r-0 md:h-full opacity-60"></div>
          <Link target="_blank" href={"https://www.twitter.com/"}>
            <TwitterIcon />
          </Link>
          <div className="md:border border-r-0 md:h-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
