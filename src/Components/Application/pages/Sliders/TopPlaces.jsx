import React, {useState } from "react";
import PlaceImg1 from "../../../../assets/images/Places/place1.png";
import PlaceImg2 from "../../../../assets/images/Places/place2.png";
import PlaceImg3 from "../../../../assets/images/Places/place3.png";
import PlaceImg4 from "../../../../assets/images/Places/place4.png";
import PlaceImg5 from "../../../../assets/images/Places/place5.png";
import LikeImg from "../../../../assets/images/LikeFill.svg";
import LikeNoneImg from "../../../../assets/images/LikeNone.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slide.css";
import { FreeMode, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const TopPlaces = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('forYou');

  const [likedItems, setLikedItems] = useState({});

  const handleLikeClick = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id]
    }));
  };

  const forYouItems = [
    {id: 17, title: 'Wangedigala', location: 'Kalupahana', likes: '4.7k', img: PlaceImg1 },
    {id: 18, title: 'Ella Rock', location: 'Ella', likes: '3.5k', img: PlaceImg2 },
    {id: 19, title: 'Adam\'s Peak', location: 'Nallathanniya', likes: '8.1k', img: PlaceImg3 },
    {id: 20, title: 'Hanthana', location: 'Kandy', likes: '2.3k', img: PlaceImg4 },
    {id: 21, title: 'Wangedigala', location: 'Kalupahana', likes: '4.7k', img: PlaceImg5 },
    {id: 22, title: 'Ella Rock', location: 'Ella', likes: '3.5k', img: PlaceImg2 },
    {id: 23, title: 'Adam\'s Peak', location: 'Nallathanniya', likes: '8.1k', img: PlaceImg3 },
    {id: 24, title: 'Hanthana', location: 'Kandy', likes: '2.3k', img: PlaceImg2 },
  ];

  const otherItems = [
    {id: 25, title: 'Knuckles', location: 'Matale', likes: '3.2k', img: PlaceImg5 },
    {id: 26, title: 'Pidurangala', location: 'Sigiriya', likes: '5.4k', img: PlaceImg4 },
    {id: 27, title: 'Haputale', location: 'Haputale', likes: '2.9k', img: PlaceImg1 },
    {id: 28, title: 'Kirigalpoththa', location: 'Horton Plains', likes: '1.8k', img: PlaceImg2 },
    {id: 29, title: 'Knuckles', location: 'Matale', likes: '3.2k', img: PlaceImg3 },
    {id: 30, title: 'Pidurangala', location: 'Sigiriya', likes: '5.4k', img: PlaceImg4 },
    {id: 31, title: 'Haputale', location: 'Haputale', likes: '2.9k', img: PlaceImg1 },
    {id: 32, title: 'Kirigalpoththa', location: 'Horton Plains', likes: '1.8k', img: PlaceImg5 }
  ];

  const itemsToShow = selected === 'forYou' ? forYouItems : otherItems;

  return (
    <div className="w-full md:px-10 py-10">
      <p className="text-[24px] font-black font-Raleway pl-10 md:pl-28">Top places</p>
      <div className="flex text-[15px]  font-black font-Raleway pl-10 md:pl-28 mt-5 ">
        <button
          className={`px-4 py-2 hover:scale-105 ${selected === 'forYou' ? 'font-bold' : 'font-semibold , text-gray-500'}`}
          onClick={() => setSelected('forYou')}
        >
          For you
        </button>
        <button
          className={`px-4 py-2 hover:scale-105 ${selected === 'other' ? 'font-bold' : 'font-semibold , text-gray-500'}`}
          onClick={() => setSelected('other')}
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
            spaceBetween:30,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween:20,
          },
        }}
      >
        {itemsToShow.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full  p-2 font-Raleway relative hover:scale-105  transition-transform ">
              <img onClick={() => navigate(`/details/${item.id}`)} className="rounded-3xl w-full" src={item.img} alt="0" />
               <div
                className="p-2 bg-gray-300 w-fit rounded-full items-center justify-center absolute top-6 right-5"
                onClick={() => handleLikeClick(item.id)}
              >
                <img
              className="w-[20px] h-[20px] hover:scale-125  transition-transform"
              src={likedItems[item.id] ? LikeImg : LikeNoneImg}
              alt={likedItems[item.id] ? "Liked" : "Not Liked"}
            />
              </div>
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex flex-col gap-1">
                <p className="text-[13px] font-bold">{item.title}</p>
                <p className="text-start text-[10px] font-bold text-gray-500">
                {item.location}
              </p>
                </div>
                
                <div className="flex flex-col-reverse  items-center justify-center gap-1">
                  <p className="text-[10px] md:text-[13px] font-bold font-sans">{item.likes}</p>
                  <img className="w-[15px] h-[15px]" src={LikeImg} alt="0" />
                </div>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TopPlaces;
