import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import NavTool from "../components/common/NavTool";
import Dialog from "../components/staking/Dialog";

const Staking = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableTitle = ["", "CURRENCY", "DAYS", "STATUS", "TIME"];
  const getData = Array.from({ length: 4 }, () => ({
    currency: { name: "Bitcoin", logo: "", subName: "BTC" },
    days: "180,365",
    status: "Active",
    time: "2023-08-24 15:07:24",
  }));
  const button = [
    {
      title:'Add Staking',
      onClick:()=>{setIsOpen(true)}
    }
  ]
  return (
    <div className="p-8">
      <NavTool date={true} buttons={button}/>
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
        {getData?.map((item, i) => (
          <tr key={i}>
            <td
              style={{ paddingTop: "36px", fontSize: "12px", color: "#A4A8AB" }}
            >
              {i + 1}
            </td>

            <td className="flex mt-8 gap-1">
              <img
                src={"/assets/table/btc.png"}
                alt="logo"
                style={{ width: "32px", height: "32px",marginTop:'2px'}}
              />
              <div style={{ fontWeight: "600", fontSize: "14px" }}>
                Bitcoin
                <br />
                <div style={{ fontWeight: "400", color: "#A4A8AB" }}>BTC</div>
              </div>
            </td>

            <td style={{ fontSize: "12px", fontWeight: "700" }}>{item?.days}</td>
            <td>
              <div
                className={`${
                  item?.status === "Active" ? "bg-[#48BB78]" : "bg-[#6B6B71]"
                } px-2 py-1 rounded`}
              >
                {item?.status}
              </div>
            </td>

            <td style={{ fontSize: "11px", fontWeight: "700" ,width:'200px'}}>
              {item?.time}
            </td>
          </tr>
        ))}
      </Table>
      <div className="ml-4 my-5 flex gap-2">
        <div className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs">
          Previous
        </div>
        <div className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs">
          1
        </div>
        <div className="px-3 py-1.5 cursor-pointer rounded bg-[#303A46] text-xs">
          Next
        </div>
      </div>
    </div>
  );
};

export default Staking;
