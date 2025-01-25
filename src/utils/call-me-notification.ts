const KEY: string = "4263091d4c2397b3a13fe16d0273b604"; //Ключ адресата для бота pushmebot.ru
const URL: string = "http://pushmebot.ru/send"; //Адрес Telegram-бота для оповещений

interface sendData {
  name: string;
  phone: string;
  time: string;
  comment: string;
}

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
  const message: string = `Запрос на звонок с сайта "Окна в Мир"%0AИмя: ${
    data.name
  }%0AТелефон: ${formatPhone(data.phone)}%0AВремя: ${
    data.time
  }%0AКомментарий: ${data.comment}`;

  async function postMessage(): Promise<void> {
    await fetch(`${URL}?key=${KEY}&message=${message}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch(function (error) {
        console.log(error);
      });
  }

  postMessage();
}
