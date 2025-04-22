import React from "react";
import { BsGripVertical } from "react-icons/bs";
import "./ConfigScreen.css";

const data = [
  {
    operator: "START",
    field: "POS Channel",
    condition: "≠",
    match: "POS",
    showStar: true,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "Response Code",
    condition: "=",
    match: "Success",
    showStar: true,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "Card Issuer Country",
    condition: "=",
    match: "High risk, Very high risk",
    showStar: true,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "MID",
    condition: "=",
    match: "MID - me_profile_table",
    showStar: true,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "",
    condition: "=",
    match: "Lifetime - INT - Successful Txns Count - Lifetime_Merchant_Volume_Table",
    showStar: false,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "",
    condition: ">",
    match: "Lifetime - DOM - Successful Txns Count - Lifetime_Merchant_Volume_Table",
    showStar: false,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "MID",
    condition: "≠",
    match: "(MID 1,... or Bulk upload)",
    showStar: false,
    showIcon: true,
  },
  {
    operator: "AND",
    field: "TID",
    condition: "≠",
    match: "(TID 1,... or Bulk upload)",
    showStar: false,
    showIcon: true,
  },
  {
    operator: "END"
  },
];

const ConfigScreen = () => {
  return (
    <div className="config-container">
      <h2 className="config-header">Screen Name</h2>
      <div className="tab-buttons">
        <button>Rule</button>
        <button className="active">Trigger Point</button>
        <button>Update Condition</button>
      </div>
      <div className="grid-header">
        <div>Logical Operator</div>
        <div>Check Data Field</div>
        <div>Condition</div>
        <div>Match Case</div>
        <div>Condition</div>
      </div>
      {data.map((row, idx) => (
        <div key={idx} className="row-container">
          <div className="operator-cell">
            <BsGripVertical />
            <span>{row.operator}</span>
          </div>
          <input
            type="text"
            className="input-field"
            value={row.field}
            readOnly
          />
         <div className="relative w-full max-w-[150px]">
  <select className="select-dropdown w-full pr-8 appearance-none border border-gray-300 rounded-md py-1.5 px-2 text-sm">
    <option value="=">=</option>
    <option value="≠">≠</option>
    <option value=">">&gt;</option>
    <option value="<">&lt;</option>
   
  </select>
  
</div>


          <input
            type="text"
            className="input-field"
            value={row.match}
            readOnly
          />
          <div className="icons-cell">
            {/* {row.showStar && <FaStar />}
            {row.showIcon && <FaRegCircle />} */}
            <div className="box-placeholder"></div>
            <div className="box-placeholder"></div>
            <div className="box-placeholder"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConfigScreen;
