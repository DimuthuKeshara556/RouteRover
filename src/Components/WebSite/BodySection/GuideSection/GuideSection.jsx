import { Link } from "react-router-dom";
import backImg from "../../../../assets/images/guide back.png";
const GuideSection = () => {
  return (
    <div className="mb-52  md:mb-10 w-full h-[480px] flex flex-col md:flex-row md:items-center justify-start md:justify-between font-Raleway">
      <img className="w-[80vw] md:w-[50vw]" src={backImg} alt="" />
      <div className=" p-24  flex flex-col items-center justify-center text-center gap-y-5">
        <p className="text-3xl font-extrabold">Ready to Hit the Trails? </p>
        <p className="text-tiny font-medium md:font-bold">
          Experience the thrill of the outdoors firsthand! Start exploring our
          trail tracking features now and discover your next adventure.
        </p>
        <Link to="/Application">
          <button className="bg-[#090A22] py-3 px-10 rounded-full text-xs font-bold text-white mt-2 hover:bg-secondary hover:text-main">
            Let's Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GuideSection;
