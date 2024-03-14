import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-col gap-3  fixed z-50 left-0 top-0 min-h-fit h-[100vh] w-[250px] bg-background  shadow-xl py-5 text-sm">
      <img
        src="/assets/sidebar/logoname.png"
        alt="logo"
        className="ml-7 w-[130px]"
      />
      <div
        className={`${
          location.pathname === "/" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/assets/sidebar/Dashboard.svg"
          alt="logo"
          className="w-6 h-6"
        />
        Dashbord
      </div>
      <div
        className={`${
          location.pathname === "/user_management" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/user_management");
        }}
      >
        <img src="/assets/sidebar/user.svg" alt="logo" className="w-6 h-6" />
        User management
      </div>
      <div
        className={`${
          location.pathname === "/kyc_document" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/kyc_document");
        }}
      >
        <img src="/assets/sidebar/user.svg" alt="logo" className="w-6 h-6" />
        <span>KYC Documents</span>
      </div>
      <div
        className={`${
          location.pathname === "/available_networks" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/available_networks");
        }}
      >
        <img src="/assets/sidebar/user.svg" alt="logo" className="w-6 h-6" />
        <span>Available Networks</span>
      </div>
      <div
        className={`${
          location.pathname === "/currencies" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/currencies");
        }}
      >
        <img
          src="/assets/sidebar/currency.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <span>Currencies</span>
      </div>
      <div
        className={`${
          location.pathname === "/deposit_withdraw" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer pl-8 pr-3 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/deposit_withdraw");
        }}
      >
        <img src="/assets/sidebar/deposit.svg" alt="logo" className="w-6 h-6" />
        <span>Deposit & Withdraw</span>
      </div>
      <div
        className={`${
          location.pathname === "/transaction_history" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/transaction_history");
        }}
      >
        <img
          src="/assets/sidebar/transection.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <span>Transaction History</span>
      </div>
      <div
        className={`${
          location.pathname === "/staking" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/staking");
        }}
      >
        <img
          src="/assets/sidebar/transection.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <span>Staking</span>
      </div>
      <div
        className={`${
          location.pathname === "/blogs" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/blogs");
        }}
      >
        <img
          src="/assets/sidebar/transection.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <span>Blogs</span>
      </div>
      <div
        className={`${
          location.pathname === "/wallet_Request" &&
          " bg-[#9D6CFF4D] border-r-[6px] border-[#9D6CFF]"
        } cursor-pointer px-8 py-2 flex  gap-2 items-center text-[#fff] font-bold text-sm`}
        onClick={() => {
          navigate("/wallet_Request");
        }}
      >
        <img
          src="/assets/sidebar/wallet.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <span>Widthdraw Request</span>
      </div>
    </div>
  );
};

export default SideBar;
