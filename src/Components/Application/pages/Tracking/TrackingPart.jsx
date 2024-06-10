import MapComponent from "../../../Map/MapComponent";
import { Link, useParams } from "react-router-dom";
import HikerDetails from "../HikerDetails";
import Chat from "../Chat";
import detailImg from "../../../../assets/images/Application/detailImg.png";
import { useState } from "react";

const TrackingPart = () => {
  const { value } = useParams();
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="w-full h-screen relative">
      <div className="w-full px-5 md:px-10  pt-14 font-Raleway flex flex-col">
        <div className="flex flex-col-reverse md:flex-col ">
          <div className="flex items-center justify-between py-4">
            <p className=" hidden md:flex text-[12px] font-bold text-[#40743C] bg-[#97EA89] px-4 py-2 rounded-full">
              Connected
            </p>
          </div>
          <div className="relative">
            <MapComponent hikersValue={parseInt(value)} />
            <Link to={`/stop/${parseInt(value)}`}>
              <button className="absolute inset-x-0 bottom-10 m-auto flex w-fit h-fit  text-[12px] font-bold text-white bg-[#FA3535] px-8 py-2 rounded-full md:hidden">
                End Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-3">
          <p className="text-[14px] font-bold">
            Distance to Start Point : 2 Km
          </p>
          <Link to={`/stop/${parseInt(value)}`}>
            <button className="hidden w-fit text-[12px] font-bold text-white bg-[#FA3535] px-4 py-2 rounded-full md:flex">
              End Now
            </button>
          </Link>

          <div className="md:hidden">
            {parseInt(value) === 0 || parseInt(value) === 1 ? (
              <p className="flex bg-[#97EA89] w-[20px] h-[20px] rounded-full"></p>
            ) : (
              <img className="flex" src={detailImg} alt="" onClick={handleButtonClick} />
            )}
          </div>
        </div>
        <div
          className={
            parseInt(value) === 0 || parseInt(value) === 1
              ? "hidden "
              : "flex px-5 md:px-0 w-full gap-5 absolute md:static bottom-0 inset-x-0"
          }
        >
          <HikerDetails isVisible={isVisible} setIsVisible={setIsVisible} hikersValue={parseInt(value)} />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default TrackingPart;
