import React from "react";
import logo from "../../assets/images/logo.png";
import twitterImg from "../../assets/images/twitter.png";
import youtubeImg from "../../assets/images/youtube.png";
import fbImg from "../../assets/images/facebook.png";
const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full flex flex-row items-center justify-evenly  p-10 bg-[#090A22] text-white font-Raleway"
    >
      <div className="w-[370px] gap-y-5 ">
        <p className=" font-black text-2xl md:text-4xl  mb-4">Get In Touch</p>
        <p className="text-xs md:text-base font-semibold mb-2">
          Subscribibe for Updates
        </p>
        <input
          className="p-2 border w-full rounded-xl mb-3 text-xs md:text-base"
          placeholder="email"
        />
        <button className="bg-[#F6CD3A] p-2 rounded-full w-full mb-3 text-[#090A22]  text-xs md:text-base font-bold  hover:bg-main hover:text-secondary hover:border-2 hover:border-secondary">
          Subscribe
        </button>
        <div className="w-full flex items-center justify-between my-5">
          <hr class="w-[64px] h-[2px] md:h-1  bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <img
            className="w-[22px] hover:scale-125 "
            src={twitterImg}
            alt="hgh"
          />
          <img className="w-[22px] hover:scale-125 " src={fbImg} alt="gg" />
          <img
            className="w-[22px] hover:scale-125 "
            src={youtubeImg}
            alt="jk"
          />
          <hr class="w-[65px]  h-[2px] md:h-1  bg-gray-100 border-0 rounded dark:bg-gray-700" />
        </div>
        <div className="w-full flex justify-between text-xxs mt-8 font-bold ">
          <p className="hover:scale-125 ">About Us</p>
          <p className="hover:scale-125 ">Terms of Service</p>
          <p className="hover:scale-125 ">Privacy Policy</p>
        </div>
      </div>
      <div className="hidden w-[50%] md:flex flex-col items-center justify-center">
        <img className="h-[124px] mb-5" src={logo} alt="" />
        <p className="font-black text-6xl">
          <span className="text-[#F6CD3A]">R</span>oute
          <span className="text-[#F6CD3A]">R</span>over
        </p>
        <p className="text-[10px] mt-10 font-bold">
          Copyright @ 2024 RoutRover
        </p>
      </div>
    </div>
  );
};

export default Footer;
