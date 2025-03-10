"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { WindowCard } from "./window-card";

const defaultFont = "font-[family-name:var(--font-play)]";

export default function WindowBrands() {
  return (
    <>
      <div
        className={`mt-8 p-4 min-h-[100px] w-[100%] bg-white rounded-md flex flex-col text-center ${defaultFont}`}
      >
        <div className="grid grid-cols-[1fr_4fr]">
          <Image
            src="/logos/elex_logo.png"
            alt="ELEX"
            width={320}
            height={100}
            className="h-[100%]  min-w-80"
          />
          <Typography
            variant="h3"
            color="white"
            className={`${defaultFont} mb-4 text-3xl xl:text-5xl text-indigo-800 align-middle my-auto`}
          >
            Оптимальное соотношение цены и качества
          </Typography>
        </div>
        <hr className="h-[2px] my-8 bg-[rgb(0_112_192)] border-0" />
        <div className="flex justify-center gap-5">
          <WindowCard
            imageSrc="/images/elex58.png"
            headerText="ELEX 58"
            description="Лучшее сочетание высоких технических характеристик и доступной цены"
            descList={[
              "Трехкамерный профиль",
              "Стеклопакет 24/32 мм",
              "Системная глубина 60 мм",
            ]}
          />
          <WindowCard
            imageSrc="/images/elex70.png"
            headerText="ELEX 70"
            description="Теплый оконный профиль с усиленной тепло- и звукоизоляцией"
            descList={[
              "Пятикамерный профиль",
              "Стеклопакет 32/40 мм",
              "Системная глубина 70 мм",
            ]}
          />
        </div>
      </div>
      <div
        className={`mt-8 p-4 min-h-[100px] w-[100%] bg-white rounded-md flex flex-col text-center ${defaultFont}`}
      >
        <div className="grid grid-cols-[1fr_4fr]">
          <Image
            src="/logos/rehau_logo.png"
            alt="REHAU"
            width={320}
            height={100}
            className="h-[100%]  min-w-80"
          />
          <Typography
            variant="h3"
            color="white"
            className={`${defaultFont} mb-4 text-3xl xl:text-5xl text-indigo-800 align-middle my-auto`}
          >
            Премиальное качество по доступной цене
          </Typography>
        </div>
        <hr className="h-[2px] my-8 bg-[rgb(0_112_192)] border-0" />
        <div className="flex justify-center gap-5">
          <WindowCard
            imageSrc="/images/constanta.png"
            headerText="CONSTANTA"
            description="Экономичные окна с улучшенной тепло- и звукоизоляцией"
            descList={[
              "Черырёхкамерный профиль",
              "Системная глубина 60 мм",
              "Идеально гладкий пластик",
            ]}
          />
          <WindowCard
            imageSrc="/images/grazio.png"
            headerText="GRAZIO"
            description="Недорогие энергосберегающие оконные системы"
            descList={[
              "Пятикамерный профиль",
              "Системная глубина 70 мм",
              "Минимальная воздухопроницаемость",
            ]}
          />
          {/* <WindowCard
            imageSrc="/images/delight.png"
            headerText="DELIGHT DISIGN"
            description="Теплый оконный профиль с усиленной тепло- и звукоизоляцией."
            descList={[
              "Пятикамерный профиль",
              "Стеклопакет 32/40 мм",
              "Системная глубина 70 мм",
            ]}
          /> */}
        </div>
      </div>
    </>
  );
}
