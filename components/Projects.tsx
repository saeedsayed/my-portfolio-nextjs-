import { ProjectCard } from "./index";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectsData from "@/helper/projects.json";

const projects = () => {
  // swiper responsive display
  const breakpoints = {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
  };
  //===========
  // content
  //===========
  return (
    <section id="projects" aria-label="Featured Projects">
      <SectionTitle>my projects</SectionTitle>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          pagination={{
            type: "fraction",
          }}
          freeMode
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Keyboard]}
          loop={true}
          keyboard
        >
          {projectsData.map(
            (project: {
              name: string;
              image: string;
              techStack: string[];
              link: string;
              repoUrl: string;
              hide?: boolean;
            }) =>
              project.hide ? null : (
                <SwiperSlide key={project.name}>
                  <div className="pb-8">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default projects;
