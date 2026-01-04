//* Жалюзи *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import BlindsCard from "@/components/blinds-card";
import ColorBox from "@/components/rolls-color-box";
import EndPage from "@/components/end-page";

const header_text: string = "Секционные ворота и роллеты";
const bg_image_src: string = "/images/bg_rolls_gradient.png";
const ad_image_src: string = "/images/bg_ad_rolls.png";

const shutters = [
  {
    type: "Секционные ворота RSD01",
    images: [
      "/images/rsd-01-1.jpg",
      "/images/rsd-01-2.jpg",
      "/images/rsd-01-3.jpg",
    ],
    desc: "Доступные секционные ворота для установки в небольшие гаражные помещения с низким потолком.",
    price: "",
  },
  {
    type: "Секционные ворота RSD02",
    images: [
      "/images/rsd-02-1.jpg",
      "/images/rsd-02-2.jpg",
      "/images/rsd-02-3.jpg",
    ],
    desc: "Надёжные секционные ворота для перекрытия больших проёмов. Подъемный механизм с высоким ресурсом.",
    price: "",
  },
  {
    type: "Роллетные ворота",
    images: [
      "/images/rollvorota-1.jpg",
      "/images/rollvorota-2.jpg",
      "/images/rollvorota-3.jpg",
    ],
    desc: "Компактное решение для проёма любого типа и размера.",
    price: "",
  },
  {
    type: "Оконные роллеты",
    images: [
      "/images/rollets-1.jpg",
      "/images/rollets-2.jpg",
      "/images/rollets-3.jpg",
      "/images/rollets-4.jpg",
      "/images/rollets-5.jpg",
    ],
    desc: "Конструкции защищают дом от солнца, шума, непогоды и взлома.",
    price: "",
  },
];

export default function Rolls() {
  return (
    <>
      <Hero
        headerText={header_text}
        bgImageSrc={bg_image_src}
        adImageSrc={ad_image_src}
      />
      {shutters.map((el) => (
        <BlindsCard
          type={el.type}
          images={el.images}
          desc={el.desc}
          price={el.price}
          key={el.type}
        />
      ))}
      {/* Заглушка на время разработки */}
      <ColorBox />
      <EndPage />
    </>
  );
}
