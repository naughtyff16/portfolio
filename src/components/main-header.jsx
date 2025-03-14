import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon } from "lucide-react";

const mainHederData = [
  { Title: "Home", url: "/" },
  { Title: "About", url: "/about-us" },
  { Title: "Services", url: "/services" },
  { Title: "Blogs", url: "/blogs" },
  { Title: "Contact", url: "/contact-us" },
];

export default function MainHeader({ darkMode, toggleDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  useEffect(() => {
    const header = document.querySelector("#MainHeader");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      id="MainHeader"
      className={`w-full h-auto lg:h-[90px] sticky top-0 z-50 py-2 px-2 md:px-4 transition-all dark:border ${
        scroll > headerTop
          ? "is-sticky bg-white shadow-lg dark:bg-darkBg dark:border-primary dark:shadow-[0_0_10px_#00bfff]"
          : "bg-white dark:bg-darkBg dark:border-primary dark:shadow-[0_0_10px_#00bfff]"
      } text-black dark:text-white`}
    >
      <div className="container grid lg:grid-cols-3 items-center">
        <div className="flex col-span-1 justify-between px-2 md:px-4 lg:px-6 items-center">
          <div className="w-20 lg:w-20 lg:ml-12 xl:ml-24">
            <Link href={"/"}>
              <Image
                src={"/images/my-profile.png"}
                width={1300}
                height={900}
                quality={100}
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col gap-2 items-center justify-center lg:hidden w-10 h-8 relative z-50"
          >
            <span
              className={`block w-7 h-1 bg-black dark:bg-white rounded transition-all duration-700 ${
                showMenu ? "rotate-45 translate-y-3" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-black dark:bg-white rounded transition-all duration-500 origin-left ${
                showMenu ? "scale-x-0" : "scale-x-100"
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-black dark:bg-white rounded transition-all duration-700 ${
                showMenu ? "-rotate-45 -translate-y-3" : "translate-y-0"
              }`}
            ></span>
          </button>
        </div>

        <div className="hidden col-span-2 lg:flex justify-between items-center">
          <ul className="flex gap-6 xl:gap-10 font-serif font-medium text-sm">
            {mainHederData.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="group relative hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <p>{item.Title}</p>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-4 lg:mr-20">
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 p-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-900" />
              )}
            </button>
            <a
              href="/Karthikeyan CV.pdf"
              download="Karthikeyan_Resume.pdf"
              className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary dark:hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_10px_#00bfff]"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <ul
        className={`lg:hidden transition-all duration-1000 ease-in-out overflow-hidden bg-primary text-white p-3 rounded-b-md shadow-2xl 
          ${showMenu ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"}`}
      >
        {mainHederData.map((item, index) => (
          <li key={index} className="py-1">
            <Link href={item.url} onClick={() => setShowMenu(false)}>
              {item.Title}
            </Link>
          </li>
        ))}
        <li className="py-1">
          <a
            href="/Karthikeyan CV.pdf"
            download="Karthikeyan_Resume.pdf"
            className="bg-black text-sm px-3 py-2 text-white rounded-lg"
          >
            Download CV
          </a>
        </li>
      </ul>
    </header>
  );
}
