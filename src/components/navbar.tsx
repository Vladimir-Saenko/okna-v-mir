import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const darkShadow: string = "[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]";
//const hoverDarkShadow: string = "[text-shadow:_0_0_8px_rgb(255_255_255_/_0.8)]";

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
        className={`font-medium text-lg font-[family-name:var(--font-play)]`}
      >
        {children}
      </Typography>
    </li>
  );
}

function getCallbackForm() {
  alert("Заказать звонок");
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
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Image
          width={100}
          height={80}
          src={`/logos/my-logo-1-${isScrolling ? "2" : "1"}.png`}
          alt="logo"
        />

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${darkShadow} ${
            isScrolling ? "text-gray-900" : "text-white"
          } `}
        >
          <NavItem href={"/"} target="_self">
            Главная
          </NavItem>
          <NavItem target="_self">О нас</NavItem>
          <NavItem target="_self">Контакты</NavItem>
        </ul>

        <div className="gap-2 items-end hidden lg:flex">
          <Button
            variant="outlined"
            size="sm"
            onClick={getCallbackForm}
            color={isScrolling ? "blue" : "white"}
          >
            Заказать звонок
          </Button>
        </div>

        <div className="gap-2 flex items-center">
          <Typography
            as="a"
            href={"tel:+70000000000"}
            target={"_blank"}
            variant="small"
            className={`flex font-medium mr-2 text-lg font-[family-name:var(--font-play)] ${darkShadow} ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            <i className="fa-solid fa-phone-volume text-xl md:mt-1 mx-1 "></i>
            <span className={`hidden md:flex`}>{`+7(000)0000-00-00`}</span>
          </Typography>
          <a href="https://t.me/+79139511618" target="_blank">
            <IconButton variant="text" size="sm">
              <i
                className={`fa-brands fa-telegram text-2xl ${darkShadow} ${
                  isScrolling ? "text-gray-900" : "text-white"
                }`}
              />
            </IconButton>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=79139545830"
            target="_blank"
          >
            <IconButton variant="text" size="sm">
              <i
                className={`fa-brands fa-whatsapp text-2xl ${darkShadow} ${
                  isScrolling ? "text-gray-900" : "text-white"
                }`}
              />
            </IconButton>
          </a>
          {/* <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-viber text-2xl" />
          </IconButton> */}
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
            <NavItem>Главная</NavItem>
            <NavItem>О нас</NavItem>
            <NavItem>Контакты</NavItem>
          </ul>
          <Typography
            variant="small"
            className={`font-medium text-blue-gray-900 mt-4 cursor-pointer text-lg font-[family-name:var(--font-play)]`}
            onClick={getCallbackForm}
          >
            Заказать звонок
          </Typography>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
