import React from "react";
import Modal from "../common/Modal";

const Dialog = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isClosable={true}
      maxWidth={"max-w-[564px]"}
    >
      <div className="px-2">
        <h6 className="text-base font-bold bg-gradient-to-b from-[#9D6CFF] to-[#FE487C] bg-clip-text text-transparent">
          New Currency
        </h6>
        <div className="flex gap-8">
          <div className="mt-4 w-[116px] h-[84px] bg-white rounded-sm"></div>
          <div className="mt-3 flex flex-col gap-0.5">
            <strong className="text-[#989898] font-bold text-[13px] mt-1">
              Image
            </strong>
            <div className="text-sm  h-[40px] w-[338px] bg-white rounded-[10px]">
              <label
                className={` cursor-pointer flex h-[40px] pl-4 rounded-[10px] "`}
              >
                <div className=" text-[#989898] text-[13px] absolute h-[40px] w-[248px] whitespace-nowrap overflow-hidden text-ellipsis flex items-center ">
                  Choose File
                </div>
                <div
                  className={`text-[#6B6B71] text-xs h-[40px] w-[90px] ml-[232px] font-semibold bg-[#d9d9d9] rounded-e-[10px] flex items-center justify-center`}
                >
                  browse
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              Title
            </strong>
            <input
              className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
              placeholder="Title"
            />
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              Description
            </strong>
            <textarea
              className="w-[338px] h-[120px] resize-none rounded-[10px] bg-white text-[14px] text-[#989898] px-3 py-2 focus:outline-none focus:ring-0 focus:border-none"
              placeholder="Description..."
            />
            <div className="flex gap-5 mt-2">
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Author
                </strong>
                <input
                  className="w-[147px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                  placeholder="Author"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Status
                </strong>
                <div className="w-[169px] flex rounded-[10px] bg-white">
                  <input className="w-[169px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-2">
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Visibility
                </strong>
                <input
                  className="w-[147px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"
                  placeholder="Author"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-[#989898] font-bold text-[13px]">
                  Publish on
                </strong>
                <div className="w-[169px] flex rounded-[10px] bg-white">
                  <input className="w-[169px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
                </div>
              </div>
            </div>
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              Video url
            </strong>
            <input className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
            <strong className="text-[#989898] font-bold text-[13px] mt-2">
              tags
            </strong>
            <input className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
            <button className="bg-[#5D5FEF] w-[100px] px-5 py-2 rounded-[50px]  mt-2 shadow font-semibold text-[15px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
