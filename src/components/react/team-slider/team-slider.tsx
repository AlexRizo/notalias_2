import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { TeamSlide } from "./team-slide";

export type TeamSlide = {
  name: string;
  role: string;
  image_path: string;
};

interface Props {
  title: string;
  slides: TeamSlide[];
}

export const TeamSlider = ({ title, slides }: Props) => {
  return (
    <section>
      <h1 className="text-sm text-center text-[#7B7B7B] py-10">{title}</h1>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <TeamSlide key={`slide-${index}`} slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
