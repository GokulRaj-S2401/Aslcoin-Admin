import React from "react";

const TableActionPopUp = ({ children, show, setShow }) => {
  return (
    <>
      {show && (
        <div className="p-4 absolute bg-background  w-60 rounded-lg mt-[-38px] ml-[-200px] shadow-popup cursor-default">
          {children}
        </div>
      )}
    </>
  );
};

export default TableActionPopUp;
