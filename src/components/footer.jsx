import Link from "next/link";
import FacebookIcon from "./icons/facebook-icon";
import InstagramIcon from "./icons/instagram-icon";
import TwitterIcon from "./icons/twitter-icon";
import LinkdinIcon from "./icons/linkedin-icon";
import Image from "next/image";
import PhoneIcon from "./icons/phone-icon";
import MailIcon from "./icons/mail-icon";

const menuItems = [
  { title: "HOME", url: "/" },
  { title: "About", url: "/about-us" },
  { title: "Services", url: "/services" },
  // { title: "Products", url: "/" },
  // { title: "Solutions", url: "/" },
  { title: "Blogs", url: "/blogs" },
  { title: "Contact", url: "contact-us" },
];
export default function () {
  return (
    <section id="contact" className="relative w-full h-auto bg-[#454545]">
      <div className=" text-white py-8 mx-auto px-4 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6">
          <div className="flex md:flex-row flex-col md:justify-between gap-6">
            <Link href={"/"}>
              <Image
                 src={"/images/my-profile.png"}
                width={1400}
                height={1000}
                quality={100}
                alt="Logo"
                className="w-28 lg:w-40 h-auto xl:ml-10"
              />
            </Link>
            <div className="md:px-4 flex items-center gap-4 flex-wrap">
              {/* <Link target="_blank" href={"https://www.facebook.com/"}>
                <div className="flex gap-2 hover:text-primary">
                  <FacebookIcon className="text-primary w-5 h-5" />
                  <p>Facebook</p>
                </div>
              </Link> */}
              <Link target="_blank" href={"https://www.instagram.com/naughtyff_yt"}>
                <div className="flex gap-2 hover:text-primary">
                  <InstagramIcon className="text-primary w-5 h-5" />
                  <p>Instagram</p>
                </div>
              </Link>
              {/* <Link target="_blank" href={"https://www.twitter.com/"}>
                <div className="flex gap-2 hover:text-primary">
                  <TwitterIcon className="text-primary w-5 h-5" />
                  <p>Twitter</p>
                </div>
              </Link> */}
              <Link target="_blank" href={"https://www.linkedin.com/in/karthikeyan-yt16"}>
                <div className="flex gap-2 hover:text-primary">
                  <LinkdinIcon className="text-primary w-5 h-5" />
                  <p>Linkdin</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="container mx-auto border-t-[0.5px] opacity-70"></div>

          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8 md:border-r-[0.1px] border-opacity-5">
              <p className="text-4xl font-bold font-serif ">
              Have an idea? <br /> Let's bring it to life!
              </p>
              <div class="flex flex-wrap gap-6">
                <Link target="_blank" href={"mailto:karthipersonal2003@gmail.com"}>
                  <div className="flex gap-2 items-center hover:text-primary hover:underline">
                    <MailIcon className="text-primary w-5 h-5" />
                    <p>karthipersonal2003@gmail.com</p>
                  </div>
                </Link>

                <div className="flex gap-2 items-center hover:text-primary hover:underline">
                  <PhoneIcon className="text-primary w-5 h-5" />
                  <a href="tel:+91 6381410754">+91 6381410754</a>
                </div>
              </div>
            </div>

            <div className="container md:hidden mx-auto border-t-[0.5px] mt-5 opacity-70"></div>

            <div className="flex md:justify-center md:items-center">
              <div className="flex flex-col mb-2 lg:mb-5">
                <p className="font-bold text-xl py-6 uppercase">Quick Links & Services</p>
                <div className="flex gap-20">
                  <ul className="text-sm space-y-2 flex flex-col items-start">
                    {menuItems.map((item, index) => (
                      <li key={index} className="py-1 hover:text-primary">
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="text-sm space-y-2 flex flex-col items-start">
                    <li className="py-1 hover:text-primary">
                    Software Development
                    </li>
                    <li className="py-1 hover:text-primary">
                    Web Development
                    </li>
                    <li className="py-1 hover:text-primary">Frontend Development</li>
                    <li className="py-1 hover:text-primary">API Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 right-0">
          <Image
            src={"/images/footer-bg.png"}
            width={1200}
            height={1000}
            quality={100}
            alt="corner image"
            className=" w-[250px] xl:w-[300px] h-auto object-cover"
          />
        </div>
        <div className="container mx-auto border-t-[0.5px] mt-5 opacity-70"></div>
        <div className="flex justify-center items-center text-xs">
          <div className="mt-5">
            Copyright © 2024 Naughty FF . All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
