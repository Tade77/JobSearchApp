import React from "react";

const Select = () => {
  return (
    <div>
      <select name="filter" className="select bg-[#F5F5F5] w-[277px] h-[60px]">
        <option value="management">Management</option>
        <option value="Bio-chemical">Bio-Chemical</option>
        <option value="informatic">Informatic</option>
      </select>
    </div>
  );
};

export default Select;
