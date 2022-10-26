import React from "react";
import { contactData } from "../../../Atom/ContactData";
const ContactInfo = ({ id, image, mobile, text, email, info }) => {
  return (
    <div className="w-[307.35px] h-[105.78px] bg-[#00717D] rouded-[7.6px] flex flex-row ml-[51.54px]">
      <div>
        <img
          src={image}
          alt="icons"
          className="w-[22.46px] h-[22.46px] rounded-full bg-[rgba(255, 255, 255, 0.4)] mt-[44.59px] ml-[29px]"
        />
      </div>
      <div className="mt-[28.07px] px-[29px]">
        <p className="text-[18px] fovt-medium text-white font-inter">{email}</p>
        <p className="text-[18px] fovt-medium text-white font-inter">
          {mobile}
        </p>
        <p className="whitespace-pre w-[177px] h-[34px] text-[14px] text-white">
          {text}
        </p>
        <p className="font-medium text-[18px] text-white leading-[21.78px] mt-[12px] ml-4">
          {info}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
