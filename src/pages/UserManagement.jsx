import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import TableActionPopUp from "../components/common/TableActionPopUp";
import NavTool from "../components/common/NavTool";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../apiurl"
import axios from "axios";
import { toast } from 'react-toastify'; 

const UserManagement = () => {
  const location = useLocation();
  const [showAction, setShowAction] = useState(false);
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("admintoken")
  const searchResults = location.state || { searchData: [] };
  console.log(searchResults.searchData,"logsearch");



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_all_user`, { headers: { token: token } });
          console.log(response.data.data, "response>>getuser");
          setUserData(response.data.data);
      } catch (error) {
        console.error("Error occurred during fetching user data:", error);
      }
    };

      fetchUserData();

    window.scrollTo(0, 0);
  }, [token, showAction]);

  useEffect(()=>{
    if(searchResults.searchData.length > 0 || searchResults.searchData.length < 0){
      setUserData(searchResults.searchData)
    }
  },[searchResults.searchData])
  
  const handlechangeuserstatus = async (_id) => {
    axios
      .post(`${apiUrl}/user_status/${_id}?type=block`, null,
        {
          headers:
            { token: token }
        })
      .then((response) => {
        if (response.data.status === true) {
          console.log(response.data.data, "response>>statuschange");
          // setShowAction(false)
          // console.log(showAction,">>>>>>>>>>>>>>>>");
          toast.success("User block successfully", {
            style: {
              background: '#12181F',
              color: '#FFF'
            }
          });
          window.location.reload()
        }
      })
      .catch((error) => {
        toast.error("Failed to block user", {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
        console.error("Error occurred during login:", error);
      });
  };
  const handleuserstatus = async (_id) => {
    axios
      .post(`${apiUrl}/user_status/${_id}`, null,
        {
          headers:
            { token: token }
        })
      .then((response) => {
        if (response.data.status === true) {
          console.log(response.data.data, "response>>statuschange");
          // setShowAction(false)
          // console.log(showAction,">>>>>>>>>>>>>>>>");
          toast.success("User unblock successfully", {
            style: {
              background: '#12181F',
              color: '#FFF'
            }
          });
          window.location.reload()
        }
      })
      .catch((error) => {
        toast.error("Failed to unblock user", {
          style: {
            background: '#12181F',
            color: '#FFF'
          }
        });
        console.error("Error occurred during login:", error);
      });
  };
  const tableTitle = [
    "ID",
    "EMAIL",
    "REGISTERED DATE",
    "KYC STATUS",
    "EMAIL STATUS",
    "USER STATUS",
  ];
  // const getData = Array.from({ length: 7 }, () => ({
  //   id: "",
  //   email: "azarshaikh@gmail.com",
  //   registerDate: "2023-08-24 15:07:24",
  //   kycStatus: "Verified",
  //   emailStatus: "Unverified",
  //   userStatus: "Active",
  // }));
  const button = [
    {
      title: 'Add User',
      onClick: () => { }
    }
  ]
  const filteredUserData = userData.filter(item => item.emailstatus === true);
  return (
    <div className="p-8">
      <NavTool date={true} buttons={button} />
      <Table
        tableTitle={tableTitle}
        maxWidth={"95%"}
        backgroundColor={"#161D26"}
        padding={"16px 32px"}
        headingStyle={{
          fontSize: "12px",
        }}
        action={""}
      >
        {filteredUserData?.map((item, i) => (
          <tr key={i}>
            <td style={{ paddingTop: "36px", fontWeight: "700" }}>{i + 1}</td>
            <td style={{ paddingTop: "36px" }}>{item?.email}</td>
            <td style={{ paddingTop: "36px" }}>
              {item?.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric',hour: '2-digit',minute: '2-digit',second: '2-digit' }).replace(/\//g, '-')}
            </td>
            <td style={{ paddingTop: "36px" }}>
              <div
                className={`${item?.kycstatus === "pending"
                    ? "bg-[#48BB78]"
                    : "bg-[#6B6B71]"
                  } px-3 py-1.5 rounded`}
              >
                {item?.kycstatus}
              </div>
            </td>
            <td style={{ paddingTop: "36px" }}>
              <div
                className={`${item?.emailstatus
                    ? "bg-[#48BB78]"
                    : "bg-[#6B6B71]"
                  } px-3 py-1.5 rounded`}
              >
                {item?.emailstatus ? "Verified" : "Unverified"}
              </div>
            </td>
            <td style={{ paddingTop: "36px" }}>
              <div
                className={`${item?.status
                    ? "bg-[#48BB78]"
                    : "bg-[#6B6B71]"
                  } px-3 py-1.5 rounded`}
              >
                {item?.status ? "Active" : "Deactive"}
              </div>
            </td>
            <td style={{ paddingTop: "36px" }}>
              <img
                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                onClick={() => setShowAction(i)}
                src="/assets/table/3dotV.svg"
                alt="action"
              />
              <TableActionPopUp show={showAction === i} setShow={setShowAction}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: "15px", color: '#ffffffcc' }}>
                    Actions
                  </span>

                  <img
                    onClick={() => setShowAction(false)}
                    src="/assets/table/crossIcon.png"
                    alt="icon"
                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px', padding: '0px 10px' }}>
                  <div
                    style={{ fontWeight: '300' }}
                    onClick={() => {handlechangeuserstatus(item._id);setShowAction(false);}}
                  >Block User</div>
                  <div
                    style={{ fontWeight: '300' }}
                    onClick={() => {handleuserstatus(item._id);setShowAction(false);}}
                  >Unlock User</div>

                </div>

              </TableActionPopUp>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default UserManagement;
