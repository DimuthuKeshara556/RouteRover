import React, { useState } from "react";
import "./stylesCom.css";
import mapImage from "../../../../assets/images/map.png";
import img1 from "../../../../assets/images/profile/profile1.png";
import img2 from "../../../../assets/images/profile/profile2.png";
import img3 from "../../../../assets/images/profile/profile3.png";
import img4 from "../../../../assets/images/profile/profile4.png";
import img5 from "../../../../assets/images/profile/profile5.png";
import img6 from "../../../../assets/images/profile/profile6.png";
import { Link } from "react-router-dom";

const CommunitySection = () => {
  const [animate, setAnimate] = useState(false);

  const handleMouseEnter = () => {
    setAnimate(true);
  };

  const handleMouseLeave = () => {
    setAnimate(false);
  };

  return (
    <div
      className={`CommunityContainer font-Raleway  ${animate ? "animate" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full md:w-[50vw] flex flex-col items-center justify-center md:justify-start left">
        <p className="text-3xl font-extrabold mb-5">What do you want </p>
        <p className="text-base font-bold mb-2">Like & Comment OR</p>
        <p className="text-tiny font-bold mb-2">Share your experience</p>
        <Link to={"/community"}>
          <button className="bg-[#090A22] py-3 px-8 rounded-full text-white text-xs font-bold mt-5  hover:bg-secondary hover:text-main">
            Join our Community!
          </button>
        </Link>
      </div>
      <div className="hidden w-[500px]  md:flex items-center justify-center  right">
        <img
          className="w-[480px] h-[280px] mr-10 relative"
          src={mapImage}
          alt=""
        />
        <img
          className="absolute top-[50px] left-[220px] w-[30px]"
          src={img1}
          alt=""
        />
        <img
          className="absolute top-[20px] right-[60px] w-[30px]"
          src={img2}
          alt=""
        />
        <img
          className="absolute top-[60px] left-[70px] w-[30px]"
          src={img3}
          alt=""
        />
        <img
          className="absolute top-[180px] left-[140px] w-[30px]"
          src={img4}
          alt=""
        />
        <img
          className="absolute bottom-[55px] right-[90px] w-[30px]"
          src={img5}
          alt=""
        />
        <img
          className="absolute top-[90px] right-[140px] w-[30px]"
          src={img6}
          alt=""
        />
      </div>
    </div>
  );
};

export default CommunitySection;
