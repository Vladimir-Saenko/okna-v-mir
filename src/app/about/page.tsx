import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-[850px] shadow-lg shadow-gray-600 bg-white p-8 rounded-sm">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_auto] ">
        <div className="content-center hidden lg:block">
          <Image
            width={300}
            height={300}
            src={`/logos/logo-big.png`}
            alt="logo"
            className="content-center"
            loading="eager"
          />
        </div>
        <div className="justify-items-start lg:justify-items-end ">
          <h1 className="font-serif font-semibold text-2xl">
            ИП НОСАЧЁВА ЕЛЕНА ВЛАДИМИРОВНА
          </h1>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            Место нахождения: 291015, ЛНР, г. Луганск,
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            кв. Степной, д.4, кВ. 6
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            ИНН 861717066550
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            ОГРНИП 325940100010690
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            Тел. + 7 959 583 66 88
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            эл. почта: oknavmir.lg@mail.ru
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            сайт: okna-v-mir-lugansk.ru
          </h4>
          <h4 className="font-serif italic font-semibold text-lg -mb-1">
            окна-в-мир-луганск.рф
          </h4>
        </div>
      </div>
      <hr className="h-[2px] my-8 bg-[rgb(0_112_192)] border-0" />
      <table className="table-auto font-serif font-semibold text-lg border-collapse border-2 border-[rgb(114_149_210)] w-[98%] mx-auto">
        <tbody>
          <tr className="bg-[rgb(208_219_240)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              Наименование
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left">
              <p>Индивидуальный предприниматель</p>
              <p>Носачёва Елена Владимировна</p>
            </td>
          </tr>
          <tr className="bg-[rgb(161_184_225)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              Адрес
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              291015, ЛНР, г. Луганск, кв. Степной, д.4, кВ. 6
            </td>
          </tr>
          <tr className="bg-[rgb(208_219_240)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              ИНН
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              861717066550
            </td>
          </tr>
          <tr className="bg-[rgb(161_184_225)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              ОГРНИП
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              325940100010690 выдано Межрайонной инспекцией Федеральной
              налоговой службы №1 по ЛНР 18.02.2025 г.
            </td>
          </tr>

          <tr className="bg-[rgb(208_219_240)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              ОКВЭД
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              43.32.1
            </td>
          </tr>
          <tr className="bg-[rgb(161_184_225)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              Банковские реквизиты
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              <p>Расчётный счёт: 40802810413710002071</p>
              <p>Корсчёт: 30101810600000000681</p>
              <p>Банк: ЦЕНТРАЛЬНО-ЧЕРНОЗЕМНЫЙ</p>
              <p>БАНК ПАО СБЕРБАНК</p>
              <p>БИК банка: 042007681</p>
            </td>
          </tr>
          <tr className="bg-[rgb(208_219_240)]">
            <td className="w-2/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-center">
              Контактные данные
            </td>
            <td className="w-3/5 py-[2px] px-1 border-2 border-[rgb(114_149_210)] text-left font-normal">
              <p>Тел. +7 959 583 66 88, +7 950 513 5256</p>
              <p>эл. почта: oknavmir.lg@mail.ru</p>
              <p>сайт: okna-v-mir-lugansk.ru</p>
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
        <div className="w-[95%] text-right mr-5 ml-auto my-5">
          <Image
            width={180}
            height={180}
            src={`/logos/pechat.png`}
            alt="logo"
            className="mr-8 ml-auto"
          />
        </div>
        <hr className="h-[2px] my-8 bg-[rgb(0_112_192)] border-0" />
      </footer>
    </div>
  );
}
