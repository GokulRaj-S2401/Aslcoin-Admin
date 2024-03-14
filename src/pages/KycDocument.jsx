import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import NavTool from "../components/common/NavTool";
import { apiUrl } from "../apiurl";
import axios from "axios";

const KycDocument = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const token = localStorage.getItem("admintoken")
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_kyc_data`, { headers: { token: token } });

        console.log(response.data.data, "users data");

        setData(response.data.data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [token]);
  const tableTitle = [
    "USER DATA",
    "COUNTRY",
    "SELFIE PHOTO",
    "DOCUMENT",
    "STATUS",
    "SUBMIT DATE",
  ];
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
      title: 'Add User',
      onClick: () => { }
    }
  ]

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data && data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem):[];

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
          <tr key={i} style={{ borderBottom: `${i === data.length - 1 ? "" : "2px solid #ffffff40"}` }}>
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
            <td><img className="ml-5" src="/assets/table/upload.svg" alt="upload" width={24} height={24} /></td>
            <td><img className="ml-5" src="/assets/table/upload.svg" alt="upload" width={24} height={24} /></td>

            <td>
              <div
                className={`${item?.kycstatus === "approve"
                    ? "bg-[#48BB78]"
                    : "bg-[#AF0101]"
                  } px-2 py-1 rounded`}
              >
                {item?.kycstatus}
              </div>
            </td>

            <td style={{ fontSize: "11px", fontWeight: '700' }}>
              {new Date(item?.sumitedDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')} {new Date(item?.sumitedDate).toLocaleTimeString('en-US')}
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
