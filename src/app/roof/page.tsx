//* Кровля и фасад *//

import Hero from "@/components/hero";
import EndPage from "@/components/end-page";
import { OurWorksRoof } from "@/components/our-works-roof";
import RoofCard from "@/components/roof-card";

const header_text: string = "Монтаж кровли и фасада";
const bg_image_src: string = "/images/bg_roof_gradient.png";
const ad_image_src: string = "/images/bg_ad_roof.png";

export default function Roof() {
  return (
    <>
      <Hero
        headerText={header_text}
        bgImageSrc={bg_image_src}
        adImageSrc={ad_image_src}
      />
      <RoofCard/>

      <OurWorksRoof/>
      <EndPage />
    </>
  );
}
