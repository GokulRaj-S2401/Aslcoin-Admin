import React, { useEffect } from "react";
import Card from "../components/dashboard/Card";
import DateTimeAreaChart from "../components/dashboard/DateTimeAreaChart";
import Table from "../components/common/Table";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tableTitle = ["Coin", "Transaction", "ID", "Date", "Status", "Fees"];
  const getData = [
    {
      coinIcon: "./assets/table/btc.png",
      transaction: { amount: "$659.10", status: "Withdraw USDT" },
      id: "#14525156",
      date: "Mar 21, 2022",
      status: "Completed",
      Fees: "0.12000 BTC",
    },
    {
      coinIcon: "./assets/table/btc.png",
      transaction: { amount: "$659.10", status: "Withdraw USDT" },
      id: "#14525156",
      date: "Mar 21, 2022",
      status: "Declined",
      Fees: "0.12000 BTC",
    },
    {
      coinIcon: "./assets/table/btc.png",
      transaction: { amount: "$659.10", status: "Withdraw USDT" },
      id: "#14525156",
      date: "Mar 21, 2022",
      status: "Pending",
      Fees: "0.12000 BTC",
    },
    {
      coinIcon: "./assets/table/btc.png",
      transaction: { amount: "$659.10", status: "Withdraw USDT" },
      id: "#14525156",
      date: "Mar 21, 2022",
      status: "Completed",
      Fees: "0.12000 BTC",
    },
  ];
  return (
    <div className="p-8 bg-[#161D26]">
      <div className="flex gap-x-20 gap-y-8 flex-wrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i}>
            <h6 className="text-xl font-bold">
              Total users &nbsp;&nbsp;&nbsp;900
            </h6>
            <div className="flex gap-5 items-center mt-2">
              <img
                className={`w-7 h-7 p-2 ${
                  i % 2 !== 0 ? "bg-red-400" : "bg-green-600"
                } rounded-[12px]`}
                src="/assets/dashboard/dot.svg"
                alt="dot"
              />
              <u className="text-sm text-[#c6c6c6]">View all</u>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex gap-14 mt-16 flex-wrap">
        <div className="h-96 w-[899px] ">
          <DateTimeAreaChart />
        </div>
        <div className="flex flex-col gap-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <h6 className="text-xl font-bold">
                Total users &nbsp;&nbsp;&nbsp;900
              </h6>
              <div className="flex gap-5 items-center mt-2">
                <img
                  className="w-7 h-7 p-2 bg-[#1984FF] rounded-[12px]"
                  src="/assets/dashboard/dot.svg"
                  alt="dot"
                />
                <u className="text-sm text-[#c6c6c6]">View all</u>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex gap-y-5 gap-x-14 flex-wrap mt-8">
        <div className="w-[824px]">
          <div className="flex gap-4 items-center">
            <h6 className="font-semibold text-sm pr-10">Recent Activities</h6>
            <div className="w-[175px] h-[45px] flex justify-between gap-2 items-center rounded-[18px] px-5 bg-background">
              <span className="text-sm text-[#c2c2c2]">Last 30 Days</span>
              <img
                src="/assets/topbar/ArrowDownIcon.svg"
                alt="logo"
                className="w-5 h-5"
              />
            </div>
            <div className="w-[175px] h-[45px] flex justify-between gap-2 items-center rounded-[18px] px-5 bg-background">
              <span className="text-sm text-[#c2c2c2]">Aug 2022</span>
              <img
                src="/assets/topbar/ArrowDownIcon.svg"
                alt="logo"
                className="w-5 h-5"
              />
            </div>

            <div className="w-[226px] h-[45px] flex items-center bg-background rounded-[18px] pl-5 pr-1">
              <img
                src="/assets/topbar/searchIcon.svg"
                alt="logo"
                className="w-4 h-4"
              />
              <input
                placeholder="Search"
                className="w-[100%] text-sm placeholder:text-[#c2c2c2] bg-background border-none focus:border-none focus:ring-0 focus:outline-none px-4 shadow"
              />
              <img
                src="/assets/table/Filter.svg"
                alt="logo"
                className="w-[39px] h-[39px]"
              />
            </div>
          </div>
          <Table
            tableTitle={tableTitle}
            headingArrow
            maxWidth={"824px"}
            headingStyle={{
              color: "#fff",
              fontWeight: "400",
              borderBottom: "0.92px solid #242D3999",
            }}
          >
            {getData?.map((item, i) => (
              <tr key={i}>
                <td>{<img src={item?.coinIcon} alt={item?.id} />}</td>
                <td>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {item?.transaction?.amount}
                  </div>
                  <br />
                  <div style={{ fontWeight: "400", color: "#A4A8AB" }}>
                    {item?.transaction?.status}
                  </div>
                </td>
                <td style={{ fontWeight: "400", color: "#ccc" }}>{item?.id}</td>
                <td style={{ fontWeight: "400", color: "#ccc" }}>
                  {item?.date}
                </td>
                <td>
                  <div
                    style={{
                      backgroundColor: `${
                        item?.status === "Completed"
                          ? "#0CAF6026"
                          : item?.status === "Declined"
                          ? "#FF544926"
                          : "#F7931A26"
                      }`,
                      padding: "12px 15px",
                      borderRadius: "11px",
                      fontWeight: "400",
                      color: `${
                        item?.status === "Completed"
                          ? "#0CAF60"
                          : item?.status === "Declined"
                          ? "#FF5449"
                          : "#F7931A"
                      }`,
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
                  >
                    {item?.status}
                  </div>
                </td>
                <td
                  style={{ fontWeight: "400", color: "#ccc", fontSize: "12px" }}
                >
                  {item?.Fees}
                </td>
              </tr>
            ))}
          </Table>
        </div>
        <div className="flex-1 p-16 max-w-fit">
          <div className="flex items-center gap-2">
            <span className="flex-1 text-xs font-medium text-white">
              Quick Exchange
            </span>
            <img
              src="/assets/dashboard/setting.svg"
              alt="logo"
              className="w-4 h-4"
            />
            <img
              src="/assets/dashboard/time.svg"
              alt="logo"
              className="w-4 h-4"
            />
          </div>
          <div className="bg-background w-[195px] h-[80px] rounded-[14px] mt-8 shadow px-4 py-3">
            <div className="flex gap-5 justify-between w-full">
              <span className="text-[10px] text-[#A4A8AB]">I have:</span>
              <span className="text-[9px]">0.12000 BTC</span>
            </div>
            <div className="mt-2 flex items-center gap-2 justify-between w-full">
              <span className="flex gap-2 items-center text-[12px] font-bold">
                <img
                  src="/assets/table/btc.png"
                  alt="btc"
                  className="w-6 h-6"
                />
                BTC
                <img
                  src="/assets/topbar/ArrowDownIcon.svg"
                  alt="arrow"
                  className="w-5 h-5"
                />
              </span>
              <span className="text-[13px] font-bold">0.01</span>
            </div>
          </div>
          <img
            src="./assets/dashboard/swap.svg"
            alt="swap"
            className="w-16 h-16 absolute -mt-5 ml-[66px] z-10"
          />
          <div className="bg-background w-[195px] h-[80px] rounded-[14px] mt-6 shadow px-4 py-3">
            <div className="flex gap-5 justify-between w-full">
              <span className="text-[10px] text-[#A4A8AB]">I want:</span>
              <span className="text-[9px]">0.12000 USDT</span>
            </div>
            <div className="mt-2 flex items-center gap-2 justify-between w-full">
              <span className="flex gap-2 items-center text-[12px] font-bold">
                <img
                  src="/assets/dashboard/usdt.png"
                  alt="btc"
                  className="w-6 h-6"
                />
                USDT
                <img
                  src="/assets/topbar/ArrowDownIcon.svg"
                  alt="arrow"
                  className="w-5 h-5"
                />
              </span>
              <span className="text-[13px] font-bold">$403</span>
            </div>
          </div>
          <div className="flex items-center justify-end px-5 font-light  bg-[#9D6CFF] mt-5  h-[50px] w-[195px]  rounded-[13px]">
            <span className="text-[13px] font-bold pr-[22px] text-center flex justify-center">
              Exchange
            </span>
            <img
              src="/assets/auth/rightArrow.svg"
              alt="arrow"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
