import React from "react";

const Transfer = () => {
  return (
    <div className="p-8">
      <div className="bg-[#161D26] rounded-[25px] w-[60%] px-[16px] py-[32px]">
        <div className="text-[16px] font-semibold text-white">Transfer</div>
        <p className="text-[12px] font-extralight mt-14 ml-6 mb-4">Coin :</p>

        <div className=" flex items-center h-[50px] w-full  bg-[#12181F] rounded-3xl px-4">
          <img
            className="w-8 h-7 pr-2 border-r border-[#4b5157]"
            src="/assets/auth/MailIcon.svg"
            alt="mail"
          />
          <input
            type="text"
            placeholder="BTC"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="bg-[#12181F] flex-1  pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
          />
          <img className="w-4 h-4" src="/assets/auth/check.svg" alt="check" />
        </div>
        <p className="text-[12px] font-light mt-8 ml-5">
          Total balance : <span className="text-yellow-100">0.2345605 BTC</span>
        </p>
        <div className="mt-8 flex items-center h-[50px] w-full  bg-[#12181F] rounded-3xl px-4">
          <img
            className="w-8 h-7 pr-2 border-r border-[#4b5157]"
            src="/assets/auth/MailIcon.svg"
            alt="mail"
          />
          <input
            type="text"
            placeholder="Transfer Address"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="bg-[#12181F] flex-1  pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
          />
          <p className="text-[12px] font-light">paste</p>
        </div>
        <div className="mt-4 flex items-center h-[50px] w-full  bg-[#12181F] rounded-3xl px-4">
          <img
            className="w-8 h-7 pr-2 border-r border-[#4b5157]"
            src="/assets/auth/MailIcon.svg"
            alt="mail"
          />
          <input
            type="text"
            placeholder="Amount"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="bg-[#12181F] flex-1  pl-4 text-sm placeholder:text-[#808195]  focus:outline-none border-none w-full"
          />
          <p className="text-[12px] font-light">select all</p>{" "}
        </div>
        <div className="flex justify-between items-center mt-12">
          <p className="text-[12px] font-light">
            Transaction Fee :{" "}
            <span className="text-yellow-100">0.0005 BTC</span>
          </p>
          <div
            // onClick={handleLogin}
            className="flex items-center cursor-pointer justify-end px-5 font-light  bg-[#0CAF60]   h-[50px] w-full md:w-[240px]  rounded-3xl "
          >
            <span className="pr-[32%] md:pr-[54px] text-center flex justify-center text-[12px]">
              Proced Transfer
            </span>
            <img
              src="/assets/auth/rightArrow.svg"
              alt="arrow"
              className="w-6 h-6"
            />
          </div>
        </div>
        <p className="text-[16px] font-bold mt-12 ml-6 mb-4">Tip</p>
        <div className="bg-[#12181F] rounded-[25px] p-6">
          <ul className="list-disc list-inside text-[14px] leading-[2]">
            <li className="mb-3">
              If you have deposited please pay attention to the text messagesm
              site letters and emails we send to you.
            </li>
            <li className="mb-3">
              Coins will be deposited after 1 nwtwork confrimations.
            </li>
            <li className="mb-3">
              Until 2 confrimations are mafe.an equivalent amount of your assets
              will be temporarily unavailable for witdrawals.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
