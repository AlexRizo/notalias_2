import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AboutCarrouselSlide } from "./about-carrousel-slide";

export type Slide = {
  icon: string;
  title: string;
  description: string;
  media_path: string;
};

interface Props {
  slides: Slide[];
}

export const AboutCarrousel = ({ slides }: Props) => {
  return (
    <section className="max-w-91 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <AboutCarrouselSlide key={slide.media_path} slide={slide} />
        ))}
      </Swiper>
    </section>
  );
};

export default AboutCarrousel;
