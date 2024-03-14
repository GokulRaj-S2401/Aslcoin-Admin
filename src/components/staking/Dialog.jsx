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
            New Staking
          </h6>
            <div className="mt-3 flex flex-col gap-1">
              <strong className="text-[#989898] font-bold text-[13px]">
                Currency
              </strong>
              <input className="w-[474px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"  />
              <strong className="text-[#989898] font-bold text-[13px] mt-5">
                Status
              </strong>
              <input className="w-[474px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
              <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                  <strong className="text-[#989898] font-bold text-[13px] mt-5">
                    Min staking amount
                  </strong>
                  <input className="w-[220px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-[#989898] font-bold text-[13px] mt-5">
                  Max staking amount
                  </strong>
                  <input className="w-[220px] h-[40px] rounded-[10px] text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none" />
                </div>
              </div>
              <strong className="text-[#989898] font-bold text-[13px] mt-5">
                Allowed days (separate by comma, eg  30,60,90)
              </strong>
              <input className="w-[474px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"/>
              <strong className="text-[#989898] font-bold text-[13px] mt-5">
                Allowed percentage (separate by comma, eg 0.5 , 10, 12.5)
              </strong>
              <input className="w-[474px] h-[40px] rounded-[10px] bg-white text-[14px] text-[#989898] px-4 focus:outline-none focus:ring-0 focus:border-none"/>
            </div>
          <button className="bg-[#5D5FEF] px-5 py-2 rounded-[50px]  mt-8 shadow font-semibold text-[15px]">Submit</button>
        </div>
      </Modal>
  )
}

export default Dialog