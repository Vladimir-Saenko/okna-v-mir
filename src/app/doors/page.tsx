"use client";

//* Главная страница - Окна *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import DevelopPlug from "@/components/develop-plug";
import DoorCard from "@/components/door-card";
import { Typography } from "@material-tailwind/react";

const header_text: string = "Продажа и установка дверей";
const bg_image_src: string = "/images/bg_doors_gradient.png";
const ad_image_src: string = "/images/bg_ad_doors.png";

const defaultFont = "font-[family-name:var(--font-play)]";

const outDoors = [
  {
    modelName: "ТЕХНО",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-in.jpg",
    colors: "Букле черное / Snow Melinga",
  },
  {
    modelName: "МИЛО",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-milo-in.jpg",
    colors: "Букле черное / Cappuccino Veralinga",
  },
  {
    modelName: "БОРН",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-born-in.jpg",
    colors: "Букле черное / Riviera Ice",
  },
  {
    modelName: "ГРАФФИТИ",
    outImageSrc: "/images/dver-vhodnaya-graffiti-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-in.jpg",
    colors: "Букле черное / Snow Art",
  },
  {
    modelName: "ЭЙР",
    outImageSrc: "/images/dver-vhodnaya-ejr-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-ejr-in.jpg",
    colors: "Букле черное / White Shell",
  },
  {
    modelName: "ФЛЭШ",
    outImageSrc: "/images/dver-vhodnaya-flesh-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-flesh-in.jpg",
    colors: "Букле черное / Bianca Veralinga",
  },
];

export default function Doors() {
  return (
    <>
      <Hero
        headerText={header_text}
        bgImageSrc={bg_image_src}
        adImageSrc={ad_image_src}
      />
      <div className="mt-8 p-4 min-h-[100px] w-[100%] bg-gray-50 rounded-md">
        <Typography
          as="h2"
          className={`${defaultFont} text-center text-2xl xl:text-4xl text-indigo-800 font-semibold`}
        >
          Образцы входных дверей
        </Typography>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <div className={`grid grid-cols-3 gap-2 ${defaultFont}`}>
          {outDoors.map((door) => (
            <DoorCard
              modelName={door.modelName}
              outImageSrc={door.outImageSrc}
              inImageSrc={door.inImageSrc}
              colors={door.colors}
              key={door.modelName}
            />
          ))}
        </div>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          variant="h3"
          className={`${defaultFont} text-center text-base xl:text-lg text-indigo-600`}
        >
          Ознакомиться с полным каталогом моделей и ценами можно в офисе, по
          телефону или через соцсети
        </Typography>
      </div>

      {/* Заглушка на время разработки */}
      <DevelopPlug />

      {/* <OurWorksGallery /> */}
    </>
  );
}
