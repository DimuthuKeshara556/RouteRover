import dataSets from "../../Map/data";
import DownArrowImg from "../../../assets/images/Application/DownArrow.svg";

const HikerDetails = ({ hikersValue, isVisible, setIsVisible }) => {
  const handleImageClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="w-full md:w-[60vw]  ">
      {isVisible && (
        <div className=" w-full md:w-[60vw] p-5 pt-0 md:pt-4 border-2 rounded-3xl mt-5  bg-white">
          <div className="w-full flex items-center justify-center md:hidden ">
            <img
              className="bg-main px-7 py-4 rounded-b-3xl"
              src={DownArrowImg}
              alt=""
              onClick={handleImageClick}
            />
          </div>
          <p className="font-bold text-[18px]">Members</p>
          <div className="w-full flex items-center justify-between text-[10px] font-Raleway font-bold text-gray-700  mt-3">
            <p className="w-[25%]">No</p>
            <p className="w-[25%]">Hiker name</p>
            <p className="w-[25%]">Status</p>
            <p className="w-[25%]">Distance</p>
            <p className="w-[25%]  hidden md:flex">Contact</p>
            <p className="w-[25%] hidden md:flex">Info</p>
          </div>

          {dataSets.slice(0, hikersValue).map((data) => (
            <div key={data.id}>
              <div className="w-full flex items-center justify-between text-[10px] font-Raleway font-bold mt-3">
                <p className="w-[25%]">{data.id}</p>
                <div className="flex items-center gap-3 w-[25%]">
                  <img
                    className="w-[20px] h-[20px] rounded-full"
                    src={data.profile}
                    alt=""
                  />
                  <p>{data.name}</p>
                </div>
                {/* <div className="w-[25%]">
                  <p
                    className={`${
                      data.status === "connected"
                        ? "bg-[#97EA89] text-[#40743C] rounded-full w-fit px-3 py-1 "
                        : "Not Connected"
                        ? "bg-[#E9B5B1] text-[#E40606] rounded-full w-fit px-3 py-1 "
                        : "pending"
                        ? "bg-[#FFCF96] text-[#8E4705] rounded-full w-fit px-3 py-1 "
                        : ""
                    }`}
                  >
                    {data.status}
                  </p>
                </div> */}
                <div className={`w-[25%] mr-20 ${
                      data.status === "connected"
                        ? "bg-[#97EA89] text-[#40743C] rounded-full w-fit px-3 py-1 "
                        : "Not Connected"
                        ? "bg-[#E9B5B1] text-[#E40606] rounded-full w-fit px-3 py-1 "
                        : "pending"
                        ? "bg-[#FFCF96] text-[#8E4705] rounded-full w-fit px-3 py-1 "
                        : ""
                    }`}>
                  <p
                  className="hidden md:flex"  
                  >
                    {data.status}
                  </p>
                </div>
                <p className="w-[25%] ">{data.distance}</p>
                <p className="w-[25%] hidden md:flex">contact</p>
                <p className="w-[25%] hidden md:flex">info</p>
                <img className="flex md:hidden" src={DownArrowImg} alt="" />
              </div>
              <hr className="w-full h-[2px]  my-4 border-0 rounded bg-[#e2d4d4]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HikerDetails;
