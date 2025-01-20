"use client";
import Image from "next/image";
import { Typography, IconButton } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const defaultFont: string = "font-[family-name:var(--font-play)]";

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <Link href={"/"}>
            <Image
              width={160}
              height={80}
              src={"/logos/my-logo-1-1.png"}
              alt="logo"
            />
          </Link>
          <div className="md:ml-8 flex flex-wrap justify-evenly w-[65%]">
            {/* Колонка МЕНЮ */}
            <div>
              <Typography
                color="white"
                className={`text-blue-100 ${defaultFont} text-2xl underline mb-3`}
              >
                Меню
              </Typography>
              <ul className={`text-gray-50 ${defaultFont} cursor-pointer`}>
                <li>
                  <a>Окна</a>
                </li>
                <li>
                  <a>Двери</a>
                </li>
                <li>
                  <a>Жалюзи</a>
                </li>
                <li>
                  <a>Рольставни</a>
                </li>
              </ul>
            </div>
            {/* Колонка КОНТАКТЫ */}
            <div>
              <Typography
                color="white"
                className={`text-blue-100 ${defaultFont} text-2xl underline mb-3`}
              >
                Контакты
              </Typography>
              <ul className={`text-gray-50 ${defaultFont} cursor-pointer`}>
                <li>
                  <a>Телефон</a>
                </li>
                <li>
                  <a>Телеграм</a>
                </li>
                <li>
                  <a>Ватсап</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 border-t border-gray-700 py-3 md:justify-between">
          <Typography
            color="white"
            className={`text-center font-normal ${defaultFont}`}
          >
            &copy; {CURRENT_YEAR > 2025 ? "2025-" : ""}
            {CURRENT_YEAR} Разработка и дизайн{" "}
            <a href="#" target="_blank" className="underline">
              Владимир &apos;siborg&apos; Саенко
            </a>
            .
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
