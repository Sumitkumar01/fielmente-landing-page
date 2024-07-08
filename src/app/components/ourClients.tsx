"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import SectionHeading from "./SectionHeadings/SectionHeading";
import React from "react";

import Client1 from "../../../public/images/Client1.png";
import Client2 from "../../../public/images/Client2.png";
import Client3 from "../../../public/images/Client3.png";
import Client4 from "../../../public/images/Client4.png";
import Client5 from "../../../public/images/Client5.png";
import Client6 from "../../../public/images/Client6.png";
import Client7 from "../../../public/images/Client7.png";
import Image from "next/image";
import Link from "next/link";

const SectionHeadingDetails = {
  title: "Our ",
  span: "Clients",
};

const ClientImages = [
  {
    src: Client1,
    alt: "Client1",
  },
  {
    src: Client2,
    alt: "Client2",
  },
  {
    src: Client3,
    alt: "Client3",
  },
  {
    src: Client4,
    alt: "Client4",
  },
  {
    src: Client5,
    alt: "Client5",
  },
  {
    src: Client6,
    alt: "Client6",
  },
  {
    src: Client7,
    alt: "Client7",
  },
];

function OurClients() {
  return (
    <div>
      <SectionHeading {...SectionHeadingDetails} />
      {/* desktop view */}
      <div className='lg:block hidden'>
        <div className="mt-16 grid lg:grid-cols-7 gap-y-8 md:grid-cols-4">
          {ClientImages.map((item, index) => (
            <Link
              href={"/"}
              className="relative w-full aspect-[4/3.7]"
              key={index}
            >
              <Image
                src={item.src}
                alt={`${item.alt}`}
                width={100}
                height={100}
                className="object-contain w-full h-full rounded-md"
              />
            </Link>
          ))}
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

            {ClientImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={"/"}
                  className="relative w-full aspect-[4/3.7]"
                >
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full rounded-md"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
