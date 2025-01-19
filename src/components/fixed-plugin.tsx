"use client";

// import Image from "next/image";
import React from "react";

import ScrollUp from "./ScrollUp";

export function FixedPlugin() {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Кнопка прокрутки страницы вверх
    <>{isScrolling && <ScrollUp />}</>

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
