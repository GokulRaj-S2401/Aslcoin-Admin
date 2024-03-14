import React from "react";
import Styles from "../../styles/common/table.module.css";

const Table = ({
  tableName,
  headingArrow,
  maxWidth,
  backgroundColor,
  margin,
  padding,
  tableTitle,
  action,
  headingStyle,
  children,
  borderBottom
}) => {
  return (
    <div
      style={{ maxWidth, backgroundColor, margin, padding }}
      className={Styles.tableBox}
    >
      {tableName && <p>{tableName}</p>}
      <table className={Styles.customTable}>
        <thead>
          <tr>
            {tableTitle.map((heading, i) => (
              <th style={headingStyle} key={i}>
                {!headingArrow&&heading}
                {headingArrow && (
                  <div style={{ display: "flex" }}>
                    {heading}
                    <img
                      src="/assets/table/Arrows.svg"
                      alt="arrows"
                      style={{ width: "20px", height: "18px" }}
                    />
                  </div>
                )}
              </th>
            ))}
            {action && <th>{action}</th>}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
