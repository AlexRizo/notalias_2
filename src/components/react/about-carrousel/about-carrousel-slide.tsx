import type { Slide } from "./about-carrousel";

interface Props {
  slide: Slide;
}

export const AboutCarrouselSlide = ({ slide }: Props) => {
  return (
    <div className="flex flex-col mb-20 max-w-91 mx-auto pb-4 lg:flex-row-reverse lg:max-w-[auto]">
      <div className="relative overflow-hidden h-93 w-full max-w-91 mx-auto rounded-lg lg:max-w-[692px] lg:h-[709px]">
        <video
          className="object-cover absolute w-full h-full object-[center_-60px] left-0 top-0 lg:object-center"
          src="/assets/videos/about_character.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="mt-10 mb-5 flex flex-row justify-between items-start relative lg:flex-col">
        <h2 className="text-xl leading-[1.15] font-medium w-40 lg:order-2">
          {slide.title}
        </h2>
        <img
          src="/assets/icons/blue-brain.svg"
          alt="*"
          className="lg:order-1 relative -top-2.5"
        />
        <p className="text-sm w-70 lg:order-3">{slide.description}</p>
      </div>
    </div>
  );
};
