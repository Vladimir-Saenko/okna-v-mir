"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const bottomBlockStyle: string =
  "w-72 h-32 bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md opacity-80 px-5 py-4 text-center";
const defaultFont: string = "font-[family-name:var(--font-play)]";

function Hero() {
  return (
    <>
      <div className="flex w-[100%]">
        <div className="mb-3 mt-3 text-left [text-shadow:_0_0_12px_rgb(0_0_0_/_0.8)] absolute ml-4 z-10 max-w-[40%] font-normal text-xs lg:text-base ">
          <Typography variant="h2" color="white" className={`${defaultFont}`}>
            Установка пластиковых окон
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
            src={"/images/z_window_gradient.png"}
            alt="window"
            className="rounded-r-xl"
          />
        </div>
      </div>

      {/* Плавающие окна */}
      <div className="flex flex-wrap flex-row gap-6 justify-center px-4 lg:mt-[-12rem] mt-0 w-[100%] z-5">
        <div className={`${bottomBlockStyle} ${defaultFont}`}>
          <p className="[text-shadow:_0_2px_4px_rgb(30_136_229_/_0.7)]">
            Установка окон и дверей от 5-ти дней с момента офорления заказа
          </p>
        </div>
        <div className={`${bottomBlockStyle} ${defaultFont}`}>
          <p className="[text-shadow:_0_2px_4px_rgb(30_136_229_/_0.7)]">
            Используем только качественные комплектующие и расходные материалы
          </p>
        </div>
      </div>

      {/* <div className="mx-8 lg:mx-16 mt-24 rounded-xl bg-red p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
      </div> */}
    </>
  );
}
export default Hero;
