import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import CourseCard from "./CourseCard";

const CourseSlider = ({ Courses }) => {
  return (
    <div >
      {Courses?.length ? (
        <Swiper
          mousewheel={{
            enabled: true,
            forceToAxis: true,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          allowSlidePrev={true}
          slidesPerView={1}
          loop={false}
          spaceBetween={24}
          pagination={true}
          modules={[Pagination, Navigation, FreeMode, Mousewheel, Keyboard]}
          className="mySwiper md:pt-5 "
          style={{
            "--swiper-navigation-size": "20px",
          }}
          freeMode={true}
          navigation={true}
          breakpoints={{
            300: { slidesPerView: 2.1, spaceBetween: 10 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} Height={"lg:h-[250px] h-[100px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No Course Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
