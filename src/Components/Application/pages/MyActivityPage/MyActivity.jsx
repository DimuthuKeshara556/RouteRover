import profile from "../../../../assets/images/profile/profileImg.png";
import dataSets from "../../Data/HikingData";
import hikingIcon from "../../../../assets/images/Application/hiking.svg";
import exploreIcon from "../../../../assets/images/Application/explore.svg";
import watchLaterIcon from "../../../../assets/images/Application/watch_later.svg";
import favouriteIcon from "../../../../assets/images/Application/favorite.svg";
import calenderIcon from "../../../../assets/images/Application/today.svg";
import timeIcon from "../../../../assets/images/Application/time.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "../../../Map/MapComponent";

const MyActivity = () => {
  const [selected, setSelected] = useState("saved");

  const itemsToShow =
    selected === "saved" ? dataSets : dataSets.filter((data) => data.favourite);
  return (
    <div className="flex flex-col md:flex-row w-full justify-center md:justify-end p-10 relative">
      <div className="bg-main w-full md:h-[80vh] md:w-[28vw] md:mr-10 h-full rounded-3xl mt-10 flex flex-col items-center justify-center p-10 md:fixed md:top-10 md:left-10">
        <div className="flex flex-col items-center justify-center">
          <img className="w-full p-5 rounded-full mb-6" src={profile} alt="" />
          <p className="text-white font bold text-[20px]">Dimuthu Keshara</p>
          <p className="text-[#73748A] text-[16px]">Professional Hiker</p>
          <p className="text-[#73748A] text-[16px]">@dk</p>
        </div>
        <div className="w-full flex flex-col md:text-tiny items-center mt-5 gap-5">
          <div className="flex w-full items-center justify-between">
            <img className="w-[30px] md:w-[20px]" src={hikingIcon} alt="" />
            <p className="w-full pr-20 pl-5 font-semibold text-white ">Total Trails</p>
            <p className="text-secondary">8</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <img className="w-[30px] md:w-[20px]" src={exploreIcon} alt="" />
            <p className="w-full pl-5 font-semibold text-white ">Total Distance</p>
            <p className="text-secondary">50Km</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <img className="w-[30px] md:w-[20px]" src={watchLaterIcon} alt="" />
            <p className="w-full pl-5  font-semibold text-white ">Total Hours</p>
            <p className="text-secondary">10K+</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <img className="w-[30px] md:w-[20px]" src={favouriteIcon} alt="" />
            <p className="w-full pl-5  font-semibold text-white ">Total Likes</p>
            <p className="text-secondary">10K+</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-[15px] font-black font-Raleway md:pl-10 mt-5 md:mt-10 items-center justify-around w-full">
          <button
            className={`px-4 py-2 ${
              selected === "saved"
                ? "font-bold"
                : "font-semibold , text-gray-500"
            }`}
            onClick={() => setSelected("saved")}
          >
            Saved
          </button>
          <button
            className={`px-4 py-2 ${
              selected === "favourite"
                ? "font-bold"
                : "font-semibold , text-gray-500"
            }`}
            onClick={() => setSelected("favourite")}
          >
            Favourite
          </button>
        </div>
        <div>
          <p className="py-5 text-main font-medium ">Today</p>
          <div className="w-full md:w-[60vw] md:flex md:flex-row gap-10">
            {itemsToShow.map((data) => (
              <div key={data.id}>
                <div className="border-2 w-full  rounded-3xl border-main  mb-10 font-medium">
                  <MapComponent hikersValue={1} />
                  <div className="flex items-center md:text-sm justify-between p-5">
                    <div className="flex gap-3">
                      <img className="w-[25px] md:w-[18px]" src={calenderIcon} alt="" />
                      <p className="font-sans">2024 April 26</p>
                    </div>
                    <div className="flex gap-3">
                      <img className="w-[25px] md:w-[18px]" src={timeIcon} alt="" />
                      <p className="font-sans">3Hr</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 gap-5">
                    <p>Peradeniya</p>
                    <hr className="w-full h-[3px] border-0 border-t-2 border-dashed border-[#BCB0B0] rounded" />
                    <p>Katusukonda</p>
                  </div>
                  <div className="p-5 flex gap-4 text-sm">
                    <p>Description:</p>
                    <p>
                       Hanthana Mountain Range lies in the central highlands of
                      Sri Lanka, south-west of Kandy.
                    </p>
                  </div>
                  <div className="px-5 flex pb-5 items-center justify-between">
                    <div className="flex text-sm">
                      <p>Distance :</p>
                      <p className="font-sans"> 3 Km</p>
                    </div>
                    <Link to={"/pre/1"}>
                      <button className="px-4 py-1 rounded-xl bg-main text-white text-xs hover:bg-secondary hover:text-main font-bold ">
                        Use this Path
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivity;
