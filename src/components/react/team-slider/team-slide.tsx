import type { TeamSlide as TeamSlideType } from "./team-slider";

interface Props {
  slide: TeamSlideType;
}

export const TeamSlide = ({ slide }: Props) => {
  return (
    <div className="flex flex-col max-w-91 mx-auto pb-20 lg:pb-12 lg:max-w-[600px] lg:mx-0">
      <div className="w-full h-[390px] bg-gray-300 lg:h-[645px]">
        <img src={slide.image_path} alt={slide.name} className="w-full" />
      </div>
      <h2 className="text-2xl leading-[1.10] mt-4 lg:text-3xl">{slide.name}</h2>
      <p className="text-lg font-light">{slide.role}</p>
    </div>
  );
};
