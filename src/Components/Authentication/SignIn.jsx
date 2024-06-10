import backImg from "../../assets/images/SignupImg.png";
import GoogleImg from "../../assets/images/icons8-google-96.png";
import FacebookImg from "../../assets/images/icons8-facebook-96.png";
import AppleImg from "../../assets/images/icons8-apple-logo-100.png";
import CloseImg from "../../assets/images/icons8-close 1.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { username, password, email };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-between relative">
      <img className="h-screen max-w-[50vw]" src={backImg} alt="" />
      <form
        onSubmit={handleSignUp}
        className="w-[250px] flex flex-col items-center justify-center gap-y-3 font-Raleway text-start"
      >
        <p className="text-3xl font-bold mb-5 w-full">Sign Up</p>
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
        />
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          placeholder="re enter password"
          type="password"
        />
        <button
          type="submit"
          className="bg-[#090A22] p-2 rounded-full text-white text-sm w-full"
        >
          Sign Up
        </button>
        <div className="flex items-center gap-x-5 w-full justify-center">
          <hr class="w-full h-[3px]  my-4 border-0 rounded bg-[#BCB0B0]" />
          <p className="text-tiny font-bold text-[#BCB0B0]">or</p>
          <hr class="w-full   h-[3px]  bg-[#BCB0B0] border-0 rounded" />
        </div>
        <div className="flex gap-x-8">
          <img
            className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
            src={GoogleImg}
            alt=""
          />
          <img
            className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
            src={FacebookImg}
            alt=""
          />
          <img
            className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
            src={AppleImg}
            alt=""
          />
        </div>
        <p className="text-xxs font-bold mt-3 w-full">
          Already a member?{" "}
          <Link to="/login">
            <span className="text-[#5A77C2]">Log in</span>
          </Link>
        </p>
      </form>
      <Link to="/">
        <img
          className="w-[30px] absolute top-3 right-3"
          src={CloseImg}
          alt=""
        />
      </Link>
    </div>
  );
};

export default SignIn;
