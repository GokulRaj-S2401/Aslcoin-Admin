import React, { useState } from "react";
import { apiUrl } from "../../apiurl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Otp = ({ setOtp, otpval, email }) => {
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    axios
      .post(`${apiUrl}/verify_otp`, {
        email: email,
        otp: otpValue,
      })
      .then((response) => {
        if (response.data.status === "Success") {
          toast.success(response.data.message, {
            style: {
              background: "#12181F",
              color: "#FFF",
            },
          });
          console.log(response.data.token, "token");
          localStorage.setItem("admintoken", response.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Failed to verify OTP", {
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
      <h4 className="text-[27px] font-bold">OTP Verification</h4>
      <p className="text-[#C3CDDB] text-sm font-light w-[240px]">
        Crack a Joke, Not a Code: Enter the OTP and prove you're not an intruder
      </p>

      <div className="mt-14 flex items-center h-[60px] w-full md:w-[280px] bg-[#161D26] rounded-3xl px-4">
        <img
          className="w-7 h-7 pr-2 border-r border-[#4b5157]"
          src="/assets/auth/key.svg"
          alt="mail"
        />
        <input
          type="text"
          placeholder="OTP"
          value={otpValue} // Use otpValue here
          onChange={(e) => setOtpValue(e.target.value)} // Update otpValue, not setOtpValue
          className="bg-[#161D26] flex-1  pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
        />
      </div>

      <div
        onClick={() => {
          handleVerifyOtp();
          setOtp(false);
        }}
        className="flex items-center justify-end px-5 font-light cursor-pointer  bg-gradient-to-b from-[#9D6CFF]   to-[#1984FF]  mt-12  h-[60px] w-full md:w-[280px]  rounded-3xl "
      >
        <span className="pr-[32%] md:pr-[54px] text-center flex justify-center ">
          Continue
        </span>
        <img
          src="/assets/auth/rightArrow.svg"
          alt="arrow"
          className="w-9 h-9"
        />
      </div>
    </div>
  );
};

export default Otp;
