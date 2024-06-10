import { Link } from "react-router-dom";
import MapComponent from "../../../Map/MapComponent";

const TrailCompletePage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-100% flex flex-col md:flex-row p-10 items-center justify-center font-Raleway ">
        <div className="w-full text-center mt-8 md:mt-0 md:text-start px-5">
          <p className="text-[22px] md:text-[40px] font-black">
            Superb ! <br />
            <span className="text-secondary  ">You Finished</span>
            <br />
            Journey
          </p>
          <p className="font-medium mt-4 text-[12px] md:text-[15px] md:pr-16">
            {" "}
            share your triumphs with us. From stunning vistas to personal bests,
            let's celebrate every journey's end together!
          </p>
          <p className="font-bold mt-5 text-[12px] md:mt-10">
            Total Distance : <span className="font-sans">3 Km</span>
          </p>
        </div>
        <div className="w-full pt-3 md:p-10 md:mt-10">
          <MapComponent className="h-[50px]" hikersValue={1} />
          <div className="flex items-center justify-end gap-5 mt-6">
            {/* <Link to={"/share"}>
              <button className="border-main text-main border-2 rounded-full py-2  font-bold px-10 text-[12px]">
                Save And Close
              </button>
            </Link>
            <Link to={"/share"}>
              <button className="bg-main text-white rounded-full py-2 px-4 text-[12px] font-bold">
                Share your experience
              </button>
            </Link> */}
            <Link to={"/share"}>
              <button className="bg-main text-white rounded-full py-2 px-8 text-[12px] font-bold">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailCompletePage;
