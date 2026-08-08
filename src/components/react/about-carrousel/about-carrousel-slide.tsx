import type { Slide } from "./about-carrousel";

interface Props {
  slide: Slide;
}

export const AboutCarrouselSlide = ({ slide }: Props) => {
  return (
    <div className="flex flex-col mb-20 max-w-91 mx-auto pb-4 lg:flex-row-reverse lg:max-w-[1424px] lg:justify-center lg:mb-7">
      <div className="relative overflow-hidden h-93 w-full max-w-91 mx-auto rounded-lg lg:max-w-[692px] lg:h-[709px] lg:mx-0">
        <video
          className="object-cover absolute w-full h-full object-[center_-60px] left-0 top-0 lg:object-center"
          src="/assets/videos/about_character.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="mt-10 mb-5 flex flex-col justify-between items-start relative lg:bg-white lg:rounded-l-md lg:my-0 lg:w-full lg:pl-26 lg:py-26 lg:justify-start">
        <h2 className="text-2xl leading-[1.15] font-medium w-50 lg:order-2 lg:mt-auto lg:text-3xl lg:font-light lg:mb-4 lg:w-40">
          {slide.title}
        </h2>
        <img
          src="/assets/icons/blue-brain.svg"
          alt="*"
          className="lg:order-1 relative -top-3.5 lg:w-21 hidden lg:block"
        />
        <p className="text-xl leading-tight lg:text-lg w-80 lg:w-90 mt-8 lg:mt-2 lg:order-3">
          {slide.description}
        </p>
      </div>
    </div>
  );
};
