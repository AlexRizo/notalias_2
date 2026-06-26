import type { TeamSlide as TeamSlideType } from "./team-slider";

interface Props {
  slide: TeamSlideType;
}

export const TeamSlide = ({ slide }: Props) => {
  return (
    <div className="flex flex-col max-w-91 mx-auto pb-12">
      <div className="w-full h-[390px] bg-gray-300">
        <img src={slide.image_path} alt={slide.name} className="w-full" />
      </div>
      <h2 className="text-lg leading-none mt-4">{slide.name}</h2>
      <p className="text-xs font-light">{slide.role}</p>
    </div>
  );
};
