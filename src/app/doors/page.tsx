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
    modelName: "Кьюб (RBE)",
    outImageSrc: "/images/dver-vhodnaya-cube-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-cube-in.jpg",
    colors: "Slate Art / Snow Art",
    price: 38360,
  },
  {
    modelName: "Граффити-1 Инсайд",
    outImageSrc: "/images/dver-vhodnaya-graffiti-1-inside-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-1-inside-in.jpg",
    colors: "Букле черное / Look Art",
    price: 33360,
  },
  {
    modelName: "Техно Kale",
    outImageSrc: "/images/dver-vhodnaya-tehno-kale-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-kale-in.jpg",
    colors: "Букле черное / Wenge",
    price: 33360,
  },
  {
    modelName: "Проф",
    outImageSrc: "/images/dver-vhodnaya-prof-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-prof-in.jpg",
    colors: "Букле черное / Cappuccino",
    price: 31760,
  },
  {
    modelName: "Флэш",
    outImageSrc: "/images/dver-vhodnaya-flesh-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-flesh-in.jpg",
    colors: "Букле черное / Biancо Veralinga",
    price: 31960,
  },
  {
    modelName: "Прайд",
    outImageSrc: "/images/dver-vhodnaya-prajd-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-prajd-in.jpg",
    colors: "Total Black / Snow Melinga",
    price: 33120,
  },
  {
    modelName: "Лайнер-3",
    outImageSrc: "/images/dver-vhodnaya-lajner-3-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-lajner-3-in.jpg",
    colors: "Total Black / Off-white",
    price: 56760,
  },
  {
    modelName: "Thermo Декор-2",
    outImageSrc: "/images/dver-vhodnaya-thermo-tehno-dekor-2-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-thermo-tehno-dekor-2-in.jpg",
    colors: "Букле черное / Snow Melinga",
    price: 65760,
  },
  {
    modelName: "Thermo Лайн",
    outImageSrc: "/images/dver-vhodnaya-thermo-line-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-thermo-line-in.jpg",
    colors: "Букле черное / Cappuccino",
    price: 54160,
  },
  {
    modelName: "Прайм Kale",
    outImageSrc: "/images/dver-vhodnaya-prajm-kale-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-prajm-kale-in.jpg",
    colors: "Almon / Bianco Veralinga",
    price: 38760,
  },
  {
    modelName: "Джет-3 (RBE)",
    outImageSrc: "/images/dver-vhodnaya-jet-3-rbe-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-jet-3-rbe-in.jpg",
    colors: "Total Black / Snow Melinga",
    price: 40960,
  },
  {
    modelName: "Граффити-32/32",
    outImageSrc: "/images/dver-vhodnaya-graffiti-32-32-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-32-32-in.jpg",
    colors: "Total Black / Super White",
    price: 38960,
  },
  {
    modelName: "Техно",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tehno-in.jpg",
    colors: "Букле черное / Snow Melinga",
    price: 30160,
  },
  {
    modelName: "Лайн",
    outImageSrc: "/images/dver-vhodnaya-lajn-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-lajn-in.jpg",
    colors: "Букле черное / Slate Art",
    price: 28760,
  },
  {
    modelName: "Граффити-5",
    outImageSrc: "/images/dver-vhodnaya-graffiti-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-graffiti-in.jpg",
    colors: "Букле черное / Snow Art",
    price: 28560,
  },
  {
    modelName: "Борн",
    outImageSrc: "/images/dver-vhodnaya-tehno-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-born-in.jpg",
    colors: "Букле черное / Riviera Ice",
    price: 28360,
  },
  {
    modelName: "Эконом",
    outImageSrc: "/images/dver-vhodnaya-ekonom-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-ekonom-in.jpg",
    colors: "Антик медный / Л-11(Орех)",
    price: 21450,
  },
  {
    modelName: "Тайга-5",
    outImageSrc: "/images/dver-vhodnaya-tajga-5-out.jpg",
    inImageSrc: "/images/dver-vhodnaya-tajga-5-in.jpg",
    colors: "Антик медный",
    price: 19950,
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

      {/* <OurWorksGallery /> */}
    </>
  );
}
