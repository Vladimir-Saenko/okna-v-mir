"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="flex w-[100%]">
      <div className="mb-3 mt-3 text-left [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.75)] absolute ml-4 z-10 max-w-[40%] font-normal ">
        <Typography variant="h2" color="white">
          Установка пластиковых окон
        </Typography>
        <Typography variant="h2" color="white">
          Install plasic windows
        </Typography>
        <Typography variant="h4" color="white">
          Качественно, надежно, с гарантией.
        </Typography>
      </div>
      <div className="ml-auto ">
        <Image
          width={1000}
          height={500}
          src={"/images/z_window_gradient.png"}
          alt="window"
        />
      </div>
    </div>

    //   </div>
    // </header>
    // </div>
    /* <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
      </div> */
  );
}
export default Hero;
