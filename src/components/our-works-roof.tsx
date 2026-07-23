"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const defaultFont: string = "font-[family-name:var(--font-play)]";
const lightShadow: string = "[text-shadow:_0_0_12px_rgb(255_255_255_/_0.8)]";

const data = [
  {
    imageSrc: "/images/roof-1.jpg",
  },
  {
    imageSrc: "/images/roof-2.jpg",
  },
  {
    imageSrc: "/images/roof-3.jpg",
  },
  {
    imageSrc: "/images/roof-4.jpg",
  },
  {
    imageSrc: "/images/roof-5.jpg",
  },
  {
    imageSrc: "/images/roof-6.jpg",
  },
  {
    imageSrc: "/images/roof-7.jpg",
  },
  {
    imageSrc: "/images/roof-8.jpg",
  },
  {
    imageSrc: "/images/roof-9.jpg",
  },
  {
    imageSrc: "/images/roof-10.jpg",
  },
];

export function OurWorksRoof() {
  const [active, setActive] = React.useState("/images/roof-1.jpg");

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
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px] transition delay-150 duration-300 ease-in-out hover:scale-110"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
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
