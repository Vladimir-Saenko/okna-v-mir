//* Главная страница - Окна *//

import Hero from "@/components/hero";
import { OurWorksGallery } from "@/components/our-works-gallery";
import ColorBox from "@/components/color-box";
import WindowBrands from "@/components/window-brands";
import EndPage from "@/components/end-page";
import ZamerBlock from "@/components/zamer-block";

const header_text: string = "Установка пластиковых окон";
const bg_image_src: string = "/images/bg_windows_gradient.png";
const ad_image_src: string = "/images/bg_ad_windows.png";
const zamer_image_src: string = "/images/zamer.jpg";

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
      <ZamerBlock imageSrc={zamer_image_src}>
        <h3 className="text-center text-lg lg:text-xl xl:text-2xl text-indigo-700">
          Бесплатный замер от компании &quot;Окна в Мир&quot;
        </h3>
        <hr className="h-[2px] my-2 bg-orange-600 border-0 w-[30%] mx-auto" />
        <p className="text-sm lg:text-base xl:text-lg">
          <span className="hidden md:flex">
            Измерение оконного проёма необходимо доверять специалистам, потому
            что качество выполненной работы будет влиять как на внешний вид
            нового пластикового окна, так и на его герметичность.
          </span>
          <span>
            Мы бесплатно произведём замер окна и проконсультируем по всем
            вопросам, связанными с установкой.
          </span>
        </p>
      </ZamerBlock>
      <EndPage />
      <OurWorksGallery />
    </>
  );
}
