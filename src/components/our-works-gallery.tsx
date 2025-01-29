/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const defaultFont: string = "font-[family-name:var(--font-play)]";
const lightShadow: string = "[text-shadow:_0_0_12px_rgb(255_255_255_/_0.8)]";

export function OurWorksGallery() {
  const data = [
    {
      imgelink: "/images/work-1.jpg",
    },
    {
      imgelink: "/images/work-2.jpg",
    },
    {
      imgelink: "/images/work-3.jpg",
    },
    {
      imgelink: "/images/work-4.jpg",
    },
    {
      imgelink: "/images/work-5.jpg",
    },
  ];

  const [active, setActive] = React.useState("/images/work-1.jpg");

  return (
    <div className="mt-10 mb-5 grid gap-4 ">
      <Typography
        variant="h2"
        className={`${defaultFont} ${lightShadow} text-blue-800 text-center border-b-4 border-blue-500`}
      >
        НАШИ РАБОТЫ
      </Typography>
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
