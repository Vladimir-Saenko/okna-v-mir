/* eslint-disable @next/next/no-img-element */
"use client";

import { Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

const defaultFont = "font-[family-name:var(--font-play)]";

interface IBlindsCardProps {
  type: string;
  images: string[];
  desc: string;
}

export default function BlindsCard(cardProps: IBlindsCardProps) {
  return (
    <div
      className={`mt-8 p-4w-[100%] bg-white rounded-md ${defaultFont} grid grid-cols-[300px_auto] `}
    >
      <Carousel className="rounded-md">
        <img
          src={cardProps.images[0]}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={cardProps.images[1]}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={cardProps.images[2]}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div className="mt-2 mx-4 flex flex-col">
        <Typography
          as="h3"
          className={`${defaultFont} text-center text-xl lg:text-2xl xl:text-3xl text-orange-700 rounded-md bg-gradient-to-b from-light-blue-100 to-light-blue-50 py-2 `}
        >
          {cardProps.type}
        </Typography>
        <hr className="h-[2px] my-4 bg-[rgb(0_112_192)] border-0" />
        <Typography
          as="p"
          className={`${defaultFont} text-gray-800 text-lg lg:text-xl xl:text-2xl`}
        >
          {cardProps.desc}
        </Typography>
      </div>
    </div>
  );
}
