import React from "react";

const Inputs = ({ name, inputStyle }) => {
  return (
    <input
      placeholder={name}
      className={
        inputStyle === "inputStyle"
          ? "w-[277px] h-[60px] bg-[#F5F5F5] px-6 borber text-gray-500 border-none outline-none"
          : inputStyle === "formStyle"
          ? "w-[528.81px] h-[60px] bg-[#F2F2F2] ml-[67.65px] py-[24px] rounded-[3.7px] ml-[57.85px] borber text-gray-500 px-6"
          : inputStyle === "textArea"
          ? "w-[528.81px] h-[154.75px] bg-[#F2F2F2] ml-[67.65px] rounded-[3.7px] ml-[57.85px] borber text-gray-600 px-6 pb-24"
          : "w-[584px] h-[60px] bg-[#F5F5F5] rounded-[3.7px] px-6 borber text-gray-500 border-none outline-none"
      }
    />
  );
};

export default Inputs;
