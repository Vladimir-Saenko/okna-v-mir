//* Верхний компонент страницы *//

"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

import FloatBlock from "./float-block";
import SloganBlock from "./slogan-block";

interface IHeroContent {
  headerText: string;
  bgImageSrc: string;
  adImageSrc: string;
}

const defaultFont: string = "font-[family-name:var(--font-play)]";

function Hero(heroProps: IHeroContent) {
  return (
    <>
      {/* Хедер */}
      <div className="flex w-[100%]">
        <div className="mb-3 mt-3 text-left [text-shadow:_0_0_12px_rgb(0_0_0_/_0.8)] absolute ml-4 z-10 max-w-[40%] font-normal text-xs lg:text-base ">
          <Typography variant="h2" color="white" className={`${defaultFont}`}>
            {heroProps.headerText}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            className={`${defaultFont} hidden lg:flex`}
          >
            Качественно, надежно, с гарантией.
          </Typography>
        </div>
        <div className="ml-auto">
          <Image
            width={1000}
            height={500}
            // priority={false}
            src={heroProps.bgImageSrc}
            alt="window"
            className="rounded-r-xl"
          />
        </div>
      </div>

      {/* Плавающие окна */}
      <div className="flex flex-wrap flex-row gap-6 justify-center px-3 lg:mt-[-12rem] mt-0 w-[100%] z-5">
        <FloatBlock>
          &quot;Окна в Мир&quot; - это гарантия уюта, тепла и тишины для самых
          близких в Вашем доме!
        </FloatBlock>
        <FloatBlock>
          Наш монтаж - лучшее качество по доступной цене, проверенное сибирскими
          морозами!
        </FloatBlock>
        <div className="hidden lg:flex">
          <FloatBlock>
            Работаем напрямую с заводом-изготовителем и только качественными
            материалами
          </FloatBlock>
        </div>
      </div>

      {/* Рекламный слоган с картинкой */}
      <SloganBlock imageSrc={heroProps.adImageSrc}>
        Выбирая нашу компанию, Вы выбираете{" "}
        <span className="underline text-indigo-800">качественные</span>{" "}
        материалы и{" "}
        <span className="underline text-indigo-800">качественный</span> монтаж.
      </SloganBlock>
    </>
  );
}
export default Hero;
