"use client";

//* Главная страница - Окна *//

import Hero from "@/components/hero";
import { OurWorksDoors } from "@/components/our-works-doors";
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
    modelName: "Кьюб (RBE)",
    outImageSrc: "/images/dver-vhodnaya-cube-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-cube-in.jpg",
    colors: "Slate Art / Snow Art",
    price: 30980,
  },
  {
    modelName: "Граффити-1 Инсайд",
    outImageSrc: "/images/dver-vhodnaya-graffiti-1-inside-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-1-inside-in.jpg",
    colors: "Букле черное / Look Art",
    price: 29880,
  },
  {
    modelName: "Техно Kale",
    outImageSrc: "/images/dver-vhodnaya-tehno-kale-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-kale-in.jpg",
    colors: "Букле черное / Wenge",
    price: 32780,
  },
  {
    modelName: "Optim Z-3",
    outImageSrc: "/images/dver-vhodnaya-optim-z-3-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-optim-z-3-in.jpg",
    colors: "Графит / Белый",
    price: 31780,
  },
  {
    modelName: "Thermo Флэш МФ",
    outImageSrc: "/images/dver-vhodnaya-flesh-mf-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-flesh-mf-in.jpg",
    colors: "Букле черное / Cappuccino",
    price: 49500,
  },
  {
    modelName: "Прайд",
    outImageSrc: "/images/dver-vhodnaya-prajd-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-prajd-in.jpg",
    colors: "Total Black / Snow Melinga",
    price: 29780,
  },
  {
    modelName: "Эво/SBlack",
    outImageSrc: "/images/dver-vhodnaya-evo-sblack-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-evo-sblack-in.jpg",
    colors: "Black Shell - Oak/ White Silk",
    price: 34900,
  },
  {
    modelName: "Thermo Декор-2",
    outImageSrc: "/images/dver-vhodnaya-thermo-tehno-dekor-2-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-thermo-tehno-dekor-2-in.jpg",
    colors: "Букле черное / Snow Melinga",
    price: 49620,
  },
  {
    modelName: "Thermo Лайн",
    outImageSrc: "/images/dver-vhodnaya-thermo-line-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-thermo-line-in.jpg",
    colors: "Букле черное / Cappuccino",
    price: 39400,
  },
  {
    modelName: "Шелл СД/SBlack",
    outImageSrc: "/images/dver-vhodnaya-shell-sd-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-shell-sd-in.jpg",
    colors: "Антрацит / White Sand",
    price: 69680,
  },
  {
    modelName: "Thermo Некст МФ",
    outImageSrc: "/images/dver-vhodnaya-nekst-mf-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-nekst-mf-in.jpg",
    colors: "Антрацит / White Silk",
    price: 48780,
  },
  {
    modelName: "Граффити-32/32",
    outImageSrc: "/images/dver-vhodnaya-graffiti-32-32-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-32-32-in.jpg",
    colors: "Total Black / Super White",
    price: 32480,
  },
  {
    modelName: "Техно",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-in.jpg",
    colors: "Букле черное / Snow Melinga",
    price: 27780,
  },
  {
    modelName: "Лайн",
    outImageSrc: "/images/dver-vhodnaya-lajn-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-lajn-in.jpg",
    colors: "Букле черное / Slate Art",
    price: 26980,
  },
  {
    modelName: "Граффити-5",
    outImageSrc: "/images/dver-vhodnaya-graffiti-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-in.jpg",
    colors: "Букле черное / Snow Art",
    price: 27880,
  },
  {
    modelName: "Optim X-2 7см",
    outImageSrc: "/images/dver-vhodnaya-optim-x-2-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-optim-x-2-in.jpg",
    colors: "Антик медный / Белый клен",
    price: 34200,
  },
  {
    modelName: "Optim X-2 6см",
    outImageSrc: "/images/dver-vhodnaya-optim-x-2-6-sm-in.jpg",
    inImageSrc: "/images/dver-vhodnaya-optim-x-2-6-sm-in.jpg",
    colors: "Антик медный / Серый клен",
    price: 18980,
  },
  {
    modelName: "Door Out 101",
    outImageSrc: "/images/dm-door-out-101-out.jpg",
    inImageSrc: "/images/dm-door-out-101-in.jpg",
    colors: "Антик медь / Антик медь",
    price: 24180,
  },
];

const inDoors = [
  {
    modelName: "Браво-22",
    imageSrc: "/images/dver-bravo-22-snow-melinga-black-shine.jpg",
    colors: " Snow / Black Shine ",
    price: 6360,
  },
  {
    modelName: "Браво-21",
    imageSrc: "/images/dver-bravo-21-nordic-oak.jpg",
    colors: "Nordic Oak",
    price: 6760,
  },
  {
    modelName: "Браво-23",
    imageSrc: "/images/dver-bravo-23-grey-melinga-magic-fog.jpg",
    colors: "Grey Melinga/Magic fog",
    price: 6760,
  },
  {
    modelName: "Браво-28",
    imageSrc: "/images/dver-bravo-28-riviera-ice-magic-fog.jpg",
    colors: "Riviera Ice/Magic fog",
    price: 6760,
  },
  {
    modelName: "Браво-29",
    imageSrc: "/images/dver-bravo-29-original-oak-magic-fog.jpg",
    colors: "Original Oak/Magic fog",
    price: 7360,
  },
  {
    modelName: "Браво-30",
    imageSrc: "/images/dver-bravo-30-cappuccino-melinga-mirox-grey.jpg",
    colors: "Cappuccino/Mirox Gray",
    price: 7360,
  },
  {
    modelName: "Прима-3",
    imageSrc: "/images/dver-prima-3-wenge-melinga-white-сrystal.jpg",
    colors: "Wenge/White Crystal",
    price: 9960,
  },
  {
    modelName: "Твигги-11",
    imageSrc: "/images/dver-tviggi-11-3-grey-melinga-magic-fog.jpg",
    colors: "Grey Melinga/Magic fog",
    price: 7360,
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
              price={door.price}
            />
          ))}
        </div>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          variant="h3"
          className={`${defaultFont} text-center text-base xl:text-lg text-indigo-600`}
        >
          Ознакомиться с полным каталогом моделей и уточнить цены можно в офисе,
          по телефону или через соцсети
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
              price={door.price}
            />
          ))}
        </div>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          variant="h3"
          className={`${defaultFont} text-center text-base xl:text-lg text-indigo-600`}
        >
          Ознакомиться с полным каталогом моделей и уточнить цены можно в офисе,
          по телефону или через соцсети
        </Typography>
      </div>

      <EndPage />
      <OurWorksDoors />
    </>
  );
}
