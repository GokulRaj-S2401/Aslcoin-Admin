import React, { useEffect, useState } from "react";
import { apiUrl } from "../../apiurl";
import axios from "axios";
import Otp from "../auth/Otp";
import { toast } from "react-toastify";

const Login = ({ setOtp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpval, setOtpval] = useState(null); // Change to null instead of undefined
  const [showOtp, setShowOtp] = useState(false); // State to control rendering of Otp component

  const handleLogin = () => {
    axios
      .post(`${apiUrl}/admin_login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status === "Success") {
          console.log(response.data, "response");
          toast.success(response.data.message, {
            style: {
              background: "#12181F",
              color: "#FFF",
            },
          });
          setOtpval(response.data.data);
          setShowOtp(true);
        }
      })
      .catch((error) => {
        toast.error("Failed to Login", {
          style: {
            background: "#12181F",
            color: "#FFF",
          },
        });
        console.error("Error occurred during login:", error);
      });
  };

  return (
    <div>
      {showOtp ? (
        <Otp setOtp={setOtp} otpval={otpval} email={email} />
      ) : (
        <div>
          <h4 className="text-[27px] font-bold">Admin Login</h4>
          <p className="text-[#C3CDDB] text-sm font-light">
            Hello AslCrypto Admin!!!
          </p>

          <div className="mt-14 flex items-center h-[60px] w-full md:w-[280px] bg-[#161D26] rounded-3xl px-4">
            <img
              className="w-8 h-7 pr-2 border-r border-[#4b5157]"
              src="/assets/auth/MailIcon.svg"
              alt="mail"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#161D26] flex-1  pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
            />
            <img className="w-4 h-4" src="/assets/auth/check.svg" alt="check" />
          </div>
          <div className="mt-4 flex items-center h-[60px] w-full md:w-[280px] bg-[#161D26] rounded-3xl px-4">
            <img
              className="w-8 h-7 pr-2 border-r border-[#4b5157]"
              src="/assets/auth/PasswordIcon.svg"
              alt="mail"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#161D26] flex-1 pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
            />
          </div>

          <div
            onClick={handleLogin}
            className="flex items-center cursor-pointer justify-end px-5 font-light  bg-gradient-to-b from-[#9D6CFF]   to-[#1984FF]  mt-12  h-[60px] w-full md:w-[280px]  rounded-3xl "
          >
            <span className="pr-[32%] md:pr-[54px] text-center flex justify-center">
              Continue
            </span>
            <img
              src="/assets/auth/rightArrow.svg"
              alt="arrow"
              className="w-9 h-9"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
