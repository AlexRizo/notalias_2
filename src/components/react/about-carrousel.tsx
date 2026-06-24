import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AboutCarrouselSlide } from "./about-carrousel-slide";
import "swiper/css";

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
    <section className="">
      <Swiper
        className="mySwiper"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <AboutCarrouselSlide key={`slide-${index}`} slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutCarrousel;
