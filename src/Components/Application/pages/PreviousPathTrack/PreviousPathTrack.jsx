import MapComponent from "../../../Map/MapComponent";
import { Link} from "react-router-dom";
import detailImg from "../../../../assets/images/Application/detailImg.png";
import ArrowImg from "../../../../assets/images/Application/NavigationArrow.png";
import addImg from "../../../../assets/images/Application/AddImg.png";
import { useEffect, useState } from "react";
import PopUp from "../../PopUp";
import HikerDetails from "../HikerDetails";
import Chat from "../Chat";


const PreviousPathTrack = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

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
    <div className="w-full">
      <div className="w-full px-5 md:px-10  pt-14 font-Raleway flex flex-col">
        <div className="flex flex-col-reverse md:flex-col ">
          <div className="flex items-center justify-between py-4">
            <p className=" hidden md:flex text-[12px] font-bold text-[#40743C] bg-[#97EA89] px-4 py-2 rounded-full">
              Connected
            </p>
            <button
              className=" flex items-center gap-x-2 px-3 py-2 text-[12px] font-bold bg-main rounded-full"
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
          </div>
          <div className="relative">
            <MapComponent hikersValue={hikersValue} />
            <Link to="/complete">
              <button className="absolute inset-x-0 bottom-10 m-auto flex w-fit h-fit  text-[12px] font-bold text-white bg-[#FA3535] px-8 py-2 rounded-full md:hidden">
                End Now
              </button>
            </Link>
            <div className="absolute right-5 top-5 gap-3 m-auto flex w-fit h-fit  text-[12px] font-bold text-white bg-main px-8 py-2 rounded-3xl">
              <div className="flex flex-col p-2 border-r-2 justify-center items-center">
                <img className="h-[50px] mb-2" src={ArrowImg} alt="" />
                <p>towords</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[35px] font-sans ">
                  2.9<span className="text-[15px]">Km</span>
                </p>
                <p className="text-[#A89F9F] text-[12px]">left to go back</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-3">
          <p className="text-[14px] font-bold">
            Distance to Start Point : 2 Km
          </p>
          <Link to={`/finish/${hikersValue}`}>
          <button className="hidden w-fit text-[12px] font-bold text-white bg-[#228213] px-4 py-2 rounded-full md:flex">
              Return to Start Point
            </button>
          </Link>

          <div className="md:hidden">
            {hikersValue === 0 || hikersValue === 1 ? (
              <p className="flex bg-[#97EA89] w-[20px] h-[20px] rounded-full"></p>
            ) : (
              <img className="flex" src={detailImg} alt="" onClick={handleButtonClick} />
            )}
          </div>
        </div>
        <div
          className={
            hikersValue === 0 || hikersValue === 1
              ? "hidden"
              : "flex px-5 md:px-0 w-full gap-5 absolute md:static -bottom-10 inset-x-0"
          }
        >
          <HikerDetails isVisible={isVisible} setIsVisible={setIsVisible} hikersValue={hikersValue} />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default PreviousPathTrack;
