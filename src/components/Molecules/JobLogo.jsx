import React from "react";
import Input from "../Atom/Inputs/Inputs";

const JobLogo = () => {
  const descTxt = `Jobs For Every 
  GRADUATE`;
  return (
    <div className="ml-[227px]">
      <img src="/jobs.png" alt="" />
      <span className="jobtext leading-[60px] text-5xl font-500 text-[#ABABAB] whitespace-pre">
        {descTxt}
      </span>
    </div>
  );
};

export default JobLogo;
