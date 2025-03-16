/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  headerText: string;
  description: string;
  descList: string[];
}

const defaultFont = "font-[family-name:var(--font-play)]";

export function WindowCard(cardProps: CardProps) {
  return (
    <div className="flex items-center">
      <Image
        src={cardProps.imageSrc}
        alt={cardProps.headerText}
        width={320}
        height={450}
        className="w-2/5"
      />
      <div className="w-3/5 text-left mt-2 mb-auto ml-5">
        <Typography
          as="h4"
          className={`${defaultFont} font-semibold mb-2 text-lg lg:text-2xl `}
        >
          {cardProps.headerText}
        </Typography>
        <Typography
          as="h4"
          className={`${defaultFont} font-semibol mb-2 text-sm md:text-base lg:text-xl  text-indigo-900`}
        >
          {cardProps.description}
        </Typography>
        <ul className="list-disc text-xs md:text-sm lg:text-lg ">
          <li>{cardProps.descList[0]}</li>
          <li>{cardProps.descList[1]}</li>
          <li>{cardProps.descList[2]}</li>
        </ul>
      </div>
    </div>
  );
}
