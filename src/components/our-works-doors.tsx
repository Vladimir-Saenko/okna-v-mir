"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const defaultFont: string = "font-[family-name:var(--font-play)]";
const lightShadow: string = "[text-shadow:_0_0_12px_rgb(255_255_255_/_0.8)]";

const data = [
  {
    imageSrc: "/images/doors-1.jpg",
  },
  {
    imageSrc: "/images/doors-2.jpg",
  },
  {
    imageSrc: "/images/doors-3.jpg",
  },
  {
    imageSrc: "/images/doors-4.jpg",
  },
  {
    imageSrc: "/images/doors-5.jpg",
  },
  {
    imageSrc: "/images/doors-6.jpg",
  },
];

export function OurWorksDoors() {
  const [active, setActive] = React.useState("/images/doors-1.jpg");

  return (
    <div className="mt-10 mb-5 grid gap-4 ">
      <Typography
        variant="h2"
        className={`${defaultFont} ${lightShadow} text-blue-800 text-center border-b-4 border-blue-500`}
      >
        НАШИ РАБОТЫ
      </Typography>
      <div className=" inline-block overflow-hidden ">
        <img
          className="h-auto max-w-full mx-auto rounded-lg object-cover object-center md:h-[640px] transition delay-150 duration-300 ease-in-out hover:scale-110"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-6 gap-2 mx-auto">
        {data.map(({ imageSrc }, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => setActive(imageSrc)}
                src={imageSrc}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
