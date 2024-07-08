"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import React from "react";

function MileStones() {
  return (
    <section >
      <div className='lg:block hidden'>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-blue-dark text-4xl font-bold">70+</h2>
            <p className="text-lg text-blue-dark">Hoteliers Trust Us</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-blue-dark text-4xl font-bold">90+</h2>
            <p className="text-lg text-blue-dark">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-blue-dark text-4xl font-bold">89%</h2>
            <p className="text-lg text-blue-dark">Satisfaction Rate</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-blue-dark text-4xl font-bold">15+</h2>
            <p className="text-lg text-blue-dark">Years of Experience</p>
          </div>
        </div>
      </div>
      {/* small screen view */}
      <div className='lg:hidden block py-3'>
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={2}
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
            }}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-blue-dark text-4xl font-bold">70+</h2>
                <p className="text-lg text-blue-dark">Hoteliers Trust Us</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-blue-dark text-4xl font-bold">90+</h2>
                <p className="text-lg text-blue-dark">Projects Completed</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-blue-dark text-4xl font-bold">89%</h2>
                <p className="text-lg text-blue-dark">Satisfaction Rate</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-blue-dark text-4xl font-bold">15+</h2>
                <p className="text-lg text-blue-dark">Years of Experience</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>


    </section >
  );
}

export default MileStones;
