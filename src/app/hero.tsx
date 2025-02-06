"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

import { FloatBlock } from "@/components";

const defaultFont: string = "font-[family-name:var(--font-play)]";
const bg_image_src: string = "/images/z_window_gradient.png";
const header_text: string = "Установка пластиковых окон";
const ad_image: string = "/images/bg_ad_windows.png";

function Hero() {
  return (
    <>
      <div className="flex w-[100%]">
        <div className="mb-3 mt-3 text-left [text-shadow:_0_0_12px_rgb(0_0_0_/_0.8)] absolute ml-4 z-10 max-w-[40%] font-normal text-xs lg:text-base ">
          <Typography variant="h2" color="white" className={`${defaultFont}`}>
            {header_text}
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
            src={bg_image_src}
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

      <div className="mt-5 rounded-xl bg-blue p-4 md:p-8 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
          <Typography
            variant="paragraph"
            className={`${defaultFont} font-normal !text-blue-800 text-4xl xl:text-5xl text-center`}
          >
            Выбирая нашу компанию, Вы выбираете{" "}
            <span className="underline text-indigo-800">качественные</span> окна
            и <span className="underline text-indigo-800">качественный</span>{" "}
            монтаж.
          </Typography>

          <Image
            width={480}
            height={232}
            src={ad_image}
            alt="window"
            className="rounded-r-xl hidden lg:flex z-20 mr-0 ml-auto"
          />
        </div>
      </div>
    </>
  );
}
export default Hero;
