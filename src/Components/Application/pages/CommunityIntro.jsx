import { Link } from "react-router-dom"
import image1 from "../../../assets/images/decoration.svg"
const CommunityIntro = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center p-10 font-Raleway relative">
        <img className="hidden md:flex w-[120px] absolute bottom-32 left-40 " src={image1} alt=""/>
        <img className="hidden md:flex  w-[80px] absolute bottom-68 right-32 -rotate-90  " src={image1} alt=""/>
        <p className="text-[22px] text-center md:text-start font-black p-5">You can connect with our Community </p>
        <p  className="text-center md:w-[500px] mb-7 font-semibold mt-5 ">Join our vibrant trailblazing community at RouteRover and discover your next adventure! Share your favorite routes, connect with fellow explorers, and unlock a world of outdoor excitement.</p>
        <Link to={"/community"}>
        <button className="bg-main py-2 px-10 rounded-full text-white mt-4 text-[15px] font-bold hover:bg-secondary">Try It Now</button>
        </Link>
    </div>
  )
}

export default CommunityIntro