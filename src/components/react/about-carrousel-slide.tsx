import type { Slide } from "./about-carrousel";

interface Props {
  slide: Slide;
}

export const AboutCarrouselSlide = ({ slide }: Props) => {
  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="font-arvo text-3xl mb-10">{slide.title}</h2>
      <div className="relative overflow-hidden h-93 w-full max-w-91 mx-auto rounded-lg">
        <video
          className="object-cover absolute w-full h-full object-[center_-60px] left-0 top-0"
          src="/assets/videos/about_character.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};
