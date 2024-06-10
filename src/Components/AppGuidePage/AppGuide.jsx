import Footer from "../Footer/Footer"
import GuideImg from "../../assets/images/guideImg.svg";

const AppGuide = () => {
  return (
    <div className="w-full h-screen  pt-5 ">
        <div className="h-full w-full flex flex-col-reverse md:flex-row items-center justify-center ">
            <div className="w-full h-full pt-10 md:pt-0 md:h-screen flex flex-col text-start items-center md:justify-center">
                <p className="text-xl md:text-5xl font-bold ">How to Get Started</p>
                <p className="px-5 py-10 md:px-20 text-center  md:py-10">First, connect to the internet and allow the website to access your location. Then, you can connect with friends to enjoy your trail together. If you're a solo hiker, you can continue without adding friends. Enjoy your adventure!</p>
            </div>
            <div className="w-full mt-10 md:mt-0  flex justify-center items-center">
                <img className="" src={GuideImg} alt="" />
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default AppGuide