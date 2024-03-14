import React from "react";
import { Outlet} from "react-router-dom";
import SideBar from "../components/common/SideBar";
import Topbar from "../components/common/Topbar";

const Index = () => {
  
  return (
    <div className="flex">
      <div className="relative z-50 left-0 top-0 min-w-[250px] w-[250px]">
      <SideBar />
      </div>
      <div className="flex-1 min-h-[500px]">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
