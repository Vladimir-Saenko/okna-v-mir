//* Главная страница - Окна *//

import Hero from "@/components/hero";
import { OurWorksGallery } from "@/components/our-works-gallery";
import DevelopPlug from "@/components/develop-plug";
import ColorBox from "@/components/color-box";
import WindowBrands from "@/components/window-brands";

const header_text: string = "Установка пластиковых окон";
const bg_image_src: string = "/images/bg_windows_gradient.png";
const ad_image_src: string = "/images/bg_ad_windows.png";

export default function Home() {
  return (
    <>
      <Hero
        headerText={header_text}
        bgImageSrc={bg_image_src}
        adImageSrc={ad_image_src}
      />
      <WindowBrands />
      <ColorBox />

      {/* Заглушка на время разработки */}
      <DevelopPlug />

      <OurWorksGallery />
    </>
  );
}
