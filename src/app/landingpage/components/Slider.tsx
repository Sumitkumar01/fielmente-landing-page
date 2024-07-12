import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

function Slider({children}: {
    children: React.ReactNode
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      slidesPerView={2}
      loop={true}
      speed={900}
      autoplay={{
        delay: 4000,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        {children}
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
