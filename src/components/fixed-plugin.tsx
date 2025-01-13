"use client";
// import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export function FixedPlugin() {
  return (
    <Button
      color="white"
      size="sm"
      className="!fixed px-1 py-1 bottom-4 right-4 flex gap-1 items-center border border-blue-gray-50 opacity-75 shadow-blue-300 "
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      {/* &uArr; */}
      <ArrowUpCircleIcon className="size-8" />
    </Button>

    // <a href="https://www.material-tailwind.com" target="_blank">
    //   <Button
    //     color="white"
    //     size="sm"
    //     className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
    //   >
    //     <Image
    //       width={128}
    //       height={128}
    //       className="w-5 h-5"
    //       alt="Material Tailwind"
    //       src="https://www.material-tailwind.com/favicon.png"
    //     />{" "}
    //     Made With Material Tailwind
    //   </Button>
    // </a>
  );
}
