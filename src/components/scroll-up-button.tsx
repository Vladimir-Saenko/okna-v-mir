"use client";

import { Button } from "@material-tailwind/react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export function ScrollUp() {
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
  );
}

export default ScrollUp;
