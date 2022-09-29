import React from "react";

const Inputs = ({ name, inputStyle }) => {
  return (
    <input
      value={name}
      className={
        inputStyle === "inputStyle"
          ? "w-[277px] h-[60px] bg-[#F5F5F5] borber border"
          : "w-[584px] h-[60px] bg-[#F5F5F5] borber border"
      }
    />
  );
};

export default Inputs;
