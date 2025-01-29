import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Typography,
} from "@material-tailwind/react";

import { SendToTelegram } from "@/utils";

interface sendData {
  name: string;
  phone: string;
  time: string;
  comment: string;
}

//styles const
const defaultFont: string = "font-[family-name:var(--font-play)]";
const darkShadow: string = "[text-shadow:_0_0_5px_rgb(0_0_0_/_0.4)]";

export default function CallMe() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [time, setTime] = React.useState("08:00 - 20:00");
  const [comment, setComment] = React.useState("");

  const handleOpen = () => setOpen(!open);

  const handleSend = () => {
    setOpen(false);

    const data: sendData = {
      name,
      phone,
      time,
      comment,
    };

    SendToTelegram(data);
  };

  function isValidPhone(phone: string): boolean {
    const validBegin = phone.startsWith("+7") || phone.startsWith("8"); //Проверка на российские номера
    const numbers: string = phone.replace(/[^\d]/g, "").slice(1); //Вырезаем только цифры

    if (numbers.length != 10 || !validBegin) return false; //Проверяем количество цифр после кода страны и валидность кода страны

    return true;
  }

  return (
    <>
      <Button
        color="blue"
        size="sm"
        className={`${defaultFont} ${darkShadow} border border-gray-400 hover:border-gray-600 hover:shadow-light-blue-300 hover:shadow-md bg-blue-500 hover:bg-blue-600`}
        onClick={handleOpen}
      >
        Заказать звонок
      </Button>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        className="bg-gradient-to-t from-white to to-blue-50 overflow-y-scroll md:overflow-auto max-h-[95vh]"
      >
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start pt-3 pb-1">
            <Typography className={`${defaultFont} text-blue-900`} variant="h4">
              Заказать звонок
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody className="pt-1">
          <Typography
            className={`${defaultFont} mb-1 text-blue-gray-600 text-sm md:text-base`}
            variant="lead"
          >
            Укажите Ваше имя, телефон, удобное время для звонка и короткое
            сообщение
          </Typography>
          <div className="grid gap-3">
            <div>
              <label
                className={`${defaultFont} block mb-1 text-base text-blue-900`}
              >
                Ф.И.О.
              </label>
              <input
                type="text"
                id="contactName"
                className={`${defaultFont} w-full bg-transparent placeholder:text-blue-gray-400 text-blue-gray-900 text-sm border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-gray-900 focus:border-2`}
                placeholder="Имя ( Отчество Фамилия (необязательно )"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <label
                className={`${defaultFont} block mb-1 text-base text-blue-900`}
              >
                Телефон
              </label>
              <input
                type="phone"
                value={phone}
                id="contactPhone"
                className={`${defaultFont} w-full bg-transparent placeholder:text-blue-gray-400 text-blue-gray-900 text-sm border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-gray-900 focus:border-2`}
                placeholder="+7-123-456-7890"
                pattern="^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$"
                //maxLength={15}
                required
                onChange={(event) => setPhone(event.target.value.toString())}
              />
            </div>
            <div>
              <label
                className={`${defaultFont} block mb-1 text-base text-blue-900`}
              >
                Время для звонка
              </label>

              <select
                onChange={(e) => setTime(e.target.value)}
                className={`${defaultFont} w-full bg-transparent text-blue-gray-900 text-sm border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-gray-900 focus:border-2`}
              >
                <option className={`${defaultFont} text-sm md:text-base`}>
                  08:00 - 20:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  08:00 - 10:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  10:00 - 12:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  12:00 - 14:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  14:00 - 16:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  16:00 - 18:00
                </option>
                <option className={`${defaultFont} text-sm md:text-base`}>
                  18:00 - 20:00
                </option>
              </select>
            </div>
            <Textarea
              label="Короткое сообщение (необязательно)"
              onChange={(e) => setComment(e.target.value)}
              maxLength={100}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="text"
            size="sm"
            className={`${defaultFont} text-blue-gray-800`}
            onClick={handleOpen}
          >
            Отмена
          </Button>
          <Button
            size="sm"
            className={`${defaultFont} border border-gray-400 hover:border-gray-600 hover:shadow-light-blue-300 hover:shadow-sm bg-blue-500 hover:text-gray-900`}
            onClick={handleSend}
            disabled={name === "" || !isValidPhone(phone)}
          >
            Отправить
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
