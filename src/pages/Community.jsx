import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import TableActionPopUp from "../components/common/TableActionPopUp";
import NavTool from "../components/common/NavTool";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../apiurl";
import axios from "axios";
import { toast } from "react-toastify";

const Community = () => {
  const location = useLocation();
  const [showAction, setShowAction] = useState(false);
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("admintoken");
  const searchResults = location.state || { searchData: [] };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get_topic_data`, {
        headers: { token: token },
      });
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error occurred during fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    window.scrollTo(0, 0);
  }, [token, showAction]);

  const handlechangeuserstatus = async (id) => {
    try {
      const response = await axios.put(
        `${apiUrl}/update_topic_data/${id}`,
        { approve: true },
        { headers: { token: token } }
      );
      fetchUserData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTopic = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/delete_topic/${id}`, {
        headers: { token: token },
      });
      fetchUserData();
      setShowAction(false);
      toast.success("Topic deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete topic");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, userData.length);
  const currentData = userData.slice(startIndex, endIndex);

  console.log("currentData", currentData);
  return (
    <div className="p-8">
      <NavTool date={true} buttons={[]} />
      <Table
        tableTitle={["TOPIC", "CATEGORY", "TAG", "ACTIVITY", "ACTION"]}
        maxWidth={"95%"}
        backgroundColor={"#161D26"}
        padding={"16px 32px"}
        headingStyle={{
          fontSize: "12px",
        }}
        action={""}
      >
        {currentData.map((item, i) => (
          <tr key={i}>
            <td style={{ paddingTop: "36px", width: "30%" }} className="pl-8">
              {item?.topicname}
            </td>

            <td
              style={{ paddingTop: "36px" }}
              className="pl-8 flex  items-center"
            >
              <span
                className="inline-block w-3 h-3 mr-3  bg-green-500"
                title="Green Box"
              ></span>
              {item?.categoryId?.category}
            </td>
            <td style={{ paddingTop: "36px" }} className="pl-8">
              {item?.tagsId?.map((tag, i) => (
                <div key={i} className="flex justify-center items-center">
                  <div className="rounded text-[15px] text-white bg-cyan-800 mr-3 px-2 py-1">
                    {tag?.tags}
                  </div>
                </div>
              ))}
            </td>
            <td style={{ paddingTop: "36px" }} className="pl-8">
              <div className={`px-3 py-1.5 rounded`}>{item?.views}</div>
            </td>
            <td style={{ paddingTop: "36px" }}>
              <img
                style={{ cursor: "pointer", width: "24px", height: "24px" }}
                onClick={() => setShowAction(i)}
                src="/assets/table/3dotV.svg"
                alt="action"
              />
              <TableActionPopUp show={showAction === i} setShow={setShowAction}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "15px", color: "#ffffffcc" }}>
                    Actions
                  </span>

                  <img
                    onClick={() => setShowAction(false)}
                    src="/assets/table/crossIcon.png"
                    alt="icon"
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "16px",
                    padding: "0px 10px",
                  }}
                >
                  <div
                    style={{ fontWeight: "300" }}
                    onClick={() => {
                      handlechangeuserstatus(item._id);
                      setShowAction(false);
                    }}
                  >
                    Approve
                  </div>
                  <div
                    style={{ fontWeight: "300" }}
                    onClick={() => {
                      handleDeleteTopic(item._id);
                      setShowAction(false);
                    }}
                  >
                    Delete
                  </div>
                </div>
              </TableActionPopUp>
            </td>
          </tr>
        ))}
      </Table>
      <div className="flex justify-start items-center my-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-1 mr-2 bg-[#1b2430] text-white rounded-md"
        >
          Prev
        </button>
        <span className="mx-2 text-xs">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-1 ml-2 bg-[#1b2430] text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Community;
