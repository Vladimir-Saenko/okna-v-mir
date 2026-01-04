"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface IColorItemParams {
  imgSrc: string;
  colorName: string;
}

const defaultFont: string = "font-[family-name:var(--font-play)]";

export default function ColorItem(colorItemParams: IColorItemParams) {
  return (
    <div className="min-w-40">
      <div className="block">
        <Image
          width={100}
          height={100}
          src={colorItemParams.imgSrc}
          alt={colorItemParams.colorName}
          className="mx-auto rounded-m"
        />
      </div>
      <Typography
        variant="paragraph"
        className={`${defaultFont} font-normal text-xl text-center mt-2`}
      >
        {colorItemParams.colorName}
      </Typography>
    </div>
  );
}
