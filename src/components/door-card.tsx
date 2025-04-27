"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const defaultFont = "font-[family-name:var(--font-play)]";

interface IDoorCardProps {
  modelName: string;
  outImageSrc: string;
  inImageSrc: string;
  colors: string;
  price: number;
}

export default function DoorCard(cardProps: IDoorCardProps) {
  return (
    <div className="mx-auto p-4 w-[100%] hover:bg-blue-gray-50 hover:border border-blue-100">
      <Typography
        as="h3"
        className={`${defaultFont} text-center text-lg lg:text-xl xl:text-2xl text-indigo-700`}
      >
        {cardProps.modelName}
      </Typography>
      <Typography
        as="p"
        className={`${defaultFont} text-gray-700 text-center text-xs lg:text-sm xl:text-base mb-2`}
      >
        {cardProps.colors}
      </Typography>
      <div className="grid grid-cols-2 gap-1 content-center">
        <Image
          width={140}
          height={300}
          src={cardProps.outImageSrc}
          alt={cardProps.modelName}
          className="ml-auto"
        />
        <Image
          width={140}
          height={300}
          src={cardProps.inImageSrc}
          alt={cardProps.modelName}
          className="mr-auto"
        />
      </div>
      <Typography
        as="h3"
        className={`${defaultFont} text-center text-base lg:text-lg xl:text-xl text-indigo-700 mt-2 bg-gradient-to-r from-blue-50 to-blue-100`}
      >
        {cardProps.price}р.
      </Typography>
    </div>
  );
}
