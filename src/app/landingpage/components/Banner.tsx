"use client";
import React from "react";
import { Arrow } from "@/icons/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// images
import tpsliderImg from "../../../../public/images/landingPage/hotelmarketing.jpg";
import tpsliderImg1 from "../../../../public/images/landingPage/hotelmarketing.jpg";
import tpsliderImg2 from "../../../../public/images/landingPage/hotelmarketing.jpg";
import { BsArrowRight } from "react-icons/bs";
import { StaticImageData } from "next/image";

const Banner = () => {
  interface topslider {
    url: StaticImageData;
    btnName: string;
  }
  [];
  const topslider: topslider[] = [
    {
      url: tpsliderImg,
      btnName: "Hotel Marketing",
    },
    {
      url: tpsliderImg1,
      btnName: "Resort Marketing",
    },
    {
      url: tpsliderImg2,
      btnName: "Restaurant Marketing",
    },
  ];
  return (
    <section className="max-w-[1920px] mx-auto">
      <div className="lg:grid grid-cols-2 w-full">
        <div className="lg:flex justify-end p-5 font-roboto">
          <div className="lg:w-[600px]">
            <h1 className="lg:text-6xl text-4xl font-bold text-[#625ACA] md:text-start text-center">
              Hospitality Marketing{" "}
              <span className="text-black">
                Agency{" "}
                <span className="hidden lg:inline">Based in Gurgaon</span>
              </span>
            </h1>
            <p className="text-xl text-[#808080] mt-4 md:text-justify text-center">
              Are you looking with a well-rooted Hotel Advertisement Company
              that stays alongside you with targeted, site specific programs to
              boost your marketing strategies?
            </p>
            <div className="flex items-center gap-2 mt-8 h-[240px]">
              <button className="flex items-center prev gap-2 bg-white px-6 py-2 rounded-md mt-8 rotate-180">
                <Arrow />
              </button>
              <Swiper
                // loop={true}
                centeredSlides={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                className="mySwiper h-full"
              >
                {topslider.map((item, i) => (
                  <SwiperSlide key={i}>
                    
                    <div
                      className=" flex items-end justify-center w-full h-full border-2 border-white shadow-xl bg-center bg-cover bg-no-repeat p-4 rounded-xl"
                    //   style={{ backgroundImage: `url(${tpsliderImg})` }}
                    style={{ backgroundImage: `url(${item.url})` }}
                    >
                        <div
                        className=""
                        style={{ background: "rgba(0,0,0,.4)" }}
                      >
                        <button className="font-roboto text-xl text-black bg-white px-6 py-2 rounded-md">{item.btnName}</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="flex items-center gap-2 bg-white next  px-6 py-2 rounded-md mt-8">
                <Arrow />
              </button>
            </div>
          </div>
        </div>
        {/* 0px, 0px, 171px, 0px */}
        <div className="hidden lg:block">
          <form
            action=""
            className="bg-blue-dark rounded-bl-[171px] w-full py-32 ps-28"
          >
            <div className="w-[573px] h-[436px] flex flex-col">
              <div>
                <h2 className="text-3xl text-white font-bold mb-5">
                  Connect with our Marketing Expert
                </h2>
              </div>
              <div className="mt-5 p-3 bg-transparent w-full border-b border-[#4D4989] ">
                <input
                  type="text"
                  className="text-xl text-white w-full placeholder:bg-transparent bg-transparent outline-none placeholder:capitalize"
                  placeholder="Full name"
                />
              </div>
              <div className="mt-5 p-3 bg-transparent w-full border-b border-[#4D4989] ">
                <input
                  type="text"
                  className="text-xl text-white w-full placeholder:bg-transparent bg-transparent outline-none placeholder:capitalize"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-5 p-3 bg-transparent w-full border-b border-[#4D4989] ">
                <input
                  type="text"
                  className="text-xl text-white w-full placeholder:bg-transparent bg-transparent outline-none placeholder:capitalize"
                  placeholder="Brand Name"
                />
              </div>
              <div className="mt-5 p-3 bg-transparent w-full border-b border-[#4D4989] ">
                <input
                  type="text"
                  className="text-xl text-white w-full placeholder:bg-transparent bg-transparent outline-none placeholder:capitalize"
                  placeholder="Phone number"
                />
              </div>
              <div className="mt-5 p-3 bg-transparent w-full border-b border-[#4D4989] ">
                <textarea
                  className="text-xl text-white w-full placeholder:bg-transparent bg-transparent outline-none placeholder:capitalize resize-none"
                  placeholder="Message"
                />
              </div>
              <div>
                <button className="mt-5 bg-[#1D1768] text-xl text-white  w-80 h-20 border-white border rounded-lg btn-shadow">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
