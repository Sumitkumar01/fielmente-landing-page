"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import Link from "next/link";
import React from "react";
import SectionHeading from "./SectionHeading";

export interface HotelPerformacePropsData {
  title: string;
  subtitle: string;
  index?: number;
}

const SectionHeadingDetails = {
  title: "Let us handle your Hotel Performance Marketing and see your",
  span: " property grow 5X",
  Color: true,
};

const HotelPerormaceData = [
  {
    title: "Drive Direct Bookings",
    subtitle:
      "Direct potential guests to your website or booking page, increasing direct bookings and reducing reliance on third-party platforms.",
  },
  {
    title: "Compete Effectively",
    subtitle:
      "Stand out from competitors in search results, capturing the attention of potential guests and gaining a competitive edge.",
  },
  {
    title: "Real-Time Optimization",
    subtitle:
      "Continuously monitor and optimize your campaigns to improve performance, maximize ROI, and drive more bookings.",
  },
  {
    title: "Increased Visibility",
    subtitle:
      "Advertise your hotel prominently on Google search results, reaching a larger audience actively searching for accommodations.",
  },
  {
    title: "Targeted Advertising",
    subtitle:
      "Precisely target potential guests based on location, interests, and search, ensuring your ads reach the right people at the right time.",
  },
  {
    title: "Cost-Effective Results",
    subtitle:
      "Pay only for clicks or conversions, making Google Ads a cost-effective advertising method with measurable results.",
  },
];

function HotelPerformacne() {
  return (
    <div>
      <SectionHeading {...SectionHeadingDetails} />

      <div className="lg:block hidden">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-16">
          {HotelPerormaceData.map((item, index) => (
            <HotelPerfomaceCard {...item} index={index} key={index} />
          ))}
        </div>
      </div>
      <div className='lg:hidden block py-5'>
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
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

            {HotelPerormaceData.map((item, index) => (
              <SwiperSlide key={index}>
                <HotelPerfomaceCard {...item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link
          href={"#contact"}
          className="bg-orange-primary font-bold px-8 py-3 rounded-md text-lg border border-orange-primary hover:bg-transparent hover:text-blue-dark duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export const HotelPerfomaceCard = ({
  title,
  subtitle,
  index,
}: HotelPerformacePropsData) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center gap-4 mt-2">
        <span className="text-orange-primary text-xl">
          {index! < 9 ? `0${index! + 1}` : index}
        </span>
        <div className="w-8 h-1 bg-orange-primary"></div>
      </div>

      <div>
        <h2 className="text-blue-dark text-3xl">{title}</h2>
        <p className="text-gray-primary text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default HotelPerformacne;
