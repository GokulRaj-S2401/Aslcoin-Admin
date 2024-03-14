import React, { useState } from 'react'
import Modal from '../common/Modal'
import axios from 'axios';
import { apiUrl } from '../../apiurl';

const Dialog = ({isOpen,setIsOpen,transactionId}) => {
  const token = localStorage.getItem("admintoken")
  const [clickedButton, setClickedButton] = useState(null);
  
  const handleApprove = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/update_transiction_status/${id}`, { status: 'successful' }, { headers: { token: token } });
      console.log(response.data);
      setClickedButton('approve');
      window.location.reload('/wallet_Request')
    } catch (error) {
      console.error('Error approving transaction:', error);
    }
  };
  
  const handleReject = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/update_transiction_status/${id}`, { status: 'fail' }, { headers: { token: token } });
      setClickedButton('reject');
      window.location.reload('/wallet_Request')
      console.log(response.data); 
    } catch (error) {
      console.error('Error rejecting transaction:', error);
    }
  };
  const handleApproveClick = () => {
    handleApprove(transactionId);
    setIsOpen(false);
  };

  const handleRejectClick = () => {
    handleReject(transactionId);
    setIsOpen(false);
  };
  return (
    <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isClosable={true}
        maxWidth={"max-w-[375px]"}
      >
        <div className="flex flex-wrap mx-auto gap-3">
          <img src='assets/dialoge/Safety.svg' alt='safety' className='w-full h-12 '/>
          <div className="text-lg font-bold text-center w-full">
           Withdrawl Request
          </div>
          <div className='text-sm text-[#aeaeae] text-center w-full'>
            Lorem ipsum dolorem non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </div>
           
          <button 
          className={`w-full px-5 py-4 rounded-[10px] mt-6 shadow text-[15px] ${clickedButton === 'approve' ? 'bg-[#9D6CFF]' : ''}`}
          onClick={handleApproveClick}
          >
            Approve
            </button>
          <button 
         className={`w-full px-5 py-2 rounded-[10px] shadow text-[15px] ${clickedButton === 'reject' ? 'bg-[#9D6CFF]' : ''}`}
          onClick={handleRejectClick}
          >Reject</button>

        </div>
      </Modal>
  )
}

export default Dialog