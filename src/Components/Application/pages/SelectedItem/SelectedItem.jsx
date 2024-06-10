import { useParams } from "react-router-dom";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styled from "styled-components";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import PlaceImg1 from "../../../../assets/images/Places/1.png";
import PlaceImg2 from "../../../../assets/images/Places/2.png";
import PlaceImg3 from "../../../../assets/images/Places/3.png";
import HikerImg1 from "../../../../assets/images/Places/place1.png";
import HikerImg2 from "../../../../assets/images/Places/place2.png";
import HikerImg3 from "../../../../assets/images/Places/place3.png";
import HikerImg4 from "../../../../assets/images/Places/place4.png";
import HikerImg5 from "../../../../assets/images/Places/place5.png";

import profileImg from "../../../../assets/images/profile/profileImg.png";
import shareIcon from "../../../../assets/images/shareIcon.png";
import starImg from "../../../../assets/images/Star.svg";
import saveIcon from "../../../../assets/images/saved.svg";
import notSaveIcon from "../../../../assets/images/notSaved.svg";
import ArrowIcon from "../../../../assets/images/Application/arrow.svg";

import likeIcon from "../../../../assets/images/LikeImg.png";
import { Link } from "react-router-dom";

const forYouItems = [
  {
    id: 1,
    title: "Dimuthu",
    role: "Hiker",
    likes: "4.7k",
    img: PlaceImg1,
    img2: PlaceImg1,
    img3: PlaceImg1,
    img4: PlaceImg1,
  },
  {
    id: 2,
    title: "Keshara",
    role: "Hiker",
    likes: "3.5k",
    img: PlaceImg2,
    img2: PlaceImg2,
    img3: PlaceImg2,
    img4: PlaceImg2,
  },
  {
    id: 3,
    title: "Amasha",
    role: "Hiker",
    likes: "8.1k",
    img: PlaceImg3,
    img2: PlaceImg3,
    img3: PlaceImg3,
    img4: PlaceImg3,
  },
  {
    id: 4,
    title: "Gihan",
    role: "Hiker",
    likes: "2.3k",
    img: PlaceImg2,
    img2: PlaceImg2,
    img3: PlaceImg2,
    img4: PlaceImg2,
  },
  {
    id: 5,
    title: "Amila",
    role: "Hiker",
    likes: "4.7k",
    img: PlaceImg1,
    img2: PlaceImg1,
    img3: PlaceImg1,
    img4: PlaceImg1,
  },
  {
    id: 6,
    title: "Dhanushka",
    role: "Hiker",
    likes: "3.5k",
    img: PlaceImg2,
    img2: PlaceImg2,
    img3: PlaceImg2,
    img4: PlaceImg2,
  },
  {
    id: 7,
    title: "Anjalee",
    role: "Hiker",
    likes: "8.1k",
    img: PlaceImg3,
    img2: PlaceImg3,
    img3: PlaceImg3,
    img4: PlaceImg3,
  },
  {
    id: 8,
    title: "Bandara",
    role: "Hiker",
    likes: "2.3k",
    img: PlaceImg2,
    img2: PlaceImg2,
    img3: PlaceImg2,
    img4: PlaceImg2,
  },
  {
    id: 17,
    title: "Wangedigala",
    location: "Kalupahana",
    likes: "4.7k",
    img: HikerImg1,
    img2: HikerImg1,
    img3: HikerImg1,
    img4: HikerImg1,
  },
  {
    id: 18,
    title: "Ella Rock",
    location: "Ella",
    likes: "3.5k",
    img: HikerImg2,
    img2: HikerImg2,
    img3: HikerImg2,
    img4: HikerImg2,
  },
  {
    id: 19,
    title: "Adam's Peak",
    location: "Nallathanniya",
    likes: "8.1k",
    img: HikerImg3,
    img2: HikerImg3,
    img3: HikerImg3,
    img4: HikerImg3,
  },
  {
    id: 20,
    title: "Hanthana",
    location: "Kandy",
    likes: "2.3k",
    img: HikerImg4,
    img2: HikerImg4,
    img3: HikerImg4,
    img4: HikerImg4,
  },
  {
    id: 21,
    title: "Wangedigala",
    location: "Kalupahana",
    likes: "4.7k",
    img: HikerImg5,
    img2: HikerImg5,
    img3: HikerImg5,
    img4: HikerImg5,
  },
  {
    id: 22,
    title: "Ella Rock",
    location: "Ella",
    likes: "3.5k",
    img: HikerImg2,
  },
  {
    id: 23,
    title: "Adam's Peak",
    location: "Nallathanniya",
    likes: "8.1k",
    img: HikerImg3,
  },
  {
    id: 24,
    title: "Hanthana",
    location: "Kandy",
    likes: "2.3k",
    img: HikerImg2,
  },
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
  {
    id: 25,
    title: "Knuckles",
    location: "Matale",
    likes: "3.2k",
    img: HikerImg5,
  },
  {
    id: 26,
    title: "Pidurangala",
    location: "Sigiriya",
    likes: "5.4k",
    img: HikerImg4,
  },
  {
    id: 27,
    title: "Haputale",
    location: "Haputale",
    likes: "2.9k",
    img: HikerImg1,
  },
  {
    id: 28,
    title: "Kirigalpoththa",
    location: "Horton Plains",
    likes: "1.8k",
    img: HikerImg2,
  },
  {
    id: 29,
    title: "Knuckles",
    location: "Matale",
    likes: "3.2k",
    img: HikerImg3,
  },
  {
    id: 30,
    title: "Pidurangala",
    location: "Sigiriya",
    likes: "5.4k",
    img: HikerImg4,
  },
  {
    id: 31,
    title: "Haputale",
    location: "Haputale",
    likes: "2.9k",
    img: HikerImg1,
  },
  {
    id: 32,
    title: "Kirigalpoththa",
    location: "Horton Plains",
    likes: "1.8k",
    img: HikerImg5,
  },
];

const SwiperContainer = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    /* height: 50%; */
    
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 400px;
    width:100%;
  }

  .mySwiper {
    height: 100px;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  /* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
  .mySwiper2 img{
    display: block;
    border-radius: 20px;
    width:100%;
    height: 100%;
    object-fit: cover;

  }
  .mySwiper img{
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SelectedItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [liked, setLiked] = useState(false);

  const { id } = useParams();
  const allItems = [...forYouItems, ...otherItems];
  const item = allItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="p-4 w-full h-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-[10vw] mt-16  md:h-[200px]">
        <Link to={"/application"}>
          <img
            className="w-[20px] h-[30px] hover:scale-110  transition-transform "
            src={ArrowIcon}
            alt="arrow"
          />
        </Link>
      </div>

      <div className="w-full md:w-[40vw] mt-5 md:mt-10 md:h-[200px]">
        <SwiperContainer>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={false}
            spaceBetween={100}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl w-full"
                src={item.img}
                alt={item.title}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img2} alt={item.title} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img3} alt={item.title} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img2} alt={item.title} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={item.img} alt={item.title} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img2} alt={item.title} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img3} alt={item.title} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img2} alt={item.title} />
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </div>

      <div className="w-full h-full p-10 flex items-center justify-between">
        <div className="flex flex-col w-full justify-center md:mt-10 md:p-10 md:px-10">
          <div className="w-full flex items-center justify-between ">
            <p className=" text-2xl font-semibold">{item.title}</p>
            <button onClick={toggleLike} className="focus:outline-none">
              <img
                className="w-[30px] h-[30px] rounded-full hover:scale-110  transition-transform "
                src={liked ? saveIcon : notSaveIcon}
                alt={liked ? "Liked" : "Unliked"}
              />
            </button>
          </div>
          <p className=" text-base font-semibold text-gray-500">Hiker</p>

          {item.id >= 1 && item.id <= 16 ? (
            <>
              <div className="flex items-center gap-5 mb-5">
                <p className=" text-base font-semibold">4.7</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[15px] h-[15px] rounded-full"
                    src={starImg}
                    alt=""
                  />
                  <img
                    className="w-[15px] h-[15px] rounded-full"
                    src={starImg}
                    alt=""
                  />
                  <img
                    className="w-[15px] h-[15px] rounded-full"
                    src={starImg}
                    alt=""
                  />
                  <img
                    className="w-[15px] h-[15px] rounded-full"
                    src={starImg}
                    alt=""
                  />
                  <img
                    className="w-[15px] h-[15px] rounded-full"
                    src={starImg}
                    alt=""
                  />
                </div>
              </div>
              <p className=" text-base font-semibold md:mb-5">
                loves exploring the great outdoors and enjoys hiking through
                beautiful trails
              </p>
              <div className="flex items-center justify-between  gap-5 mt-10">
                <img
                  className="w-[30px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <input
                  type="text"
                  placeholder="type massage"
                  className="w-full border-2 rounded-2xl text-xxs font-bold p-2"
                />
                <div className="flex flex-col items-center justify-center ">
                  <img className="w-[20px] " src={shareIcon} alt="" />
                  <p className=" text-xxs font-bold text-gray-700">Share</p>
                </div>
              </div>
            </>
          ) : item.id >= 17 && item.id <= 32 ? (
            <>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-5">
                  <p className=" text-base font-semibold">4.7</p>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[15px] h-[15px] rounded-full"
                      src={starImg}
                      alt=""
                    />
                    <img
                      className="w-[15px] h-[15px] rounded-full"
                      src={starImg}
                      alt=""
                    />
                    <img
                      className="w-[15px] h-[15px] rounded-full"
                      src={starImg}
                      alt=""
                    />
                    <img
                      className="w-[15px] h-[15px] rounded-full"
                      src={starImg}
                      alt=""
                    />
                    <img
                      className="w-[15px] h-[15px] rounded-full"
                      src={starImg}
                      alt=""
                    />
                  </div>
                </div>
                <Link to={"/pre/1"}>
                  <button className="px-4 py-1 rounded-xl bg-main text-white text-xs hover:bg-secondary hover:text-main font-bold ">
                    Use this Path
                  </button>
                </Link>
              </div>
              <p className=" text-base font-semibold md:mb-5">
                Wangedigala is a well-known hiking spot, especially among the
                locals.Wangedigala located in Kalupahana, Badulla district.
              </p>
              <p className="text-xs font-bold mb-5 text-gray-700 mt-5">
                User Comment
              </p>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[35px] h-[35px] rounded-full"
                    src={profileImg}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">Dimuthu Keshara </p>
                    <p className="text-xs font-bold font-sans text-gray-500">
                      Nice place, Highly recommend to travel
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <img className="w-[20px]" src={likeIcon} alt="" />
                  <p className="text-xs font-bold font-sans text-gray-500">
                    4K
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[35px] h-[35px] rounded-full"
                    src={profileImg}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-bold">Dimuthu Keshara </p>
                    <p className="text-xs font-bold font-sans text-gray-500">
                      Nice place, Highly recommend to travel
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <img className="w-[20px]" src={likeIcon} alt="" />
                  <p className="text-xs font-bold font-sans text-gray-500">
                    4K
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between  gap-5 mt-10">
                <img
                  className="w-[30px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <input
                  type="text"
                  placeholder="type massage"
                  className="w-full border-2 rounded-2xl text-xxs font-bold p-2"
                />
                <div className="flex flex-col items-center justify-center ">
                  <img className="w-[20px] " src={shareIcon} alt="" />
                  <p className=" text-xxs font-bold text-gray-700">Share</p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
