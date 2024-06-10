import { useState } from "react";
import profileImg from "../../assets/images/profile/profileImg.png";
import close from "../../assets/images//icons8-close 1.png";
import massage from "../../assets/images/Application/msgImg.svg";
import menu from "../../assets/images/Application/MenuImg.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Application/pages/Menu";
import { HashLink } from "react-router-hash-link";
const TestNavBar = ({ user, logout }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isInApplication = location.pathname.startsWith("/application");

  return (
    <nav className="fixed  w-screen flex flex-row-reverse items-center justify-between bg-white z-50  px-5 py-3 font-Raleway md:flex-row">
      <div className="flex md:hidden">
        <div className="flex gap-9 md:hidden">
          <img className="hidden" src={massage} alt="" />
          <img src={menu} alt="" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      <SideBar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        logout={logout}
      />
      <Menu menuIsOpen={isMenuOpen} setMenuIsOpen={setIsMenuOpen} />
      <p className=" sm:text-base  sm:pl-5 font-black  md:text-3xl">
        RouteRover
      </p>
      <div className="hidden flex-row justify-between max-w-[690px] gap-5 text-base font-bold md:flex">
        <Link to={isInApplication ? "/application" : "/"}>
          <p className="hover:border-b-2 border-secondary">Home</p>
        </Link>
        <HashLink smooth to="/#about">
          <p className="hover:border-b-2 border-secondary">About</p>
        </HashLink>
        <Link to={"/guidePage"}>
          <p className="hover:border-b-2 border-secondary">Guide</p>
        </Link>
        <Link to="/community">
          <p className="hover:border-b-2 border-secondary">Community</p>
        </Link>
        <HashLink smooth to="/#footer">
          <p className="hover:border-b-2 border-secondary">Contact</p>
        </HashLink>
      </div>
      {user ? (
        <div className="flex items-center">
          <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <img
              className="flex w-7 h-7 rounded-full mr-4 bg-white "
              src={profileImg}
              alt=""
            />
          </button>
        </div>
      ) : (
        <div>
          <a
            href="/signup"
            className="text-base font-semibold px-7 py-2 mr-5 bg-main text-white rounded-2xl hover:bg-secondary hover:text-main"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
};

export default TestNavBar;

const SideBar = ({ isOpen, setIsOpen, logout }) => {
  return (
    <div
      className={`absolute -z-50 top-0 right-0 w-full h-screen p-5 text-white bg-[#cacaca] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-[300px] md:h-[350px] md:rounded-2xl md:transition-transform md:duration-300 md:ease-in-out md:top-0 md:right-0 ${
        isOpen
          ? "md:translate-y-16 md:-translate-x-16"
          : "md:translate-x-full md:-translate-y-full opacity-20"
      }`}
    >
      <button
        className="w-[30px] absolute top-7 right-7"
        onClick={() => setIsOpen(false)}
      >
        <img className=" w-[20px]" src={close} alt="" />{" "}
      </button>
      <div className="flex w-full mt-10 py-3 px-2 gap-4 font-Raleway">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={profileImg}
          alt=""
        />
        <div>
          <p className="text-xs font-bold text-main">Dimuthu Keshara</p>
          <p className="text-xxs font-bold text-[#72748b]">
            professional Hiker
          </p>
          <p className="text-xxs font-bold text-[#72748b]">@dk</p>
        </div>
      </div>
      <p className=" text-xs  text-[#72748b] font-bold mt-4">Your Account</p>
      <Link to="/activity">
        <p className=" text-xxs  text-main font-bold pl-3 mt-2">My Activity</p>
      </Link>
      <p className=" text-xxs  text-main font-bold pl-3 mt-2">Settings</p>
      <p className=" text-xs  text-[#72748b] font-bold mt-4">More Option</p>
      <p
        className="text-xxs text-main font-bold pl-3 mt-2 cursor-pointer"
        onClick={() => {
          logout();
          setIsOpen(false);
        }}
      >
        LogOut
      </p>
    </div>
  );
};
