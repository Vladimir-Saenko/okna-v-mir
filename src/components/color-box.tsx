"use client";

import { Typography } from "@material-tailwind/react";
import ColorItem from "./color-item";

const defaultFont: string = "font-[family-name:var(--font-play)]";

interface IColorItemParams {
  imgSrc: string;
  colorName: string;
}

const colors: IColorItemParams[] = [
  {
    imgSrc: "/images/white.png",
    colorName: "БЕЛЫЙ",
  },
  {
    imgSrc: "/images/dark_oak.png",
    colorName: "ТЁМНЫЙ ДУБ",
  },
  {
    imgSrc: "/images/gold_oak.png",
    colorName: "ЗОЛОТОЙ ДУБ",
  },
  {
    imgSrc: "/images/hazel.png",
    colorName: "ОРЕХ",
  },
  {
    imgSrc: "/images/mahogany.png",
    colorName: "МАХАГОН",
  },
  {
    imgSrc: "/images/anthracite.png",
    colorName: "АНТРАЦИТ",
  },
];

export default function ColorBox() {
  return (
    <div className="mt-6">
      <Typography
        variant="paragraph"
        className={`${defaultFont} font-normal !text-blue-900 text-2xl xl:text-3xl text-center mb-4`}
      >
        Мы предлагаем широкую цветовую гамму профиля на Ваш выбор:
      </Typography>
      <div className="flex flex-wrap gap-4 2xl:gap-8 justify-around">
        {colors.map((color) => (
          <ColorItem
            imgSrc={color.imgSrc}
            colorName={color.colorName}
            key={color.colorName}
          />
        ))}
      </div>
    </div>
  );
}
