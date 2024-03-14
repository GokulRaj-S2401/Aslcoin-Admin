import React, { useEffect } from 'react'
import Table from '../components/common/Table';
import NavTool from '../components/common/NavTool';

const TransactionHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const tableTitle = [
        "",
        "TRANSACTION ID",
        "SENDER NAME",
        "RECIEVER NAME",
        "TIME",
        "CURRENCY",
        "NETWORK",
        "STATUS",
      ];
      const getData = Array.from({ length: 7 }, () => ({
            senderName: "Devid Abbey",
            recieverName: "John Catter",
            transactionId: "TTCNI022000800594",
            status: "Successful",
            time: "10:23:56",
            currency:"BTC",
            network:"LOREM"
      }));
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
        {getData?.map((item, i) => (
          <tr key={i}>
            <td
              style={{ paddingTop: "36px", fontSize: "12px", color: "#A4A8AB" }}
            >
              {i + 1}
            </td>
            <td style={{ paddingTop: "36px" ,fontWeight:'700'}}>{item?.transactionId}</td>
            <td style={{ paddingTop: "36px" }}>{item?.senderName}</td>
            <td style={{ paddingTop: "36px" }}>{item?.recieverName}</td>
            <td style={{ paddingTop: "36px" }}>
                {item?.time}
            </td><td style={{ paddingTop: "36px" }}>
                {item?.currency}
            </td ><td style={{ paddingTop: "36px" }}>
                {item?.network}
            </td>

            <td style={{ paddingTop: "36px" }}>
              <div
                className={`${
                  item?.status === "Successful"
                    ? "bg-[#48BB78]"
                    : item?.status === "Pending"
                    ? "bg-[#0059E7]"
                    : "bg-[#AF0101]"
                } px-1.5 py-1 rounded-md`}
              >
                {item?.status}
              </div>
            </td>
            
          </tr>
        ))}
      </Table></div>
  )
}

export default TransactionHistory