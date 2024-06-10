// import backImg from "../../assets/images/loginBack.png";
// import GoogleImg from "../../assets/images/icons8-google-96.png";
// import FacebookImg from "../../assets/images/icons8-facebook-96.png";
// import AppleImg from "../../assets/images/icons8-apple-logo-100.png";
// import CloseImg from "../../assets/images/icons8-close 1.png";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="w-screen h-screen flex flex-row items-center justify-between relative">
//       <img className="h-screen max-w-[50vw]" src={backImg} alt="" />
//       <div className="w-[250px] flex flex-col items-center justify-center gap-y-3 font-Raleway text-start">
//         <p className="text-3xl font-bold mb-2">Login</p>
//         <input
//           className="p-2 border rounded-xl text-tiny font-medium w-full"
//           placeholder="user name"
//         />
//         <input
//           className="p-2 border rounded-xl text-tiny font-medium w-full"
//           placeholder="password"
//         />
//         <button className="bg-[#090A22] p-2 rounded-full text-white text-sm w-full">
//           Login
//         </button>
//         <p className="text-xxs font-bold mt-3 text-[#5A77C2] w-full">
//           Forgotten your password?
//         </p>
//         <div className="flex items-center gap-x-5 w-full justify-center">
//           <hr class="w-full h-[3px]  my-4 border-0 rounded bg-[#BCB0B0]" />
//           <p className="text-tiny font-bold text-[#BCB0B0]">or</p>
//           <hr class="w-full   h-[3px]  bg-[#BCB0B0] border-0 rounded" />
//         </div>
//         <div className="flex gap-x-8">
//           <img
//             className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
//             src={GoogleImg}
//             alt=""
//           />
//           <img
//             className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
//             src={FacebookImg}
//             alt=""
//           />
//           <img
//             className="w-[42px]  bg-[#CAE3E7] rounded-full p-2"
//             src={AppleImg}
//             alt=""
//           />
//         </div>
//         <p className="text-xxs font-bold mt-3 w-full">
//           Not on Route Rower Yet ?{" "}
//           <Link to="/signup">
//             <span className="text-[#5A77C2] text-[11px]">Sign Up</span>
//           </Link>
//         </p>
//       </div>

//       <Link to="/">
//         <img
//           className="w-[30px] absolute top-3 right-3"
//           src={CloseImg}
//           alt=""
//         />
//       </Link>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import backImg from "../../assets/images/loginBack.png";
import GoogleImg from "../../assets/images/icons8-google-96.png";
import FacebookImg from "../../assets/images/icons8-facebook-96.png";
import AppleImg from "../../assets/images/icons8-apple-logo-100.png";
import CloseImg from "../../assets/images/icons8-close 1.png";

const Login = ({ setUser, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  if (user) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-2xl">You are already logged in!</p>
        <Link to="/" className="text-blue-500 ml-2">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-row items-center justify-between relative">
      <img className="h-screen max-w-[50vw]" src={backImg} alt="" />
      <form
        onSubmit={handleSignIn}
        className="w-[250px] flex flex-col items-center justify-center gap-y-3 font-Raleway text-start"
      >
        <p className="text-3xl font-bold mb-2">Login</p>
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          placeholder="user name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded-xl text-tiny font-medium w-full"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#090A22] p-2 rounded-full text-white text-sm w-full"
        >
          Login
        </button>
        <p className="text-xxs font-bold mt-3 text-[#5A77C2] w-full">
          Forgotten your password?
        </p>
        <div className="flex items-center gap-x-5 w-full justify-center">
          <hr className="w-full h-[3px] my-4 border-0 rounded bg-[#BCB0B0]" />
          <p className="text-tiny font-bold text-[#BCB0B0]">or</p>
          <hr className="w-full h-[3px] bg-[#BCB0B0] border-0 rounded" />
        </div>
        <div className="flex gap-x-8">
          <img
            className="w-[42px] bg-[#CAE3E7] rounded-full p-2"
            src={GoogleImg}
            alt="Google"
          />
          <img
            className="w-[42px] bg-[#CAE3E7] rounded-full p-2"
            src={FacebookImg}
            alt="Facebook"
          />
          <img
            className="w-[42px] bg-[#CAE3E7] rounded-full p-2"
            src={AppleImg}
            alt="Apple"
          />
        </div>
        <p className="text-xxs font-bold mt-3 w-full">
          Not on Route Rower Yet?{" "}
          <Link to="/signup">
            <span className="text-[#5A77C2] text-[11px]">Sign Up</span>
          </Link>
        </p>
      </form>
      <Link to="/">
        <img className="w-[30px] absolute top-3 right-3" src={CloseImg} alt="Close" />
      </Link>
    </div>
  );
};

export default Login;
