import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import CloseIcon from "./icons/close-icon";

const mainHederData = [
  { Title: "Home", url: "/" },
  { Title: "About", url: "/about-us" },
  { Title: "Services", url: "/services" },
  // { Title: "Products", url: "/" },
  // { Title: "Solutions", url: "/" },
  { Title: "Blogs", url: "/blogs" },
  { Title: "Contact", url: "/contact-us" },
];

export default function MainHeader() {
  // console.log("MainHeaderData----", mainHederData);

  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  // const menuRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector("#MainHeader");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);

    // const handleClickOutside = (event) => {
    //   if (menuRef.current && !menuRef.current.contains(event.target)) {
    //     setShowMenu(false);
    //   }
    // };
    // document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      id="MainHeader"
      className={`w-full h-auto lg:h-[80px] ${
        scroll > headerTop ? "is-sticky bg-white shadow-lg " : ""
      } bg-white text-black z-50 py-2 top-0 sticky px-2 md:px-4`}
    >
      <div className="container grid lg:grid-cols-3 items-center">
        <div className="flex col-span-1 justify-between px-2 md:px-4 lg:px-6 items-center">
          <Link href={"/"}>
            <Image
              src={"/images/crm-logo-black.png"}
              width={1300}
              height={900}
              quality={100}
              alt="Cloud Rudra Media Logo"
              className="w-24 lg:w-32 lg:p-2 lg:ml-12 xl:ml-20 h-auto"
            />
          </Link>
          {/* <button
            onClick={() => setShowMenu(!showMenu)}
            className="mobile-menu-icon flex flex-col gap-2 items-center justify-center lg:hidden z-50 px-2"
          >
            {showMenu ? (
              <CloseIcon />
            ) : (
              <>
                <span className="w-8 h-px bg-black"></span>
                <span className="w-8 h-px bg-black"></span>
                <span className="w-8 h-px bg-black"></span>
              </>
            )}
          </button> */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col gap-2 items-center justify-center lg:hidden w-10 h-8 relative z-50"
          >
            <span
              className={`block w-7 h-1 bg-black rounded transition-all duration-700 ${
                showMenu ? "rotate-45 translate-y-3" : "translate-y-0"
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-black rounded transition-all duration-500 origin-left ${
                showMenu ? "scale-x-0" : "scale-x-100"
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-black rounded transition-all duration-700 ${
                showMenu ? "-rotate-45 -translate-y-3" : "translate-y-0"
              }`}
            ></span>
          </button>
        </div>
        <div className="hidden col-span-2 lg:flex justify-between">
          <div className="flex justify-start items-center">
            <ul className="flex gap-6 xl:gap-10 font-normal text-sm w-full">
              {mainHederData.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="group relative hover:text-primary"
                >
                  <p>{item.Title}</p>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex lg:mr-20">
            <Link
              href={"/contact-us"}
              className="bg-primary text-sm px-6 py-2 text-white rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-primary"
            >
              Start A Project
            </Link>
          </div>
        </div>
      </div>
      <ul
        // ref={menuRef}
        className={`lg:hidden transition-all duration-1000 ease-in-out overflow-hidden 
    ${showMenu ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"}
          flex flex-col gap-4 text-sm justify-end items-center uppercase absolute top-full right-0 bg-primary text-white p-3 rounded-b-md shadow-2xl`}
      >
        {mainHederData.map((item, index) => (
          <li key={index} className="py-1">
            <Link href={item.url} onClick={() => setShowMenu(false)}>
              {item.Title}
            </Link>
          </li>
        ))}
        <li className="py-1 ">
          <Link
            href={"/contact-us"}
            className="bg-black text-sm px-3 py-2 text-white rounded-lg"
            onClick={() => setShowMenu(false)}
          >
            Start A Project
          </Link>
        </li>
      </ul>
    </header>
  );
}
