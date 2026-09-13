import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export type OtherProject = {
  name: string;
  description: string;
  video_path: string;
  url: string;
};

interface Props {
  projects: OtherProject[];
  prevSelector: string;
  nextSelector: string;
}

const imageExtensions = ["webp", "jpg", "jpeg", "png", "gif", "avif", "svg"];

const isImagePath = (path: string) => {
  const extension = path.split(".").pop()?.toLowerCase() ?? "";
  return imageExtensions.includes(extension);
};

export const OtherProjectsSlider = ({
  projects,
  prevSelector,
  nextSelector,
}: Props) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{ prevEl: prevSelector, nextEl: nextSelector }}
      loop={projects.length > 1}
      slidesPerView={2}
      spaceBetween={16}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {projects.map((project, i) => (
        <SwiperSlide key={`other-project-${i}`}>
          <a href={project.url} className="block">
            <div className="relative h-[212px] rounded lg:h-[558px]">
              {isImagePath(project.video_path) ? (
                <img
                  src={project.video_path}
                  alt={project.name}
                  loading="lazy"
                  className="absolute object-cover object-center rounded size-full"
                />
              ) : (
                <video
                  src={project.video_path}
                  preload="none"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="absolute object-cover object-center rounded size-full"
                />
              )}
            </div>
            <article className="mb-10">
              <h1 className="text-lg mb-3 mt-5 leading-none lg:text-3xl font-semibold lg:font-normal">
                {project.name}
              </h1>
              <p className="text-lg font-light leading-tight lg:leading-normal">
                {project.description}
              </p>
            </article>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OtherProjectsSlider;
