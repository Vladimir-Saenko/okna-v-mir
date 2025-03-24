"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const defaultFont = "font-[family-name:var(--font-play)]";

interface IInDoorCardProps {
  modelName: string;
  imageSrc: string;
  colors: string;
}

export default function InDoorCard(cardProps: IInDoorCardProps) {
  return (
    <div className="mx-auto p-4 w-[100%] ">
      <Typography
        as="h3"
        className={`${defaultFont} text-center text-lg lg:text-xl xl:text-2xl text-indigo-700 mb-2 `}
      >
        {cardProps.modelName}
      </Typography>
      <div className="grid grid-cols-1 content-center">
        <Image
          width={140}
          height={300}
          src={cardProps.imageSrc}
          alt={cardProps.modelName}
          className="mx-auto"
        />
      </div>
      <Typography
        as="p"
        className={`${defaultFont} text-gray-700 text-center text-sm lg:text-base xl:text-lg mt-2`}
      >
        {cardProps.colors}
      </Typography>
    </div>
  );
}
