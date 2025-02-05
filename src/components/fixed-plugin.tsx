"use client";
import React from "react";

import ScrollUp from "./scroll-up-button";

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
  );
}
