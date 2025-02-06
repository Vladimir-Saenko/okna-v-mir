"use client";

import { Typography, IconButton } from "@material-tailwind/react";

import { formatPhone } from "@/utils";
import CallMe from "./сall-me";

const PHONE: string = process.env.PHONE_NUMBER || "+7-000-000-0000";
const TELEGRAM_URL: string = `https://t.me/+${PHONE}`;

const defaultFont = "font-[family-name:var(--font-play)]";

export default function DevelopPlug() {
  return (
    <div
      className={`mt-8 p-4 min-h-[100px] w-[100%] bg-light-blue-100 rounded-md flex flex-col text-center ${defaultFont}`}
    >
      <p className="text-2xl text-amber-800 mb-4">Уважаемые друзья!</p>

      <p className="text-xl text-indigo-900">
        Сайт находится в стадии разработки и наполнения контентом.
      </p>
      <p className="text-xl text-indigo-900 mb-3">
        Если Вам нужна дополнительная информация или консультация, Вы можете:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <span className="text-center md:text-right md:mr-2">
          Позвонить нам :
        </span>
        <Typography
          as="a"
          href={`tel:+${PHONE}`}
          target={"_blank"}
          variant="small"
          className="md:flex font-medium text-center md:text-left md:ml-2 text-lg font-[family-name:var(--font-play)] hover:text-indigo-900 -mt-2 md:mt-0"
        >
          <i className="fa-solid fa-phone-volume text-xl mx-1 "></i>
          <span className="md:-mt-1">{`${formatPhone(PHONE)}`}</span>
        </Typography>
        <span className="text-center md:text-right md:mr-2 mt-1">
          Написать сообщение :
        </span>
        <div className="md:flex font-medium md:ml-2 -mt-2 md:mt-0">
          <a href={`${TELEGRAM_URL}`} target="_blank" className="ml-0">
            <IconButton variant="text" size="sm">
              <i className="fa-brands fa-telegram text-2xl" />
            </IconButton>
          </a>
          <a
            href={`https://wa.me/${PHONE}?text=Здравствуйте!%20👋%20Меня%20интересует...`}
            target="_blank"
            className="ml-2"
          >
            <IconButton variant="text" size="sm">
              <i className="fa-brands fa-whatsapp text-2xl" />
            </IconButton>
          </a>
        </div>
        <span className="text-center md:text-right md:mr-2 md:mt-1 ">
          Или :
        </span>
        <div className="text-center md:text-left md:ml-2 md:w-48 -mt-2 md:mt-0">
          <CallMe />
        </div>
      </div>
    </div>
  );
}
