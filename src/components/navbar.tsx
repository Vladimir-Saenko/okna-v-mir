import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  // Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import CallMe from "./сall-me";
import { formatPhone } from "@/utils";

const darkShadow: string = "[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]";
//const hoverDarkShadow: string = "[text-shadow:_0_0_8px_rgb(255_255_255_/_0.8)]";

const PHONE: string = process.env.PHONE_NUMBER || "+7-000-000-0000";
const TELEGRAM_URL: string = `https://t.me/+${PHONE}`; // process.env.CHAT_URL;

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}
function NavItem({ children, href, target }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={target || "_blank"}
        variant="small"
        className={`font-medium text-2xl font-[family-name:var(--font-play)] lg:hover:pb-1 hover:[text-shadow:_0_0_8px_rgb(0_0_255_/_0.8)]`}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false); // Открытие меню для узких экранов
  const [isScrolling, setIsScrolling] = React.useState(false); // Прокрутка

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      //  color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 ${
        isScrolling
          ? "shadow-md shadow-blue-gray-500 bg-blue-500"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-around cursor-pointer">
        <Link href={"/"}>
          <img
            className="-my-[15px] h-auto"
            width={156}
            src="/logos/logo-wide.png"
            alt="logo"
            loading="eager"
          />
        </Link>

        <ul
          className={`ml-4 hidden items-center gap-3 lg:flex ${darkShadow} text-white`}
        >
          <NavItem href={"/"} target="_self">
            Окна
          </NavItem>
          <NavItem href={"/doors"} target={"_self"}>
            Двери
          </NavItem>
          <NavItem href={"/blinds"} target={"_self"}>
            Жалюзи
          </NavItem>
          <NavItem href={"/rolls"} target={"_self"}>
            Ворота
          </NavItem>
          <NavItem href={"/about"} target={"_self"}>
            О компании
          </NavItem>
        </ul>

        <div className="flex">
          <div className="-mt-[6px] md:mt-0 gap-2 flex items-center">
            <div className="hidden xl:flex">
              <CallMe />
            </div>
            <Typography
              as="a"
              href={`tel:+${PHONE}`}
              target={"_blank"}
              variant="small"
              className={`flex font-medium mr-2 text-lg font-[family-name:var(--font-play)] ${darkShadow} text-white`}
            >
              <i className="fa-solid fa-phone-volume text-xl md:mt-1 mx-1 "></i>
              <span>{`${formatPhone(PHONE)}`}</span>
            </Typography>
            <a href={`${TELEGRAM_URL}`} target="_blank">
              <IconButton variant="text" size="sm">
                <i
                  className={`fa-brands fa-telegram text-2xl ${darkShadow} text-white`}
                />
              </IconButton>
            </a>
            <a
              href={`https://wa.me/${PHONE}?text=Здравствуйте!%20👋%20Меня%20интересует...`}
              target="_blank"
            >
              <IconButton variant="text" size="sm">
                <i
                  className={`fa-brands fa-whatsapp text-2xl ${darkShadow} text-white`}
                />
              </IconButton>
            </a>
          </div>
        </div>

        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href={"/"} target="_self">
              Окна
            </NavItem>
            <NavItem href={"/doors"} target={"_self"}>
              Двери
            </NavItem>
            <NavItem href={"/blinds"} target={"_self"}>
              Жалюзи
            </NavItem>
            <NavItem href={"/rolls"} target={"_self"}>
              Ворота
            </NavItem>
            <NavItem href={"/about"} target={"_self"}>
              О компании
            </NavItem>
            <CallMe />
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
