import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Wallet = () => {
  const { open } = useWeb3Modal();
  const { address, isConnecting, isDisconnected, balance } = useAccount();

  console.log("open", open);
  return (
    <div className="p-8">
      <div className="bg-[#161D26] rounded-[25px] w-[95%] px-[16px] py-[32px]">
        <div className="text-[30px] font-bold text-white">
          Connect your wallet.
        </div>
        <div className="text-[16px] font-normal text-[#C3CDDB]">
          Select What Wallet Your Want To Connect Below.
        </div>
        <div className="flex justify-center items-center my-11">
          {isDisconnected ? (
            <button
              onClick={() => {
                const result = open();
                console.log(result);
              }}
              className="px-6 py-4 bg-[#213044] rounded-[25px]"
            >
              Connect wallet
            </button>
          ) : (
            <div>
              <w3m-button balance="show" />
              {/* <p className="mt-4">address: {address}</p> */}
            </div>
          )}
        </div>
        {/* <div className="flex flex-wrap justify-around mt-12">
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>
          <div className=" w-[240px] h-32 m-4">
            <img
              src="/assets/wallet/catimage.svg"
              alt="Image"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">MetaMask</h3>
              <p className="text-[14px] font-light">
                MetaMask is a global community of developers and designers
              </p>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
};

export default Wallet;
