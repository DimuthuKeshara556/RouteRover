import React, { useState } from "react";
import PlaceImg1 from "../../../../assets/images/Places/1.png";
import PlaceImg2 from "../../../../assets/images/Places/2.png";
import PlaceImg3 from "../../../../assets/images/Places/3.png";
import LikeImg from "../../../../assets/images/LikeFill.svg";
import LikeNoneImg from "../../../../assets/images/LikeNone.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slide.css";
import { FreeMode, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const HikerSlide = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("forYou");

  const [likedItems, setLikedItems] = useState({});

  const handleLikeClick = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  const forYouItems = [
    { id: 1, title: "Dimuthu", role: "Hiker", likes: "4.7k", img: PlaceImg1 },
    { id: 2, title: "Keshara", role: "Hiker", likes: "3.5k", img: PlaceImg2 },
    { id: 3, title: "Amasha", role: "Hiker", likes: "8.1k", img: PlaceImg3 },
    { id: 4, title: "Gihan", role: "Hiker", likes: "2.3k", img: PlaceImg2 },
    { id: 5, title: "Amila", role: "Hiker", likes: "4.7k", img: PlaceImg1 },
    { id: 6, title: "Dhanushka", role: "Hiker", likes: "3.5k", img: PlaceImg2 },
    { id: 7, title: "Anjalee", role: "Hiker", likes: "8.1k", img: PlaceImg3 },
    { id: 8, title: "Bandara", role: "Hiker", likes: "2.3k", img: PlaceImg2 },
  ];

  const otherItems = [
    { id: 9, title: "Amasha", role: "Hiker", likes: "3.2k", img: PlaceImg3 },
    {
      id: 10,
      title: "Keshara",
      role: "Photographer",
      likes: "5.4k",
      img: PlaceImg2,
    },
    { id: 11, title: "Gihan", role: "Hiker", likes: "2.9k", img: PlaceImg1 },
    { id: 12, title: "Anjalee", role: "Guider", likes: "1.8k", img: PlaceImg3 },
    {
      id: 13,
      title: "Amila",
      role: "Photographer",
      likes: "3.2k",
      img: PlaceImg1,
    },
    { id: 14, title: "Kasun", role: "Hiker", likes: "5.4k", img: PlaceImg2 },
    { id: 15, title: "Bandara", role: "Guider", likes: "2.9k", img: PlaceImg1 },
    {
      id: 16,
      title: "Perera",
      role: "Photographer",
      likes: "1.8k",
      img: PlaceImg2,
    },
  ];

  const itemsToShow = selected === "forYou" ? forYouItems : otherItems;

  return (
    <div className="w-full px-1 md:px-10 py-10 ">
      <p className="text-[24px] font-black font-Raleway pl-10 md:pl-28">
        Top hikers
      </p>
      <div className="flex text-[15px]  font-black font-Raleway pl-10 md:pl-28 mt-5 ">
        <button
          className={`px-4 py-2 hover:scale-105 ${
            selected === "forYou"
              ? "font-bold"
              : "font-semibold , text-gray-500"
          }`}
          onClick={() => setSelected("forYou")}
        >
          For you
        </button>
        <button
          className={`px-4 py-2 hover:scale-105 ${
            selected === "other" ? "font-bold" : "font-semibold , text-gray-500"
          }`}
          onClick={() => setSelected("other")}
        >
          Other
        </button>
      </div>

      <Swiper
        // slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {itemsToShow.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full  p-2 font-Raleway relative hover:scale-105  transition-transform ">
              <img
                className="rounded-3xl w-full md:h-[280px] "
                src={item.img}
                alt="0"
                onClick={() => navigate(`/details/${item.id}`)}
              />
              <div
                className="p-2 bg-gray-300 w-fit rounded-full items-center justify-center absolute top-6 right-5"
                onClick={() => handleLikeClick(item.id)}
              >
                <img
                   className="w-5 h-5 hover:scale-125  transition-transform"
                  src={likedItems[item.id] ? LikeImg : LikeNoneImg}
                  alt={likedItems[item.id] ? "Liked" : "Not Liked"}
                />
              </div>
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[13px] font-bold">{item.title}</p>
                  <p className="text-start text-[10px] font-bold text-gray-500">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-col-reverse  items-center justify-center ">
                  <p className="text-[10px] md:text-[13px] font-bold font-sans">
                    {item.likes}
                  </p>
                  <img className="w-[20px] h-[20px]" src={LikeImg} alt="0" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HikerSlide;
