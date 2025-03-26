//* Жалюзи *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import BlindsCard from "@/components/blinds-card";
import EndPage from "@/components/end-page";

const header_text: string = "Жалюзи для Ваших окон";
const bg_image_src: string = "/images/bg_blinds_gradient.png";
const ad_image_src: string = "/images/bg_ad_blinds.png";

const blinds = [
  {
    type: "Горизонтальные жалюзи",
    images: [
      "/images/blinds_hor_1.jpg",
      "/images/blinds_hor_2.jpg",
      "/images/blinds_hor_3.jpg",
    ],
    desc: "Нестареющая классика, совместимая практически с любым дизайном интерьера. Алюминиевые, деревянные, бамбуковые и кассетные. Очень большой выбор расцветок.",
  },
  {
    type: "Вертикальные жалюзи",
    images: [
      "/images/blinds_vert_1.jpg",
      "/images/blinds_vert_2.jpg",
      "/images/blinds_vert_3.jpg",
    ],
    desc: "Практичные, надёжные и доступные жалюзи, которые не собирают пыль и не 'сужают' помещение . Тканевые, пластиковые и мультифактурные. Широкая гамма цветов.",
  },
  {
    type: "Рулонные шторы",
    images: [
      "/images/blinds_roll_1.jpg",
      "/images/blinds_roll_2.jpg",
      "/images/blinds_roll_3.jpg",
    ],
    desc: "Cамый ходовой товар на рынке солнцезащитных систем. Просты в эксплуатации, есть большой выбор цветовых решений, а цена — ниже, чем на обычные тканевые гардины.",
  },
  {
    type: "Римские шторы",
    images: [
      "/images/blinds_roman_1.jpg",
      "/images/blinds_roman_2.jpg",
      "/images/blinds_roman_3.jpg",
    ],
    desc: "Элегантные, стильные и одновременно практичные шторы, которые органично впишутся как в классический, так и в современный интерьер. На любой вкус и фантазию.",
  },
  {
    type: "Шторы плиссе",
    images: [
      "/images/blinds_plisse_1.jpg",
      "/images/blinds_plisse_2.jpg",
      "/images/blinds_plisse_3.jpg",
    ],
    desc: "Великолепная совместимость с любой конфигурацией оконного проёма, а также идеальный выбор для мансардных окон. Широкий ассортимент расцветок и фактур.",
  },
  {
    type: "Шторы 'день-ночь'",
    images: [
      "/images/blinds_day-night_1.jpg",
      "/images/blinds_day-night_2.jpg",
      "/images/blinds_day-night_3.jpg",
    ],
    desc: "Чередование двух видов ткани с различной светопроницаемостью позволяет создавать оригинальные эффекты, обеспечивая желаемый уровень освещённости в помещении.",
  },
];

export default function Doors() {
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
          key={el.type}
        />
      ))}
      {/* Заглушка на время разработки */}
      <EndPage />
    </>
  );
}
