import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import NavTool from "../components/common/NavTool";
import Dialog from "../components/currencies/Dialog";
import axios from "axios";
import { apiUrl } from "../apiurl";

const Currencies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState([])
  const token = localStorage.getItem("admintoken")
  const tableTitle = ["", "CURRENCY", "PRICE", "TYPE", "STATUS"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/get_all_currencies`,{headers:{token:token}});
        console.log(response.data,"blogsDta???????");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
    window.scrollTo(0, 0);
  }, [token]);
  // const getData = Array.from({ length: 5 }, () => ({
  //   currency: { name: "Bitcoin", logo: "", subName: "BTC" },
  //   price: "$180,365",
  //   status: ["Active", "Depositable", "Withdrawable"],
  //   type: "Flat",
  // }));
  const button = [
    {
      title: "Add Currencies",
      onClick: () => {
        setIsOpen(true);
      },
    },
  ];
  return (
    <div className="p-8">
      <NavTool date={true} buttons={button} />
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen}/>
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

            <td className="flex mt-8 gap-1">
              <img
                src={"/assets/dashboard/usdt.png"}
                alt="logo"
                style={{ width: "32px", height: "32px", marginTop: "2px" }}
              />
              <div style={{ fontWeight: "600", fontSize: "14px" }}>
                {/* {item.currencyimg} */}
                {item?.currencyname}
                <br />
                <div style={{ fontWeight: "400", color: "#A4A8AB" }}>{item?.symbol}</div>
              </div>
            </td>

            <td style={{ fontSize: "14px" }}>{item?.price}</td>

            <td style={{ fontSize: "14px", width: "200px" }}>{item?.type}</td>
            <td style={{ width: "250px" }}>
              {/* {item?.status.map((st, i) => (
                <div
                  key={i}
                  className={`${"bg-[#48BB78]"} px-2 py-1 rounded mr-2`}
                >
                  {st}
                </div>
              ))} */}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Currencies;
