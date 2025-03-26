"use client";

import Image from "next/image";

const defaultFont: string = "font-[family-name:var(--font-play)]";

interface IZamerProps {
  children: React.ReactNode;
  imageSrc: string;
}

export default function ZamerBlock({ children, imageSrc }: IZamerProps) {
  return (
    <div className="mt-5 rounded-xl bg-[#d6f2ff] p-4 md:p-8 shadow-md">
      <div className="grid grid-cols-[1fr_3fr]">
        <Image
          width={400}
          height={270}
          src={imageSrc}
          alt="zamer"
          className="rounded-xl z-20 ml-0 mr-2 my-auto"
        />
        <div className={`${defaultFont} ml-4`}>{children}</div>
      </div>
    </div>
  );
}
