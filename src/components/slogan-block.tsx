"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const defaultFont: string = "font-[family-name:var(--font-play)]";

interface ISloganProps {
  children: React.ReactNode;
  imageSrc: string;
}

export default function SloganBlock({ children, imageSrc }: ISloganProps) {
  return (
    <div className="mt-5 rounded-xl bg-blue p-4 md:p-8 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <Typography
          variant="paragraph"
          className={`${defaultFont} font-normal !text-blue-800 text-4xl xl:text-5xl text-center`}
        >
          {children}
        </Typography>

        <Image
          width={480}
          height={232}
          src={imageSrc}
          alt="window"
          className="rounded-r-xl hidden lg:flex z-20 mr-0 ml-auto"
        />
      </div>
    </div>
  );
}
