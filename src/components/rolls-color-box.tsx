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
    imgSrc: "/images/rolls-white.png",
    colorName: "БЕЛЫЙ",
  },
  {
    imgSrc: "/images/rolls-brown.png",
    colorName: "КОРИЧНЕВЫЙ",
  },
  {
    imgSrc: "/images/rolls-anthracite.png",
    colorName: "АНТРАЦИТ",
  },
  {
    imgSrc: "/images/rolls-silver.png",
    colorName: "СЕРЕБРИСТЫЙ",
  },
  {
    imgSrc: "/images/rolls-grey.png",
    colorName: "СЕРЫЙ",
  },
  {
    imgSrc: "/images/rolls-beige.png",
    colorName: "БЕЖЕВЫЙ",
  },
  {
    imgSrc: "/images/rolls-blue.png",
    colorName: "СИНИЙ",
  },
  {
    imgSrc: "/images/rolls-green.png",
    colorName: "ЗЕЛЁНЫЙ",
  },
  {
    imgSrc: "/images/rolls-red.png",
    colorName: "КРАСНЫЙ",
  },
  {
    imgSrc: "/images/rolls-bordo.png",
    colorName: "БОРДОВЫЙ",
  },
  {
    imgSrc: "/images/rolls-gold-oak.png",
    colorName: "ЗОЛОТОЙ ДУБ",
  },
  {
    imgSrc: "/images/rolls-wenge.png",
    colorName: "ВЕНГЕ",
  },
];

export default function ColorBox() {
  return (
    <div className="mt-10 mb-10">
      <Typography
        variant="paragraph"
        className={`${defaultFont} font-normal !text-blue-900 text-2xl xl:text-3xl text-center mb-8`}
      >
        Мы предлагаем широкую цветовую гамму на Ваш выбор:
      </Typography>
      <div className="flex flex-wrap gap-5 2xl:gap-10 justify-around">
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
