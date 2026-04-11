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
            className="h-auto min-w-80"
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
        <div className="grid grid-cols-2 justify-center gap-5">
          <WindowCard
            imageSrc="/images/elex58.png"
            headerText="ELEX 58"
            description="Лучшее сочетание высоких технических характеристик и доступной цены"
            descList={[
              "Трехкамерный профиль",
              "Стеклопакет 24/32 мм",
              "Системная глубина 60 мм",
            ]}
            price={4650}
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
            price={6675}
          />
        </div>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          variant="h3"
          color="white"
          className={`${defaultFont} text-base xl:text-lg text-indigo-800`}
        >
          Ознакомиться с полным каталогом моделей и уточнить цены можно в офисе,
          по телефону или через соцсети
        </Typography>
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
            className="min-w-80 h-auto"
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
        <div className="grid grid-cols-2 justify-center gap-5">
          <WindowCard
            imageSrc="/images/blitz.png"
            headerText="BLITZ"
            description="Надёжные окна из базовой профильной системы"
            descList={[
              "Трёхкамерный профиль",
              "Системная глубина 60 мм",
              "Базовая эконом-модель",
            ]}
            price={5250}
          />
          <WindowCard
            imageSrc="/images/constanta.png"
            headerText="CONSTANTA"
            description="Экономичные окна с улучшенной тепло- и звукоизоляцией"
            descList={[
              "Четырёхкамерный профиль",
              "Системная глубина 60 мм",
              "Идеально гладкий пластик",
            ]}
            price={7900}
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
            price={10270}
          />
          <WindowCard
            imageSrc="/images/neo80.png"
            headerText="NEO 80"
            description="Для самых взыскательных покупателей"
            descList={[
              "Шестикамерный профиль",
              "Системная глубина 80 мм",
              "Максимальный уровень комфорта",
            ]}
            price={21000}
          />
        </div>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          variant="h3"
          color="white"
          className={`${defaultFont} text-base xl:text-lg text-indigo-800`}
        >
          Ознакомиться с полным каталогом моделей и уточнить цены можно в офисе,
          по телефону или через соцсети
        </Typography>
      </div>
    </>
  );
}
