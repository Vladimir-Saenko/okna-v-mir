//* Главная страница - Окна *//

import Hero from "@/components/hero";
// import { OurWorksGallery } from "@/components/our-works-gallery";
import DevelopPlug from "@/components/develop-plug";

const header_text: string = "Продажа и установка дверей";
const bg_image_src: string = "/images/bg_doors_gradient.png";
const ad_image_src: string = "/images/bg_ad_doors.png";

export default function Doors() {
  return (
    <>
      <Hero
        headerText={header_text}
        bgImageSrc={bg_image_src}
        adImageSrc={ad_image_src}
      />

      {/* Заглушка на время разработки */}
      <DevelopPlug />

      {/* <OurWorksGallery /> */}
    </>
  );
}
