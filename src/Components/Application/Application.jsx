import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import addImg from "../../assets/images/Application/AddImg.png";
import { Link } from "react-router-dom";
import HikerDetails from "../Application/pages/HikerDetails";
import Chat from "./pages/Chat";
import PopUp from "./PopUp";

const Application = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hikersValue, setHikersValue] = useState(() => {
    const savedItems = localStorage.getItem("selectedHikers");
    return savedItems ? JSON.parse(savedItems).length + 1 : 1;
  });

  useEffect(() => {
    const savedItems = localStorage.getItem("selectedHikers");
    setHikersValue(savedItems ? JSON.parse(savedItems).length + 1 : 1);
  }, []);

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full px-5 md:px-10  pt-14 font-Raleway flex flex-col">
        <div className="flex flex-col-reverse md:flex-col ">
          <div className="flex items-center justify-between py-4">
            <p className=" hidden md:flex text-[12px] font-bold text-[#40743C] bg-[#97EA89] px-4 py-2 rounded-full">
              Connected
            </p>
            <button
              className=" flex items-center gap-x-2 px-3 py-2 text-[12px] font-bold bg-main rounded-full hover:scale-105"
              onClick={() => setIsOpen(true)}
            >
              <img className="w-[20px]" src={addImg} alt="" />
              <p className="text-white">Add Hikers</p>
            </button>
            {isOpen && (
              <PopUp
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setHikersValue={setHikersValue}
              />
            )}
            <div className="flex md:hidden">
              <Link to={`/test/${hikersValue}`}>
                <button className="  w-fit text-[12px] font-bold text-white bg-[#228213] px-4 py-2 rounded-full">
                  Start Tracking
                </button>
              </Link>
            </div>
          </div>
          <Map hikersValue={hikersValue} />
        </div>
        <div className="w-full flex items-center justify-end">
          <Link to={`/test/${hikersValue}`}>
            <button className="hidden w-fit text-[12px] font-bold text-white bg-[#228213] px-4 py-2 rounded-full mt-3 md:flex hover:scale-105">
              Start Tracking
            </button>
          </Link>
        </div>
      </div>
      <div
        className={
          hikersValue === 0 || hikersValue === 1
            ? "hidden"
            : "flex px-10 w-full gap-5"
        }
      >
        <HikerDetails hikersValue={hikersValue} />
        <Chat />
      </div>
    </div>
  );
};

export default Application;

