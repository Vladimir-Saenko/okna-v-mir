//* Жалюзи *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import BlindsCard from "@/components/blinds-card";
import EndPage from "@/components/end-page";

const header_text: string = "Секционные ворота и роллеты";
const bg_image_src: string = "/images/bg_rolls_gradient.png";
const ad_image_src: string = "/images/bg_ad_rolls.png";

const blinds = [
  {
    type: "Горизонтальные жалюзи",
    images: [
      "/images/blinds_hor_1.jpg",
      "/images/blinds_hor_2.jpg",
      "/images/blinds_hor_3.jpg",
    ],
    desc: "Нестареющая классика, совместимая практически с любым дизайном интерьера. Алюминиевые, деревянные, бамбуковые и кассетные. Очень большой выбор расцветок.",
    price: "от 1655 р./кв.м.",
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
      {blinds.map((el) => (
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
