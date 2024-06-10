import React, { useEffect, useState } from "react";
import back from "../../../assets/images/mainBackImage.png";
import cloudImage from "../../../assets/images/cloud.png";
import "./styles.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`container ${animate ? "animate" : ""}`}>
      <div className="mt-10 md:mt-0 w-full h-full relative flex md:flex-col pl-6 md:pl-0 md:justify-center items-center left">
        <div className="text-start leading-none ">
          <p className="text-5xl md:text-8xl font-black ">Explore</p>
          <p className="text-5xl md:text-8xl font-black text-secondary ">
            Beautiful
          </p>
          <p className="text-5xl md:text-8xl font-black">World !</p>
          <p className="hidden md:flex md:text-3xl mt-6 font-semibold">
            Start your Journey
            <br /> today
          </p>
          <Link to="/Application">
            <button className="hidden md:flex bg-main py-3 px-10 rounded-full text-white mt-5 hover:bg-secondary hover:text-main hover:font-bold">
              Let's Get Started!
            </button>
          </Link>
        </div>
        <img
          className="hidden md:flex w-[100px] md:w-[280px] absolute bottom-10  left-[0px] md:bottom-10  md:left-[-60px] leftCloudSpeed -z-10"
          src={cloudImage}
          alt="cloud"
        />
        <img
          className="hidden md:flex w-[150px] md:w-[200px] absolute leftCloudSlow top-10 right-0 md:top-24  md:right-3"
          src={cloudImage}
          alt="cloud"
        />
      </div>
      <div className="md:w-full h-full relative md:mt-2 right">
        <img
          className="w-[320px] md:w-[490px] md:h-[685px] md:mt-10"
          src={back}
          alt="back"
        />
        <img
          className="w-[150px] md:w-[275px] absolute top-0 -right-10 md:top-20 md:right-0  rightCloudSpeed  "
          src={cloudImage}
          alt="cloud"
        />
        <img
          className="w-[200px] md:w-[380px] absolute bottom-10 left-[-100px] md:bottom-4 md:left-[-180px] rightCloudSlow "
          src={cloudImage}
          alt="cloud"
        />
      </div>
      <div className="md:hidden w-full h-full flex flex-col justify-center items-center">
        <p className=" md:hidden flex md:text-3xl text-center font-semibold">
          Start your Journey
          <br /> today
        </p>
        <Link to="/Application">
          <button className="mb-10 md:hidden flex bg-main py-3 px-10 rounded-full text-white mt-5 hover:bg-secondary hover:text-main hover:font-bold">
            Let's Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
