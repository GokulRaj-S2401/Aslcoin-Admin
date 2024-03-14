import React, { useEffect, useState } from 'react'
import Table from '../components/common/Table';
import NavTool from '../components/common/NavTool';
import Dialog from '../components/walletRequest/Dialog';
import axios from 'axios';
import { apiUrl } from '../apiurl';

const WalletRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const [users,setUsers] = useState([])
  const token = localStorage.getItem("admintoken")
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/wallet_request`, { headers: { token: token } });

        console.log(response.data.data, "users data");

        setData(response.data.data);
        const userResponse = await axios.get(`${apiUrl}/get_all_user`, {
          headers: { token: token }
        });
        console.log(userResponse.data.data, "users data");
        setUsers(userResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [token]);

  const getUsernameFromUserId = userId => {
    const user = users.find(user => user._id === userId);
    return user ? user.fullname : "Unknown";
  };
  const tableTitle = [
    "",
    "USERNAME",
    "AMOUNT",
    "DATE",
    "TIME",
    "WALLET CURRENT BALANCE",
    "STATUS",
  ];
  // const getData = Array.from({ length: 7 }, () => ({
  //       userName: "Devid Abbey",
  //       amount: "20,000",
  //       date: "14-02-2024",
  //       status: "Take action",
  //       time: "10:23:56",
  //       wallet:"30,000",
  // }));
  const button = [
    {
      title: 'Add User',
      onClick: () => { }
    }
  ]

  return (
    <div className="p-8">
      <NavTool date={true} buttons={button} />
      <Table
        tableTitle={tableTitle}
        maxWidth={"95%"}
        backgroundColor={"#161D26"}
        padding={"16px 32px"}
        headingStyle={{
          fontSize: "11px",
        }}
        action={""}
      >
        {data?.map((item, i) => (
          <tr key={i}>
            <td
              style={{ paddingTop: "36px", fontSize: "12px", color: "#A4A8AB" }}
            >
              {i + 1}
            </td>
            <td style={{ paddingTop: "36px", fontSize: "14px", fontWeight: '700' }}>{getUsernameFromUserId(item?.userId)}</td>
            <td style={{ paddingTop: "36px", fontSize: "12px", fontWeight: '700' }}>{item?.amount}</td>
            <td style={{ paddingTop: "36px", fontSize: "12px", fontWeight: '700' }}>
              {new Date(item?.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}
            </td>
            <td style={{ paddingTop: "36px", fontSize: "12px", fontWeight: '700' }}>{new Date(item?.createdAt).toLocaleTimeString()}</td>
            <td style={{ paddingTop: "36px", fontSize: "12px", fontWeight: '700', width: '190px',paddingLeft:"38px"}}>
              {item?.wallet?.amount}
            </td >
            <td style={{ paddingTop: "36px" }}>
              <div onClick={() => setIsOpen(true)}
                className="bg-[#48BB78] px-1.5 py-1 rounded-md"
              >
                {item?.status}
              </div>
            </td>
              <Dialog isOpen={isOpen} setIsOpen={setIsOpen} transactionId={item?._id} />

          </tr>
        ))}
      </Table></div>
  )
}

export default WalletRequest