import starImg from "../../../../assets/images/Star.svg";
import profileImg from "../../../../assets/images/profile.png";
import commaImg from "../../../../assets/images/comma.svg";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./commentStyles.css";
import { Navigation } from "swiper/modules";

export default function CommentSection() {
  const [setSwiperRef] = useState(null);

  return (
    <div className="px-1 md:px-10 mt-5">
      <p className="text-3xl font-black font-Raleway text-center md:text-start md:pl-28 ">
        Satisfied Hikers
        <br />
        Comment
      </p>
      <Swiper
        onSwiper={setSwiperRef}
        centeredSlides={false}
        spaceBetween={200}
        pagination={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CommentBlock
            text='"Discover new adventures with RouteRover, your ultimate hiking path tracking companion”'
            user="Dimuthu Keshara"
            role="Hiker"
            rating={5}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const CommentBlock = ({ text, user, role, rating }) => {
  return (
    <div className="flex flex-col w-[100%] mt-5 font-Raleway">
      <img className="w-5 mb-5" src={commaImg} alt="Comma" />
      <p className="text-xs font-bold mt-3 text-center md:text-start">{text}</p>
      <hr className="w-full h-[3px] bg-gray-300 border-0 rounded-full mt-3" />
      <div className="flex items-center justify-start mt-3">
        <img className="" src={profileImg} alt="Profile" />
        <div className="ml-3 w-full">
          <p className="text-xs font-bold">{user}</p>
          <p className="text-xxs font-bold text-gray-500">{role}</p>
          <div className="flex w-full items-center justify-start">
            {/* Generate star icons based on the rating */}
            {Array.from({ length: rating }, (_, index) => (
              <img
                key={index}
                src={starImg}
                alt={`Star ${index + 1}`}
                className="w-4 mr-2 mt-1"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
