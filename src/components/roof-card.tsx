"use client";

import { Typography } from "@material-tailwind/react";

const defaultFont = "font-[family-name:var(--font-play)]";

export default function RoofCard
() {
  return (
    <>
      <div
      className={`mt-8 p-4w-[100%] w-full bg-white rounded-md ${defaultFont} grid grid-cols-[350px_auto] `}
      >
       <img
          src={"/images/present-roof.jpg"}
          alt="roof"
          className="h-full w-full object-cover"
        />
        <div className="mt-2 mx-4 flex flex-col">
          <Typography 
            as="h3"
            className={`${defaultFont} text-center text-xl lg:text-2xl xl:text-3xl text-orange-700 rounded-md bg-gradient-to-b from-light-blue-100 to-light-blue-50 py-2 `}
          >
            Кровельные работы
          </Typography>
          <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
          <Typography
            as="p"
            className={`${defaultFont} ml-8 text-gray-800 text-lg lg:text-xl xl:text-2xl`}
          >
            <ul className="list-disc text-xs md:text-sm lg:text-lg ">
              <li>Монтаж мауэрлата</li>
              <li>Монтаж лаг потолочного перекрытия</li>
              <li>Монтаж стропильной системы</li>
              <li>Монтаж обрешетки</li>
              <li>Монтаж шифера</li>
              <li>Монтаж водосточной системы</li>
              <li>Демонтаж любой сложности</li>
            </ul>
          </Typography>
        </div>
      </div>
      <div
      className={`mt-8 p-4w-[100%] w-full bg-white rounded-md ${defaultFont} grid grid-cols-[350px_auto] `}
      >
       <img
          src={"/images/present-walls.jpg"}
          alt="roof"
          className="h-full w-full object-cover"
        />
        <div className="mt-2 mx-4 flex flex-col">
          <Typography 
            as="h3"
            className={`${defaultFont} text-center text-xl lg:text-2xl xl:text-3xl text-orange-700 rounded-md bg-gradient-to-b from-light-blue-100 to-light-blue-50 py-2 `}
          >
            Фасадные работы
          </Typography>
          <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
          <Typography
            as="p"
            className={`${defaultFont} ml-8 text-gray-800 text-lg lg:text-xl xl:text-2xl`}
          >
            <ul className="list-disc text-xs md:text-sm lg:text-lg ">
              <li>Монтаж каркаса</li>
              <li>Монтаж утеплителя</li>
              <li>Монтаж ветро-парозащиты</li>
              <li>Монтаж панелей</li>
              <li>Монтаж откосов и отливов</li>
              <li>Демонтаж любой сложности</li>
            </ul>
          </Typography>
        </div>
      </div>
    </>
  );
}
