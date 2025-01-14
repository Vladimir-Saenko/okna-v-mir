"use client";

import Image from "next/image";
// import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    // <div className="relative min-h-screen w-full">
    //   <header className="grid !min-h-[40rem] bg-gradient-to-t from-blue-200 to to-blue-600 px-8">
    //     <div className="container mx-auto mt-5 grid h-full w-full grid-cols-1 place-items-center lg:mt-5">
    <div className="col-span-1">
      <Image
        width={1000}
        height={500}
        src={"/images/z_window.jpg"}
        alt="window"
      />
    </div>
    //   </div>
    // </header>
    // </div>
    /* <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Learning App
          </Typography>
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
