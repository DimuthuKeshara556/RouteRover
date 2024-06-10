import { useLocation } from "react-router-dom";
import MapComponent from "../Map/MapComponent";

import profileImg from "../../assets/images/profile/profileImg.png";
import commentIcon from "../../assets/images/commentIcon.png";
import shareIcon from "../../assets/images/shareIcon.png";
import likeIcon from "../../assets/images/LikeImg.png";
const CommunityPage = () => {
  const location = useLocation();
  const { formData } = location.state || { formData: null };

  return (
    <div className="w-full px-10 flex flex-col items-center  pt-20">
      <div className="w-full bg-secondary h-[50px] rounded-2xl my-4">
        {/* <div className="flex items-center justify-center mt-10"> */}
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />
          <button className="absolute right-0 top-0 mt-2 mr-4">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          {/* </div> */}
        </div>
      </div>
      {formData ? (
        <div className="w-full my-10 font-Raleway pt-5">
          <div className="flex items-center  gap-4 md:mb-5">
            <img className="w-[35px] rounded-full" src={profileImg} alt="" />
            <div className="flex flex-col">
              <p className="text-base font-bold">Dimuthu Keshara </p>
              <p className="text-xs font-bold font-sans text-gray-500">now</p>
            </div>
            <img src="" alt="" />
          </div>
          <p className="text-tiny font-medium "> {formData.location}</p>
          <div className="flex justify-around gap-5 flex-col md:flex-row">
            <div className=" w-full md:w-[50vw] py-5">
              <MapComponent hikersValue={1} />
              <div className="flex items-center justify-between py-4 px-5  text-tiny font-bold text-gray-700">
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img className="w-[20px] md:w-[25px]" src={likeIcon} alt="" />
                  <p>Like</p>
                </div>
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img
                    className="w-[20px] md:w-[25px]"
                    src={commentIcon}
                    alt=""
                  />
                  <p>Comment</p>
                </div>
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img
                    className="w-[20px] md:w-[25px]"
                    src={shareIcon}
                    alt=""
                  />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full pb-3 md:p-3">
              <p className=" text-base font-semibold md:mb-5">
                {formData.text}
              </p>
              <p className="text-xs font-bold mb-5 text-gray-700">
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
                    <p className="text-xs font-bold font-sans text-gray-500 pr-5">
                      Nice place, Highly recommend to travel
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <img className="w-[20px]" src={likeIcon} alt="" />
                  <p className="text-xxs font-bold font-sans text-gray-500">
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
                  placeholder="Password"
                  className="w-full border-2 rounded-2xl text-xxs font-bold p-2"
                />
                <div className="flex flex-col items-center justify-center ">
                  <img className="w-[20px] " src={shareIcon} alt="" />
                  <p className=" text-xxs font-bold text-gray-700">Share</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="w-full h-[3px]  bg-[#cec1c1] border-0 rounded" />
        </div>
      ) : (
        <div className="w-full my-10 font-Raleway pt-5">
          <div className="flex items-center  gap-4 md:mb-5">
            <img className="w-[35px] rounded-full" src={profileImg} alt="" />
            <div className="flex flex-col">
              <p className="text-base font-bold">Dimuthu Keshara </p>
              <p className="text-xs font-bold font-sans text-gray-500">
                4h ago
              </p>
            </div>
            <img src="" alt="" />
          </div>
          <p className="text-tinyfont-medium mt-2 "> Our hanthana Hike</p>
          <div className="flex justify-around gap-5 flex-col md:flex-row">
            <div className=" w-full md:w-[50vw] py-5">
              <MapComponent hikersValue={1} />
              <div className="flex items-center justify-between py-4 px-5  text-tiny font-bold text-gray-700">
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img className="w-[20px] md:w-[25px]" src={likeIcon} alt="" />
                  <p>Like</p>
                </div>
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img
                    className="w-[20px] md:w-[25px]"
                    src={commentIcon}
                    alt=""
                  />
                  <p>Comment</p>
                </div>
                <div className="flex flex-col md:flec-row items-center justify-center gap-1 md:gap-3">
                  <img
                    className="w-[20px] md:w-[25px]"
                    src={shareIcon}
                    alt=""
                  />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full pb-3 md:p-3">
              <p className=" text-base font-semibold md:mb-5">
                Hanthana Mountain Range lies in the central highlands of Sri
                Lanka, south-west of Kandy.
              </p>
              <p className="text-xs font-bold mb-5 text-gray-700">
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
              </div>{" "}
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
                  placeholder="Password"
                  className="w-full border-2 rounded-2xl text-xxs font-bold p-2"
                />
                <div className="flex flex-col items-center justify-center ">
                  <img className="w-[20px] " src={shareIcon} alt="" />
                  <p className=" text-xxs font-bold text-gray-700">Share</p>
                </div>
              </div>
            </div>
          </div>
          <hr class="w-full h-[3px]  bg-[#cec1c1] border-0 rounded" />
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
