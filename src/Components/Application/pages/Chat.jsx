import profileImg from "../../../assets/images/profile/profileImg.png";
import shareIcon from "../../../assets/images/shareIcon.png";
import profileImg2 from "../../../assets/images/Places/1.png";
const Chat = () => {
  return (
    <div className="hidden md:flex md:flex-col w-1/3  font-Raleway  p-5 border-2 rounded-3xl mt-5  text-main">
      <p className="font-bold text-[18px]">Chat</p>
      <p className="font-bold mt-3 text-[12px]">Today</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="relative">
          <div className="w-[15px] h-[15px] bg-green-600 rounded-full absolute  border-2  border-white -bottom-1 right-0 z-10" />
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={profileImg2}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="bg-[#F3F3F3] w-fit px-4 py-1 rounded-xl font-bold text-[12px]">
            Hi!
          </p>
          <p className="text-[#717171] text-[10px]  font-bold">6 min ago</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 mt-4">
        <div className="relative">
          <div className="w-[15px] h-[15px] bg-green-600 rounded-full absolute  border-2  border-white -bottom-1 right-0 z-10" />
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="bg-secondary w-fit px-4 py-1 rounded-xl font-bold text-[12px]">
            Hi!
          </p>
          <p className="text-[#717171] text-[10px]  font-bold ">6 min ago</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="relative">
          <div className="w-[15px] h-[15px] bg-green-600 rounded-full absolute  border-2  border-white -bottom-1 right-0 z-10" />
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={profileImg2}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="bg-[#F3F3F3] w-fit px-4 py-1 rounded-xl font-bold text-[12px]">
            Hi!
          </p>
          <p className="text-[#717171] text-[10px]  font-bold">6 min ago</p>
        </div>
      </div>
      <div className="flex items-center justify-between  gap-5 mt-10">
        <input
          type="text"
          placeholder="Write somthing here"
          className="w-full border-2 rounded-2xl text-[10px] font-bold p-2"
        />
        <div className="flex flex-col items-center justify-center ">
          <img className="w-[20px] " src={shareIcon} alt="" />
          <p className=" text-[10px] font-bold text-gray-700">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
