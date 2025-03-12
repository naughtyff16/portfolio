import { useEffect, useState } from "react";
import TopArrowIcon from "../icons/top-arrow-icon";

export default function ScrollToTop() {
  const [stick, setStick] = useState(false);

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <button
      type="button"
      className={`fixed bottom-14 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transition-opacity duration-300 ${
        stick ? "opacity-100" : "hidden"
      }`}
      onClick={onClickHandler}
    >
      <TopArrowIcon />
    </button>
  );
}
