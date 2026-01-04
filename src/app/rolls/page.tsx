//* Жалюзи *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import BlindsCard from "@/components/blinds-card";
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
    desc: "Доступные секционные ворота для небольших гаражей",
    price: "",
  },
  {
    type: "Секционные ворота RSD02",
    images: [
      "/images/rsd-02-1.jpg",
      "/images/rsd-02-2.jpg",
      "/images/rsd-02-3.jpg",
    ],
    desc: "Надёжные секционные ворота для больших проёмов",
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
      <EndPage />
    </>
  );
}
