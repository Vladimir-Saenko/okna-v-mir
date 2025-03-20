"use client";
import Image from "next/image";
import { Typography, IconButton } from "@material-tailwind/react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const defaultFont: string = "font-[family-name:var(--font-play)]";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-8 pt-8">
      <div className="container mx-auto">
        <div className="flex justify-around gap-8 md:justify-between">
          <Link href={"/"} className="my-auto min-h-[120px] flex">
            <Image
              width={120}
              height={120}
              src={"/logos/logo-big.png"}
              alt="logo"
              className="min-w-[120px] min-h-[120px]"
            />
          </Link>
          <div>
            <Typography
              color="white"
              className={`text-blue-100 ${defaultFont} text-2xl underline mb-3`}
            >
              ОКНА В МИР
            </Typography>
            <Typography
              as="p"
              className={`${defaultFont} text-gray-50 text-sm lg:text-base`}
            >
              Наша компания предлагает Вам пластиковые конструкции{" "}
              <span className="hidden lg:contents ">
                – окна, балконы, входные и межкомнатные двери, различного рода
                жалюзи и рулонные шторы{" "}
              </span>
              c быстрой установкой{" "}
              <span className="hidden lg:contents">
                в удобное для Вас время{" "}
              </span>
              и гарантией качества материалов и работ.{" "}
              <span className="hidden xl:contents">
                Наш главный принцип — мы продаем не товар, а качественную услугу
                по доступной цене, Ваш уют – наша забота!
              </span>
            </Typography>
          </div>
          <div className="md:ml-8 flex flex-wrap justify-evenly text-base gap-4 md:gap-8">
            {/* Колонка МЕНЮ */}
            <div>
              <Typography
                color="white"
                className={`text-blue-100 ${defaultFont} text-2xl underline mb-3`}
              >
                ССЫЛКИ
              </Typography>
              <ul className={`text-gray-50 ${defaultFont} cursor-pointer`}>
                <li>
                  <Link
                    href="/"
                    className="cursor-pointer hover:underline hover:text-white"
                  >
                    Окна
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doors"
                    className="cursor-pointer hover:underline hover:text-white"
                  >
                    Двери
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blinds"
                    className="cursor-pointer hover:underline hover:text-white"
                  >
                    Жалюзи
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="cursor-pointer hover:underline hover:text-white"
                  >
                    О компании
                  </Link>
                </li>
              </ul>
            </div>
            {/* Колонка КОНТАКТЫ */}
            {/* <div>
              <Typography
                color="white"
                className={`text-blue-100 ${defaultFont} text-2xl underline mb-3`}
              >
                Контакты
              </Typography>
              <ul className={`text-gray-50 ${defaultFont}`}>
                <li>
                  <a className="cursor-pointer hover:underline hover:text-white">
                    Телефон
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline hover:text-white">
                    Телеграм
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline hover:text-white">
                    Ватсап
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:underline hover:text-white">
                    Почта
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-y-1 gap-x-8 border-t border-gray-700 py-3 md:justify-between">
          <Typography
            color="white"
            className={`text-center font-light text-xs ${defaultFont}`}
          >
            &copy; {CURRENT_YEAR > 2025 ? "2025-" : ""}
            {CURRENT_YEAR} Разработка и дизайн: Владимир &apos;siborg&apos;
            Саенко
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <a href="https://github.com/Vladimir-Saenko" target="_blank">
                <i className="fa-brands fa-github text-xl not-italic opacity-75 hover:opacity-100"></i>
              </a>
            </IconButton>
            <IconButton variant="text" color="white">
              <a href="mailto:siborg.451@gmail.com&body=Здравствуйте,%20я%20перешел%20по%20ссылке%20с%20сайта%20&Apos;Окна в Мир&Apos;%0D?subject=Разработка%20сайта">
                <i className="fa-solid fa-envelope text-xl not-italic opacity-75 hover:opacity-100"></i>
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
