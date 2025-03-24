"use client";

//* Главная страница - Окна *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import DoorCard from "@/components/door-card";
import InDoorCard from "@/components/in-door-card";
import { Typography } from "@material-tailwind/react";
import EndPage from "@/components/end-page";

const header_text: string = "Продажа и установка дверей";
const bg_image_src: string = "/images/bg_doors_gradient.png";
const ad_image_src: string = "/images/bg_ad_doors.png";

const defaultFont = "font-[family-name:var(--font-play)]";

const outDoors = [
  {
    modelName: "Техно",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-in.jpg",
    colors: "Букле черное / Snow Melinga",
  },
  {
    modelName: "Мило",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-milo-in.jpg",
    colors: "Букле черное / Cappuccino Veralinga",
  },
  {
    modelName: "Борн",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-born-in.jpg",
    colors: "Букле черное / Riviera Ice",
  },
  {
    modelName: "Граффити",
    outImageSrc: "/images/dver-vhodnaya-graffiti-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-in.jpg",
    colors: "Букле черное / Snow Art",
  },
  {
    modelName: "Эйр",
    outImageSrc: "/images/dver-vhodnaya-ejr-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-ejr-in.jpg",
    colors: "Букле черное / White Shell",
  },
  {
    modelName: "Флэш",
    outImageSrc: "/images/dver-vhodnaya-flesh-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-flesh-in.jpg",
    colors: "Букле черное / Bianca Veralinga",
  },
];

const inDoors = [
  {
    modelName: "Браво-22",
    imageSrc: "/images/dver-bravo-22-snow-melinga-black-shine.jpg",
    colors: "Snow Melinga/Black Shine",
  },
  {
    modelName: "Браво-21",
    imageSrc: "/images/dver-bravo-21-nordic-oak.jpg",
    colors: "Nordic Oak",
  },
  {
    modelName: "Браво-23",
    imageSrc: "/images/dver-bravo-23-grey-melinga-magic-fog.jpg",
    colors: "Grey Melinga/Magic fog",
  },
  {
    modelName: "Браво-28",
    imageSrc: "/images/dver-bravo-28-riviera-ice-magic-fog.jpg",
    colors: "Riviera Ice/Magic fog",
  },
  {
    modelName: "Браво-29",
    imageSrc: "/images/dver-bravo-29-original-oak-magic-fog.jpg",
    colors: "Original Oak/Magic fog",
  },
  {
    modelName: "Браво-30",
    imageSrc: "/images/dver-bravo-30-cappuccino-melinga-mirox-grey.jpg",
    colors: "Cappuccino/Melinga Mirox",
  },
  {
    modelName: "Прима-3",
    imageSrc: "/images/dver-prima-3-wenge-melinga-white-сrystal.jpg",
    colors: "Wenge Melinga/White Crystal",
  },
  {
    modelName: "Твигги-11",
    imageSrc: "/images/dver-tviggi-11-3-grey-melinga-magic-fog.jpg",
    colors: "Grey Melinga/Magic fog",
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
      {/* Блок входных дверей */}
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

      {/* Блок межкомнатных дверей */}
      <div className="mt-8 p-4 min-h-[100px] w-[100%] bg-gray-50 rounded-md">
        <Typography
          as="h2"
          className={`${defaultFont} text-center text-2xl xl:text-4xl text-indigo-800 font-semibold`}
        >
          Образцы межкомнатных дверей
        </Typography>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <div className={`grid grid-cols-4 gap-2 ${defaultFont}`}>
          {inDoors.map((door) => (
            <InDoorCard
              modelName={door.modelName}
              imageSrc={door.imageSrc}
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

      <EndPage />

      {/* <OurWorksGallery /> */}
    </>
  );
}
