import React from "react";
import "./JobHeader.scss";

const JobHeader = ({ name, specialization, address, jobTitle }) => {
  return (
    <div className="companyInfo">
      <p className="companyInfo_name">{name}</p>
      <p className="companyInfo_spec">{specialization}</p>
      <p className="companyInfo_address">{address}</p>
      <p className="companyInfo_title">{jobTitle}</p>
    </div>
  );
};

export default JobHeader;
