import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Otp from "../components/auth/Otp";

const Auth = () => {
const [otp , setOtp] = useState(false)
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="flex justify-center flex-wrap py-8">
      <img
        src="/assets/auth/logoName.png"
        alt="aslcoin"
        className="w-[180px] h-[253px] -mt-8 md:hidden block"
      />

      <div className="bg-[#0B0E13] w-[90%] md:w-[65%]   py-6 px-4 rounded-[37px] flex flex-wrap justify-center lg:justify-normal">
        <div className="bg-background w-full md:w-[380px] h-[600px]  rounded-[37px] px-8 md:px-12 py-10">
          {otp?<Otp setOtp={setOtp}/>:<Login setOtp={setOtp}/>}
          <div className="mt-16 flex items-center justify-center text-sm font-semibold text-center">
            <hr className="w-[27px] border-[#303A46] mr-3" /> Or Continue with
            <hr className="w-[27px] border-[#303A46] ml-3" />
          </div>
          <div className="flex justify-center mt-5 gap-6">
            <img
              src="/assets/auth/Facebook.png"
              alt="arrow"
              className="w-12 h-12"
            />
            <img
              src="/assets/auth/Apple.png"
              alt="arrow"
              className="w-12 h-12"
            />
            <img
              src="/assets/auth/Google.png"
              alt="arrow"
              className="w-12 h-12"
            />
          </div>
        </div>
        <div className="text-center md:pl-[10%]">
          <img
            src="/assets/auth/logoName.png"
            alt="aslcoin"
            className="-mt-6 md:block hidden w-[180px] h-[253px] ml-12 md:ml-32"
          />
          <img
            src={!otp?"/assets/auth/components.png":"/assets/auth/otpimg.png"}
            alt="crypto"
            className={` ${otp&&'ml-4 sm:ml-12'} w-[368px] h-[396px] mt-12 md:-mt-12`}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
