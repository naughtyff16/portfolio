"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const skills = [
  { name: "HTML", img: "/images/services-1.png" },
  { name: "CSS", img: "/images/css.png" },
  { name: "JavaScript", img: "/images/javascript.png" },
  { name: "React", img: "/images/react.png" },
  { name: "Next.js", img: "/images/nextjs.png" },
  { name: "Tailwind CSS", img: "/images/tailwind.png" },
];

export default function SkillsSection() {
  return (
    <section id="products" className="h-auto relative w-full bg-[#F6F3F3]">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16 flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4 pb-4">
          <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-bounce hover:animate-none">
            Skills & Technologies
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="flex justify-center py-4">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-72 h-80"
          >
            {skills.map((skill, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4"
              >
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <p className="mt-4 font-semibold">{skill.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
