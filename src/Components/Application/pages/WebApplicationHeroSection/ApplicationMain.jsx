import React, { useEffect, useState } from "react";
import back from "../../../../assets/images/ApplicationBack.png";
import cloudImage from "../../../../assets/images/cloud.png";
import "../../../WebSite/HeroSection/styles.css";
import { Link } from "react-router-dom";

const ApplicationMain = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`container flex flex-col md:flex-row ${animate ? "animate" : ""}`}>
      <div className="mt-10 md:mt-0  w-screen  relative flex flex-row md:flex-col md:justify-around md:items-center left px-5 md:px-10">
        <div className="text-start leading-none md:px-10 ">
          <p className="text-4xl md:text-7xl font-black ">Explore,</p>
          <p className="text-4xl md:text-7xl font-black text-secondary ">Track,</p>
          <p className="text-4xl md:text-7xl font-black">Adventure !</p>
          <p className="text-md  mt-6 font-semibold w-[250px] hidden md:block">Experience the thrill of the outdoors firsthand! Start exploring our trail tracking features now and discover your next adventure.</p>
          <Link to={"/app"}>
          <button className="bg-main py-3 px-10 rounded-full text-white mt-10 hover:bg-secondary hover:text-main hover:font-bold hidden md:block">
          Let's Go!
         </button>
          </Link>
        </div>
        <img
          className="w-[200px] absolute -bottom-0  left-[0px] leftCloudSpeed -z-10 hidden md:flex"
          src={cloudImage}
          alt="cloud"
        />
        <img
          className="w-[280px] absolute leftCloudSlow -top-5  right-10 hidden md:flex"
          src={cloudImage}
          alt="cloud"
        />
      </div>
      <div className="w-full relative mt-2 right">
        <img className="md:w-[720px]  md:h-[500px] md:mt-10" src={back} alt="back" />
        <img
          className="w-[200px] md:w-[275px] absolute -top-12 right-0 md:top-14 md:-right-5  rightCloudSpeed  "
          src={cloudImage}
          alt="cloud"
        />
        <img
          className="w-[200px] -bottom-10 -left-20 md:w-[380px] absolute md:-bottom-10 md:left-[-200px] rightCloudSlow "
          src={cloudImage}
          alt="cloud"
        />
      </div>
      <div className="text-start leading-1 px-5 flex flex-col md:hidden items-center justify-center w-full">
          <p className="text-md  mt-6 font-semibold w-full text-center p-5">Experience the thrill of the outdoors firsthand! Start exploring our trail tracking features now and discover your next adventure.</p>
          <Link to={"/app"}>
          <button className="bg-main py-3 px-10 rounded-full text-white mt-10 hover:bg-secondary hover:text-main hover:font-bold">
          Let's Go!
         </button>
          </Link>
        </div>
    </div>
  )
}

export default ApplicationMain