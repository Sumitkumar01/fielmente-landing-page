import React from "react";
import Card from "./components/Card";
import { OnlinePresence } from "@/icons/icons";

import HotelWebsite from "../../../public/images/landingPage/HotelWebsite.png";
import seo from "../../../public/images/landingPage/seo.png";
import hotelinfluencer from "../../../public/images/landingPage/hotelinfluencer.png";
import chooseus from "../../../public/images/landingPage/chooseus.png";
import googlead from "../../../public/images/landingPage/googlead.png";
import socilmedia from "../../../public/images/landingPage/socilmedia.png";
import Image from "next/image";
import Banner from "./components/Banner";

const page = () => {
  const Datas = [
    {
      heading: "Are you looking for Hotel Website Development?",
      para: "As a Hotel Marketing Agency every day, we build trust through communication, transparency, and results.",
      image: {
        src: HotelWebsite,
        alt: "Hotel Website Development",
      },
      items: [
        { icon: <OnlinePresence />, title: "Online Presence" },
        { icon: <OnlinePresence />, title: "Showcase your hotel" },
        { icon: <OnlinePresence />, title: "Build Trust" },
        { icon: <OnlinePresence />, title: "Search Engine Visibility" },
        { icon: <OnlinePresence />, title: "Direct Bookings" },
        { icon: <OnlinePresence />, title: "Enhanced Customer Service" },
      ],
    },
    {
      heading: "Why Choose Us?",
      para: "Force of 18+ Hospitality Marketing Experts.",
      image: {
        src: chooseus,
        alt: "Why Choose Us?",
      },
      items: [
        { icon: <OnlinePresence />, title: "Expertise in Hospitality" },
        {
          icon: <OnlinePresence />,
          title: "Effective Paid Advertising Campaings",
        },
        {
          icon: <OnlinePresence />,
          title: "Strategic Social Media Management",
        },
        { icon: <OnlinePresence />, title: "Customized Marketing Solution" },
        { icon: <OnlinePresence />, title: "Optimized for Search Engines" },
        { icon: <OnlinePresence />, title: "Exceptional Website Development" },
      ],
    },
    {
      heading: "Looking for Search Engine Optimization?",
      para: "Improve your hotel’s online visibility and attract more guests with effective hotel SEO (Search Engine Optimization) services.",
      image: {
        src: seo,
        alt: "Search Engine Optimization",
      },
      items: [
        { icon: <OnlinePresence />, title: "Technical SEO" },
        { icon: <OnlinePresence />, title: "Off Page SEO" },
        { icon: <OnlinePresence />, title: "On Page SEO" },
        { icon: <OnlinePresence />, title: "Keywords Research" },
        { icon: <OnlinePresence />, title: "Google My Business" },
        { icon: <OnlinePresence />, title: "Local SEO" },
      ],
    },
    {
      heading: "Looking for Social Media Management?",
      para: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      image: {
        src: socilmedia,
        alt: "social media management",
      },
      items: [
        { icon: <OnlinePresence />, title: "Engage Guests" },
        {
          icon: <OnlinePresence />,
          title: "Reputation Management",
        },
        {
          icon: <OnlinePresence />,
          title: "Direct Bookings",
        },
        { icon: <OnlinePresence />, title: "Showcase Your Hotel" },
        { icon: <OnlinePresence />, title: "Visual Appeal" },
        { icon: <OnlinePresence />, title: "Reach a Wider Audience" },
      ],
    },
    {
      heading: "Are you looking for Hotel Influencer Marketing?",
      para: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      image: {
        src: hotelinfluencer,
        alt: "Hotel Influencer Marketing",
      },
      items: [
        { icon: <OnlinePresence />, title: "Increased Brand Awareness" },
        {
          icon: <OnlinePresence />,
          title: "Trusted Recommendations",
        },
        {
          icon: <OnlinePresence />,
          title: "Reach a Targeted Audience",
        },
        { icon: <OnlinePresence />, title: "Unique Experiences" },
        { icon: <OnlinePresence />, title: "Storytelling and Engagement" },
        {
          icon: <OnlinePresence />,
          title: "Differentiation and Competitive Edge",
        },
      ],
    },
    {
      heading: "Need help with Google Ads to increase your Hotel Revenue?",
      para: "Elevate guest engagement and draw potential with our Social Media Strategies?",
      image: {
        src: googlead,
        alt: "Google Ads",
      },
      items: [
        { icon: <OnlinePresence />, title: "Increased Visibility" },
        {
          icon: <OnlinePresence />,
          title: "Targeted Advertising",
        },
        {
          icon: <OnlinePresence />,
          title: "Cost-Effective Results",
        },
        { icon: <OnlinePresence />, title: "Drive Direct Bookings" },
        { icon: <OnlinePresence />, title: "Compete Effectively" },
        { icon: <OnlinePresence />, title: "Real-Time Optimization" },
      ],
    },
  ];

  return (
    <>
      <Banner />
      <div className="max-width">
        <div className="my-10">
          {Datas.map((data: any, index: any) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-20"
            >
              <div className={`${index % 2 !== 0 ? "order-1" : "order-2"}`}>
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className={`${index % 2 !== 0 ? "order-2" : "order-1"}`}>
                <Card data={data} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default page;
