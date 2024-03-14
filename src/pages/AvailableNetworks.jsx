import React, { useEffect } from 'react'
import Table from '../components/common/Table';
import NavTool from '../components/common/NavTool';

const AvailableNetworks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const tableTitle = [
        "NAME",
        "TYPE",
        "STATUS",
      ];
      const getData = Array.from({ length: 7 }, () => ({
        name: "Bank Transfer & Credit Card",
        type: "Coin",
        status: "Active",
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
          fontSize: "12px",
        }}
        action={""}
      >
        {getData?.map((item, i) => (
          <tr key={i}>
            <td style={{ paddingTop: "3px",fontSize:'11px',fontWeight:"700" }}>{item?.name}</td>
            <td style={{ paddingTop: "3px",fontSize:'11px',fontWeight:"700" }}>{item?.type}</td>
            
            <td style={{ padding: "10px 0" }}>
              <div
                className={`${
                  item?.status === "Active"
                    ? "bg-[#48BB78]"
                    : "bg-[#6B6B71]"
                } px-1.5 py-1 rounded`}
              >
                {item?.status}
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  )
}

export default AvailableNetworks