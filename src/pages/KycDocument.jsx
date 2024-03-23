import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import NavTool from "../components/common/NavTool";
import { apiUrl } from "../apiurl";
import axios from "axios";

const KycDocument = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const [selectedUserIds, setSelectedUserIds] = useState({});
  const itemsPerPage = 5;
  const token = localStorage.getItem("admintoken");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get_kyc_data`, {
        headers: { token: token },
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const tableTitle = [
    "USER DATA",
    "COUNTRY",
    "SELFIE PHOTO",
    "DOCUMENT",
    "STATUS",
    "SUBMIT DATE",
    "ACTIONS",
  ];

  const handleStatusChange = async (userId) => {
    console.log("selectedUserId", userId, selectedStatuses[userId]);
    try {
      const response = await axios.post(
        `${apiUrl}/kyc_status`,
        { userId: userId, action: selectedStatuses[userId] },
        { headers: { token: token } }
      );
      console.log(
        `Status updated for user ${userId}: ${selectedStatuses[userId]}`
      );
      // Update the local data or fetch new data after the status is updated
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  // const getData = [
  //   {
  //       userData: { name: "Mayur Tipras", email: "mayurtipras@gmail.com" },
  //       country: "India",
  //       selfiePhoto: "",
  //       document: "",
  //       status: "Approved",
  //       submitDate: "2023-08-24 15:07:24",
  //     },
  //     {
  //       userData: { name: "Mayur Tipras", email: "mayurtipras@gmail.com" },
  //       country: "India",
  //       selfiePhoto: "",
  //       document: "",
  //       status: "Reject",
  //       submitDate: "2023-08-24 15:07:24",
  //     },
  //     {
  //       userData: { name: "Mayur Tipras", email: "mayurtipras@gmail.com" },
  //       country: "India",
  //       selfiePhoto: "",
  //       document: "",
  //       status: "Approved",
  //       submitDate: "2023-08-24 15:07:24",
  //     }
  // ]
  const button = [
    {
      title: "Add User",
      onClick: () => {},
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems =
    data && data.length > 0
      ? data.slice(indexOfFirstItem, indexOfLastItem)
      : [];

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
          borderBottom: "2px solid #ffffff40",
        }}
        action={""}
      >
        {currentItems?.map((item, i) => (
          <tr
            key={i}
            style={{
              borderBottom: `${
                i === data.length - 1 ? "" : "2px solid #ffffff40"
              }`,
            }}
          >
            <td style={{ padding: "16px 0" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                {item?.fullname}
              </div>
              <br />
              <br />
              <div
                style={{
                  fontSize: "11px",
                  color: "#ffffff",
                  fontWeight: "400",
                }}
              >
                {item?.email}
              </div>
            </td>
            <td>{item?.country}</td>
            <td>
              <img
                className="ml-5"
                src="/assets/table/upload.svg"
                alt="upload"
                width={24}
                height={24}
              />
            </td>
            <td>
              <img
                className="ml-5"
                src="/assets/table/upload.svg"
                alt="upload"
                width={24}
                height={24}
              />
            </td>

            <td>
              <div
                className={`${
                  item?.kycstatus === "approve"
                    ? "bg-[#48BB78]"
                    : "bg-[#AF0101]"
                } px-2 py-1 rounded`}
              >
                {item?.kycstatus}
              </div>
            </td>

            <td style={{ fontSize: "11px", fontWeight: "700" }}>
              {new Date(item?.sumitedDate)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
                .replace(/\//g, "-")}{" "}
              {new Date(item?.sumitedDate).toLocaleTimeString("en-US")}
            </td>
            <td>
              <div className="ml-4 my-5 flex gap-2 position-fixed">
                <select
                  value={selectedStatuses[item._id] || ""}
                  onChange={(e) => {
                    setSelectedStatuses({
                      ...selectedStatuses,
                      [item._id]: e.target.value,
                    });
                  }}
                  className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs mr-3"
                >
                  <option value="">Select Status</option>
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                </select>
                <button
                  className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs"
                  onClick={() => handleStatusChange(item._id)}
                >
                  Action
                </button>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      <div className="ml-4 my-5 flex gap-2 position-fixed">
        <button
          className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs">
          {currentPage}
        </div>
        <button
          className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={indexOfLastItem >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default KycDocument;
