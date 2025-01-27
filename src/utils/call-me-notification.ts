import axios from "axios";
import toast from "react-hot-toast";

interface sendData {
  name: string;
  phone: string;
  time: string;
  comment: string;
}

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const URL_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

function formatPhone(strPhone: string): string {
  const numbers: string = strPhone.replace(/[^\d]/g, "").slice(1);
  const nums: string[] = [
    "+7",
    numbers.slice(0, 3),
    numbers.slice(3, 6),
    numbers.slice(6),
  ];
  return nums.join("-");
}

export function SendToTelegram(data: sendData): void {
  const message: string =
    `Запрос на звонок с сайта "Окна в Мир"\n` +
    `===================================\n` +
    `Имя: ${data.name}\n` +
    `Телефон: ${formatPhone(data.phone)}\n` +
    `Время: ${data.time}\n` +
    `Комментарий: ${data.comment}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      if (res.data.ok) {
        toast.success("Заявка на звонок успешно отправлена 👍\n");
      } else throw new Error("Не пришел ОК из API");
    })
    .catch((err) => {
      toast.error(
        "Не удалось отправить заявку. 😕\n" +
          "Попробуйте еще раз или воспользуйтесь другим способом связаться с нами."
      );
      console.log(err);
    })
    .finally(() => {
      console.log("Скрипт выполнен");
    });
}
