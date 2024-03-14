import React from 'react'
import Modal from '../common/Modal'

const Dialog = ({isOpen,setIsOpen}) => {
  return (
    <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isClosable={true}
        maxWidth={"max-w-[564px]"}
      >
        <div className="p-4">
          <h6 className="text-base font-bold bg-gradient-to-b from-[#9D6CFF] to-[#FE487C] bg-clip-text text-transparent">
            New Currency
          </h6>
          <div className="flex gap-8">
            <div className="mt-4 w-[116px] h-[84px] bg-white"></div>
            <div className="mt-3 flex flex-col gap-1">
              <strong className="text-[#989898] font-bold text-[13px]">
                Name
              </strong>
              <input className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"  placeholder="e.g Bitcoin"/>
              <strong className="text-[#989898] font-bold text-[13px] mt-5">
                Symbol
              </strong>
              <input className="w-[338px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"  placeholder="e.g BTC" />
              <div className="flex gap-5">
                <div className="flex flex-col gap-1">
                  <strong className="text-[#989898] font-bold text-[13px] mt-5">
                    Sign
                  </strong>
                  <input className="w-[147px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"  placeholder="e.g B" />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-[#989898] font-bold text-[13px] mt-5">
                    Price
                  </strong>
                  <div className="w-[169px] flex rounded-[10px] bg-white">
                  <input className="w-[127px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
                  <div className="bg-[#D9D9D9] w-[42px] rounded-e-[10px] text-xs text-[#6B6B71] font-bold flex justify-center items-center ">USD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#5D5FEF] px-5 py-2 rounded-[50px] flex mx-auto mt-8 shadow font-semibold text-[15px]">Submit</button>
        </div>
      </Modal>
  )
}

export default Dialog