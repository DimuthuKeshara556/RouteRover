import close from "../../../assets/images//icons8-close 1.png";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ menuIsOpen, setMenuIsOpen }) => {
  const location = useLocation();
  const isInApplication = location.pathname.startsWith("/application");
  return (
    <div
      className={`md:hidden absolute top-0 right-0 w-[70vw] h-screen p-5 text-main font-bold bg-gray-100 transform ${
        menuIsOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="w-[30px] absolute top-7 right-7"
        onClick={() => setMenuIsOpen(false)}
      >
        <img src={close} alt="" />{" "}
      </button>
      <div className=" flex flex-col pt-20 gap-4 text-[14px]">
        <Link to={isInApplication ? "/application" : "/"}>
          <p>Home</p>
        </Link>
        {/* <HashLink smooth to="/#about">
          <p>About</p>
        </HashLink> */}
        <Link to={"/guidePage"}>
          <p>Guide</p>
        </Link>
        <Link to={"/community"}>
          <p>Community</p>
        </Link>
        {/* <HashLink smooth to="/#footer">
          <p>Contact</p>
        </HashLink> */}
      </div>
    </div>
  );
};

export default Menu;
