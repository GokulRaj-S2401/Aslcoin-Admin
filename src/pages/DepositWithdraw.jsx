import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import NavTool from "../components/common/NavTool";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../apiurl";

const DepositWithdraw = () => {
const [Data,setData]= useState([])
const [users,setUsers] = useState([])
const token = localStorage.getItem("admintoken")
const location = useLocation();
const searchResults = location.state || { searchData: [] };
console.log(searchResults.searchData,"datasearch");



  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_all_transictions`,{headers:{token:token}});
        console.log(response.data,"blogsDta???????");
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
  
  useEffect(()=>{
    if(searchResults.searchData.length > 0 || searchResults.searchData.length < 0){
      setData(searchResults.searchData)
    }
  },[searchResults.searchData])

  const getUsernameFromUserId = userId => {
    const user = users.find(user => user._id === userId);
    return user ? user.fullname : "Unknown";
  };
  
  const tableTitle = [
    "",
    "USER NAME ",
    "TRANSACTION  TYPE",
    "TRANSACTION ID",
    "STATUS",
    "BALANCE",
  ];
  // const getData = [
  //   {
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Successful",
  //       balance: "$12000",
  //     },{
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Pending",
  //       balance: "$12000",
  //     },{
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Reject",
  //       balance: "$12000",
  //     },
  //     {
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Successful",
  //       balance: "$12000",
  //     },{
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Pending",
  //       balance: "$12000",
  //     },{
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Reject",
  //       balance: "$12000",
  //     },{
  //       username: "Mayur Tipras",
  //       transactionType: "Deposite",
  //       transactionId: "TTCNI022000800594",
  //       status: "Successful",
  //       balance: "$12000",
  //     }
  // ]
  const button = [
    {
      title:'Add User',
      onClick:()=>{}
    }
  ]

  return (
    <div className="p-8">
      <NavTool date={true} buttons={button}/>

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
        {Data?.map((item, i) => (
          <tr key={i}>
            <td
              style={{ paddingTop: "36px", fontSize: "12px", color: "#A4A8AB" }}
            >
              {i + 1}
            </td>
            <td style={{ paddingTop: "36px" }}>{getUsernameFromUserId(item.userId)}</td>
            <td style={{ paddingTop: "36px" }}>{item?.transictiontype}</td>
            <td style={{ paddingTop: "36px" }}>{item?.transactionId}</td>

            <td style={{ paddingTop: "36px" }}>
              <div
                className={`${
                  item?.status === "successful"
                    ? "bg-[#48BB78]"
                    : item?.status === "pending"
                    ? "bg-[#0059E7]"
                    : "bg-[#AF0101]"
                } px-1.5 py-1 rounded-md`}
              >
                {item?.status}
              </div>
            </td>
            <td style={{ paddingTop: "36px" }}>
                {item?.amount}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default DepositWithdraw;
